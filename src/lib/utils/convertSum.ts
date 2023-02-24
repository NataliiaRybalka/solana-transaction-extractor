import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { currency } from '../types/index.types';

const LAMPORTS_PER_USDC = 1000000;

export const convertSum = (amount: string | number, cur: currency): number => {
  if (cur === currency.sol) return Number(amount) / LAMPORTS_PER_SOL;
  if (cur === currency.usdc) return Number(amount) / LAMPORTS_PER_USDC;
};
