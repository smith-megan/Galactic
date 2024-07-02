import express from "express"
import ViteExpress from "vite-express"

const app = express()

app.get("/message", (_, res) => res.send("Hello from express!"))
app.get("/api/data", (_, res) => res.send("string"))

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."))
