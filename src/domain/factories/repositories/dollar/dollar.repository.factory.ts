import type { IDollarRepository } from "src/domain/repositories";
import { DollarMongoDBRepository } from "src/infrastructure";

export const makeDollarMongoDBRepository = (): IDollarRepository => {
  const dollarMongoDbRepository = new DollarMongoDBRepository();

  return dollarMongoDbRepository;
};
