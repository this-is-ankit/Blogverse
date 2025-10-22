const { validateToken } = require("../services/authentication");

function checkforauthentication(cookiename){
    return (req , res , next) => {
        const tokenCookieValue = req.cookies[cookiename];
        if(!tokenCookieValue) {
            return next();
        }
        try {
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;

        } catch (error) {}
        return next();
    }
}

module.exports = {
    checkforauthentication,
}