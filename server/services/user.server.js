module.exports = function (app)
{ const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const UserModel = require("../models/user/user.model");
  const bcrypt = require('bcryptjs');

  const salt = bcrypt.genSaltSync(10);


    passport.serializeUser(serializeUser);
    function serializeUser(user, done) {
    done(null, user);
 }

    passport.deserializeUser(deserializeUser);
    function deserializeUser(user, done) {
    UserModel.findUserById(user._id).then(
    function(user) {
    done(null, user);
     },
      function(err) {
      done(err, null);
     }
   );
 }
    passport.use(new LocalStrategy(localStrategy));
    

    async function localStrategy(username, password, done) {
    const data = await UserModel.findUserByUsername (username);
    if (data && bcrypt.compareSync(password, data.password)) {
    return done(null, data);
      } else if (data && password === data.password) {
    data.password = bcrypt.hashSync(data.password, salt);
    await UserModel.updateUser(data);
    return done(null, data);
      } else {
    return done (null, false);
   }
 }

    app.post('/api/login', passport.authenticate('local'), (req, res) => {
      const user = req.user;
      res.json(user);
    });

    app.get("/api/loggedIn", (req,res)=>{
      res.send(req.isAuthenticated()? req.user:"0")
    })

    app.post("/api/logout", (req, res)=>{
      req.logOut();
      res.send(200)
    })

      app.post("/api/register", async (req, res)=> {
        const user = req.body;
        user.password = bcrypt.hashSync(user.password, salt);
        const data = await UserModel.createUser(user);
        req.login(data, ()=> {
          res.json(data);
        })

      })

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
            const data = await UserModel.updateUser(newUser);
            res.json(newUser);
              });

            app.get("/api/users", async (req, res) => {
            const data=await UserModel.findAllUsers();
            res.json(data);
              })

              app.delete("/api/user/:id", async (req, res) =>{
                const id = req.params ["id"];
                const data = await UserModel.deleteUser(id)
                res.json (data)
              })

            }
