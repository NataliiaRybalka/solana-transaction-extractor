export enum currency {
  sol = 'sol',
  usdc = 'usdc',
}

export interface TransactionData {
  from: string,
  to: string,
  amount: number,
  currency: currency,
  date: string,
  signature: string,
}
