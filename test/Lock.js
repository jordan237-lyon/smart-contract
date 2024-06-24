const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RTFKT_Nike_NFT", function () {
    let NFT, nft, owner, addr1, addr2;

    beforeEach(async function () {
        NFT = await ethers.getContractFactory("RTFKT_Nike_NFT");
        [owner, addr1, addr2, _] = await ethers.getSigners();

        nft = await NFT.deploy();
        await nft.deployed();
    });

    it("Should create a new NFT and set correct details", async function () {
        await nft.createNFT(
            "NFT Name",
            "NFT Description",
            "NFT Attributes",
            "https://example.com/tokenURI",
            addr1.address,
            500
        );

        const tokenDetails = await nft.nftDetails(0);
        expect(tokenDetails.name).to.equal("NFT Name");
        expect(tokenDetails.description).to.equal("NFT Description");
        expect(tokenDetails.attributes).to.equal("NFT Attributes");

        const tokenURI = await nft.tokenURI(0);
        expect(tokenURI).to.equal("https://example.com/tokenURI");
    });

    it("Should update NFT details", async function () {
        await nft.createNFT(
            "NFT Name",
            "NFT Description",
            "NFT Attributes",
            "https://example.com/tokenURI",
            addr1.address,
            500
        );

        await nft.connect(addr1).updateNFTDetails(0, "New Name", "New Description", "New Attributes");

        const tokenDetails = await nft.nftDetails(0);
        expect(tokenDetails.name).to.equal("New Name");
        expect(tokenDetails.description).to.equal("New Description");
        expect(tokenDetails.attributes).to.equal("New Attributes");
    });
});
