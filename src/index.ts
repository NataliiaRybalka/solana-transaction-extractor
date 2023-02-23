import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { TransactionDetail, TransactionData } from './index.types';

const types: Array<string> = ['mintTo', 'mintToChecked', 'transfer', 'transferChecked'];

/**
 * Extract data from transaction.
 * @param {TransactionDetail} transactionDetail - The transaction object.
 * @returns {TransactionData} - The extract data from transaction.
 */
export function extract(transactionDetail: TransactionDetail): TransactionData {
  const innerInstructions = transactionDetail.meta.innerInstructions[0] && transactionDetail.meta.innerInstructions[0].instructions;
  const postTokenBalances = transactionDetail.meta.postTokenBalances;
  const messageInstructions = transactionDetail.transaction.message.instructions;

  const isCorrectType = innerInstructions
    ? innerInstructions.find(instruction => types.includes(instruction.parsed.type))
    : messageInstructions.find(instruction => types.includes(instruction.parsed.type));
  if (!isCorrectType) return;

  const data: TransactionData = {
    from: null,
    to: null,
    amount: '0',
    date: String(new Date),
    signature: null,
  };

  data.date = String(new Date(transactionDetail.blockTime * 1000));
  data.signature = transactionDetail.transaction.signatures[0];

  if (isCorrectType.parsed.type === 'mintTo') {
    data.to = postTokenBalances[0].owner;
    const mintInstruction = innerInstructions.find(instruction => instruction.parsed.type === 'mintTo');
    const amount = String(Number(mintInstruction.parsed.info.amount) / LAMPORTS_PER_SOL);
    data.amount = parseFloat(amount).toFixed(Number(amount[amount.length - 1]));

    return data;
  }

  if (isCorrectType.parsed.type === 'mintToChecked') {
    data.to = postTokenBalances[0].owner;
    const amount = String(Number(messageInstructions[0].parsed.info.tokenAmount.amount) / LAMPORTS_PER_SOL);
    data.amount = parseFloat(amount).toFixed(Number(amount[amount.length - 1]));

    return data;
  }

  if (isCorrectType.parsed.type === 'transfer') {
    data.from = messageInstructions[0].parsed.info.source;
    data.to = messageInstructions[0].parsed.info.destination;
    const amount = String(Number(messageInstructions[0].parsed.info.lamports) / LAMPORTS_PER_SOL);
    data.amount = parseFloat(amount).toFixed(Number(amount[amount.length - 1]));

    return data;
  }

  if (isCorrectType.parsed.type === 'transferChecked') {
    data.from = postTokenBalances[1].owner;
    data.to = postTokenBalances[0].owner;
    const amount = String(Number(messageInstructions[0].parsed.info.tokenAmount.amount) / LAMPORTS_PER_SOL);
    data.amount = parseFloat(amount).toFixed(Number(amount[amount.length - 1]));

    return data;
  }
};

export default { extract };
