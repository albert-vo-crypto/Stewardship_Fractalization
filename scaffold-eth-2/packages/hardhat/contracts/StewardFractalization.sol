//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
contract StewardFractalization {
    struct StewardProfile {
        string title;
        string description;
        string needGap;
        string haveCanProvide;
        string pledge;
        string deadline;
        address author;
        bool isCompleted;
    }
    StewardProfile[] public stewardList;

    function addSteward(string memory _title, string memory _description, string memory _haveCanProvide, string memory _needGap, string memory _pledge, string memory _deadline, address _author, bool _isCompleted  ) external{
        stewardList.push(StewardProfile(_title, _description, _haveCanProvide, _needGap, _pledge, _deadline, _author, _isCompleted));
    }
    function updateSteward(uint _index, string memory _title, string memory _description, string memory _haveCanProvide, string memory _needGap, string memory _pledge, string memory _deadline, address _author, bool _isCompleted ) external {
        stewardList[_index].title = _title;
        stewardList[_index].description = _description;
        stewardList[_index].haveCanProvide = _haveCanProvide;
        stewardList[_index].needGap = _needGap;
        stewardList[_index].pledge = _pledge;
        stewardList[_index].deadline = _deadline;
        stewardList[_index].author = _author;
        stewardList[_index].isCompleted = _isCompleted;
    }
    function getSteward() external view returns(StewardProfile[] memory){
        return stewardList;
    }
}