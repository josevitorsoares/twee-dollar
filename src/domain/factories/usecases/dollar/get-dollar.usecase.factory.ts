import { GetDollarUseCase } from "src/application/usecases/dollar";
import type { IGetDollarUseCase } from "src/domain/usecases";
import {
  makeStorageRepository,
  makeTwitterRepository,
} from "../../repositories";
import { makeAxiosHttpClientService } from "../../services";

export const makeGetDollarUseCase = (): IGetDollarUseCase => {
  const httpClientService = makeAxiosHttpClientService();
  const tweeterRepository = makeTwitterRepository();
  const storageRepository = makeStorageRepository();

  const getDollarUseCase = new GetDollarUseCase(
    httpClientService,
    tweeterRepository,
    storageRepository
  );

  return getDollarUseCase;
};
