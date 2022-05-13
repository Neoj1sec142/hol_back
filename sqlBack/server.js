const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')

const AuthRouter = require('./routes/AuthRouter')
const UserRouter = require('./routes/UserRouter')
const FollowerRouter = require('./routes/FollowerRouter')
const PostRouter = require('./routes/PostRouter')
const CommentRouter = require('./routes/CommentRouter')
const BlogRouter = require('./routes/BlogRouter')
const BlogCommRouter = require('./routes/BlComRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/auth', AuthRouter)
app.use('/users', UserRouter)
app.use('/followers', FollowerRouter)
app.use('/posts', PostRouter)
app.use('/comments', CommentRouter)

app.use('/blogs', BlogRouter)
app.use('/blogcomms', BlogCommRouter)

app.listen(PORT, () => console.log(`Boom! Server running on port: ${PORT}`))