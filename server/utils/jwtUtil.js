const {sign,verify} = require("jsonwebtoken");
const { errorCreator } = require("./responseHandler");

const SECRET_CODE = "MySecretCode";

const generateToken = (data)=>{
    const token = sign(data,SECRET_CODE,{expiresIn:"1h"});
    return token;
}

const verifyToken = (token)=>{
    if (!token){
        errorCreator("Token missing!!!",403);
    }
    const data =  verify(token,SECRET_CODE);
    console.log(data);
    return data
}

module.exports = {generateToken,verifyToken};