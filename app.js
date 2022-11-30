import mongoose from "mongoose"
import express from 'express'
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js"

const app = express()
app.use(cors())
app.use(express.json())
const DEV_CONNECTION_STRING = 'mongodb://localhost:27017/tuiter'
const REMOTE_CONNECTION_STRING = 'mongodb+srv://wlfjiesfj:N8sdoX5NML6LKRJN@cluster0.ccbzkzk.mongodb.net/tuiter?retryWrites=true&w=majority'
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || DEV_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING)

TuitsController(app)
HelloController(app)
UserController(app)

app.listen(process.env.PORT || 4000)