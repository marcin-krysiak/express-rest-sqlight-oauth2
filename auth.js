const OktaJwtVerifier = require('@okta/jwt-verifier')

const oktaJwtVerifier = new OktaJwtVerifier({ issuer: process.env.ISSUER })

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers
    if (!authorization) throw new Error('no authorization header')

    const [authType, token] = authorization.trim().split(' ')
    if (authType !== 'Bearer') throw new Error('now Bearer token')

    const { claims } = await oktaJwtVerifier.verifyAccessToken(token)
    if (!claims.scp.includes(process.env.SCOPE)) {
      throw new Error('cannot find the scope')
    }
    next()
  } catch (error) {
    next(error.message)
  }
}
