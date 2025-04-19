import { closeDatabase } from "src/infrastructure/database";
import { makeGetDollarUseCase } from "./src/domain/factories";

const getDollarUseCase = makeGetDollarUseCase();

getDollarUseCase.execute().finally(async () => await closeDatabase());
