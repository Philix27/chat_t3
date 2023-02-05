import mapboxgl from "mapbox-gl";

type AnalyticsDataType = {
  id: string;
  state: string;
  A: number;
  AA: number;
  AAC: number;
  ADC: number;
  ADP: number;
  APC: number;
  APGA: number;
  APM: number;
  APP: number;
  BP: number;
  LP: number;
  NNPP: number;
  NRM: number;
  PDP: number;
  PRP: number;
  SDP: number;
  YPP: number;
  ZLP: number;
};
type AnalyticsDataTypex = {
  id: string;
  state: string;
  partyVotes: PartyVotes;
  ballotPaper: BallotPaper;
};

type BallotPaper = {
  registeredVoters: number;
  accreditedVoters: number;
  issuedPapers: number;
  unusedPapers: number;
  spoiledPapers: number;
  rejectedPapers: number;
  validPapers: number;
  totalUsedPapers: number;
};

type PartyVotes = {
  A: number;
  AA: number;
  AAC: number;
  ADC: number;
  ADP: number;
  APC: number;
  APGA: number;
  APM: number;
  APP: number;
  BP: number;
  LP: number;
  NNPP: number;
  NRM: number;
  PDP: number;
  PRP: number;
  SDP: number;
  YPP: number;
  ZLP: number;
};

export default AnalyticsDataType;
