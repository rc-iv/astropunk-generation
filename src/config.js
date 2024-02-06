const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Blunk";
const description = "Blunks are unique, algorithmically generated NFTs that provide access to the Blunk community.";
const baseUri = "ipfs://NewUriToReplace";

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 4443,
    layersOrder: [
      { name: "Background" },
      { name: "Helmet" },
      { name: "Body" },
      { name: "Mouth" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "Accessory" },
    ],
  },
];

const compatibilityRules = {
  "disallowedCombinations": [
    {
      "layer": "Head",
      "value": "Pink With Hat",
      "disallowedWith": [
        {
          "layer": "Mouth",
          "value": "Big Beard"
        },
        {
          "layer": "Mouth",
          "value": "Black Beard"
        },
        {
          "layer": "Mouth",
          "value": "Goatee"}
      ]
    },
    {
      "layer": "Head",
      "value": "Straight Hair Blonde",
      "disallowedWith": [
        {
          "layer": "Mouth",
          "value": "Big Beard"
        },
        {
          "layer": "Mouth",
          "value": "Black Beard"
        },
        {
          "layer": "Mouth",
          "value": "Goatee"}
      ]
    },
  ]
};

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 128 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  external_url: "https://www.blastblunks.com",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  gif,
  preview_gif,
  compatibilityRules
};
