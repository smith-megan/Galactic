import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../Config.ts"

interface Habitattributes {
  id: number
  name: string
  date: string
  description: string
  length: number
  tracked: Array<string>
}

export interface HabitattributesInput extends Optional<Habitattributes, "id"> {}
export interface HabitattributesOutput extends Required<Habitattributes> {}

class Habit
  extends Model<Habitattributes, HabitattributesInput>
  implements Habitattributes
{
  public id!: number
  public name!: string
  public date!: string
  public description!: string
  public length!: number
  public tracked!: Array<string>

  // timestamps
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  public readonly deletedAt!: Date
}

Habit.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },

    name: { type: DataTypes.STRING },

    date: {
      type: DataTypes.STRING,
    },

    description: {
      type: DataTypes.STRING,
    },

    length: {
      type: DataTypes.INTEGER,
    },
    tracked: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
)
// tracked: {
//   type: DataTypes.ARRAY,
// },
console.log("Habit has been created successfully")
export default Habit
