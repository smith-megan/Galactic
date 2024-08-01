import { Op } from "sequelize"
import Habit from "../models/Habit"
import { GetAllHabitsFilters } from "./Types"
import { HabitattributesOutput, HabitattributesInput } from "../models/Habit"

export const create = async (
  payload: HabitattributesInput
): Promise<HabitattributesOutput> => {
  const habit = await Habit.create(payload)
  return habit
}

export const update = async (
  id: number,
  payload: Partial<HabitattributesInput>
): Promise<HabitattributesOutput> => {
  const habit = await Habit.findByPk(id)
  if (!habit) {
    // @todo throw custom error
    throw new Error("not found")
  }
  const updatedHabit = await (habit as Habit).update(payload)
  return updatedHabit
}

export const getById = async (id: number): Promise<HabitattributesOutput> => {
  const habit = await Habit.findByPk(id)
  if (!habit) {
    // @todo throw custom error
    throw new Error("not found")
  }
  return habit
}

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedHabitCount = await Habit.destroy({
    where: { id },
  })
  return !!deletedHabitCount
}

export const getAll = async (
  filters?: GetAllHabitsFilters
): Promise<HabitattributesOutput[]> => {
  return Habit.findAll({
    where: {
      ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
    },
    ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true }),
  })
}
