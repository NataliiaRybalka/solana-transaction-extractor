# Solana Transaction Extractor
Extract sender, recipient, sum, date and signature from solana transaction.

## Technologies
Project is created with:
* Node
* TypeScript
* @solana/web3.js

## Installation
```
npm i solana-transaction-extractor
```

## Using
```
import { extract } from 'solana-transaction-extractor';
const transactionData = extract(transactionDetails);
```