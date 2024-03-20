/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "shardeumTestnet",
  wNativeAddress: "0x9e6d21e759a7a288b80eef94e4737d313d31c13f".toLowerCase(),
  v2: {
    factoryAddress: "0x3D4440F335060a0341C9E6C3bBeE85E552505FFF".toLowerCase(),
    startBlock: 111331,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000".toLowerCase(), // WSHM/USDT
    wNativeStablePair1: "0x0000000000000000000000000000000000000000".toLowerCase(),
    whitelistAddresses: [],
    minNativeForPricing: "0.1",
  },
};
