import express from "express"
import ViteExpress from "vite-express"
import Sequelize from "sequelize"
import "dotenv/config"
import Habit from "./models/habits"

const sequelize = new Sequelize(
  process.env.PGUSER,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
  }
)

try {
  await sequelize.authenticate()
  console.log("Connection has been established successfully.")
} catch (error) {
  console.error("Unable to connect to the database:", error)
}

const habitStart = Habit.create({
  date: "todayDate",
  name: "Journal",
  description: "5 min or one page of writing by hand",
  length: 0,
  tracked: [""],
})

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

export default sequelize
