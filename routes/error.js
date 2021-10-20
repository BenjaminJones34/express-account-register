const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(404).send("The web site you seek<br/>Lies beyond our perception<br/>But others await.");
})

module.exports = router;