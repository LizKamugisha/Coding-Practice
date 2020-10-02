//run "mongod" in terminal and then set up mongoose and connect to mongo database
const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost:27017/todoDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
if (!db) {
    console.log("Error connecting to database");
} else {
    console.log("Successfully connected to database");
}
