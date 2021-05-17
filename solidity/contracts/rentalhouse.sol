// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract LandContract is ERC721 {
  string[] public houses;
  mapping(string => bool) public _houseExist;
  address owner;
  address tenant;
  bool private _signedByOwner;
  bool private _signedByTenant;
  bool private _signedByParts;
  mapping (address => uint) public balances;
  
  constructor() ERC721("RENTHOUSE", "RHS") public {
    owner = msg.sender;
  }

  event MonthlyPayment(
      string date,
      uint price,
      uint8 month
  );

  struct House {
      string name;
      string Adress;
      address owner;
      address tenant;
  }
    
//    MonthlyPayment[36] public ;
    
  event PlotOwnerChanged(
      uint index
  );
    
  event PlotPriceChanged(
      uint index,
      uint price
  );
  
  event PlotAvailabilityChanged(
      uint index,
      uint price,
      bool forSale
  );
  
  function setTenant(address) private {
    require(msg.sender == owner);
    tenant = address;
  }

  function signOwner() payable public {
    require(msg.sender == owner);
    _signedByOwner = true;
  }
    
  function signTenant() payable public {
    require(msg.sender == tenant);
    if(_signedByOwner) {
      _signedByTenant = true;
      _signedByParts = true;
    }
  }

  function mint(string memory _house) public {
    require(!_houseExist[_house]);
    // push the new string into the array containing all the departaments
    houses.push(_house);
    uint _id = houses.length;
    // create a new unique token on the contract with the ERC721 MINT function
    _mint(msg.sender, _id);
    _houseExist[_house] = true;
  }
    // function putPlotUpForSale(uint index, uint price) public {
    //     Plot storage plot = plots[index];
        
    //     require(msg.sender == plot.owner && price > 0);
        
    //     plot.forSale = true;
    //     plot.price = price;
    //     emit PlotAvailabilityChanged(index, price, true);
    // }
    
    // function takeOffMarket(uint index) public {
    //     Plot storage plot = plots[index];
        
    //     require(msg.sender == plot.owner);
        
    //     plot.forSale = false;
    //     emit PlotAvailabilityChanged(index, plot.price, false);
    // }
    
    // function getPlots() public view returns(address[], bool[], uint[]) {
    //     address[] memory addrs = new address[](5);
    //     bool[] memory available = new bool[](5);
    //     uint[] memory price = new uint[](5);
        
    //     for (uint i = 0; i < 5; i++) {
    //         Plot storage plot = plots[i];
    //         addrs[i] = plot.owner;
    //         price[i] = plot.price;
    //         available[i] = plot.forSale;
    //     }
        
    //     return (addrs, available, price);
    // }
    
    // function buyPlot(uint index) public payable {
    //     Plot storage plot = plots[index];
        
    //     require(msg.sender != plot.owner && plot.forSale && msg.value >= plot.price);
        
    //     if(plot.owner == 0x0) {
    //         balances[owner] += msg.value;
    //     }else {
    //         balances[plot.owner] += msg.value;
    //     }
        
    //     plot.owner = msg.sender;
    //     plot.forSale = false;
        
    //     emit PlotOwnerChanged(index);
    // }
    
    // function withdrawFunds() public {
    //     address payee = msg.sender;
    //       uint payment = balances[payee];
    
    //       require(payment > 0);
    
    //       balances[payee] = 0;
    //       require(payee.send(payment));
    // }
    
    

}

