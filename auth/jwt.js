const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET || 'nsod1osa-!fasq.weqkp,[o^o]-xD'

function toJWT(data) {
  return jwt.sign(data, secret, { expiresIn: '2h' })
}

function toData(token) {
  return jwt.verify(token, secret)
}

module.exports = { toJWT, toData }