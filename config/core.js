/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "core",
  wNativeAddress: "0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f", // for V2 subgraph, use old WCORE: 0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f, rest 0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f
  v3: {
    // WCORE-USDT 0.3%
    wNativeStablePoolAddress: "0x2f7ff967771a16004c23e6773d8b753481fa75c6",
    stableIsToken0: true,
    factoryAddress: "0xb193245011a41172894553e59a40cd287168cdd8",
    startBlock: 6300935,
    stableCoins: [
      "0x81bcea03678d1cef4830942227720d542aa15817", // USDT ICE Bridge
      "0x900101d06a7426441ae63e9ab3b9b0f63be145f1", // USDT L0 bridge
      "0xd2683b22287e63d22928cbe4514003a92507f474", // USDC ICE Bridge
      "0xa4151b2b3e269645181dccf2d426ce75fcbdeca9", // USDC L0 Bridge
    ],
    whitelistAddresses: [
      "0xc0e49f8c615d3d4c245970f6dc528e4a47d69a44", // ICE
      "0x9550db7d4d7fb115bd3c5cdef861e7d7d2f5062a", // WCORE
      "0x81bcea03678d1cef4830942227720d542aa15817", // USDT ICE Bridge
      "0x900101d06a7426441ae63e9ab3b9b0f63be145f1", // USDT L0 bridge
      "0xd2683b22287e63d22928cbe4514003a92507f474", // USDC ICE Bridge
      "0xa4151b2b3e269645181dccf2d426ce75fcbdeca9", // USDC L0 Bridge
    ],
    nonfungiblePositionManagerAddress: "0xa6c4b4536e1182ee2691fcba7abee54c456ed196",
    nonfungiblePositionManagerStartBlock: 6301013,
    minETHLocked: 1,
  },
  masterChefV3: {
    masterChefAddress: "0x6c6549a2aefec87ca9a3615fe3bf6e915fccfb24",
    startBlock: 6301029,
  },
  v2: {
    factoryAddress: "0x9e6d21e759a7a288b80eef94e4737d313d31c13f",
    startBlock: 852448,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x23a776980962cf489130d8a936d2953fdf3e6aa1", // USDT(l0)/WCORE
    whitelistAddresses: [
      "0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f", // WCORE old
      "0x9550db7d4d7fb115bd3c5cdef861e7d7d2f5062a", // WCORE new
      "0x81bcea03678d1cef4830942227720d542aa15817", // USDT(ICS)
      "0x900101d06a7426441ae63e9ab3b9b0f63be145f1", // USDT(L0)
      "0xc0e49f8c615d3d4c245970f6dc528e4a47d69a44", // ICE
      "0xa20b3b97df3a02f9185175760300a06b4e0a2c05", // SCORE
    ],
  },
};
