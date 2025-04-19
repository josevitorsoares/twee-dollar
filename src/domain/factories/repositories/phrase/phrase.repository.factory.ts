import type { IPhraseRepository } from "src/domain/repositories";
import { PhraseMongoDBRepository } from "src/infrastructure/repositories";

export const makePhraseMongoDBRepository = (): IPhraseRepository => {
  const phraseMongoDBRepository = new PhraseMongoDBRepository();

  return phraseMongoDBRepository;
};
