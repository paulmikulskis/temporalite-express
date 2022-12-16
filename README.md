# temporalite-express
An ExpressJS application running via a Temporal Workflow.

This repo is meant as a boilerplate for starting a Teporal project or learning about the framework.

## Boot the demo
make sure you have Docker running and type `make up`.

> Open a browser or send a request to `http://localhost:8080` to see the Express app running.

> Open a browser tab and navigate to `http://localhost:8233` to see Temporal dashboard with your workflow


## Boot services individually
1. Start the TemporalIO cluster: `make temporalite` 
2. Start the TemporalIO Workers `make workers`
3. Kick off a script called _client.ts_ which connects to the local Temporal cluster and starts the ExpressJS Workflow: `make client`

In a Temporal project, you might have a number of worker processes/images, each with their own imported sets of Activities and Workflows.  For the majority of projects starting out though, one worker process is probably enough like we have here.

## Building Out
Start by adding more desired functionality you might want into `src/worker/activities.ts`, and proxy importing them into `/src/worker/workflow.ts` to create more possible Workflows your client can kick off.  
> "proxy importing" is simply using `proxyActivities()` from `@temporalio/workflow"` to refer to your Activity implementation via reference, versus importing the raw code into the Worker which would likely crash in their custom V8 environment.
>


