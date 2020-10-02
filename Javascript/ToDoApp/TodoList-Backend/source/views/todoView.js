//create different endpoints eg. creating, editing and deleting a todo item
const express = require ("express");
const todo = require ("../models/todo");
const router = express.Router();

//Adding a todo item, save to database & set a response using async await promise & try block
router.post("/todo", async (req, res) => {
    const todoData = req.body;
    try {
        const todos = new todo(todoData);
        await todos.save();
        return res.status(201).send(todos);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Fetching all todo items created & saved in the database
router.get("/todo", (req, res) => {
    todo.find({})
    .then ((todos) => {
        return res.status(200).send(todos);
    })
    .catch((error) => {
        return res.status(400).send(error);
    });
});

//Fetching a single todo item
router.get("/todo/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const todos = await todo.findById(id);
        if (!todos) {
            return res.status(404).send({ error : "Todo not found" });
        }
        res.status(200).send(todos);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Completeing a todo item
router.patch("/todo/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const todos = await todo.findById(id);
        if (!todos) {
            return res.status(404).send({ error : "This todo item was not found" })
        }
        todos.isCompleted = true;
        await todos.save();
        res.status(200).send(todos);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Deleting a single todo item
router.delete("/todos/:id", async (req, res) =>{
    const { id } = req.params;
    try {
        const response = await todo.findByIdAndDelete(id);
        res
        .status(200)
        .send({ message: "Item deleted successfully!", data: response });
    } catch (error) {
        res.status(400).send(error);
    }
});

//Editing a todo item using patch or put method & ES6 Syntax using {}
// router.patch("/todo/:id", async (req, res) => {
//     const { isCompleted, text } = req.body;
//     const { id } = req.params;
    //console.log(id, text, isCompleted); <- to test
//     try {
//         const todos = await todo.findById(id);
//         if (!todos) {
//             return res.status(404).send({ error : "This todo item was not found" })
//         }
//         todos.isCompleted = isCompleted
//         todos.text = text;
//         await todos.save();
//         res.status(200).send(todos);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

module.exports = router;
