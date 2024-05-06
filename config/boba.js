/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "boba",
  wNativeAddress: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000".toLowerCase(),
  v2: {
    factoryAddress: "0x39135bD1FD3A04381C1094AB0Dd35c7bbe61b3C5".toLowerCase(),
    startBlock: 1441895,
    wNativeStablePair0: "0x85767bcbb2B5e95BDdB3523406419d1aa7EFdCF2".toLowerCase(), // WETH/USDT
    wNativeStablePair1: "0x0000000000000000000000000000000000000000".toLowerCase(),
    whitelistAddresses: [
        "0x7D5a56742C082FcDfc240cd7D1775f00e059771F".toLowerCase(), // USDT
        "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000".toLowerCase(), // WETH
        "0xd65CceCFf339e5680b1A1E7821421932cc2b114f".toLowerCase() // ICE
    ],
    minNativeForPricing: "0.1",
  },
};
