/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "core",
  wNativeAddress: "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f",
  v3: {
    // WCORE-USDT 0.3%
    wNativeStablePoolAddress: "0x2F7ff967771A16004C23e6773d8b753481Fa75c6",
    stableIsToken0: true,
    factoryAddress: "0xb193245011A41172894553e59a40Cd287168cdd8",
    startBlock: 6300935,
    stableCoins: [
      "0x81bCEa03678D1CEF4830942227720D542Aa15817", // USDT ICE Bridge
      "0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1", // USDT L0 bridge
      "0xD2683b22287E63D22928CBe4514003a92507f474", // USDC ICE Bridge
      "0xa4151B2B3e269645181dCcF2D426cE75fcbDeca9", // USDC L0 Bridge
    ],
    whitelistAddresses: [
      "0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44", // ICE
      "0x9550Db7d4d7Fb115BD3c5cdEf861E7d7D2F5062a", // WCORE
      "0x81bCEa03678D1CEF4830942227720D542Aa15817", // USDT ICE Bridge
      "0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1", // USDT L0 bridge
      "0xD2683b22287E63D22928CBe4514003a92507f474", // USDC ICE Bridge
      "0xa4151B2B3e269645181dCcF2D426cE75fcbDeca9", // USDC L0 Bridge
    ],
    nonfungiblePositionManagerAddress: "0xa6C4B4536E1182eE2691FCba7ABee54C456ed196",
    nonfungiblePositionManagerStartBlock: 6301013,
    minETHLocked: 1,
  },
  masterChefV3: {
    masterChefAddress: "0x6c6549a2aeFec87Ca9a3615fE3bf6E915Fccfb24",
    startBlock: 6301029,
  },
};
