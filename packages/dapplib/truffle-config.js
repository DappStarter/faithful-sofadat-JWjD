require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind hospital grid arctic blue trim'; 
let testAccounts = [
"0x0467306d91bcc2d68cceadd3778dc74f6de77f27a8ac6dc3d65a94694fe9e4d0",
"0xee0a3bf6c8207fe7d0f220c6466d6d0c96e8463a7a7a13dc0516296ae5ab53c9",
"0x927951e13126cc64af777c7f2d19bd8bfe89704e66b8b7475d58e454786ed2e7",
"0x99773cdfe3a7bba7b80316bce4d690dea5f8657e5c93496738ce47c692f4832e",
"0x9c4da8abf0b7b1ab562280a63ddedf42ced40c87764d7e896bfe941c7929329c",
"0xd579fcc137a8393967fc1cd530099ae41700e19494574cffb5d3cdfb88034c9e",
"0xe71cb8b88d34fc8b544195c852e279193514ad616ee053f49fb02cef6c8ca8bd",
"0x3376ca55dae36969d5c14dfaca810fc2e2230379bdf14a12b3fb47fc0087f4f0",
"0x32c7d8d3348d7d248fa53d16f5e34519cbaec20e88bd4e563a7c5321c09e45ac",
"0x0a79e61940abffa8f61cb108e73e1076dbc4f5d41fd8dd7fab199653c461fb4e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

