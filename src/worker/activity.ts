import express from "express";
const app = express()

export async function startExpress(name: string) {
  app.get('/', (req, res) => {
    res.send(`Hello ${name}!`)
  })
  return app.listen(8080, () => {
    console.log("ExpressJS server has been started")
  })
}
