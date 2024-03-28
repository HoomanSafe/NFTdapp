// Purpose: Contains texts that will be used in the UI when rendering the buttons
// label has to be the exact same as in your candy machine config
export const mintText = [
  { label: "wl", mintText: "Connect your Whitelisted Wallet to mint NFT @ 0.025 SOL", buttonLabel: "Mint now!", header: "Whitelist Mint" },
  { label: "early", mintText: "Grab our Early Bird rate, only on day-one! Mint NFT @ 0.0325 SOL", buttonLabel: "Mint now!", header: "Early Bird Mint" },
  { label: "nft", mintText: "Holding Memion NFT in your Wallet? Mint extra @ 0.05 SOL", buttonLabel: "Mint now!", header: "NFT Holder Mint" },
  { label: "token", mintText: "Holding $SOLMEME Tokens in your Wallet? Mint extra @ 0.05 SOL", buttonLabel: "Mint now!", header: "Token Holder Mint" },
  { label: "public", mintText: "Everyone else gets a chance to mint one NFT @ 0.075 SOL", buttonLabel: "Mint now!", header: "General Public Mint" },
  { label: "default", mintText: "default", buttonLabel: "Mint now!", header: "Default"}
];

//header image in the ui. replace with your own
export const image = "https://i.ibb.co/ncdqQPr/colection.png";


//website title
export const headerText = "Memion Astronaut";<br></br>
// Split the text into three lines

// disable "buy me a beer feature", otherwise each mint will transfer 0.005 SOL to Original DApp DEV tip wallet
export const NEXT_PUBLIC_BUYMARKBEER = false