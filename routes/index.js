const express =require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);
module.exports = router; // The exported router object is imported in ./index.js (entry point)