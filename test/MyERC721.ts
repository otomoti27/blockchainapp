import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyERC721", function () {
  async function deployFixture() {
    const [owner, account1] = await ethers.getSigners();
    const MyERC721Factory = await ethers.getContractFactory("MyERC721");
    const MyERC721 = await MyERC721Factory.deploy("TestNFT", "MYNFT");
    return { MyERC721, owner, account1 };
  }

  describe("初期流通量とNFT作成のテスト", function () {
    it("初期流通量は0", async function () {
      const { MyERC721 } = await loadFixture(deployFixture);
      expect(await MyERC721.totalSupply()).to.equal(0);
    });

    it("MyERC721を作成する", async function () {
      const { MyERC721, account1 } = await loadFixture(deployFixture);
      // NOTE: Contractに対して明示的なconnectメソッドの呼び出しがなければ、ownerが呼び出し元となる
      await MyERC721.safeMint(account1.address, "https://example.com/nft1.json");
      expect(await MyERC721.balanceOf(account1.address)).to.equal(1);
      expect(await MyERC721.totalSupply()).to.equal(1);
    });

    it("account1からは作成ができないこと", async function () {
      const { MyERC721, account1 } = await loadFixture(deployFixture);
      await expect(
        MyERC721.connect(account1).safeMint(account1.address, "https://example.com/nft1.json")
      ).to.be.revertedWith(/AccessControl: account .* is missing role .*/);
    });
  });

  describe("MyERC721をtransferするテスト", function () {
    it("MyERC721をtransferする", async function () {
      const { MyERC721, owner, account1 } = await loadFixture(deployFixture);
      const txResp = await MyERC721.safeMint(account1.address, "https://example.com/nft1.json");

      // TransferイベントからtokenIdを特定する
      const logs = await MyERC721.queryFilter(MyERC721.filters.Transfer());
      const tokenId = logs.find((log) => log.transactionHash === txResp.hash)!.args[2];
      // account1からownerにtransfer
      await MyERC721.connect(account1).transferFrom(account1.address, owner.address, tokenId);
      // ownerがNFTを保有していることを確認
      expect(await MyERC721.ownerOf(tokenId)).to.equal(owner.address);
    });

    it("account1からowner保有のNFTはtransferできないこと", async function () {
      const { MyERC721, owner, account1 } = await loadFixture(deployFixture);
      const txResp = await MyERC721.safeMint(owner.address, "https://example.com/nft1.json");

      // TransferイベントからtokenIdを特定する
      const logs = await MyERC721.queryFilter(MyERC721.filters.Transfer());
      const tokenId = logs.find((log) => log.transactionHash === txResp.hash)!.args[2];
      // ownerからaccount1にtransfer
      await expect(
        MyERC721.connect(account1).transferFrom(owner.address, account1.address, tokenId)
      ).to.be.revertedWith("ERC721: caller is not token owner or approved");
    });

    it("NFT保有者がapproveした場合はaccount1からもtransferできること", async function () {
      const { MyERC721, owner, account1 } = await loadFixture(deployFixture);
      const txResp = await MyERC721.safeMint(owner.address, "https://example.com/nft1.json");

      // TransferイベントからtokenIdを特定する
      const logs = await MyERC721.queryFilter(MyERC721.filters.Transfer());
      const tokenId = logs.find((log) => log.transactionHash === txResp.hash)!.args[2];
      // ownerが保有するすべてのNFTについて、account1による操作をapprove
      await MyERC721.connect(owner).setApprovalForAll(account1.address, true);
      // account1がownerのNFTをtransfer
      await MyERC721.connect(account1).transferFrom(owner.address, account1.address, tokenId);
      // account1がNFTを保有していることを確認
      expect(await MyERC721.ownerOf(tokenId)).to.equal(account1.address);
    });
  });
});
