/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "scroll",
  wNativeAddress: "0x5300000000000000000000000000000000000004",
  v2: {
    factoryAddress: "0x9e6d21e759a7a288b80eef94e4737d313d31c13f",
    startBlock: 84922,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x98182f51faceaca17cae1af7b0b94b1e2c2d1ba0", // WETH/USDTi
    whitelistAddresses: [
      "0x5300000000000000000000000000000000000004", // WETH
      "0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f", // ICE
      "0xc0e49f8c615d3d4c245970f6dc528e4a47d69a44", // USDTi
      "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4", // USDC Scroll Bridge
      "0xf55bec9cafdbe8730f096aa55dad6d22d44099df", // USDT Scroll Bridge
    ],
    minNativeForPricing: "0.1",
  },
};
