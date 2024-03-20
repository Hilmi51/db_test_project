const db = require("../models/index.js");
const getByUsers = async (req, res) => {
    try {
        const users = await db.User.findAll();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error getting users');
    }
};
/*  */
const getByUserId = async (req, res) => {
    try {
        const user = await db.User.findOne({where: {id: req.params.id}});
        if (!user) {
            res.status(404).send('User not found');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user');
    }
}

const createUser = async (req, res) => {
    try {
        const createUser = await db.User.create(req.body);
        res.status(201).send(createUser);

    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating user');

    }
}

const updateUser = async (req, res) => {
    try {
        const user = await db.User.findByPk(req.params.id);
        if (!user) {
            res.status(404).send('User not found');
        }
        const updatedUser = await user.update(req.body);
        res.status(200).send(updatedUser);

    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating user');

    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await db.User.findByPk(req.params.id);
        if (!user) {
            res.status(404).send('User not found');
        }
        await user.destroy();
        res.status(200).send('User deleted successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting user');

    }
}

module.exports = {
    getByUsers,
    getByUserId,
    createUser,
    updateUser,
    deleteUser
}