

const testing = true;

export const currentConnection = testing ? "testnet" : "mainnet";

export const TOKEN_ADDRESS = {
  
  ETH : {
    324: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
    5: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    161221135: "0xd9d6507119Ec56ce22A89bEdAcd6B44D495BFf08"
    
  },
  DCC: {
    161221135: "0x42F16c5E448114CB9a93D47b81349CdAE13ED768",
  },
  XFI: {
    5: "0x4Ec1c1337c555c1E2DFD814837fBc81Fc28ff716",
    131: "0x75dA9858f0bb8f95973269eB3808Ffa5Adf12ad9"
  },
  tGRAM: {
    131: "0x7E3e3C50927F78ce0D2a1699d15d342c976A49B0"
  },
  WETH :{
    324: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
    // 5: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"
  },
  STMx:{
    324: "0x577e09A9385092BdcE0d0C3b5C980589c42b4A29"
  },
  Tst: {
    80001:"0x884A73e3507592C078d5dB791299a2eB646AA665"

  },
  STT: {
    80001: "0x3eECde42973B0b5157e81e14caDCfe22700B6Bea"

  },
  WMATIC:{
    80001:"0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889"

  },
  PBR: {
    1: "0x298d492e8c1d909D3F63Bc4A36C66c64ACB3d695",
    4: "0xf6c9FF0543f932178262DF8C81A12A3132129b51",
    56: "0x1D1cB8997570e73949930c01Fe5796C88d7336c6",
  },
  USDT: {
    1: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    4: "0xe687b0a94c3A20540552d981cD311a6812759dF8",
  },
  USDC: {
    1: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    4: "0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b",
  },
  // ETH: {
  //   1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  //   4: "0xc778417e063141139fce010982780140aa0cd5ab",
  // },
  PWAR: {
    56: "0x16153214E683018D5aA318864c8e692b66E16778",
    97: "0x16153214E683018D5aA318864c8e692b66E16778",
  },
  CORGIB: {
    56: "0x1cfd6813a59d7b90c41dd5990ed99c3bf2eb8f55",
    97: "0xE428Cc8A06Cdba0ad5074180f8E80ec6D4083b24",
  },
  BNB: {
    56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    97: "0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F",
  },
};

export const NATIVE_TOKEN_ADDRESS: { [index: string]: string } = {
  // 1: TOKEN_ADDRESS.ETH[1],
  5: TOKEN_ADDRESS.ETH[5],
  // 56: TOKEN_ADDRESS.BNB[56],
  97: TOKEN_ADDRESS.BNB[97],
  // 80001: TOKEN_ADDRESS.WMATIC[80001],
  324: TOKEN_ADDRESS.WETH[324],
  131: TOKEN_ADDRESS.tGRAM[131],
  161221135: TOKEN_ADDRESS.ETH[161221135]
  // 324: TOKEN_ADDRESS.ETH[324]
};

export const ROUTER_ADDRESS: { [index: string]: string } = {
  // 1: "0xFF0e9437818258BDEdd1aA374095968ABC82a9E2",
  // 4: "0x541E97cC33aF16586fB544812b39F1663C3FD779",
  // 97: "0xCb4Ea1E2f7561edD414AF09d2df308986d4d7a29",
  // 56: "0x8547e2E16783Fdc559C435fDc158d572D1bD0970",
  // 80001: "0xb4903E541Bde5C915edD1CE9be817eAE92918147"
  // 80001: "0xA25e4a127356556a6f02898dF917c1d842B19dEe"
  // 324: "0xB22eeFe3a73299a7b90045a5DfA624315C680502",
  // 97: "0x569304D8debeA03F8777C592Bb5791EB5d2A5E73"
  // 5: "0xfece9DF2D4bC76020A368C909C105e7863fC0860",
  131:"0xBb6ACd284cC06Ca530cb54a59521F3390bEbC78d",
  161221135: "0x9Af36aD30ecAc6ce8B6D1F3d6C42711c48Ab627f",
};

