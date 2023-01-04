require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remember social hockey arctic off gather'; 
let testAccounts = [
"0x74e912710faf11154cda596faa34a164841dfc599a5de6548c77c1c5935568e9",
"0x8336844796046060da589b260da0821a8d8ee785885b19dbdf58df3466764438",
"0x0cb0fb8d027f0aefd0a9ba53eec1521552c07c2bd8db2d5cf6463368a7d482a6",
"0xf95c66fbf225320468e7951dcc218da0d20c926a3619b3eeefc78fdc5ea44a32",
"0x409053140da8e266b949132b63d7e08e561d22840612a2d1773a2bb07925adc2",
"0xfef6fabea5211372896364c4d6155baf1911575aa79eb281796ed685b1935847",
"0x300a3a4c74767236d4add7cb203ad75b6c5e00901ba09f258a67e038cc4b0eba",
"0xf0553ddc5854c9c213a88e88ed4a996df2fa3aed86d6afc4822990a30a3acdd9",
"0xb51b63da77e229ecff56cd580eaea05254351c60d22abcf47a6e146577a67950",
"0x13e75dfbc63102cb1aecda8c4da7d5c869f80bcc8f612aa0a4c952ecf0e82552"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


