import { ObjectId } from "mongodb";
import type {
  DollarInput,
  DollarOutput,
  IDollarRepository,
} from "src/domain/repositories";
import { getDatabase } from "src/infrastructure/database";

export class DollarMongoDBRepository implements IDollarRepository {
  async findById(id: string): Promise<DollarOutput | null> {
    const database = await getDatabase();

    const document = await database
      .collection("dollar")
      .findOne<DollarOutput>({ _id: new ObjectId(id) });

    if (!document) return null;

    return document;
  }
  async update(dollar: DollarInput & { id: string }): Promise<void> {
    const database = await getDatabase();

    await database.collection("dollar").updateOne(
      { _id: new ObjectId(dollar.id) },
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
