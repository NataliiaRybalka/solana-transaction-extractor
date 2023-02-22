import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { TransactionDetail, TransactionData } from './extract.types';

const types: Array<string> = ['transfer', 'transferChecked'];

export function extract(transactionDetail: TransactionDetail): TransactionData {
  const transactionInstructions = transactionDetail.transaction.message.instructions;
  const isTransfer = transactionInstructions.find(instruction => types.includes(instruction.parsed.type));
  if (!isTransfer) return;

  const data: TransactionData = {
    from: null,
    to: null,
    amount: 0,
    date: new Date,
    signature: null,
  };

  data.date = new Date(transactionDetail.blockTime * 1000);
  data.signature = transactionDetail.transaction.signatures[0];

  if (transactionDetail.transaction.message.instructions[0].parsed.type === 'transfer') {
    data.from = transactionDetail.transaction.message.instructions[0].parsed.info.source;
    data.to = transactionDetail.transaction.message.instructions[0].parsed.info.destination;
    data.amount = Number(transactionDetail.transaction.message.instructions[0].parsed.info.lamports) / LAMPORTS_PER_SOL;

    return data;
  }

  if (transactionDetail.transaction.message.instructions[0].parsed.type === 'transferChecked') {
    data.from = transactionDetail.meta.postTokenBalances[1].owner;
    data.to = transactionDetail.meta.postTokenBalances[0].owner;
    data.amount = Number(transactionDetail.transaction.message.instructions[0].parsed.info.tokenAmount.amount) / LAMPORTS_PER_SOL;

    return data;
  }
}
