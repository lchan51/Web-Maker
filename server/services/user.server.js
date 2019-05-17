module.exports = function (app)
{
    let users = [
        {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
        {_id: "234",username: "bob",password: "bob",firstName: "Bob",lastName: "Marley",email: "bob@whatever.com"},
        {_id: "345",username: "charly",password: "charly",firstName: "Charly",lastName: "Garcia",email: "charly@ulem.com"},
        {_id: "456",username: "shiyu",password: "shiyu",firstName: "Shiyu",lastName: "Wang",email: "swang@ulem.org"}
      ]
    app.get ("/api/user", (req, res)=> {
         const username = req.query["username"];
         const password = req.query["password"];
         let user;
         if(username && password){
          user = users.find((user) => {
            return user.username === username && user.password === password
          })
        }
          if(username) {
          user=users.find((user)=>{
          return user.username ===username;
          })
        }
        res.json (user);
        })

      app.post("/api/user", (req, res)=> {
            const user = req.body
            users.push(user);
            res.json(user);
          })
            
          
           
      app.get("/api/user/:uid", (req, res) => {
            const uid = req.params["uid"];
            let user;
            user =users.find((user) => {
              return user._id === uid;
            })
            res.json(user);
          })

          app.put("/api/user", (req, res) => {
            const newUser = req.body;
            users = users.map(
            (user)=>{
            if(user._id === newUser._id){
            user = newUser
            }
              return user;
                }
            )
            res.json(newUser);
        })
    };