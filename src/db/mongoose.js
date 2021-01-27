const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ian123:ian123@iancode09.va6uv.mongodb.net/task-manager?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    }
})

// const task1 = new Task({
//     description: "   This is Task2 ",
//     completed: false
// })

// task1.save().then(() => {
//     console.log(task1);
// }).catch((error) => {
//     console.log(error);
// })