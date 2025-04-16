export interface ICronService<T, U extends object = object> {
  createSchedule(
    expression: string,
    fn: () => void | Promise<void>,
    options?: U
  ): T;

  start(): void;

  addNewJob(job: T): void;
}
