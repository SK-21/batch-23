const mongoose = require("mongoose");
const { errorCreator } = require("../utils/responseHandler");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is mandatory!!!"]
  },
  username: {
    type: String,
    unique: true,
    required: [true, "username is mandatory!!!"]
  },
  password: {
    type: String,
    validate: {
      validator: (value) => value.length >= 8,
      message: (data) => "Password should be atleast 8 characters!!!"
    }
  },
  friendList: {
    type: [String],
  }
});


userSchema.statics.createUser = async (userData) => {
  const data = await UserModel.create(userData);
  console.log(data);
  if (data) {
    return data
  }
}

userSchema.statics.getUser = async (username) => {
  const userData = (await UserModel.findOne({ username }, { _id: 0, __v: 0 }))?.toObject();
  if (userData) {
    return userData;
  } else {
    errorCreator("Incorrect Password!!!", 401);
  }
}


userSchema.statics.updateFriend = async (username, id, addFriend = true) => {
  let data;
  if (addFriend)
    data = await UserModel.updateOne({ username }, { $addToSet: { friendList: id } });
  else {
    data = await UserModel.updateOne({ username }, { $pull: { friendList: id } });
  }
  console.log(data);
  if (data.modifiedCount || data.matchedCount) {
    return true
  }
  errorCreator("Something went wrong!!!");
}

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;
