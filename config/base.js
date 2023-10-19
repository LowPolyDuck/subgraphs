/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "base",
  wNativeAddress: "0x4200000000000000000000000000000000000006",
  v2: {
    factoryAddress: "0x9e6d21e759a7a288b80eef94e4737d313d31c13f",
    startBlock: 1915343,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0xfCe2fcc39738DbCdFF2B4EfD9A0B142eC6BcE4AD", // WETH/USDTi
    whitelistAddresses: [
      "0x4200000000000000000000000000000000000006", // WETH
      "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f", // ICE
      "0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44", // USDTi
      "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913", // USDC Base Bridge
      "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb", // Dai base bridge
    ],
  },
};
