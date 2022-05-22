export type JoinTagTokenType = 'voluntary' | 'remote';

export type JoinType = {
  publish: boolean;
  title: string;
  description: string;
  tags: JoinTagTokenType[];
  location: string;
  pay: string;
  contact: string;
  aboutYou: string[];
  content: string;
};

export type JoinDataType = Omit<JoinType, 'publish'>;
