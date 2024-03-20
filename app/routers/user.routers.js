const express = require('express');
const {
    getByUsers,
    getByUserId,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/user.controller");
const router = express.Router();

router.get('/users', getByUsers);
router.get('/user/:id', getByUserId);
router.post('/user-create', createUser);
router.put('/user-update/:id', updateUser);
router.delete('/user-delete/:id', deleteUser);

module.exports = router;