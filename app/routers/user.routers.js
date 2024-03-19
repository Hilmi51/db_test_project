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
router.put('/user-update', updateUser);
router.delete('/user-delete', deleteUser);

module.exports = router;