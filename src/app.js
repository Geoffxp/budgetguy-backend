import express from "express"
import cors from "cors"
import morgan from "morgan"
import compression from "compression"

import memosRouter from "./memos/memos.router.js"
import vitalsRouter from "./vitals/vitals.router.js"
import { errorHandler, notFound } from "./errors/index.js"

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(compression())
app.use(express.json())

app.get("/", (req, res, next) => {
    return res.status(200).send("You seem lost, how did you end up here?")
})
app.use("/vitals", vitalsRouter)
app.use("/memos", memosRouter)

app.use(notFound)
app.use(errorHandler)

export default app