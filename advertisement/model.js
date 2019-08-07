const Sequelize = require('sequelize')
const db = require('../db')

const Advertisement = db.define(
  'ads',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false 
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true 
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    phone: {
      type: Sequelize.INTEGER,
      allowNull: false 
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: true 
    },
  }
)

module.exports = Advertisement