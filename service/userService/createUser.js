const db = require('../../dataBase').getInstance();

module.exports = userObject => {
    const UserModel = db.getModel('User');

    UserModel.create(userObject);

}