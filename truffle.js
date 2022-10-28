var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1", // Localhost (default: none)
            port: 9545, // Standard Ethereum port (default: none)
            network_id: "*", // Any network (default: none)
        },
        goerli: {
            provider: () => new HDWalletProvider('limb cake dismiss then curve congress similar prepare client around tribe fantasy', 'https://goerli.infura.io/v3/f84e7853e43747c39f173bd14bf64e99'),
            network_id: '5', // eslint-disable-line camelcase,
            gas: 4465030
          },
    },
    compilers: {
        solc: {
            version: "^0.5.15",
        },
    },
};
