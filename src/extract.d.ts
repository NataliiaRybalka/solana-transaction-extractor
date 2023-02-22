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
  source: string,
  tokenAmount: TokenAmount,
}

interface Parsed {
  info: Info,
  type: string | type,
}

interface Instruction {
  parsed: Parsed,
  program: program,
  programId: string,
}

interface InnerInstruction {
  index: number,
  instructions: Instruction,
}

interface Meta {
  computeUnitsConsumed: number,
  err: boolean | string,
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
  source: source,
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