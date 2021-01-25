const express= require('express');


const router = express.Router();
const homeController = require('../controllers/home_controller');
router.post('/create-log', homeController.createLog);
router.get('/',homeController.home);
router.get('/delete-todo',homeController.deletelogs);
//router.get('/assets/javascript/index.js', homeController.javascriptfile);
module.exports = router;