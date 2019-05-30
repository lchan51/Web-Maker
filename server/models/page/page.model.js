const mongoose = require("mongoose");
const PageSchema = require("./page.schema");
const PageModel = mongoose.model("PageModel", PageSchema)

PageModel.findAllPagesForWebsite = (wid)=> {
    return PageModel.find({websiteId: wid});
}

PageModel.createPage = (page)=> {
    return PageModel.create(page)
}

PageModel.findPageById = (pid)=> {
    return PageModel.findById(pid)
}

PageModel.deletePage = (pid)=> {
    return PageModel.deleteOne({_id: pid})
}

PageModel.updatePage = (page)=> {
    return PageModel.updateOne({_id: page._id}, page)
}
module.exports = PageModel