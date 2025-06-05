import Web3Auth, { WEB3AUTH_NETWORK } from "@web3auth/react-native-sdk";
import * as WebBrowser from "expo-web-browser";
import * as SecureStore from "expo-secure-store";
import { SolanaPrivateKeyProvider } from "@web3auth/solana-provider";
import { getWeb3AuthConfig } from "@/services/web3auth/config";
import * as Linking from "expo-linking";

const scheme = "mintixscannerapp";
const redirectUrl = Linking.createURL("auth", { scheme });
const chainConfig = getWeb3AuthConfig();
const clientId =
  "BKCFyOWYQTAzyZEXVrXrUNP_pqBsKobV5xm5FOwHaIGMgwJzhu6xtdhjGj8zit4brthVb2f0mw2LlBZPzhoe3PI";

const privateKeyProvider = new SolanaPrivateKeyProvider({
  config: {
    chainConfig,
  },
});

export const web3auth = new Web3Auth(WebBrowser, SecureStore, {
  clientId,
  redirectUrl,
  network: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider,
});
