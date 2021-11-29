const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Webitos";
const description = "Webitos Description ";
const baseUri = "ipfs://QmUQg6H7VGZHme26e6L7MMUXeQpt625zqVG8tBCrwmN5nq";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  // Body - Accessory Body
  {
    growEditionSizeTo: 14,
    layersOrder: [
      { name: "Background" },
      // { name: "Accessory_Back" },
      { name: "Body" },
      // { name: "BodyCondition" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "Mouth" },
      // { name: "Tattoos" },
      // { name: "Hair" },
      // { name: "Piercings" },
      // { name: "Accessory_Top" },
      // { name: "Accessory_Bottom" },
    ],
  },
  // // Hood - Accessory Body
  // {
  //   growEditionSizeTo: 28,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Accessory_Back" },
  //     { name: "Hood" },
  //     { name: "BodyCondition" },
  //     { name: "Eyes" },
  //     { name: "Mouth" },
  //     { name: "Tattoos" },
  //     { name: "Hair" },
  //     { name: "Piercings" },
  //     { name: "Accessory_Top" },
  //     { name: "Accessory_Bottom" },
  //   ],
  // },
  // // Condom - Accessory Body
  // {
  //   growEditionSizeTo: 42,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Accessory_Back" },
  //     { name: "CondomColor" },
  //     { name: "Hair" },
  //     { name: "BodyCondition" },
  //     { name: "Tattoos" },
  //     { name: "Piercings" },
  //     { name: "Condom" },
  //     { name: "Eyes" },
  //     { name: "Mouth" },
  //     { name: "Accessory_Top" },
  //     { name: "Accessory_Bottom" },
  //   ],
  // },
  // // Body - Piercings
  // {
  //   growEditionSizeTo: 56,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Accessory_Back" },
  //     { name: "Body" },
  //     { name: "BodyCondition" },
  //     { name: "Head" },
  //     { name: "Eyes" },
  //     { name: "Mouth" },
  //     { name: "Tattoos" },
  //     { name: "Hair" },
  //     { name: "Accessory_Top" },
  //     { name: "Accessory_Body" },
  //     { name: "Accessory_Bottom" },
  //   ],
  // },
  // // Hood - Piercings
  // {
  //   growEditionSizeTo: 71,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Accessory_Back" },
  //     { name: "Hood" },
  //     { name: "BodyCondition" },
  //     { name: "Eyes" },
  //     { name: "Mouth" },
  //     { name: "Tattoos" },
  //     { name: "Hair" },
  //     { name: "Accessory_Top" },
  //     { name: "Accessory_Body" },
  //     { name: "Accessory_Bottom" },
  //   ],
  // },

  // // Condom - Piercings
  // {
  //   growEditionSizeTo: 85,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Accessory_Back" },
  //     { name: "CondomColor" },
  //     { name: "Hair" },
  //     { name: "BodyCondition" },
  //     { name: "Tattoos" },
  //     { name: "Condom" },
  //     { name: "Eyes" },
  //     { name: "Mouth" },
  //     { name: "Accessory_Top" },
  //     { name: "Accessory_Body" },
  //     { name: "Accessory_Bottom" },
  //   ],
  // },

  // // Suits
  // {
  //   growEditionSizeTo: 100,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Accessory_Back" },
  //     { name: "Suits" },
  //     { name: "Head" },
  //     { name: "Eyes" },
  //     { name: "Mouth" },
  //     { name: "Accessory_Top" },
  //     { name: "Accessory_Body" },
  //   ],
  // },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1200,
  height: 1200,
  smoothing: true,
};

const gif = {
  export: true,
  repeat: 0,
  quality: 100,
  delay: 1000,
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
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  Authors: [
    { name: "Giildev", url: "https://twitter.com/GiilDev" },
    { name: "RockinRobert", url: "https://twitter.com/RockinRobertart" },
    { name: "Nyahmin", url: "" },
    { name: "Compota", url: "" },
    { name: " Frozono", url: "" },
  ],
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 10,
  thumbWidth: 100,
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
  solanaMetadata,
  gif,
  preview_gif,
};
