//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConvertor{

    function getRate() internal view returns(uint256){
        AggregatorV3Interface priceFeed=AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        // return priceFeed.version();
        (,int256 price,,,)=priceFeed.latestRoundData();
        return uint256(price*1e10);
    }

    function getVersion() internal view returns(uint256){
        AggregatorV3Interface priceFeed=AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        return (priceFeed.version());
    }

    function getPrice(uint256 eth) internal view returns(uint256){
        uint256 ethPrice=getRate();
        uint256 Result=((eth*ethPrice)/1e18);
        return Result/1e18;
    }

}