const express = require('express');
const { Resgistr, loginUser, logout ,AllVistor } = require('../controller/userController');
const Router = express.Router();

Router.route('/register').post(Resgistr);
Router.route('/loginUser').post(loginUser);
Router.route('/logout').get(logout);
Router.route('/vistors').get(AllVistor);

module.exports = Router;