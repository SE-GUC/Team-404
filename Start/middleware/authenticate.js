const jwt = require('jsonwebtoken')
const User = require('../Models/User')
const tokenKey = require('../config/keys_dev').secretOrKey

const authenticateUser = async (req, res, next) => {
  try {
    console.log(req.get('Authorization'))
    const allegedUser = jwt.verify(req.get('Authorization'), tokenKey)
    const confirmedUser = await User.findOne({ _id: allegedUser.id })
    console.log(confirmedUser)
    req.user = confirmedUser
    next()
  } catch (err) {
    console.log(err)
    return res.status(403).send({
      msg: 'unauthorized'
    })
  }
}

module.exports = authenticateUser
