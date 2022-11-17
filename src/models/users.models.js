//? Importing db from the utils
const db = require('../utils/database')
//? Importing the dta type definer from sequelize
const { DataTypes, DATE } = require('sequelize')

//? Defining the tables 'Users'
const Users = db.define('users', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'first_name'
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name'
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
      isEmail: true
    }
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
  },
  role:{
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'normal'
  },
  country:{
    type: DataTypes.STRING
  },
  status:{
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active'
  },
  isVerified:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'is_verified'
  }
})

//? Exporting the Users model
module.exports = Users