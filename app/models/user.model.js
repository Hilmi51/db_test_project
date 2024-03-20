"use strict";
const Sequelize = require("sequelize");
const {Model} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
        }
    }

    User.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        uuid: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        token: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        nicname: {
            type: Sequelize.STRING(20),
            allowNull: false,

        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        surname: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        birth_date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        profile_photo_url: {
            type: Sequelize.STRING,
        },
        biography: {
            type: Sequelize.STRING(30),
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone_number: {
            type: Sequelize.STRING(11),
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING(15),
            allowNull: false,
        },
        create_date: {
            type: Sequelize.DATE,
            allowNull: false,
            default: Sequelize.NOW,
        },
        delete_date: {
            type: Sequelize.DATE,
        },
        phone_verification: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: false,
        },
        email_verification: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: false,
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: true,
        },
        is_admin: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: false,
        },
        is_delete: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: false,
        }
    }, {
        sequelize,
        modelName: "User",
        tableName: "user",
        timestamps: false,
    });
    return User;
};
