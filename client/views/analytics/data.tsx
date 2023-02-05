type StateInfo = {
  name: string;
  apc: number;
  pdp: number;
  lp: number;
  others: number;
};

const dummyData: StateInfo[] = [
  {
    name: "ABIA",
    apc: 4000,
    pdp: 2400,
    lp: 2400,
    others: 3400,
  },
  {
    name: "ADAMAWA",
    apc: 3000,
    pdp: 1398,
    lp: 2210,
    others: 3400,
  },
  {
    name: "EBONYI",
    apc: 2000,
    pdp: 9800,
    lp: 2290,
    others: 3400,
  },
  {
    name: "EDO",
    apc: 2780,
    pdp: 3908,
    lp: 2000,
    others: 7000,
  },
  {
    name: "DELTA",
    apc: 1890,
    pdp: 4800,
    lp: 2181,
    others: 3400,
  },
  {
    name: "ENUGU",
    apc: 2390,
    pdp: 3800,
    lp: 2500,
    others: 3980,
  },
  {
    name: "IMO",
    apc: 3490,
    pdp: 4300,
    lp: 2100,
    others: 1400,
  },
];

export default dummyData;
