    module.exports = function (app) {
    const websiteModel = require("../models/website/website.model")

        app.get("/api/user/:uid/website",async (req, res)=> {
        const uid = req.params["uid"];
        const websites = await websiteModel.findAllWebsitesForUser(uid)
        res.json(websites);
        })
        
        app.post("/api/website", async (req, res) => {
        const newWeb = req.body;
        const data = await websiteModel.createWebsite(newWeb);
        res.json(data);
        })

        app.delete("/api/website/:wid",async (req, res)=> {
        const wid = req.params["wid"];
        const data = await websiteModel.deleteWebsite(wid);
        res.json(data);
        })

        app.put("/api/website", async (req, res)=> {
        const newWeb = req.body;
        const data = await websiteModel.updateWebsite(newWeb)
        res.json(data);
        })
    }