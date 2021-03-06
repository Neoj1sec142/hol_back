const router = require('express').Router()
const controller = require('../controllers/PostController')

const middleware = require('../middleware')

router.get('/', controller.GetAllPosts)

router.get('/user/:user_id', controller.GetPostsByUserId)

router.get('/:post_id', controller.GetPostById)
router.get('/:type', controller.GetPostByType)

router.post('/create/:user_id', 
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePost
)
router.put('/update/:user_id/:post_id', 
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePost
)
router.delete('/delete/:post_id', 
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePost
)

module.exports = router