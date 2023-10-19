/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "shimmer",
  wNativeAddress: "0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b",
  v2: {
    factoryAddress: "0x24cb308a4e2F3a4352F513681Bd0c31a0bd3BA31",
    startBlock: 36536,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x82A7F6a7C2f54a552349A2C59Ecb3ceca7BF4a60", // WSMR/USDTi
    whitelistAddresses: [
      "0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b", // WSMR
      "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f", // ICE
      "0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44", // USDTi
    ],
  },
};
