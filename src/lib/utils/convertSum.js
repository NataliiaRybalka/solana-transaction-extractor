"use strict";
exports.__esModule = true;
exports.convertSum = void 0;
var web3_js_1 = require("@solana/web3.js");
var index_types_1 = require("../../index.types");
var LAMPORTS_PER_USDC = 1000000;
var convertSum = function (amount, cur) {
    if (cur === index_types_1.currency.sol)
        return Number(amount) / web3_js_1.LAMPORTS_PER_SOL;
    if (cur === index_types_1.currency.usdc)
        return Number(amount) / LAMPORTS_PER_USDC;
};
exports.convertSum = convertSum;
