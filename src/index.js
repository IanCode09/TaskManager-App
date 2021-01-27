const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server running on port', port);
})

const main = async () => {
    const task = await Task.findById('601187da58612c004464d05c')
    await task.populate('owner').execPopulate()
    console.log(task.owner)

    // const user = await User.findById('601180dcf862f40f8ca5a1de')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks);
}

main()