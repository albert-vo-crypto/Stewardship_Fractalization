// Execute proposal logic
function executeProposal(uint256 proposalId) external onlyOwner {

  // Existing require checks for voting period ended, not already executed, threshold met

  Proposal storage proposal = proposals[proposalId];
  
  if (keccak256(abi.encodePacked(proposal.description)) == keccak256(abi.encodePacked("Fund climate change project"))) {

    // If proposal is to fund climate change project
    IERC20(address(this)).transfer(projectXYZ, 250000 * 10**decimals());

  } else if (keccak256(abi.encodePacked(proposal.description)) == keccak256(abi.encodePacked("Update emission rate"))) {

    // If proposal is to update emissions rate
    emissionRate = proposal.votesFor; 

  } else {
    // Other proposal logic    
  }

  proposal.executed = true;

}