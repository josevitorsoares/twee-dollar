import { MONGODB_URI } from "configs/environment/env";
import { MongoClient } from "mongodb";

const uri = MONGODB_URI;
const client = new MongoClient(uri);

export async function getDatabase() {
  await client
    .connect()
    .then(() =>
      console.log("✅ Conexão estabelecida com sucesso ao MongoDB Atlas!")
    )
    .catch((error) =>
      console.error("❌ Erro ao conectar no MongoDB Atlas:", error)
    );

  return client.db("twee-dollar-atlas-db");
}
