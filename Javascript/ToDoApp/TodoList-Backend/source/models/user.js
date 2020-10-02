const mongoose = require("mongoose");
//comment out untill bcrypt installed 
//const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({ 
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
});

//Pre save method - before the model is saved, hash password...(comment out untill bcrypt installed) 
// userSchema.pre("save", async function (next) {
// const user = this 
// if (user.isModified("password")) {
//     user.password = await bcrypt.hash(user.password, 8);
//     }
//     next();
// });

//Find user by credentials and verify user password using bcrypt
userSchema.statics.findByCredentials = async (emial, password) => {
    const user = await user.findOne({ email });
    if(!user) {
        throw new Error ("Invalid email or password");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error ("Invalid email or password");
    } 
    return user;
};

const user = mongoose.model ("user", userSchema);

module.exports = user;
