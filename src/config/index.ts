export interface iConfigData {
  lowerVariable: number;
  higherVariable: number;
  risk: number;
}

export const config: {
  [key: string]: iConfigData;
} = {
  "High-Yield Savings Account": {
    lowerVariable: 0.5,
    higherVariable: 1,
    risk: 5,
  },
  "Promotional Savings Account": {
    lowerVariable: 0.5,
    higherVariable: 5.25,
    risk: 10,
  },
  "Cash ISA (Instant Access)": {
    lowerVariable: 2,
    higherVariable: 3,
    risk: 10,
  },
  "Cash ISA (Fixed-Rate)": {
    lowerVariable: 4,
    higherVariable: 5.1,
    risk: 15,
  },
  "Stocks and Shares ISA": {
    lowerVariable: 5,
    higherVariable: 7,
    risk: 40,
  },
  "Lifetime ISA": {
    lowerVariable: 3,
    higherVariable: 4.4,
    risk: 20,
  },
  "Innovative Finance ISA": {
    lowerVariable: 5,
    higherVariable: 7,
    risk: 50,
  },
  "Manual Investment in Fortune 500 Companies": {
    lowerVariable: 7,
    higherVariable: 9,
    risk: 50,
  },
  "Government Bonds (Gilts)": {
    lowerVariable: 1,
    higherVariable: 2,
    risk: 10,
  },
  "Corporate Bonds": {
    lowerVariable: 3,
    higherVariable: 5,
    risk: 30,
  },
  "Real Estate Investment Trusts (REITs)": {
    lowerVariable: 5,
    higherVariable: 10,
    risk: 50,
  },
  "Peer-to-Peer Lending": {
    lowerVariable: 4,
    higherVariable: 7,
    risk: 60,
  },
  "Pension Funds": {
    lowerVariable: 5,
    higherVariable: 7,
    risk: 30,
  },
  // Cryptocurrency: {
  //   lowerVariable: 1,
  //   higherVariable: 1000,
  //   risk: 90,
  // },
};
