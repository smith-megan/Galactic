import express from "express"
import ViteExpress from "vite-express"
import Habit from "./models/Habit.ts"

// async function makeHabit() {
// const HabitStart = await Habit.create({
//   id: 1,
//   date: "todayDate",
//   name: "Journal",
//   description: "5 min or one page of writing by hand",
//   length: 1,
// })
// tracked: [""],
// }
// makeHabit()
// temporary data storage until db set up

// let history = { test: 4 }

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.originalUrl)
  next()
})

// create

app.post("/api/send", async (req, res) => {
  console.log(req.body)
  // history = req.body.historyPackage

  const HabitStart = await Habit.create({
    ...req.body.historyPackage,
    // id: 1,
    // date: "todayDate",
    // name: "Journal",
    // description: "5 min or one page of writing by hand",
    // length: 1,
  })
  console.log(HabitStart.dataValues, "This is the habit that was just made")
  res.status(201).send(HabitStart.dataValues.id.toString())
})

// read
app.get("/api/data/:id", async (req, res) => {
  console.log("Helloooo?")
  console.log(req.params, "these are the parameters")
  const find = await Habit.findByPk(req.params.id)
  res.status(200).send(find?.dataValues)
})

// update
// app.post("/api/data", async (req, res) => {
//   const find = await Habit.findByPk(1)
//   // console.log(find, "habit found")
//   const updatedFind = await (find as Habit).update(req.body.historyPackage)

//   res.send("success")
// })

// delete

Habit.sequelize.sync().then(() => {
  ViteExpress.listen(app, 3000, () => console.log("Server is listening..."))
})
