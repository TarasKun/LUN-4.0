const { DB_TABLES } = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = tokenObject => {
    const oAuthModel = db.getModel(DB_TABLES.OAUTH_TOKEN);

    oAuthModel.create(tokenObject);

};