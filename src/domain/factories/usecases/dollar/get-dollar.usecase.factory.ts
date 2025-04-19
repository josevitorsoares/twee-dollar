import { GetDollarUseCase } from "src/application/usecases/dollar";
import type { IGetDollarUseCase } from "src/domain/usecases";
import {
  makeDollarMongoDBRepository,
  makePhraseMongoDBRepository,
  makeTwitterRepository,
} from "../../repositories";
import { makeAxiosHttpClientService } from "../../services";

export const makeGetDollarUseCase = (): IGetDollarUseCase => {
  const httpClientService = makeAxiosHttpClientService();
  const tweeterRepository = makeTwitterRepository();
  const dollarRepository = makeDollarMongoDBRepository();
  const phraseRepository = makePhraseMongoDBRepository();

  const getDollarUseCase = new GetDollarUseCase(
    httpClientService,
    dollarRepository,
    tweeterRepository,
    phraseRepository
  );

  return getDollarUseCase;
};
