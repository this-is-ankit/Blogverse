const { Router } = require("express");
const router = Router();
const User = require("../models/user");

router.get("/signin", (req, res) => {
    return res.render("signin")
})
router.get("/signup", (req, res) => {
    return res.render("signup");
})
router.get("/logout" , (req , res) => {
    res.clearCookie("token").redirect("/");
})
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await User.matchPasswordandGenerateToken(email, password);
        console.log("token", token);
        return res.cookie("token", token).redirect("/");
    } catch (error) {
        res.render("signin", {
            error: "Incorrect email or password"
        });
    }
});
router.post("/signup", async (req, res) => {
    const { fullName, email, password } = req.body;
    await User.create({
        fullName,
        email,
        password
    });
    return res.redirect("/");
})
module.exports = router
