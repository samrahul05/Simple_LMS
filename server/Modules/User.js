const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  emailOrPhone: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);










// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize({
//     dialect: 'mysql',
//     host: 'sql6.freesqldatabase.com',
//     username: 'sql6687040',
//     password: 'GV54mSR2P6',
//     database: 'sql6687040',
//   });

// const User = sequelize.define('User', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     emailOrPhone: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }
// },{
//         tableName: 'User', // Explicitly specify the table name here
//       },
//   );


//   module.exports = User;
