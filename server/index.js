import express from "express"
import ViteExpress from "vite-express"
import Sequelize from "sequelize"

const sequelize = new Sequelize(pgDatabase, pgUser, pgPassword, {
  host: pgHost,
  dialect: "postgres",
})

try {
  await sequelize.authenticate()
  console.log("Connection has been established successfully.")
} catch (error) {
  console.error("Unable to connect to the database:", error)
}

// temporary data storage until db set up

let history = { test: 4 }

const app = express()
app.use(express.json())

app.post("/api/send", async (req, res) => {
  console.log(req.body)
  history = req.body.historyPackage
  res.send("success")
})

app.get("/api/data", (_, res) => res.send(history))

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."))
