import type { ScheduleOptions, ScheduledTask } from "node-cron";
import { API_PORT, CRON_EXPRESSION } from "./configs/environment/env";
import { app } from "./src/app";
import { makeGetDollarUseCase } from "./src/domain/factories/usecases";
import type { ICronService } from "./src/domain/services/cron";
import { NodeCronService } from "./src/infrastructure/services";

const optionsForCronJobs: ScheduleOptions = {
  scheduled: false,
  timezone: "America/Sao_Paulo",
  name: "Run Cron Jobs",
};

const runCronJobs = (
  cronService: ICronService<ScheduledTask, ScheduleOptions>
): void => {
  const getDollarUseCase = makeGetDollarUseCase();

  const getDollarPriceJob = cronService.createSchedule(
    CRON_EXPRESSION,
    async () => {
      await getDollarUseCase.execute();
    },
    optionsForCronJobs
  );

  cronService.addNewJob(getDollarPriceJob);

  cronService.start();
};

app
  .listen({
    port: API_PORT,
  })
  .then(() => {
    console.info("#####################################");
    console.info("#        🚀 Server listening        #");
    console.info("#####################################");

    runCronJobs(new NodeCronService());
  });
