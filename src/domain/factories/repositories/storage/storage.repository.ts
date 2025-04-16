import type { IStorageRepository } from "src/domain/repositories";
import { StorageRepository } from "src/infrastructure";

export const makeStorageRepository = (): IStorageRepository => {
  const storageRepository = new StorageRepository();

  return storageRepository;
};
