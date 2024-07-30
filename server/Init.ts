import Habit from "./models/Habit.ts"
const isDev = process.env.NODE_ENV === "development"
const dbInit = () => {
  Habit.sync({ alter: isDev })
}
export default dbInit
