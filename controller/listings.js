const Listing = require("../models/listing.js");
module.exports.index = async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listing/index.ejs",{allListings});
};
module.exports.renderNewform = (req,res)=>{
    console.log("form is running");
    res.render("listing/new")
}
module.exports.createListing= async(req,res)=>{
    let url = req.file.path;
    let filename = req.file.filename;
    let newlisting =new Listing(req.body.listing ) ;
    newlisting.owner=req.user._id;
    newlisting.image={url,filename}
     await newlisting.save();
     req.flash("success","new listing added");
    res.redirect("/listings")
}
module.exports.showListing=async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id).
    populate({path:"reviews",
        populate:{
        path:"author"
    }})
    .populate("owner");
    if(!listing){
        req.flash("error","listing do not exist");
         return res.redirect("/listings");
    }

    res.render("listing/show",{listing})
};
module.exports.showEdit= async(req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","listing do not exist");
         return res.redirect("/listings");
    }
    let OriginalImageUrl=listing.image.url;
      OriginalImageUrl=OriginalImageUrl.replace("/upload","/upload/h_300,w_250");
    res.render("listing/edit",{listing ,OriginalImageUrl})
};
module.exports.updateListing =  async (req,res)=>{
    let {id} = req.params;

    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file!=="undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image={url,filename};
    await listing.save();
    }

    req.flash("success","Listing updated!");
    res.redirect(`/listings/${id}`);
}
module.exports.deletelisting = async(req,res)=>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("success","listing deleted");
    res.redirect("/listings");
}