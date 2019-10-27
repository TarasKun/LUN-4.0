const router = require('express').Router();
const { userController } = require('../../controllers');

router.post('/register', userController.createUser);


module.exports = router;