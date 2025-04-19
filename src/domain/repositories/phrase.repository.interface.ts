export type PhraseOutput = {
  title: string;
  openings: {
    up: string[];
    down: string[];
  };
  dataBlocks: string[];
  variationBlocks: {
    up: string[];
    down: string[];
  };
  closings: string[];
};

export interface IPhraseRepository {
  findById(id: string): Promise<PhraseOutput | null>;
}
