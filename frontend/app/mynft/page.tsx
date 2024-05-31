"use client";

import { Web3SignerContext } from "@/context/web3.context";
import { useContext, useEffect, useRef, useState } from "react";
import {
  Alert,
  Avatar,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
  Image,
  Badge,
} from "@mantine/core";
import { IconCubePlus } from "@tabler/icons-react";
import { MyERC721, MyERC721__factory } from "@/types";
import { isError } from "ethers";

const contractAddress = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";

type NFT = {
  tokenId: bigint;
  name: string;
  description: string;
  image: string;
};

export default function MyNFT() {
  const { signer } = useContext(Web3SignerContext);
  const [myERC721Contract, setMyERC721Contract] = useState<MyERC721 | null>(null);

  useEffect(() => {
    const contract = MyERC721__factory.connect(contractAddress, signer);
    setMyERC721Contract(contract);
    const fillAddress = async () => {
      if (ref.current) {
        const myAddress = await signer?.getAddress();
        if (myAddress) {
          ref.current.value = myAddress;
        }
      }
    };

    fillAddress();
  }, [signer]);

  const ref = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const account = ref.current!.value;
      await myERC721Contract?.safeMint(account, "https://example.com/nft.json");
      setShowAlert(true);
      setAlertMessage(
        `NFT minted and sent to the wallet ${
          account?.slice(0, 6) + "..." + account?.slice(-2)
        }. Enjoy your NFT!`
      );
    } catch (error) {
      console.error("Error minting NFT:", error);
      setAlertMessage("Error minting NFT. Please try again.");
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // 所有NFTの一覧を取得
  const [myNFTs, setMyNFTs] = useState<NFT[]>([]);
  useEffect(() => {
    const fetchMyNFTs = async () => {
      const nfts = [];
      if (myERC721Contract && myERC721Contract.runner) {
        const myAddress = signer?.getAddress()!;
        let balance = BigInt(0);

        try {
          balance = await myERC721Contract.balanceOf(myAddress);
        } catch (err) {
          if (isError(err, "BAD_DATA")) {
            balance = BigInt(0);
          } else {
            throw err;
          }
        }
        for (let i = 0; i < balance; i++) {
          const tokenId = await myERC721Contract.tokenOfOwnerByIndex(myAddress, i);
          const jsonMetaData = {
            name: `NFT #${tokenId}`,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: `https://source.unsplash.com/300x200?glass&s=${tokenId}`,
          };
          nfts.push({ tokenId, ...jsonMetaData });
        }
        setMyNFTs(nfts);
      }
    };

    fetchMyNFTs();
  }, [myERC721Contract, signer]);

  return (
    <div>
      <Title order={1} style={{ paddingBottom: 12 }}>
        My NFT Management
      </Title>
      {showAlert && (
        <Container py={8}>
          <Alert
            variant="light"
            color="teal"
            title="NFT Minted Successfully!"
            withCloseButton
            onClose={() => setShowAlert(false)}
            icon={<IconCubePlus />}
          >
            {alertMessage}
          </Alert>
        </Container>
      )}
      <SimpleGrid cols={{ base: 1, sm: 3, lg: 5 }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Container py={12}>
              <Group justify="center">
                <Avatar color="blue" radius="xl">
                  <IconCubePlus size="1.5rem" />
                </Avatar>
                <Text fw={700}>Mint your NFTs!</Text>
              </Group>
            </Container>
          </Card.Section>
          <Stack>
            <TextInput ref={ref} label="Wallet address" placeholder="0x0000..."></TextInput>
            <Button loading={loading} onClick={handleButtonClick}>
              Mint NFT
            </Button>
          </Stack>
        </Card>
        {/* NFT一覧 */}
        {myNFTs.map((nft, index) => (
          <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image src={nft.image} height={160} alt="No image" />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{nft.name}</Text>
              <Badge color="blue" variant="light">
                tokenId: {nft.tokenId.toString()}
              </Badge>
            </Group>
            <Text size="sm" c="dimmed">
              {nft.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}
