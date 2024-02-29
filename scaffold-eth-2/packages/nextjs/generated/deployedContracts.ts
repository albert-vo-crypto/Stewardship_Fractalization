const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        StewardFractalization: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_haveCanProvide",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_needGap",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_pledge",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_deadline",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_author",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_isCompleted",
                  type: "bool",
                },
              ],
              name: "addSteward",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSteward",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "title",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "needGap",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "haveCanProvide",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "pledge",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "deadline",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "author",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "isCompleted",
                      type: "bool",
                    },
                  ],
                  internalType: "struct StewardFractalization.StewardProfile[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "stewardList",
              outputs: [
                {
                  internalType: "string",
                  name: "title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "needGap",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "haveCanProvide",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "pledge",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "deadline",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "isCompleted",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_haveCanProvide",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_needGap",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_pledge",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_deadline",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_author",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_isCompleted",
                  type: "bool",
                },
              ],
              name: "updateSteward",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        StewardshipProfile: {
          address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_location",
                  type: "string",
                },
                {
                  internalType: "string[]",
                  name: "_causes",
                  type: "string[]",
                },
              ],
              name: "createProfile",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "getProfile",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "location",
                      type: "string",
                    },
                    {
                      internalType: "string[]",
                      name: "causes",
                      type: "string[]",
                    },
                    {
                      internalType: "uint256",
                      name: "stewardScore",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct StewardshipProfile.Profile",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_points",
                  type: "uint256",
                },
              ],
              name: "giveStewardPoints",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "profiles",
              outputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "stewardScore",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_location",
                  type: "string",
                },
                {
                  internalType: "string[]",
                  name: "_causes",
                  type: "string[]",
                },
              ],
              name: "updateProfile",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
