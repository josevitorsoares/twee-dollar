import type { IDatabaseRepository } from "src/domain/repositories";
import { MongoDBRepository } from "src/infrastructure";

export const makeMongoDBRepository = (): IDatabaseRepository => {
  const mongoDbRepository = new MongoDBRepository();

  return mongoDbRepository;
};
