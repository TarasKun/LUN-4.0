const router = require('express').Router();
const { houseController } = require('../../controllers');

router.post('/createHouse', houseController.createHouse);


module.exports = router;