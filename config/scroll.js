/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "scroll",
  wNativeAddress: "0x0eb9036cbe0f052386f36170c6b07ef0a0e3f710",
  v2: {
    factoryAddress: "0x9e6d21e759a7a288b80eef94e4737d313d31c13f",
    startBlock: 84922,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x98182F51fAcEaca17cAe1aF7b0b94B1E2c2D1BA0", // WETH/USDTi
    whitelistAddresses: [
      "0x5300000000000000000000000000000000000004", // WETH
      "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f", // ICE
      "0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44", // USDTi
      "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4", // USDC Scroll Bridge
      "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df", // USDT Scroll Bridge
    ],
  },
};
