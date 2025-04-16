import type { CoinEntity } from "../entity";

type ReadStoredDataOutput = {
  dollar: CoinEntity;
};

export interface IStorageRepository {
  readStoredData(): ReadStoredDataOutput;

  writeStoredData(data: { dollar: CoinEntity }): void;
}
