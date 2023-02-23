"use strict";
exports.__esModule = true;
exports.extract = void 0;
var index_types_1 = require("./index.types");
var convertSum_1 = require("./lib/utils/convertSum");
var types = ['mintTo', 'mintToChecked', 'transfer', 'transferChecked'];
/**
 * Extract data from transaction.
 * @param {TransactionDetail} transactionDetail - The transaction object.
 * @returns {TransactionData} - The extract data from transaction.
 */
function extract(transactionDetail) {
    var innerInstructions = transactionDetail.meta.innerInstructions[0] && transactionDetail.meta.innerInstructions[0].instructions;
    var postTokenBalances = transactionDetail.meta.postTokenBalances;
    var messageInstructions = transactionDetail.transaction.message.instructions;
    var isCorrectType = innerInstructions
        ? innerInstructions.find(function (instruction) { return types.includes(instruction.parsed.type); })
        : messageInstructions.find(function (instruction) { return types.includes(instruction.parsed.type); });
    if (!isCorrectType)
        return;
    var data = {
        from: null,
        to: null,
        amount: 0,
        currency: null,
        date: String(new Date),
        signature: null
    };
    data.date = String(new Date(transactionDetail.blockTime * 1000));
    data.signature = transactionDetail.transaction.signatures[0];
    if (isCorrectType.parsed.type === 'mintTo') {
        data.to = postTokenBalances[0].owner;
        var mintInstruction = innerInstructions.find(function (instruction) { return instruction.parsed.type === 'mintTo'; });
        data.currency = index_types_1.currency.usdc;
        data.amount = convertSum_1.convertSum(mintInstruction.parsed.info.amount, data.currency);
        return data;
    }
    if (isCorrectType.parsed.type === 'mintToChecked') {
        data.to = postTokenBalances[0].owner;
        data.currency = index_types_1.currency.usdc;
        data.amount = convertSum_1.convertSum(messageInstructions[0].parsed.info.tokenAmount.amount, data.currency);
        return data;
    }
    if (isCorrectType.parsed.type === 'transfer') {
        data.from = messageInstructions[0].parsed.info.source;
        data.to = messageInstructions[0].parsed.info.destination;
        data.currency = index_types_1.currency.sol;
        data.amount = convertSum_1.convertSum(messageInstructions[0].parsed.info.lamports, data.currency);
        return data;
    }
    if (isCorrectType.parsed.type === 'transferChecked') {
        data.from = postTokenBalances[1].owner;
        data.to = postTokenBalances[0].owner;
        data.currency = index_types_1.currency.usdc;
        data.amount = messageInstructions[0].parsed.info.tokenAmount.uiAmount;
        return data;
    }
}
exports.extract = extract;
;
exports["default"] = { extract: extract };
