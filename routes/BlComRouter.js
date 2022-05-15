const router = require('express').Router()
const controller = require('../controllers/BlComController')

const middleware = require('../middleware')

router.get('/:comment_id', controller.GetBlogComById)

router.get('/user/:user_id', controller.GetBlogComByUserId)

router.get('/blog/:blog_id', controller.GetBlogComByBlogId)

router.post('/create/blogcomm-:blogcomm_id/user-:blogcomm_id', 
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateBlogCom)


router.delete('/delete/:blogcomm_id', 
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteBlogCom)
  

module.exports = router