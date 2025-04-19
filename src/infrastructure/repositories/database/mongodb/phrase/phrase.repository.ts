import { ObjectId } from "mongodb";
import type { IPhraseRepository, PhraseOutput } from "src/domain";
import { getDatabase } from "src/infrastructure/database";

export class PhraseMongoDBRepository implements IPhraseRepository {
  async findById(id: string): Promise<PhraseOutput | null> {
    const database = await getDatabase();

    const document = await database
      .collection("phrases")
      .findOne<PhraseOutput>({ _id: new ObjectId(id) });

    if (!document) return null;

    return document;
  }
}
