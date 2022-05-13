const router = require('express').Router()
const controller = require('../controllers/BlogController')

const middleware = require('../middleware')

router.get('/', controller.GetAllBlogs)

router.get('/user/:user_id', controller.GetBlogsByUserId)


router.get('/:type', controller.GetBlogByType)

router.post('/create/:user_id', 
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateBlog
)

router.delete('/delete/:blog_id', 
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteBlog
)

module.exports = router