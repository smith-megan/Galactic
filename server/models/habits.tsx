import sequilize from "../index"
import DataTypes from "sequelize"

const Habit = sequilize.define("habit", {
  habitName: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  date: {
    type: DataTypes.STRING,
  },

  description: {
    type: DataTypes.STRING,
  },

  length: {
    type: DataTypes.NUMBER,
  },
  tracked: {
    type: DataTypes.ARRAY,
  },
})

Habit.sync().then(() => {
  console.log("User Model synced")
})

export default Habit
