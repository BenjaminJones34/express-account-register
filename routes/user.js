const router = require("express").Router();
const { addAccount, getAccounts, getAccount, login } = require("../utils/index");

router.post("/register", async (req, res) => {
    await addAccount(req.body);
    res.status(201).json({msg: "Successful register"});
});

router.get("/", (req, res) => {
    res.status(200).json(getAccounts());
});

router.get("/login", async (req, res) => {
    res.status(200).json({msg: await login(req.body)})
})

module.exports = router;