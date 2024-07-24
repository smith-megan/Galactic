import { Dialect, Sequelize } from "sequelize"
import "dotenv/config"

const dbName = process.env.PGNAME as string
const dbUser = process.env.PGUSER as string
const dbHost = process.env.PGHOST
const dbDriver = process.env.PGDRIVER as Dialect
const dbPassword = process.env.PGPASSWORD

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
})

try {
  sequelizeConnection.authenticate()
  console.log("Connection has been established successfully.")
} catch (error) {
  console.error("Unable to connect to the database:", error)
}

export default sequelizeConnection
