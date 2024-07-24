import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../db.ts"

interface Habitattributes {
  id: number
  name: string
  date: string
  description: string
  length: number
  tracked: Array<string>
}

export interface HabitattributesCreation
  extends Optional<Habitattributes, "id"> {}

class Habit
  extends Model<Habitattributes, HabitattributesCreation>
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
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
    },

    name: { type: DataTypes.STRING },

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
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
)

export {
  Habit,
  Habitattributes,
  // HabitattributesCreation
}
