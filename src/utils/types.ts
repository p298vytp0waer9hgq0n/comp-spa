export type Computer = {
  _id: string;
  active: boolean;
  type: string;
  name: string;
  location: string;
  recNumber: string;
  tags: string[];
  created: number;
  updated: number;
  audited: number;
};
