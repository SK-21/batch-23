const {genSalt,compare,hash} = require("bcrypt");


const generatePasswordHash = async(password)=>{
    const salt = await genSalt();
    console.log(salt);
    const hashedPwd = await hash(password,salt);
    return hashedPwd;
};

const verifyPasswordHash = (password,passwordHash)=>{
    return compare(password,passwordHash);
}

module.exports = {generatePasswordHash,verifyPasswordHash};