const express = require("express");
const { signup, login, addFriend, removeFriend, authMiddleware, loginWithCookie } = require("../controllers/userController");
const router = express.Router();



router.post('/signup',signup);
router.post('/login',login);
router.patch('/addFriend',authMiddleware,addFriend);
router.patch('/removeFriend',authMiddleware,removeFriend);

router.get('/login',authMiddleware,loginWithCookie);

router.all('/*',(req,res)=>{
    
    console.log(req.method,req.path);
    res.status(404);
    res.send("Invalid api endpoint");
})

module.exports = router;