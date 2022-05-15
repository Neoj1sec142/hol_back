const { User, Follower } = require('../models')
const middleware = require ('../middleware')



const GetFollowersByUserId = async (req, res) => {
  console.log("THIS")
    try {
        const allFollowers = await User.findAll({
          attributes: ['id', 'username'],
          where: {id: req.params.user_id},
          include: [
            {
              model: User,
              as: 'followers',
              attributes: ['id', 'username'],
              through: {attributes:[]}
            }
          ]
        })
        res.send(allFollowers)
    } catch (error) {
        throw error
    }
}
const GetFollowingByFollowerId = async (req, res) => {
    try {
        const allFollowing = await User.findAll({
          attributes: ['id','username'],
          where: {id: req.params.follower_id},
          include: [
            {
              model: User,
              attributes: ['id','username'],
              as: 'following',
              through: {attributes: []}
            }
          ]
        })
        res.send(allFollowing)
    } catch (error) {
        throw error
    }
}


    

const FollowUser = async (req, res) => {
  try {    
        const follow = await Follower.create(
          { userId: req.params.user_id, followerId: req.params.follower_id },
          )
      res.send(follow)
  } catch (error) {
    throw error
  }
}

const UnfollowUser = async (req, res) => {
    try {
        await Follower.destroy(
          { where: [
            { userId: req.params.user_id }, 
            {followerId: req.params.follower_id}
          ] })
        res.send({ 
          msg: 'User Unfollowed', 
          payload: {user: req.params.user_id, follower: req.params.follower_id}, status: 'Ok'
        })
    } catch (error) {
            throw error
    }
}  


module.exports = {
    GetFollowersByUserId,
    GetFollowingByFollowerId,
    FollowUser,
    UnfollowUser
}
        