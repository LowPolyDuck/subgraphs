/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "shardeumTestnet",
  wNativeAddress: "0x5eB65C6feC23d4eb36bC9966aA110Fe13FBd7c7F".toLowerCase(),
  v2: {
    factoryAddress: "0x9E6d21E759A7A288b80eef94E4737D313D31c13f".toLowerCase(),
    startBlock: 2100,
    wNativeStablePair0: "0x2a91593ec8bafc9cf06bb8584b6e76ddc3fa8381".toLowerCase(), // WSHM/USDT
    wNativeStablePair1: "0x0000000000000000000000000000000000000000".toLowerCase(),
    whitelistAddresses: [
      "0x5eB65C6feC23d4eb36bC9966aA110Fe13FBd7c7F".toLowerCase(), // WSHM
      "0xb5C7882e37359572FD1cCFAA276e7Fdf70145D42".toLowerCase(), // ICE
      "0x43891084581fD07Ee1189f3a2f04e51c26a95B77".toLowerCase(), // USDTi
    ],
    minNativeForPricing: "0.1",
  },
};
