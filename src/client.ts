import dotenv from "dotenv";
import { Connection, WorkflowClient } from "@temporalio/client";
import { expressJSWorkflow } from "./worker/workflow";

dotenv.config();

(async function workflowExecution() {
  const connection = await Connection.connect({
    address: process.env.TEMPORAL_CUSTER_ADDRESS,
  });

  const client = new WorkflowClient({
    connection,
    namespace: process.env.TEMPORAL_NAMESPACE,
  });

  await client.start(expressJSWorkflow, {
    args: ["FlipsideCrypto!"],
    taskQueue: process.env.TEMPORAL_TASK_QUEUE ?? "default",
    workflowId: "lunch-and-learn", // Save this to later terminate or cancel this schedule
    //cronSchedule: "* * * * *", // start every minute
  });
})();
