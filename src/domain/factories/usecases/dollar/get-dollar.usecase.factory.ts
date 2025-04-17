import { GetDollarUseCase } from "src/application/usecases/dollar";
import type { IGetDollarUseCase } from "src/domain/usecases";
import {
  makeMongoDBRepository,
  makeTwitterRepository,
} from "../../repositories";
import { makeAxiosHttpClientService } from "../../services";

export const makeGetDollarUseCase = (): IGetDollarUseCase => {
  const httpClientService = makeAxiosHttpClientService();
  const tweeterRepository = makeTwitterRepository();
  const databaseRepository = makeMongoDBRepository();

  const getDollarUseCase = new GetDollarUseCase(
    httpClientService,
    tweeterRepository,
    databaseRepository
  );

  return getDollarUseCase;
};
