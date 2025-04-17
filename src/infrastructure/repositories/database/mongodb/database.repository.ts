import { ObjectId } from "mongodb";
import type {
  DatabaseFindOutput,
  DatabaseUpdateInput,
  IDatabaseRepository,
} from "src/domain";
import { getDatabase } from "src/infrastructure/database";

export class MongoDBRepository implements IDatabaseRepository {
  async findById(id: string): Promise<DatabaseFindOutput | null> {
    const database = await getDatabase();

    const document = await database
      .collection("dollar")
      .findOne<DatabaseFindOutput>({ _id: new ObjectId(id) });

    if (!document) return null;

    return document;
  }
  async update(dollar: DatabaseUpdateInput & { id: string }): Promise<void> {
    const database = await getDatabase();

    await database.collection("dollar").updateOne(
      { id: dollar.id },
      {
        $set: {
          value: dollar.value,
          variation: dollar.variation,
          percentageChange: dollar.percentageChange,
          time: dollar.time,
        },
      }
    );
  }
}
