const dataBase = require('../../database').getInstance();
const errorHandler = require('../../error/errorHandler');
const { houseService } = require('../../service');
const {} = require('../../constant');

module.exports = async (req, res) => {
    try {
        const house = req.body;

        house.user_id = 1; //TODO
        await houseService.createHouse(house);

        res.json(201).end();

        throw new errorHandler('Error', 403, 'createUser')
    } catch (e) { // TODO
        // res
        //     .status(e.status)
        //     .json({
        //         message: e.message,
        //         controller: e.controller
        //     })
    }

};