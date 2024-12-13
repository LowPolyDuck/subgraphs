/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "mezo-testnet",
  wNativeAddress: "0xA460F83cdd9584E4bD6a9838abb0baC58EAde999".toLowerCase(),
  v2: {
    factoryAddress: "0xB27fEFF52c463602aA9d939dc090B46439134119".toLowerCase(),
    startBlock: 523168,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000".toLowerCase(),
    wNativeStablePair1: "0xa7458777545A192b6c1665DB966A83d58689E4e8".toLowerCase(), // wtBTC/USDc
    whitelistAddresses: [
      "0xA460F83cdd9584E4bD6a9838abb0baC58EAde999".toLowerCase(), // WwtBTC
      "0xC2d002e83016Ce8e9BB58ff8A006128B7C6c058e".toLowerCase(), // LIMPETH
      "0x3cF96Ad9218e639B63CaBb64772339AA20a45D88".toLowerCase(), // USDc
    ],
    minNativeForPricing: "0.000000001",
  },
};
