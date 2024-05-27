// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MyERC721 is ERC721URIStorage, ERC721Enumerable, AccessControl {
    // @dev トークンIDのカウンター
    uint256 private _tokenIdCounter;
    // @dev MINTER_ROLEの定義
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");


    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol) {
        // デプロイしたアカウントにMINTER_ROLEを付与
        _grantRole(MINTER_ROLE, _msgSender());
        // デプロイしたアカウントにDEFAULT_ADMIN_ROLEを付与
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    // トークンを発行する関数
    function safeMint(address to, string memory _tokenURI) public onlyRole(MINTER_ROLE) returns (uint256) {
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter += 1;
        // トークンを発行
        _safeMint(to, tokenId);
        // トークンのURIを設定
        _setTokenURI(tokenId, _tokenURI);

        return tokenId;
    }

    // ↓オーバーライド関数

    function tokenURI(uint256 tokenId) public view override(ERC721URIStorage, ERC721) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint batchSize) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(AccessControl, ERC721Enumerable, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}

