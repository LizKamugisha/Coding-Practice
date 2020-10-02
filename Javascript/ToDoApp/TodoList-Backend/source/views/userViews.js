const express = require("express");
const User = require('../models/user');

const router = express.Router();

//Create a user account 
router.post("/user/create", async (req, res) => {
    const userData = req.body;
    try {
        const newUser = new User(userData);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Create login functionality & verify unique user data eg.email for authentication
router.post("/users/login", async (req, res) => {
    const { email, password } = req.body; 
        const user = await User.findByCredentials(email, password);
        if (user.error) {
            return res
            .status(400).send({ error: user.error });
        }
        res.status(201).send({ message: "Logged in succesfully!", user });
});



module.exports = router;