import type { ITwitterRepository } from "src/domain/repositories";
import { TweeterRepository } from "src/infrastructure";

export const makeTwitterRepository = (): ITwitterRepository => {
  const twitterRepository = new TweeterRepository();

  return twitterRepository;
};
