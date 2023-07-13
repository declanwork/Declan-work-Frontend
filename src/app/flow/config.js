import { config } from "@onflow/fcl";

export const fclConfig =() => config({
  // The name of our dApp to show when connecting to a wallet
  "app.detail.title": "Declan Work",

  // An image to use as the icon for our dApp when connecting to a wallet
  "app.detail.icon": "https://blush-blushing-locust-268.mypinata.cloud/ipfs/QmNagSHpLjXBQnoKXi2RyrLg2jbo1fwgZT7FZqi6fXGanJ",

  // RPC URL for the Flow Testnet
  "accessNode.api": "https://rest-testnet.onflow.org",
  // A URL to discover the various wallets compatible with this network

  // FCL automatically adds support for all wallets which support Testnet
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
  
  // Alias for the Domains Contract

  // UPDATE THIS to be the address of YOUR contract account address
  "0xDeclanWork": "0xf88f3b6f4c595384",

  

});