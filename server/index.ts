import express from "express"
import ViteExpress from "vite-express"
import Habit from "./models/Habit.ts"

const HabitStart = Habit.create({
  id: 1,
  date: "todayDate",
  name: "Journal",
  description: "5 min or one page of writing by hand",
  length: 0,
})
// tracked: [""],

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
