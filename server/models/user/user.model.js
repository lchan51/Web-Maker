const mongoose = require("mongoose");
const UserSchema = require("./user.schema");
const UserModel = mongoose.model("UserModel", UserSchema)

UserModel.createUser = (user) =>
{
    return UserModel.create(user)
}

UserModel.findUserByCredentials= (username, password)=> {
    return UserModel.findOne({username:username, password:password})
}

UserModel.findUserByUsername = (username)=> {
    return UserModel.findOne({username: username})
}

UserModel.findUserById = (uid)=> {
    return UserModel.findById(uid);
}

UserModel.updateUser = (user)=> {
    return UserModel.updateOne({_id:user._id}, user);
}

//UserModel.findAllUsers() =>{
    //return UserModel.find
//}
module.exports = UserModel;

