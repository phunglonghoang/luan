// 'use strict';

// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class apartment extends Model {
// //     /**
// //      * Helper method for defining associations.
// //      * This method is not a part of Sequelize lifecycle.
// //      * The `models/index` file will call this method automatically.
// //      */
// //     // static associate(models) {
// //     //   // define association here
// //     //   apartment.hasMany(models.Image, { foreignKey: 'productId' });
// //     //   apartment.belongsTo(models.Category, { foreignKey: 'categoryId' });
// //     //   apartment.belongsTo(models.Brand, { foreignKey: 'brandId' });

// //     //   apartment.belongsToMany(models.Tag, { through: 'apartmentTag', foreignKey: 'apartmentId', otherKey: 'tagId' });

// //     //   apartment.belongsToMany(models.Order, { through: 'OrderDetail', foreignKey: 'apartmentId', otherKey: 'orderId' });

// //     //   apartment.belongsToMany(models.User, { through: 'Wishlist', foreignKey: 'apartmentId', otherKey: 'userId' });

// //     //   apartment.hasMany(models.Review, { foreignKey: 'apartmentId' });
// //     // }
//   }
//   apartment.init({
//     apartment_id: DataTypes.STRING,
//     status: DataTypes.STRING,
//     area: DataTypes.STRING,
//     userld: DataTypes.STRING,
//     createAt: DataTypes.INTEGER,
//     updatedAt: DataTypes.INTEGER,
//     price: DataTypes.DECIMAL,
//     discount: DataTypes.DECIMAL,
//     image: DataTypes.STRING,
//     room_number: DataTypes.STRING,
//     describes: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'apartment',
//   });
//   return apartment;
// };

var mysql = require('mysql');
var db = mysql.createConnection({
   host: 'localhost', user: 'root', password: '', 
   database: 'chungculexico'
}); 
db.connect(() => console.log('Da ket noi database !'));
module.exports = db; 
//lệnh exports để xuất (public) ra, cho ngoài module dùng được db

