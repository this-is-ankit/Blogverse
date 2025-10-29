const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
function createTokenForUser(user){
    const payload = {
     _id : user._id,
     email : user.email,
     fullName : user.fullName,
     profileImageURL : user.profileImageURL,
     role : user.role
    };
    const token = jwt.sign(payload , secret);
    return token;
}

function validateToken(token) {
    const payload = jwt.verify(token , secret);
    return payload;
}
module.exports = {
    validateToken, 
    createTokenForUser,
}