import type { CoinEntity } from "../entity";

export type DatabaseFindOutput = CoinEntity;

export type DatabaseUpdateInput = CoinEntity;

export interface IDatabaseRepository {
  findById(id: string): Promise<DatabaseFindOutput | null>;

  update(dollar: DatabaseUpdateInput & { id: string }): Promise<void>;
}
