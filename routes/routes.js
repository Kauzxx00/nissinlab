const express = require("express");
const passport = require("passport");

const router = express.Router();


router.get("/", (req, res) => {
    res.render("index", { user: req.user || null }); 
  });


router.get("/auth/discord", passport.authenticate("discord"));
router.get(
  "/auth/discord/callback",
  passport.authenticate("discord", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send("Erro ao deslogar");
    res.redirect("/");
  });
});

module.exports = router;