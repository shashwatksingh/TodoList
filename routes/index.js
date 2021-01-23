const express= require('express');


const router = express.Router();
const homeController = require('../controllers/home_controller');
router.post('/create-log', homeController.createLog);
router.get('/',homeController.home);
module.exports = router;