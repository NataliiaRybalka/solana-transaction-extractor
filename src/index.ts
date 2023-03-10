import { ParsedInstruction, ParsedTransactionWithMeta } from '@solana/web3.js';
import { TransactionData, currency } from './lib/types/index.types';
import { convertSum } from './lib/utils/convertSum';

const types: Array<string> = ['mintTo', 'mintToChecked', 'transfer', 'transferChecked'];

/**
 * Extract data from transaction.
 * @param {TransactionDetail} transactionDetail - The transaction object.
 * @returns {TransactionData} - The extract data from transaction.
 */
export function extract(transactionDetail: ParsedTransactionWithMeta): TransactionData {
  const innerInstructions = 
    transactionDetail.meta.innerInstructions[0] && transactionDetail.meta.innerInstructions[0].instructions as ParsedInstruction[];
  const postTokenBalances = transactionDetail.meta.postTokenBalances;
  const messageInstructions = transactionDetail.transaction.message.instructions as ParsedInstruction[];

  const isCorrectType = innerInstructions
    ? innerInstructions.find(instruction => types.includes(instruction.parsed.type))
    : messageInstructions.find(instruction => types.includes(instruction.parsed.type));
  if (!isCorrectType) return;

  const data: TransactionData = {
    from: null,
    to: null,
    amount: 0,
    currency: null,
    date: String(new Date),
    signature: null,
  };

  data.date = String(new Date(transactionDetail.blockTime * 1000));
  data.signature = transactionDetail.transaction.signatures[0];

  if (isCorrectType.parsed.type === 'mintTo') {
    data.to = postTokenBalances[0].owner;
    const mintInstruction = innerInstructions.find(instruction => instruction.parsed.type === 'mintTo');
    data.currency = currency.usdc;
    data.amount = convertSum(mintInstruction.parsed.info.amount, data.currency);

    return data;
  }

  if (isCorrectType.parsed.type === 'mintToChecked') {
    data.to = postTokenBalances[0].owner;
    data.currency = currency.usdc;
    data.amount = convertSum(messageInstructions[0].parsed.info.tokenAmount.amount, data.currency);

    return data;
  }

  if (isCorrectType.parsed.type === 'transfer') {
    data.from = messageInstructions[0].parsed.info.source;
    data.to = messageInstructions[0].parsed.info.destination;
    data.currency = currency.sol;
    data.amount = convertSum(messageInstructions[0].parsed.info.lamports, data.currency);

    return data;
  }

  if (isCorrectType.parsed.type === 'transferChecked') {
    data.from = postTokenBalances[1].owner;
    data.to = postTokenBalances[0].owner;
    data.currency = currency.usdc;
    data.amount = messageInstructions[0].parsed.info.tokenAmount.uiAmount;

    return data;
  }
};

export default { extract };
