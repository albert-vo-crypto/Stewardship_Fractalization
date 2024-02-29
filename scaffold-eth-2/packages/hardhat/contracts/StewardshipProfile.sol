// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract StewardshipProfile {

    struct Profile {
        string name;
        string description;
        string location;
        string[] causes;
        uint256 stewardScore; 
    }

    mapping (address => Profile[]) public profiles;

    function createProfile(string memory _name, string memory _description, string memory _location, string[] memory _causes) public {
        Profile memory profile = Profile(_name, _description, _location, _causes, 0);
        profiles[msg.sender].push(profile);
    }

    function updateProfile(uint index, string memory _name, string memory _description, string memory _location, string[] memory _causes) public {
        Profile storage profile = profiles[msg.sender][index];
        
        profile.name = _name;
        profile.description = _description;
        profile.location = _location;
        profile.causes = _causes; 
    }

    function getProfile(uint index) public view returns (Profile memory) {
        return profiles[msg.sender][index];
    }


    function giveStewardPoints(uint index, uint256 _points) public {
        profiles[msg.sender][index].stewardScore += _points;
    }

}