# Solana Transaction Extractor
Extract sender, recipient, sum, date and signature from solana transaction.

## Installation
```
npm i solana-transaction-extractor
```

## Using
```
import { extract } from 'solana-transaction-extractor';
const transactionData = extract(transactionDetails);
```