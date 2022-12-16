import { proxyActivities } from "@temporalio/workflow";
import type * as activitiesTypes from "./activity";

const activities = proxyActivities<typeof activitiesTypes>({
  startToCloseTimeout: "50m",
  retry: {
    maximumAttempts: 50,
  },
});

export async function expressJSWorkflow(name: string): Promise<void> {
  await activities.startExpress(name);
}