export enum source {
  transaction = 'transaction',
}

export enum type {
  create = 'create',
  createAccount = 'createAccount',
  getAccountDataSize = 'getAccountDataSize',
  initializeAccount3 = 'initializeAccount3',
  initializeImmutableOwner = 'initializeImmutableOwner',
  initializeMint2 = 'initializeMint2',
  mintTo = 'mintTo',
  mintToChecked = 'mintToChecked',
  transfer = 'transfer',
  transferChecked = 'transferChecked',
}

export enum program {
  splAssociatedTokenAccount = 'spl-associated-token-account',
  splToken = 'spl-token',
  system = 'system',
}

interface TokenAmount {
  amount: string,
  decimals: number,
  uiAmount: number,
  uiAmountString: string,
}

interface TokenBalance {
  accountIndex: number,
  mint: string,
  owner: string,
  programId: string,
  uiTokenAmount: TokenAmount,
}

interface Info {
  destination: string,
  mint: string,
  multisigAuthority: string,
  signers: Array<string>,
  source: string | source,
  tokenAmount?: TokenAmount,
  amount?: string,
  lamports?: string,
}

interface Parsed {
  info: Info,
  type: string | type,
}

interface Instruction {
  parsed: Parsed,
  program: string | program,
  programId: string,
}

interface InnerInstruction {
  index: number,
  instructions: Array<Instruction>,
}

interface Meta {
  computeUnitsConsumed: number,
  err: null | string,
  fee: number,
  innerInstructions: Array<InnerInstruction>,
  logMessages: Array<string>,
  postBalances: Array<number>,
  postTokenBalances: Array<TokenBalance>,
  preBalances: Array<number>,
  preTokenBalances: Array<TokenBalance>,
  rewards: Array<string>,
  status: Object,
}

interface AccountKey {
  pubkey: string,
  signer: boolean,
  source: string | source,
  writable: boolean,
}

interface Message {
  accountKeys: Array<AccountKey>,
  addressTableLookups: null | Array<string>,
  instructions: Array<Instruction>,
  recentBlockhash: string,
}

export interface Transaction {
  message: Message,
  signatures: Array<string>,
}

export interface TransactionDetail {
  blockTime: number,
  meta: Meta,
  slot: number,
  transaction: Transaction,
}

export interface TransactionData {
  from: string,
  to: string,
  amount: number,
  date: string,
  signature: string,
}
