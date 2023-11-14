import { syncCatcher } from "../helpers/index.js"
import JWT from "jsonwebtoken"
const { JWT_SECRET } = process.env

export const isLoggedIn = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return next({
            status: 403,
            message: "Missing auth token"
        })
    }
    const [user, err] = syncCatcher(() => JWT.verify(authorization, JWT_SECRET))
    if (err) {
        return next({
            status: 403,
            message: "Invalid auth token"
        })
    }
    res.locals.user = user
    return next()
}