export const FACTORY_ADDRESS = {
  // 1: "0xf5d8E98ef1f66f1cAb949A2555837FE755fc2D68",
  // 4: "0x628cf8e2A079C6D9bDd0293125273F71EA3d74Ec",
  // 97: "0xAeE1F15957C6c7AbDF245527b6497E96bDB17091",
  // 56: "0xDda79Ec4AF818D1e95F0A45B3E7e60461d5228cb",
  // 80001: "0xCcDEB3653D58ab48A1e44724F5243007954d8426"
  // 80001:"0x6552da8c60a0ac0807b60ac997120f4ce0ab337b"
  // 324: "0xf7C0d93a508986d8b7d86bE0d3E9F38Cf34C00CD",
  // 97: "0x8243cCF45C05Ca6714D11D612Ab52BE756220c42"
  // 5: "0x929b6543a6Acd3467006ef2aAA35C0C8D3C15611",
  131:"0xaB7E9de34f2ba91C430f1Fd20a77bD245D883Df5",
  161221135: "0xCD1FfF5FcDE62bEFDc1a7E3Ddf6E166fA24f7B98"
};

export const FARM_ADDRESS: { [index: string]: string } = {
  5: "0x17B1969EFe5B35E9Ee2a3B829eB604C3447F0032",
  // 1: "0xF0301472c7e383310bE1D426aA59207818fB8a53",
  // 4: "0x57eA8360A59468112cE669EA8bFb2169062EAF0d",
  // 97: "0xc14c4F5041D62c03b4E18932975C30817A4CB39f",
  // 56: "0x2A5Ce0C18c885fbc9B41933f79559a6c40208c72",
  
};

export const MULTICALL_ADDRESS: { [index: string]: string } = {
  // 1: "0x3a2Bd96Da4B14C30918aE0fC0E784E2F56120F1d",
  // 4: "0x6c4f9282bBD29992bF4F064F0165e805336Eef59",
  // 97: "0x688EC8C059592104fC713E0dA9276e649302C4Ab",
  // 56: "0x6e568FcE995F5c7ddaFB8C0b74B3241328498F8A",
  // // 80001:"0xd85620D66D32952b97764dF14302498006Cf90fB"
  // 324: "0x7082C0A96921669fCbc73c1C072e205f991e1383",
  // // 97: " 0x120326Ca9Fd2FC38eaBE7bf97Ae4E1C0F9ab835c"
  // 97: "0x923Bf2dc4430E34bA7a818b3427965EE3f9FCa5a"
  5: "0x09926fE723a2a2eBb615159cB5dE98e12D649B7e",
  131: "0x001bda7D844Ee0C35AD683b1259d9732d7C7c19f",
  161221135: "0x63101C389e9a005a1f3b9EB036B73a95FC23fAEf"
};

export const farmContractConfig = {
  startBlock: 9829062,
  startTimestamp: 1639730634,
};

export const ETH = "ETH";
export const BNB = "BNB";
export const PBR = "PBR";
export const PWAR = "PWAR";
export const USDT = "USDT";
export const USDC = "USDC";
export const MOVR = "MOVR";
export const WMATIC= "WMATIC";
export const Tst = "Tst";
export const STT = "STT";
export const STMx= "STMx";
export const WETH= "WETH";
export const SGPT= "SGPT";
export const XFI = "XFI";
export const tGRAM = "tGRAM"
export const DCC = "DCC";

export const NATIVE_TOKEN: { [index: number]: string } = {
  // 1: ETH,
  // 4: ETH,
  97: BNB,
  5: ETH,
  161221135: ETH,
  131: tGRAM,
  // 56: BNB,
  // 80001:WMATIC
  324: WETH
  // 324: ETH
};

export const FARM_TOKEN: { [index: number]: string } = {
  // 5: XFI,
  1: PBR,
  4: PBR,
  97: PWAR,
  56: PWAR,
 
};

export const DEFAULT_SWAP_TOKENS = {
  // 1: ["ETH", "PBR"], // token0 token1
  // 4: ["ETH", "PBR"],
  97: ["BNB", "SGPT"],
  // 56: ["BNB", "PBR"],
  // 80001: ["WMATIC", "STT"]
  324: ["WETH", "STMx"],
  // 324: ["ETH", "STMx"]
  5: ["ETH","XFI"],
  131: ["tGRAM","XFI"],
  161221135: ["ETH", "DCC"],
};

export const DEFAULT_POOL_TOKENS = {
  // 1: ["ETH", "PBR"], // token0 token1
  // 4: ["ETH", "PBR"],
  97: ["BNB", "SGPT"],
  // 56: ["BNB", "PBR"],
  // 80001:["WMATIC", "STT"]
  // 324: ["WETH", "STMx"]
  // 324: ["ETH", "STMx"]
  // 5: ["ETH","XFFI"],
  131: ["tGRAM","XFI"],
  161221135: ["ETH", "DCC"],
};

