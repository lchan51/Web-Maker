const mongoose = require("mongoose");
const WebsiteSchema = require("./website.schema");
const WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);


WebsiteModel.findAllWebsitesForUser= (uid)=> {
    return WebsiteModel.find({developerId: uid});
}

WebsiteModel.createWebsite=(website)=> {
    return WebsiteModel.create(website);
}

WebsiteModel.deleteWebsite=(wid)=>{
    return WebsiteModel.deleteOne({_id: wid});
}

WebsiteModel.updateWebsite=(website)=> {
    return WebsiteModel.updateOne ({_id: website._id}, website);
}


module.exports = WebsiteModel;