export const baseHabitTrackerAbi = [
  {
    type: "function",
    name: "completeHabit",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: []
  },
  {
    type: "function",
    name: "habitCount",
    stateMutability: "view",
    inputs: [{ name: "", type: "address" }],
    outputs: [{ type: "uint256" }]
  },
  {
    type: "event",
    name: "HabitDone",
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { indexed: false, name: "total", type: "uint256" }
    ],
    anonymous: false
  }
] as const;
