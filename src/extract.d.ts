// export enum blocks {
//   earliest= 'earliest',
//   latest= 'latest',
//   pending= 'pending',
// }

interface UiTokenAmount {
  amount: string,
  decimals: number,
  uiAmount: number,
  uiAmountString: string
}

interface TokenBalances {
  accountIndex: number,
  mint: string,
  owner: string,
  programId: string,
  uiTokenAmount: UiTokenAmount
}

interface Meta {
  computeUnitsConsumed: number,
  err: boolean,
  fee: number,
  innerInstructions: Array<string>,//////////////////////
  logMessages: Array<string>,
  postBalances: Array<number>,
  postTokenBalances: Array<TokenBalances>,
  preBalances: Array<number>,
  preTokenBalances: Array<TokenBalances>,
  rewards: Array<string>,/////////////////
  status: Object
}

export interface Transaction {
  blockTime: number,
  meta: Meta,
  "slot": 197238273,
  "transaction": {
      "message": {
          "accountKeys": [
              {
                  "pubkey": "8D3Dfbs2e7WFBWKvrsEJzZVtTockJLUwBxERi4gorjnN",
                  "signer": true,
                  "source": "transaction",
                  "writable": true
              },
              {
                  "pubkey": "7UstFtoqvzpMGaRrEKSTRuCGRZm6vRpSYp9SpRgDgMJZ",
                  "signer": false,
                  "source": "transaction",
                  "writable": true
              },
              {
                  "pubkey": "CiNZ1qA5StkEn8oeABrr5ip43GRS3PBA8a3C9eMSs858",
                  "signer": false,
                  "source": "transaction",
                  "writable": true
              },
              {
                  "pubkey": "9NWvPxNVqsc7bvk5LRKKjVb3V9xQffwqsXtg3yaJTAkx",
                  "signer": false,
                  "source": "transaction",
                  "writable": false
              },
              {
                  "pubkey": "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
                  "signer": false,
                  "source": "transaction",
                  "writable": false
              },
              {
                  "pubkey": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                  "signer": false,
                  "source": "transaction",
                  "writable": false
              }
          ],
          "addressTableLookups": null,
          "instructions": [
              {
                  "parsed": {
                      "info": {
                          "destination": "7UstFtoqvzpMGaRrEKSTRuCGRZm6vRpSYp9SpRgDgMJZ",
                          "mint": "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
                          "multisigAuthority": "8D3Dfbs2e7WFBWKvrsEJzZVtTockJLUwBxERi4gorjnN",
                          "signers": [
                              "9NWvPxNVqsc7bvk5LRKKjVb3V9xQffwqsXtg3yaJTAkx"
                          ],
                          "source": "CiNZ1qA5StkEn8oeABrr5ip43GRS3PBA8a3C9eMSs858",
                          "tokenAmount": {
                              "amount": "10",
                              "decimals": 6,
                              "uiAmount": 0.00001,
                              "uiAmountString": "0.00001"
                          }
                      },
                      "type": "transferChecked"
                  },
                  "program": "spl-token",
                  "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
              }
          ],
          "recentBlockhash": "GavEACWoAoxN5HU5kCqPNc8bWMUeWsvQdVvcAemvo4XT"
      },
      "signatures": [
          "2QpFBTbWZ2M1hxq3aFQKCUtnd9WoEdz14Xp6ij6zeBK36hrkKZ7nC3L9EHLdTaQthwgoPRDDSu2LtnqPczZzPJDg"
      ]
  }
}