const { Sequelize, DataTypes, Model } = require('sequelize');


const sequelize = new Sequelize('test1', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});


class User extends Model { }

User.init({

    user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {

    sequelize,
    modelName: 'User'
});
module.exports = User;
console.log(User === sequelize.models.User);

