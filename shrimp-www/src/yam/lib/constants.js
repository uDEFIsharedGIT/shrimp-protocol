import BigNumber from 'bignumber.js/bignumber';

export const SUBTRACT_GAS_LIMIT = 100000;

const ONE_MINUTE_IN_SECONDS = new BigNumber(60);
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60);
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24);
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365);

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
};

//erc20 address list/xixi
export const addressMap = {
  uniswapFactory : "0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95",
  uniswapFactoryV2: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  YFI : "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
  CREAM: "0x2ba592F78dB6436527729929AAf6c908497cB200",
  WETH : "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  UNIRouter : "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  DICE: "0xCF67CEd76E8356366291246A9222169F4dBdBe64",
  COMP: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
  UNI: "0xeba5d22bbeb146392d032a2f74a735d66a32aee4",
  TACO: "0x00D1793D7C3aAE506257Ba985b34C76AaF642557",
  ZOMBIE: "0xdcEe2dC9834dfbc7d24C57769ED51daf202a1b87",
  DOGEFI: "0x9B9087756eCa997C5D595C840263001c9a26646D",
  FRENS: "0x907cb97615b7cD7320Bc89bb7CDB46e37432eBe7",
}
