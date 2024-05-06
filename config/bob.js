/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "bob",
  wNativeAddress: "0x4200000000000000000000000000000000000006".toLowerCase(),
  v2: {
    factoryAddress: "0x7b2a5C88AB9367147F6ac384F857CbaDF5aA70a7".toLowerCase(),
    startBlock: 852197,
    wNativeStablePair0: "0x8656154460dA9C74210f386cE0d52d3e7211c11D".toLowerCase(), // WETH/USDT
    wNativeStablePair1: "0x0000000000000000000000000000000000000000".toLowerCase(),
    whitelistAddresses: [
      "0x4200000000000000000000000000000000000006".toLowerCase(), // WETH
      "0x05D032ac25d322df992303dCa074EE7392C117b9".toLowerCase(), // USDT
    ],
    minNativeForPricing: "0.1",
  },
};