export const TOKEN_BLACKLIST = [];
export const PAIR_BLACKLIST = [];

export const exchangeFee = 0.2;
export const defaultSlippage = 0.5;
export const defaultTransactionDeadline = 20; //20 minutes

export const etheriumNetwork = "ethereum";
export const bscNetwork = "bsc";
export const moonriverNetwork = "moonriver";
export const maticNetwork = "polygon";
export const mumbainetwork= "mumbai";
export const zksyncNetwork = "zksync";
export const testbscNetwork = "testbsc";
export const goerliNetwork = "goerli"
export const gramNetwork = "gram"
export const plumeNetwork = "plume";

export const supportedChains = [
  1, 4, 5, 1285, 1287, 97, 56, 131, 137, 161221135, 80001, 324, 1666700000, 1666600000,
];

export const allowanceAmount = "9999999999999999999999999";
export const corgibAllowance = "999999999999999999999999999999999999";

export const BLOCK_EXPLORER = {
  1: "https://etherscan.io",
  4: "https://rinkeby.etherscan.io",
  56: "https://bscscan.com",
  97: "https://testnet.bscscan.com",
  80001: "https://mumbai.polygonscan.com/",
  324: "https://explorer.zksync.io/",
  5: "https://goerli.etherscan.io/",
  131: "https://scan.engram.tech/",
  161221135: "https://plume-testnet.explorer.caldera.xyz/"
};

export const nullAddress = "0x0000000000000000000000000000000000000000";

export const timeframeOptions = {
  WEEK: "1 week",
  MONTH: "1 month",
  // THREE_MONTHS: "3 months",
  // YEAR: "1 year",
  // HALF_YEAR: "6 months",
  ALL_TIME: "All time",
};

export const BUNDLE_ID = "1";

export const swapFnConstants = {
  swapExactETHForTokens: "swapExactETHForTokens", // case 1
  swapETHforExactTokens: "swapETHforExactTokens", // case2
  swapExactTokensForETH: "swapExactTokensForETH", // case3
  swapTokensForExactETH: "swapTokensForExactETH", // case 4
  swapExactTokensForTokens: "swapExactTokensForTokens", // case 5
  swapTokensForExactTokens: "swapTokensForExactTokens", // case 6
  swapExactIn: "swapExactIn", // tradeType case 1
  swapExactOut: "swapExactOut", // tradeType case 2
};

export const liquidityPoolConstants = {
  exactIn: "exactIn",
  exactOut: "exactOut",
};

export const THRESOLD_VALUE = 0.00001;
export const THRESOLD_WEI_VALUE = 100000000000000;

export const supportedFarmingPools = {
  1: ["PBR-ETH", "ETH-USDT"],
  4: ["PBR-ETH", "ETH-USDT"],
  56: ["PBR-BNB", "PWAR-BNB", "BNB-USDT"],
  97: ["PWAR-BNB", "BNB-USDT"],
  // 5: ["XFI-ETH"],
  // 131: ["XFI-tGRAM"]
};

