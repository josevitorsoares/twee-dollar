import { makeGetDollarUseCase } from "./src/domain/factories";

const getDollarUseCase = makeGetDollarUseCase();

getDollarUseCase.execute();
