const { userService, oauthService } = require('../../service');
const errorHandler = require('../../error/errorHandler');
const { tokinizer } = require('../../helper');

module.exports = (req, res) => {
    try{
        const { email } = req.body;

        const isUserPresent = userService.getUserByParams({ email });

        if (!isUserPresent){
            throw new errorHandler('User is not present', 404, 'authUser');
        }

        const tokens = tokinizer();

        tokens.user_id = isUserPresent.id;
        oauthService.insertTokenPair({user_id: isUserPresent.id, ...tokens});

        res.json(tokens);

    } catch (e) {
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller || "authUser"
            })
    }
};