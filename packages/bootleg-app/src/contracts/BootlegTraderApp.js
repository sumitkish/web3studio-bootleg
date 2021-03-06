export default () => {
  let networks = {
    // MainNet
    '1': {
      address: '0xF59763dD10B070609d925D9bC508Ece2F0f7299f',
      transactionHash:
        '0x533773971e912cb655b2f9d394526624315549b0c560679954482fc03ea4ed72'
    },
    // Rinkeby
    '4': {
      address: '0x9e7bE1920Ba74233676a79dee07d7615d0AC3B11',
      transactionHash:
        '0x16237c1942a99819ba39af3d87b87ee08c45ae8d27a0c28beeccd59b87cc7d44'
    }
  };

  if (process.env.NODE_ENV !== 'production') {
    const {
      networks: devNetworks
    } = require('../build/contracts/BootlegTraderApp');

    networks = {
      ...networks,
      ...devNetworks
    };
  }

  return {
    networks,
    contractName: 'BootlegTraderApp',
    abi: [
      {
        constant: true,
        inputs: [],
        name: 'bootlegToken',
        outputs: [
          {
            name: '',
            type: 'address'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0x0de8f039'
      },
      {
        constant: true,
        inputs: [],
        name: 'tokenPrice',
        outputs: [
          {
            name: '',
            type: 'uint256'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0x7ff9b596'
      },
      {
        constant: true,
        inputs: [],
        name: 'bootlegTokenId',
        outputs: [
          {
            name: '',
            type: 'uint256'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0xbcccfadd'
      },
      {
        inputs: [
          {
            name: 'deployedAddress',
            type: 'address'
          },
          {
            name: 'tokenId',
            type: 'uint256'
          }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
        signature: 'constructor'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: 'newOwner',
            type: 'address'
          },
          {
            indexed: false,
            name: 'weiAmount',
            type: 'uint256'
          }
        ],
        name: 'Purchased',
        type: 'event',
        signature:
          '0xa512fb2532ca8587f236380171326ebb69670e86a2ba0c4412a3fcca4c3ada9b'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: 'changer',
            type: 'address'
          },
          {
            indexed: false,
            name: 'oldPriceInWei',
            type: 'uint256'
          },
          {
            indexed: false,
            name: 'newPriceInWei',
            type: 'uint256'
          }
        ],
        name: 'PriceChanged',
        type: 'event',
        signature:
          '0x4d624906ce6fd4e4b8b649463516ff505029a1903a8cc34bd82b4ca0f9a479de'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: 'withdrawer',
            type: 'address'
          }
        ],
        name: 'PaymentWithdrawn',
        type: 'event',
        signature:
          '0x832e43df4de2c3bcddde0796ab3950a40343a9a1f5f39d6b25c0d670877f4e22'
      },
      {
        constant: false,
        inputs: [],
        name: 'purchase',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
        signature: '0x64edfbf0'
      },
      {
        constant: false,
        inputs: [
          {
            name: 'newPrice',
            type: 'uint256'
          }
        ],
        name: 'setTokenPrice',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
        signature: '0x6a61e5fc'
      },
      {
        constant: true,
        inputs: [],
        name: 'getOwner',
        outputs: [
          {
            name: '',
            type: 'address'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0x893d20e8'
      },
      {
        constant: true,
        inputs: [],
        name: 'getBalance',
        outputs: [
          {
            name: '',
            type: 'uint256'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0x12065fe0'
      },
      {
        constant: false,
        inputs: [],
        name: 'withdraw',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
        signature: '0x3ccfd60b'
      },
      {
        constant: true,
        inputs: [],
        name: 'getTokenURI',
        outputs: [
          {
            name: '',
            type: 'string'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0xd4a19116'
      },
      {
        constant: true,
        inputs: [
          {
            name: 'possibleFranchisor',
            type: 'address'
          }
        ],
        name: 'isTokenFranchisor',
        outputs: [
          {
            name: '',
            type: 'bool'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0x8a421b74'
      }
    ]
  };
};
