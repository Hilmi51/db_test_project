const db = require("../models/index.js");
const User = db.user;
const Op = db.Sequelize.Op;

exports.add = (req, res) => {
    if (
        !req.body.uiid &&
        !req.body.token &&
        !req.body.nicname &&
        !req.body.name &&
        !req.body.surname &&
        !req.body.gender &&
        !req.body.email &&
        !req.body.phone_number &&
        !req.body.password &&
        !req.body.create_date
    ) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const user = {
        uiid: req.body.uiid,
        token: req.body.token,
        nicname: req.body.nicname,
        name: req.body.name,
        surname: req.body.surname,
        gender: req.body.gender,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password,
        create_date: req.body.create_date,
    };

    User.add(user)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User.",
            });
        });
};

exports.findAll = (req, res) => {
    const nicname = req.query.nicname;
    let condition = nicname ? {nicname: {[Op.like]: `%${nicname}%`}} : null;

    User.findAll({where: condition})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users.",
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id,
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: {id: id},
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating User with id=" + id,
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: {id: id},
    })
        .then((num) => {
            if (num === 1) {
                res.send({
                    message: "User was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete User with id=" + id,
            });
        });
};
