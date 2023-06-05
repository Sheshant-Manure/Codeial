const express =require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);
router.use('/users', require('./users')) // Any request with 127.0.0.1:8000/users will be redirected to route handling in the users.js file
router.use('/posts', require('./posts')) // Any request with 127.0.0.1:8000/users will be redirected to route handling in the posts.js file
module.exports = router; // The exported router object is imported in ./index.js (entry point)