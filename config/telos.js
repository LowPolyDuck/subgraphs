/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "telos",
  wNativeAddress: "0xdc2393dc10734bf153153038943a5deb42b209cd",
  v2: {
    factoryAddress: "0x9e6d21e759a7a288b80eef94e4737d313d31c13f",
    startBlock: 286182911,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x86ca8345bda0d6052e93f07be4dcc680af927d53", // WTLOS/USDTi
    whitelistAddresses: [
      "0xdc2393dc10734bf153153038943a5deb42b209cd", // WTLOS
      "0xb25cb6a275a8d6a613228fb161eb3627b50eb696", // ICE
      "0xc57f0eb99363e747d637b17bbdb4e1ab85e60631", // USDTi
    ],
    minNativeForPricing: "2000",
  },
};
