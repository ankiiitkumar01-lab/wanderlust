const User = require("../models/user.js");
module.exports.signup= (req,res)=>{
    res.render("user/signup");
};
module.exports.createSignup= async(req,res)=>{
    try{
        let{username,email,password}=req.body;
        let newUser= new User({username,email})
        const registeredUser= await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
             req.flash("success","welcome to wanderlust!");
            res.redirect("/listings");
        })

    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup")
    }
};
module.exports.login=(req,res)=>{
    res.render("user/login")
}
module.exports.createlogin = async(req,res)=>{
    req.flash("success","welcome back");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};
module.exports.logout =  (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }

        req.flash("success", "You are logged out!");

        req.session.destroy(() => {
            res.clearCookie("connect.sid");
            res.redirect("/listings");
        });
    });
}