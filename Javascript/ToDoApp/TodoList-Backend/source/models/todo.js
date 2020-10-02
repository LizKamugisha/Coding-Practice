//define how data will look in the database, similar to how you set classes in javascript
const mongoose = require ("mongoose");
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false,
    }
});

const todo = mongoose.model("todo", todoSchema);
module.exports = todo