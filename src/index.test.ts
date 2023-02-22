const { extract } = require('./index');

const transactionDetails = {
  "blockTime": 1676983386,
  "meta": {
    "computeUnitsConsumed": 6353,
    "err": null,
    "fee": 5000,
    "innerInstructions": [],
    "logMessages": [
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [1]",
      "Program log: Instruction: TransferChecked",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 6353 of 200000 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success"
    ],
    "postBalances": [
      2093474840,
      2039280,
      2039280,
      0,
      41003456600,
      934087680
    ],
    "postTokenBalances": [
      {
        "accountIndex": 1,
        "mint": "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
        "owner": "89D7KBRL4xnfotkdVojgCmWNNp6wpqBqaufSHwUNuoMu",
        "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "uiTokenAmount": {
          "amount": "1286500510",
          "decimals": 6,
          "uiAmount": 1286.50051,
          "uiAmountString": "1286.50051"
        }
      },
      {
        "accountIndex": 2,
        "mint": "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
        "owner": "8D3Dfbs2e7WFBWKvrsEJzZVtTockJLUwBxERi4gorjnN",
        "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "uiTokenAmount": {
          "amount": "2761249490",
          "decimals": 6,
          "uiAmount": 2761.24949,
          "uiAmountString": "2761.24949"
        }
      }
    ],
    "preBalances": [
      2093479840,
      2039280,
      2039280,
      0,
      41003456600,
      934087680
    ],
    "preTokenBalances": [
      {
        "accountIndex": 1,
        "mint": "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
        "owner": "89D7KBRL4xnfotkdVojgCmWNNp6wpqBqaufSHwUNuoMu",
        "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "uiTokenAmount": {
          "amount": "1286500500",
          "decimals": 6,
          "uiAmount": 1286.5005,
          "uiAmountString": "1286.5005"
        }
      },
      {
        "accountIndex": 2,
        "mint": "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
        "owner": "8D3Dfbs2e7WFBWKvrsEJzZVtTockJLUwBxERi4gorjnN",
        "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "uiTokenAmount": {
          "amount": "2761249500",
          "decimals": 6,
          "uiAmount": 2761.2495,
          "uiAmountString": "2761.2495"
        }
      }
    ],
    "rewards": [],
    "status": {
      "Ok": null
    }
  },
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
};

const transactionDataExample = {
  from: '8D3Dfbs2e7WFBWKvrsEJzZVtTockJLUwBxERi4gorjnN',
  to: '89D7KBRL4xnfotkdVojgCmWNNp6wpqBqaufSHwUNuoMu',
  amount: 0.00000001,
  date: String(new Date(1676983386 * 1000)),
  signature: '2QpFBTbWZ2M1hxq3aFQKCUtnd9WoEdz14Xp6ij6zeBK36hrkKZ7nC3L9EHLdTaQthwgoPRDDSu2LtnqPczZzPJDg',
};

describe('extract', () => {
  test('extract data from transaction details', async () => {
    const transactionData = extract(transactionDetails);
    expect(transactionData.from).toBe(transactionDataExample.from);
    expect(transactionData.to).toBe(transactionDataExample.to);
    expect(transactionData.amount).toBe(transactionDataExample.amount);
    expect(transactionData.date).toBe(transactionDataExample.date);
    expect(transactionData.signature).toBe(transactionDataExample.signature);
  });
});
