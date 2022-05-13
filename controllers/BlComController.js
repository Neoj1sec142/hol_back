const { BlogComm, Blog, User } = require('../models')

const GetBlogComById = async (req, res) => {
    try {
      const data = await BlogComm.findOne({
        where: {id: req.params.blogcomm_id}
      })
      res.send(data)
    } catch (err) {throw err}
  }

const GetBlogComByUserId = async (req, res) => {
    try {
        const data = await BlogComm.findAll({
        where: {userId: req.params.user_id}
        })
        res.send(data)
    } catch (err) {throw err}
}

const GetBlogComByBlogId = async (req, res) => {
    try {
      const data = await BlogComm.findAll({
        where: {blogId: req.params.blog_id}
      })
      res.send(data)
    } catch (err) {throw err}
}

const CreateBlogCom = async (req, res) => {
    try {
      const data = await Comment.create(
        { ...req.body,  blogId: req.params.blog_id, userId: req.params.user_id}
      )
        res.send(data)
    } catch (err) {throw err}
}

const DeleteBlogCom = async (req, res) => {
    try {
      await BlogComm.destroy(
        {where: {id: req.params.blogcomm_id} }
      )
      res.send({msg: 'Blog comment deleted.', payload: req.params.blogcomm_id, status: 'OK'})
    } catch (err) {throw err}
}

module.exports = {
    DeleteBlogCom,
    CreateBlogCom,
    GetBlogComByBlogId,
    GetBlogComByBlogId,
    GetBlogComByUserId,
    GetBlogComById
}