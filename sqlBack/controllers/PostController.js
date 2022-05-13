const { Post, User, Comment } = require('../models')


const GetAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [
        {model: User, 
        attributes: ['id','username','fullname','email','profileImg']}
      ]
    })
    res.send(allPosts)
  } catch (error) {
    throw error
  }
}

const GetPostsByUserId = async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {userId: req.params.user_id},
    })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetPostById = async (req, res) => {
  try {
    // console.log('here')
    const post = await Post.findOne({
      where: {id: req.params.post_id},
      include: [
        {
          model: User,
          attributes: ['id','username']
        },
        {
          model: Comment,
          attributes: ['id','description','rating','userId'],
          include: [
            {
              model: User,
              attributes: ['id','username']
            }
          ]
        }
      ]
    })
    res.send(post)
  } catch (err) {
    throw err
  }
}

const GetPostByType = async (req,res) => {
  try{
    // console.log("GET TYPE BACK")
    const posts = await Post.findAll({
      where: {type: req.params.type},
      include: [
        {
          model: User,
          attributes: ['id', 'username']
        },
        {
          model: Comment, 
          attributes: ['id', 'description', 'rating', 'userId'],
          include: [
            {
              model: User,
              attributes: ['id', 'username']
            }
          ]
        }
      ]
    })
    res.send(posts)
  }catch(err){
    throw err
  }
}

const CreatePost = async (req, res) => {
  try {
    const newPost = await Post.create(
      { ...req.body,  userId: req.params.user_id}
    )
      res.send(newPost)
  } catch (err) {
    throw err
  }
}

const UpdatePost = async (req, res) => {
  try {
    const updatedPost = await Post.update(
      { ...req.body },
      {where: 
        {id: req.params.post_id},
        returning: true 
      }
    )
    res.send(updatedPost)
  } catch (err) {
    throw err
  }
}

const DeletePost = async (req, res) => {
  try {
    await Post.destroy(
      {where: {id: req.params.post_id} }
    )
    res.send({msg: 'Post deleted.', payload: req.params.post_id, status: 'OK'})
  } catch (err) {
    throw err
  }
}

module.exports = {
  GetAllPosts,
  GetPostById, 
  GetPostsByUserId, 
  CreatePost, 
  UpdatePost, 
  DeletePost,
  GetPostByType
}