export const farmingPoolConstants = {
  5: {
    "XFI-ETH": {
      multiplier: 40,
      pid: 0,
      address: "0x853dffe125b692117ea8d93044E4b0B11c35F035",
      blocksPerYear: "",
      lpApr: 2,
      decimals: 18,
    },
  // 1: {
  //   "PBR-ETH": {
  //     multiplier: 40,
  //     pid: 0,
  //     address: "0x173cF7c7356f71c3e75cE02F9cC777Fb762B5080",
  //     blocksPerYear: "",
  //     lpApr: 0,
  //     decimals: 18,
  //   },
  //   "ETH-USDT": {
  //     multiplier: 5,
  //     pid: 1,
  //     address: "0xdda0A346D267a48EC74CC68979584d85501fe5D5",
  //     blocksPerYear: "",
  //     lpApr: 0,
  //     decimals: 12,
  //   },
  // },
  // 4: {
  //   "PBR-ETH": {
  //     multiplier: 40,
  //     pid: 0,
  //     address: "0x306dd2eB9DDACeecdbA4cfA0EccC009e7291cDDE",
  //     blocksPerYear: "",
  //     lpApr: 0,
  //     decimals: 18,
  //   },
  //   "ETH-USDT": {
  //     multiplier: 5,
  //     pid: 1,
  //     address: "0x17398F4101dac7c9C1d637b1139EEA9D3d700250",
  //     blocksPerYear: "",
  //     lpApr: 0,
  //     decimals: 12,
  //   },
  // },
  // 56: {
  //   "PBR-BNB": {
  //     multiplier: 50,
  //     pid: 2,
  //     address: "0xD2F64768FEa0591499344d79627ac7c4a43071D1",
  //     blocksPerYear: "",
  //     lpApr: 0,
  //     decimals: 18,
  //   },
  //   "PWAR-BNB": {
  //     multiplier: 40,
  //     pid: 0,
  //     address: "0xc1197ffbd177b1e6cc16a00db86e45516898e116",
  //     blocksPerYear: "",
  //     lpApr: 0,
  //     decimals: 18,
  //   },
  //   "BNB-USDT": {
  //     multiplier: 5,
  //     pid: 1,
  //     address: "0xd044646e11112f806731f16495632e2db00d171f",
  //     blocksPerYear: "",
  //     lpApr: 0,
  //     decimals: 12,
  //   },
  // },
  // 97: {
  //   "PWAR-BNB": {
  //     multiplier: 40,
  //     pid: 0,
  //     address: "0x767929Ec1AE0E66710Fc1D4CA9F0E33cF3bf3A37",
  //     blocksPerYear: "",
  //     lpApr: 0,
  //     decimals: 18,
  //   },
  //   "BNB-USDT": {
  //     multiplier: 5,
  //     pid: 1,
  //     address: "0x0AD6e5af7A4Da3006B393A91576860c14a562442",
  //     blocksPerYear: "",
  //     lpApr: 0,
  //     decimals: 12,
  //   },
   },
};

export const RINKEBY_BLOCK_TIME = 15;
export const PBR_PER_BLOCK = 0.5;
export const BLOCKS_PER_YEAR = (60 / RINKEBY_BLOCK_TIME) * 60 * 24 * 365;
export const PBR_PER_YEAR = PBR_PER_BLOCK * BLOCKS_PER_YEAR;

export const GOERLI_BLOCK_TIME = 15;
export const XFI_PER_BLOCK = 0.12;
export const BLOCKS_PER_YEAR_GEORLI = (60 / GOERLI_BLOCK_TIME) * 60 * 24 * 365;
export const XFI_PER_YEAR = XFI_PER_BLOCK * BLOCKS_PER_YEAR_GEORLI;

export const PWAR_PER_BLOCK = 0.6;
export const BLOCKS_PER_YEAR_BSC = 10220000;
export const PWAR_PER_YEAR = PWAR_PER_BLOCK * BLOCKS_PER_YEAR_BSC;

export const REWARD_TOKEN_PER_YEAR = {
  1: PBR_PER_YEAR,
  56: PWAR_PER_YEAR,
  5: XFI_PER_YEAR 
};

export const BASE_URL =
  process.env.NODE_ENV && process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEVELOPMENT_URL
    : process.env.REACT_APP_PRODUCTION_URL;

export const SWAP_BASES: { [index: string]: Array<string> } = {
  1: ["USDT", "USDC", "ETH"],
  4: ["USDT", "USDC", "ETH"],
  5:["ETH","XFI"],
  161221135: ["ETH", "DCC"],
  1285: [],
  1287: [],
  // 97: ["BNB", "USDT", "USDC"],
  97: ["BNB", "SGPT"],
  56: ["BNB", "SGPx"], 
  137: [],
  80001: ["WMATIC", "STT"],
  324: ["WETH", "STMx", "ETH"],
  131:["tGRAM","XFI"],
  // 324: ["ETH", "STMx"],

  1666700000: [],
  1666600000: [],
};

export const NetworkContextName = "NETWORK";

export const BLACK_LIST_PAIRS_ON_CHART = [
  // "0xdda0a346d267a48ec74cc68979584d85501fe5d5", // ETH-USDT  MAINNET
  // "0xd044646e11112f806731f16495632e2db00d171f", // BNB-USDT , BSC
];

export const BLACK_LIST_TOKENS_ON_CHART = [
  // "0xdac17f958d2ee523a2206206994597c13d831ec7", // USDT, MAINNET
  // "0x55d398326f99059ff775485246999027b3197955", // usdt bsc
];

export const TransactionStatus = {
  WAITING: "WAITING",
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
};
