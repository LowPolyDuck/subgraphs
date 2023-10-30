/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "shimmer",
  wNativeAddress: "0xbeb654a116aeef764988df0c6b4bf67cc869d01b",
  v2: {
    factoryAddress: "0x24cb308a4e2F3a4352F513681Bd0c31a0bd3BA31",
    startBlock: 36536,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x82a7f6a7c2f54a552349a2c59ecb3ceca7bf4a60", // WSMR/USDTi
    whitelistAddresses: [
      "0xbeb654a116aeef764988df0c6b4bf67cc869d01b", // WSMR
      "0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f", // ICE
      "0xc0e49f8c615d3d4c245970f6dc528e4a47d69a44", // USDTi
    ],
    minNativeForPricing: "2000",
  },
};
