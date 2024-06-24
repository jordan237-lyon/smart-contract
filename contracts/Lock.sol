// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";

contract RTFKT_Nike_NFT is ERC721URIStorage, Ownable, ERC2981 {
    uint256 public tokenCounter;

    struct NFTDetails {
        string name;
        string description;
        string attributes;
    }

    mapping(uint256 => NFTDetails) public nftDetails;

    constructor() ERC721("RTFKT_Nike", "RTN") {
        tokenCounter = 0;
    }

    function createNFT(
        string memory _name,
        string memory _description,
        string memory _attributes,
        string memory tokenURI,
        address recipient,
        uint96 feeNumerator
    ) public onlyOwner {
        uint256 newTokenId = tokenCounter;
        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _setTokenRoyalty(newTokenId, recipient, feeNumerator);

        nftDetails[newTokenId] = NFTDetails({
            name: _name,
            description: _description,
            attributes: _attributes
        });

        tokenCounter++;
    }

    function updateNFTDetails(
        uint256 tokenId,
        string memory _name,
        string memory _description,
        string memory _attributes
    ) public {
        require(ownerOf(tokenId) == msg.sender, "Only the owner can update details");
        NFTDetails storage details = nftDetails[tokenId];
        details.name = _name;
        details.description = _description;
        details.attributes = _attributes;
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721, ERC2981)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
