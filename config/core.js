/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "core",
  wNativeAddress: "0xb0788b601c0d712702bc829b52771199ad8e33ff".toLowerCase(), // for V2 subgraph, use old WCORE: 0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f, rest 0xb0788b601c0d712702bc829b52771199ad8e33ff
  v3: {
    // WCORE-USDT 0.3%
    wNativeStablePoolAddress: "0xf64b900e5dd4e6a358bee114206e291058aee682".toLowerCase(),
    stableIsToken0: true,
    factoryAddress: "0xa8a3AAD4f592b7f30d6514ee9A863A4cEFF6531D".toLowerCase(),
    startBlock: 9212906,
    stableCoins: [
      "0x81bcea03678d1cef4830942227720d542aa15817".toLowerCase(), // USDT ICE Bridge
      "0x900101d06a7426441ae63e9ab3b9b0f63be145f1".toLowerCase(), // USDT L0 bridge
      "0xd2683b22287e63d22928cbe4514003a92507f474".toLowerCase(), // USDC ICE Bridge
      "0xa4151b2b3e269645181dccf2d426ce75fcbdeca9".toLowerCase(), // USDC L0 Bridge
    ],
    whitelistAddresses: [
      "0xc0e49f8c615d3d4c245970f6dc528e4a47d69a44".toLowerCase(), // ICE
      "0x9550db7d4d7fb115bd3c5cdef861e7d7d2f5062a".toLowerCase(), // WCORE
      "0x81bcea03678d1cef4830942227720d542aa15817".toLowerCase(), // USDT ICE Bridge
      "0x900101d06a7426441ae63e9ab3b9b0f63be145f1".toLowerCase(), // USDT L0 bridge
      "0xd2683b22287e63d22928cbe4514003a92507f474".toLowerCase(), // USDC ICE Bridge
      "0xa4151b2b3e269645181dccf2d426ce75fcbdeca9".toLowerCase(), // USDC L0 Bridge
    ],
    nonfungiblePositionManagerAddress: "0xe944Fa9AE06680FDfDc782f8bEfE2F03bf9a902C".toLowerCase(),
    nonfungiblePositionManagerStartBlock: 9212912,
    minETHLocked: 1,
  },
  masterChefV3: {
    masterChefAddress: "0xc378c540A8CD4e2F7475a1850d9E854C1Ea8b9E8".toLowerCase(),
    startBlock: 9212916,
  },
  v2: {
    factoryAddress: "0x9e6d21e759a7a288b80eef94e4737d313d31c13f".toLowerCase(),
    startBlock: 852448,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000".toLowerCase(),
    wNativeStablePair1: "0x23a776980962cf489130d8a936d2953fdf3e6aa1".toLowerCase(), // WCORE/USDT(l0)
    whitelistAddresses: [
      "0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f".toLowerCase(), // WCORE old
      "0x9550db7d4d7fb115bd3c5cdef861e7d7d2f5062a".toLowerCase(), // WCORE new
      "0x81bcea03678d1cef4830942227720d542aa15817".toLowerCase(), // USDT(ICS)
      "0x900101d06a7426441ae63e9ab3b9b0f63be145f1".toLowerCase(), // USDT(L0)
      "0xc0e49f8c615d3d4c245970f6dc528e4a47d69a44".toLowerCase(), // ICE
      "0xa20b3b97df3a02f9185175760300a06b4e0a2c05".toLowerCase(), // SCORE
    ],
    minNativeForPricing: "200",
  },
};
