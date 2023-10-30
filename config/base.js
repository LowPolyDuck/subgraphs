/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "base",
  wNativeAddress: "0x4200000000000000000000000000000000000006",
  v2: {
    factoryAddress: "0x9e6d21e759a7a288b80eef94e4737d313d31c13f",
    startBlock: 1915343,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0xfce2fcc39738dbcdff2b4efd9a0b142ec6bce4ad", // WETH/USDTi
    whitelistAddresses: [
      "0x4200000000000000000000000000000000000006", // WETH
      "0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f", // ICE
      "0xc0e49f8c615d3d4c245970f6dc528e4a47d69a44", // USDTi
      "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913", // USDC Base Bridge
      "0x50c5725949a6f0c72e6c4a641f24049a917db0cb", // Dai base bridge
    ],
    minNativeForPricing: "0.1",
  },
};
