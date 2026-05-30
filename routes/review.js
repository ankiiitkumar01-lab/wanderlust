const express= require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const reviewController = require("../controller/review.js");
const {isLoggedIn,isAuthor} = require("../middleware.js");


// review scema by joi is pending

router.post("/", isLoggedIn,wrapAsync(reviewController.createReview));
router.delete("/:reviewId",isLoggedIn, isAuthor,wrapAsync(reviewController.destroyReview));
module.exports=router;