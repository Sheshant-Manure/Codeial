const express =require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);
router.get('/posts', usersController.posts);
router.get('/sign_up', usersController.signup);
router.get('/sign_in', usersController.signin);

router.post('/createAccount', usersController.createAccount);

module.exports = router; // The exported router object is imported in ./index.js (entry point)