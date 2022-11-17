const express=require("express");
const router=express.Router();
const routecontroller=require('../controllers/routecontrollers');

router.post('/userdata',routecontroller.user_post);
router.post('/register',routecontroller.cred_post);
router.patch('/update/:id',routecontroller.user_update);
router.post('/verify',routecontroller.send_message);
router.post('/login',routecontroller.cred_get);

module.exports = router;