/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "bitgert",
  wNativeAddress: "0x0eb9036cbe0f052386f36170c6b07ef0a0e3f710",
  v2: {
    factoryAddress: "0x9e6d21e759a7a288b80eef94e4737d313d31c13f",
    startBlock: 639892,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x8e7dd0d762f60942e0bd05b1114d6cedf4435a18", // WBRISE/USDTi
    whitelistAddresses: [
      "0x0eb9036cbe0f052386f36170c6b07ef0a0e3f710", // WBRISE
      "0xb999ea90607a826a3e6e6646b404c3c7d11fa39d", // ICE
      "0xc7e6d7e08a89209f02af47965337714153c529f0", // USDTi
      "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d", // USDT multichain.org
      "0x74446a7418bfbfcde3f1f6bcaffa097d050a6dd8", // BNBi
      "0xd0ce781960c6356a7175988751bfc8d7cd28ea60", // BUSDi
      "0x71ef0a490e53cc177f640169b0347be4d0f23cc9", // DAIi
      "0xea61dc96f105469522d39cbf7bd59b42393678f7", // ETHi
      "0xaedd3ff7b9fc5fc4e44d140b80f0b1c7fdb6102c", // USDCi
    ],
    minNativeForPricing: "1000000000",
  },
};
