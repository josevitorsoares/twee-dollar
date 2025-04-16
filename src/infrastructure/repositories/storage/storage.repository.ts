import fs from "node:fs";
import { resolve } from "node:path";
import type { CoinEntity, IStorageRepository } from "src/domain";

export class StorageRepository implements IStorageRepository {
  private getDataFilePath(): string {
    return resolve(__dirname, "data.json");
  }

  readStoredData(): { dollar: CoinEntity } {
    const rawData = fs.readFileSync(this.getDataFilePath(), "utf-8");

    return JSON.parse(rawData) as { dollar: CoinEntity };
  }
  writeStoredData(data: { dollar: CoinEntity }): void {
    fs.writeFileSync(
      this.getDataFilePath(),
      JSON.stringify(data, null, 2),
      "utf-8"
    );
  }
}
