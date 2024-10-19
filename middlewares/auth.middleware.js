import AppError from "../utils/error.util.js";

const isLoggedIn = async(req, res, next) => {
  const {token} = req.cookies;

  if(!token) {
    return next(new AppError('Unauthenticated, please login again', 401))
  }

  const userDetails = await jwt.verify(token, process.env.SECRET);

  req.user = userDetails;
  next();
}

export {
  isLoggedIn
}