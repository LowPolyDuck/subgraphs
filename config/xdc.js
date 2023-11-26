/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "xdc",
  wNativeAddress: "0x951857744785e80e2de051c32ee7b25f9c458c42".toLowerCase(),
  v2: {
    factoryAddress: "0x9e6d21e759a7a288b80eef94e4737d313d31c13f".toLowerCase(),
    startBlock: 53790908,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000".toLowerCase(),
    wNativeStablePair1: "0xe9450d66a493c3ae6ebc3bb0b2b01a5107ea8bdb".toLowerCase(), // WXDC/USDTi // maybe needs to be wNativeStablePair0...
    whitelistAddresses: [
      "0x951857744785e80e2de051c32ee7b25f9c458c42".toLowerCase(), // WXDC
      "0x54051d9dbe99687867090d95fe15c3d3e35512ba".toLowerCase(), // ICE
      "0xc57f0eb99363e747d637b17bbdb4e1ab85e60631".toLowerCase(), // USDT (ice bridge)
      "0xb25cb6a275a8d6a613228fb161eb3627b50eb696".toLowerCase(), // USDC (ice bridge)
    ],
    minNativeForPricing: "2000",
  },
};
