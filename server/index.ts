import express from "express"
import ViteExpress from "vite-express"
import Habit from "./models/Habit.ts"

async function makeHabit() {
  const HabitStart = await Habit.create({
    id: 1,
    date: "todayDate",
    name: "Journal",
    description: "5 min or one page of writing by hand",
    length: 1,
  })
  // tracked: [""],
}
makeHabit()
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

Habit.sequelize.sync().then(() => {
  ViteExpress.listen(app, 3000, () => console.log("Server is listening..."))
})
