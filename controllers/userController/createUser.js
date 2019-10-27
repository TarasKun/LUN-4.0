const dataBase = require('../../database').getInstance();
const errorHandler = require('../../error/errorHandler');
const { userService } = require('../../service');
const {USER_ROLES, USER_STATUS} = require('../../constant');

module.exports = async (req, res) => {
    try {
        const user = req.body;

        user.role_id = USER_ROLES.USER;
        user.status_id = USER_STATUS.ACTIVE;

        await userService.createUser(user);

        res.json(201).end();

        throw new errorHandler('Error', 403, 'createUser')
    } catch (e) {
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller
            })
    }

};