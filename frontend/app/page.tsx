"use client";

import { ethers } from "ethers";
import artifact from "../abi/MyToken.sol/MyToken.json";
import { useEffect, useState } from "react";

const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

export default function Home() {
  // イーサリアムプロバイダーを格納
  const [windowEthereum, setWindowEthereum] = useState();
  // トークンの所有数を格納
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // イーサリアムプロバイダーを取得
    const { ethereum } = window as any;
    setWindowEthereum(ethereum);
  }, []);

  const handleButtonClick = async () => {
    if (windowEthereum) {
      // イーサリアムプロバイダーを使ってイーサリアムネットワークに接続
      const provider = new ethers.BrowserProvider(windowEthereum);
      const signer = await provider.getSigner();
      // コントラクトを取得
      const contract = new ethers.Contract(contractAddress, artifact.abi, provider);

      const walletAddress = await signer.getAddress();
      // トークンの所有数を取得
      const balance = await contract.balanceOf(walletAddress);
      setInputValue(balance.toString());
    }
  };

  return (
    <div>
      <h1>Blockchain sample app</h1>
      <button onClick={handleButtonClick}>Tokens owned</button>
      <input type="text" value={inputValue} readOnly />
    </div>
  );
}
