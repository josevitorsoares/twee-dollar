import { API_PORT } from "./configs/environment/env";
import { app } from "./src/app";

app
  .listen({
    port: API_PORT,
  })
  .then(() => {
    console.info("#####################################");
    console.info("#        🚀 Server listening        #");
    console.info("#####################################");
  });
