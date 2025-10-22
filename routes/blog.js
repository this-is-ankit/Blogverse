const { Router } = require("express");
const router = Router();
router.get("/add-new" , (req , res) => {
    res.render("addBlog" , {
        user: req.user
    })
})
router.post("/" , (req , res) => {
    console.log(req.body);
    return res.redirect("/")
})
module.exports = router