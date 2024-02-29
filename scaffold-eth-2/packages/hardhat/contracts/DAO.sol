// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol"; 
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StewardshipToken is ERC20, Ownable {

  constructor() ERC20("Climate Stewardship Token", "CST") {
    // Mint 50% of supply to dao treasury
    _mint(daoTreasury, 5000000 * 10**decimals());

    // Mint 40% to stewards
    _mint(stewards, 4000000 * 10**decimals());

    // Mint 10% to DEX 
    _mint(uniV2Pair, 1000000 * 10**decimals());
  }

  // Use OpenZeppelin Ownable access control
  function mint(address to, uint256 amount) public onlyOwner {
    _mint(to, amount);
  }

  // Use OpenZeppelin ERC20 implementation
  function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
    _transfer(_msgSender(), recipient, amount);
    return true;
  }
  
  // Track proposals
  struct Proposal {
    uint256 id;
    address proposer;
    string description;
    uint256 startBlock;
    uint256 endBlock;
    uint256 votesFor;
    uint256 votesAgainst;
    bool executed;
    mapping(address => bool) voters;
  }

  mapping(uint256 => Proposal) public proposals;

  // Events
  event ProposalCreated(uint256 id, address proposer, string description);
  event Voted(uint256 proposalId, address voter, bool support);

  // Create proposal
  function createProposal(string calldata description) external {
    uint256 id = proposals.length;
    proposals[id] = Proposal(
      id, 
      msg.sender,
      description,
      block.number, 
      block.number + 40_000, //about 1 week
      0,
      0,
      false
    );
    emit ProposalCreated(id, msg.sender, description);
  }

  //Vote on proposal
  function vote(uint256 proposalId, bool support) external {
    Proposal storage proposal = proposals[proposalId];
    require(block.number < proposal.endBlock, "Voting period ended");
    require(!proposal.voters[msg.sender], "Already voted");

    proposal.voters[msg.sender] = true;

    if (support) {
      proposal.votesFor++;
    } else {
      proposal.votesAgainst++;
    }

    emit Voted(proposalId, msg.sender, support);
  }

  // Execute proposal if threshold reached
  function executeProposal(uint256 proposalId) external onlyOwner {
    Proposal storage proposal = proposals[proposalId];
    require(block.number >= proposal.endBlock, "Voting period not ended");
    require(!proposal.executed, "Already executed");
    require(proposal.votesFor > totalSupply / 4, "Not enough for votes");

    // Execute proposal logic
    proposal.executed = true; 
  }

}

// Example proposal 
// Fund climate change projects
// Transfer 250,000 tokens to Project XYZ to fund reforestation efforts