const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ian123:ian123@iancode09.va6uv.mongodb.net/task-manager?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
})
