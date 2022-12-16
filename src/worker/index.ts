import dotenv from "dotenv";
import { Worker, NativeConnection } from "@temporalio/worker";
import * as activities from "./activity";

async function run() {
  const worker = await Worker.create({
    connection: await NativeConnection.connect({
      address: process.env.TEMPORAL_CUSTER_ADDRESS,
    }),
    workflowsPath: require.resolve("./workflow"),
    activities,
    taskQueue: process.env.TEMPORAL_TASK_QUEUE ?? "default",
    namespace: process.env.TEMPORAL_NAMESPACE,
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
