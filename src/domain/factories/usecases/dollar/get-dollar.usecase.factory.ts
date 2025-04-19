import { GetDollarUseCase } from "src/application/usecases/dollar";
import type { IGetDollarUseCase } from "src/domain/usecases";
import {
  makeDollarMongoDBRepository,
  makeTwitterRepository,
} from "../../repositories";
import { makeAxiosHttpClientService } from "../../services";

export const makeGetDollarUseCase = (): IGetDollarUseCase => {
  const httpClientService = makeAxiosHttpClientService();
  const tweeterRepository = makeTwitterRepository();
  const dollarRepository = makeDollarMongoDBRepository();

  const getDollarUseCase = new GetDollarUseCase(
    httpClientService,
    dollarRepository,
    tweeterRepository
  );

  return getDollarUseCase;
};
