/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "telos",
  wNativeAddress: "0x0eb9036cbe0f052386f36170c6b07ef0a0e3f710",
  v2: {
    factoryAddress: "0x9e6d21e759a7a288b80eef94e4737d313d31c13f",
    startBlock: 286182911,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x86CA8345bDa0D6052E93f07BE4dcC680Af927d53", // WTLOS/USDTi
    whitelistAddresses: [
      "0xDC2393dc10734BF153153038943a5deB42b209cd", // WTLOS
      "0xB25cB6a275a8D6a613228FB161eB3627b50EB696", // ICE
      "0xc57F0eb99363e747D637B17BBdB4e1AB85e60631", // USDTi
    ],
  },
};
