const Todo = require('./../model/model.js')

exports.gethome = (req, res) => {
    res.send("<h1>HELLO FROM HOME PAGE</h1>")
}

exports.addtodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        res.status(200).json({
            status: "Success",
            message: "successful added in Todo",
            data: {
                todo
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: err
        })
    }
}
exports.getAll = async (req, res) => {
    try {
        const Alltodo = await Todo.find()
        res.status(200).json({
            status: "Success",
            data: {
                Alltodo
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: err
        })
    }

}

exports.delete = async (req, res) => {
    try {
        const tododel = await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Success",
            message: "Delete todo ",
            data: {
                tododel
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.update = async (req, res) => {
    try {
        const updated_todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "Success",
            message: "Updated todo ",
            data: {
                updated_todo
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}
exports.checkTodo = async (req, res) => {
    try {
        const check = await Todo.find({ Check: true })
        res.status(200).json({
            status: "success",
            message: "Found",
            data: {
                check
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: err
        })
    }
}
exports.uncheckTodo = async (req, res) => {
    try {
        const check = await Todo.find({ Check: false })
        res.status(200).json({
            status: "success",
            message: "Found",
            data: {
                check
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: err
        })
    }
}
