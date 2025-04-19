import type { CoinEntity } from "../entity";

export type DollarOutput = CoinEntity;

export type DollarInput = CoinEntity;

export interface IDollarRepository {
  findById(id: string): Promise<DollarOutput | null>;

  update(dollar: DollarInput & { id: string }): Promise<void>;
}
