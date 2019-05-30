module.exports = function (app)
{
  const UserModel = require("../models/user/user.model")

    app.get ("/api/user", async (req, res)=> {
         const username = req.query["username"];
         const password = req.query["password"];
         let user;
         if(username && password){
           user= await UserModel.findUserByCredentials(username, password);
         } else if(username) {
          user=await UserModel.findUserByUsername(username);
         }
         res.json (user);
          });
        
      app.post("/api/user", async (req, res)=> {
        const user = req.body;
        const data = await UserModel.createUser(user);
            res.json(data);
          });
            
          
      app.get("/api/user/:uid", async (req, res) => {
            const uid = req.params["uid"];
            let user;
            user = await UserModel.findUserById(uid);
            res.json(user);
          });
          app.put("/api/user", async (req, res) => {
            const newUser = req.body;
            const date = await UserModel.updateUser(newUser);
            res.json(newUser);
              })

            }
