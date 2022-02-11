require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/dqutWoMLICcj3r55zLgX3kZ_v9mNGy0P",
      accounts: [
        "0216c2c4b65c62e2be1afbe28a1df889a57a34901d2bdcfd4abccaae304af381",
      ],
    },
  },
};
