// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StewardshipProfile {

    struct Profile {
        string name;
        string description;
        string location;
        string[] causes;
        uint256 stewardScore; 
    }

    mapping (address => Profile) public profiles;

    function createProfile(string memory _name, string memory _description, string memory _location, string[] memory _causes) public {
        profiles[msg.sender] = Profile(_name, _description, _location, _causes, 0);
    }

    function updateProfile(string memory _name, string memory _description, string memory _location, string[] memory _causes) public {
        Profile storage profile = profiles[msg.sender];
        profile.name = _name;
        profile.description = _description; 
        profile.location = _location;
        profile.causes = _causes;
    }

    function getProfile() public view returns (Profile memory) {
        return profiles[msg.sender];
    }

    function giveStewardPoints(address _steward, uint256 _points) public {
        profiles[_steward].stewardScore += _points;
    }

}