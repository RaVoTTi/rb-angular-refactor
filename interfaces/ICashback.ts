export interface ICashback {
  type:
    | 'BTC'
    | 'ETH'
    | 'XRP'
    | 'LTC'
    | 'BCH'
    | 'EOS'
    | 'XLM'
    | 'ADA'
    | 'XMR'
    | 'DASH';
  wallet: string;
}
