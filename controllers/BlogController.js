const { User, BlogComm, Blog } = require('../models')

const GetAllBlogs = async (req, res) => {
    try {
      const data = await Blog.findAll({
        include: [
          {model: User, 
          attributes: ['id','username','fullname','email','profileImg']}
        ]
      })
      res.send(data)
    } catch (err) {throw err}
}

const GetBlogsByUserId = async (req, res) => {
    try {
        const data = await Blog.findAll({
        where: {userId: req.params.user_id},
        })
        res.send(data)
    } catch (err) {throw err}
}

const CreateBlog = async (req, res) => {
    try {
      const data = await Blog.create(
        { ...req.body,  userId: req.params.user_id}
      )
        res.send(data)
        console.log(data, "DATA")
    } catch (err) {throw err}
}

const DeleteBlog = async (req, res) => {
    try {
      await Blog.destroy(
        {where: {id: req.params.blog_id} }
      )
      res.send({msg: 'Blog deleted.', payload: req.params.blog_id, status: 'OK'})
    } catch (err) {throw err}
}

const GetBlogByType = async (req,res) => {
    try{
      // console.log("GET TYPE BACK")
      const data = await Blog.findAll({
        where: {type: req.params.type},
        include: [
          {
            model: User,
            attributes: ['id', 'username']
          },
          // {
          //   model: BlogComm, 
          //   attributes: ['id', 'type', 'thoughts', 'rating', 'userId'],
          //   include: [
          //     {
          //       model: User,
          //       attributes: ['id', 'username']
          //     }
          //   ]
          // }
        ]
      })
      res.send(data)
    }catch(err){throw err}
  }

module.exports = {
    GetAllBlogs,
    GetBlogsByUserId,
    CreateBlog,
    DeleteBlog,
    GetBlogByType
}