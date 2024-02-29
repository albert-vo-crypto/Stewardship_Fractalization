//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract StewardshipToken {

  // Track balances and allowances
  mapping(address => uint256) public balances;
  mapping(address => mapping(address => uint256)) public allowances;
  
  // Total supply and decimals
  uint256 public totalSupply;
  uint8 public decimals; 

  // Events
  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);

  // Constructor
  constructor() {
    // Initialize total supply 
    totalSupply = 1000000 * (10 ** decimals);
    
    // Mint initial tokens 
    // 50% todao treasury for funding public goods
    // 40% to community members that provide stewardship services
    // 10% to liquidity pools and dex incentives for active trading and usage 
    balances[treasury] = totalSupply * 50 / 100; 
    balances[stewards] = totalSupply * 40 / 100;
    balances[dex] = totalSupply * 10 / 100;
  }

  // Transfer function
  function transfer(address to, uint256 value) external returns (bool) {
   require(balances[msg.sender] >= value, "Insufficient balance");

   balances[to] += value;
   balances[msg.sender] -= value;
   emit Transfer(msg.sender, to, value);

   return true;
  }

  // Approve and transferFrom functions
  function approve(address spender, uint256 value) external returns (bool) {
   allowances[msg.sender][spender] = value;
   emit Approval(msg.sender, spender, value);
   return true;
  }

  function transferFrom(address from, address to, uint256 value) external returns (bool) {
    require(allowances[from][msg.sender] >= value, "Allowance too low");
    require(balances[from] >= value, "Insufficient balance");

    balances[to] += value;
    balances[from] -= value;
    emit Transfer(from, to, value);

    allowances[from][msg.sender] -= value;
    return true;
  }

  // Governance functions

  struct Proposal {
    uint256 id;
    address proposer;
    string description; 
    uint256 votesFor;
    uint256 votesAgainst;
    bool executed;
  }

  // Track proposals
  Proposal[] public proposals;

  // Events
  event ProposalCreated(uint256 id, address proposer, string description);
  event Voted(uint256 proposalId, address voter, bool support);

  // Create proposal
  function createProposal(string calldata description) external {
    uint256 id = proposals.length;
    proposals.push(Proposal(id, msg.sender, description, 0, 0, false));
    emit ProposalCreated(id, msg.sender, description); 
  }

  // Vote on proposal
  function vote(uint256 proposalId, bool support) external {
    require(proposals[proposalId].executed == false, "Already executed"); 
    if(support) {
      proposals[proposalId].votesFor++;
    } else {
      proposals[proposalId].votesAgainst++;
    }
    emit Voted(proposalId, msg.sender, support);
  }

  // Execute proposal if quorum and support threshold reached
  function executeProposal(uint256 proposalId) external {
     Proposal storage proposal = proposals[proposalId];
     require(proposal.executed == false, "Already executed");
     require(proposal.votesFor > totalSupply / 4, "Insufficient votes for");
     require(proposal.votesFor > proposal.votesAgainst * 2, "Insufficient support");

     // Execute proposal logic

     proposal.executed = true;
  }

}