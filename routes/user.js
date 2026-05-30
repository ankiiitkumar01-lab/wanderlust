const express= require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const usercontroller = require("../controller/user.js");
const{saveRedirectUrl}=require("../middleware.js")

router
     .route("/signup")
     .get(usercontroller.signup)
     .post(wrapAsync(usercontroller.createSignup));

router
     .route("/login")
     .get(usercontroller.login)
     .post(saveRedirectUrl,passport.authenticate("local",{
         failureRedirect:"/login",
         failureFlash:true,
          }),
         usercontroller.createlogin
        );

router.get("/logout",usercontroller.logout);

module.exports=router;