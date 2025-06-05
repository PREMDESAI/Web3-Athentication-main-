import { CustomChainConfig } from "@web3auth/base";
import { ChainNamespace } from "@web3auth/react-native-sdk";

const config = {
    SOLANA_NETWORK: "devnet",
    SOLANA_DEVNET_RPC_URL: "https://api.devnet.solana.com",
    SOLANA_MAINNET_RPC_URL: "https://api.mainnet-beta.solana.com",
}
const RPC_URL =
  config.SOLANA_NETWORK === "mainnet-beta"
    ? config.SOLANA_MAINNET_RPC_URL
    : config.SOLANA_DEVNET_RPC_URL;

export const getWeb3AuthConfig = () => {
  const chainConfig: CustomChainConfig = {
    chainNamespace: ChainNamespace.SOLANA,
    rpcTarget: RPC_URL,
    blockExplorerUrl: "https://explorer.solana.com",
    ticker: "SOL",
    tickerName: "Solana",
    chainId: "",
    displayName: "",
  };

  if (config.SOLANA_NETWORK === "mainnet-beta") {
    chainConfig.chainId = "0x1";
    chainConfig.displayName = "Solana Mainnet";
  } else {
    chainConfig.chainId = "0x3";
    chainConfig.displayName = "Solana Devnet";
  }

  return chainConfig;
};
