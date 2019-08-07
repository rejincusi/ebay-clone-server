const Sequelize = require('sequelize')
const DATABASE_URL  = process.env.DATABASE_URL || 'postgres://postgres:pass12345@localhost:5432/postgres'
const port = process.env.PORT || 4000

const db = new Sequelize(DATABASE_URL)

db
  .sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error)

module.exports = db