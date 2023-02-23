"use strict";
exports.__esModule = true;
exports.program = exports.type = exports.source = void 0;
var source;
(function (source) {
    source["transaction"] = "transaction";
})(source = exports.source || (exports.source = {}));
var type;
(function (type) {
    type["create"] = "create";
    type["createAccount"] = "createAccount";
    type["getAccountDataSize"] = "getAccountDataSize";
    type["initializeAccount3"] = "initializeAccount3";
    type["initializeImmutableOwner"] = "initializeImmutableOwner";
    type["initializeMint2"] = "initializeMint2";
    type["mintTo"] = "mintTo";
    type["mintToChecked"] = "mintToChecked";
    type["transfer"] = "transfer";
    type["transferChecked"] = "transferChecked";
})(type = exports.type || (exports.type = {}));
var program;
(function (program) {
    program["splAssociatedTokenAccount"] = "spl-associated-token-account";
    program["splToken"] = "spl-token";
    program["system"] = "system";
})(program = exports.program || (exports.program = {}));
