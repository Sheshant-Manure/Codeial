const express =require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
router.get('/profile', usersController.profile);
router.get('/posts', usersController.posts);
module.exports = router; // The exported router object is imported in ./index.js (entry point)