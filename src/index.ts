import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { TransactionDetail, TransactionData } from './index.types';

const types: Array<string> = ['mintTo', 'mintToChecked', 'transfer', 'transferChecked'];

/**
 * Extract data from transaction.
 * @param {TransactionDetail} transactionDetail - The transaction object.
 * @returns {TransactionData} - The extract data from transaction.
 */
export function extract(transactionDetail: TransactionDetail): TransactionData {
  const transactionInstructions = transactionDetail.transaction.message.instructions;
  const isTransfer = transactionInstructions.find(instruction => types.includes(instruction.parsed.type));
  if (!isTransfer) return;

  const data: TransactionData = {
    from: null,
    to: null,
    amount: 0,
    date: String(new Date),
    signature: null,
  };

  data.date = String(new Date(transactionDetail.blockTime * 1000));
  data.signature = transactionDetail.transaction.signatures[0];

  if (transactionDetail.transaction.message.instructions[0].parsed.type === 'mintTo') {
    data.to = transactionDetail.meta.postTokenBalances[0].owner;
    const mintInstruction = transactionDetail.meta.innerInstructions[0].instructions.find(instruction => instruction.parsed.type === 'mintTo');
    data.amount = Number(mintInstruction.parsed.info.amount) / LAMPORTS_PER_SOL;
    return data;
  }

  if (transactionDetail.transaction.message.instructions[0].parsed.type === 'mintToChecked') {
    data.to = transactionDetail.meta.postTokenBalances[0].owner;
    data.amount = Number(transactionDetail.transaction.message.instructions[0].parsed.info.amount) / LAMPORTS_PER_SOL;
    return data;
  }

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
};

export default { extract };
