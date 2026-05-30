const express= require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,validationlisting} = require("../middleware.js");
const listingController = require("../controller/listings.js");
const multer = require("multer");
const{storage}=require("../cloudConfig.js");
const upload= multer({storage})



router.get("/new", isLoggedIn,listingController.renderNewform);
router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,upload.single("listing[image]"),validationlisting,wrapAsync(listingController.createListing));
router
    .route("/:id")
    .get(listingController.showListing)
    .put(isLoggedIn,isOwner,upload.single("listing[image]"),validationlisting,wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner,wrapAsync(listingController.deletelisting));


router.get("/:id/edit",isLoggedIn, isOwner,wrapAsync(listingController.showEdit));


module.exports =router;
