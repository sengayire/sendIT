
// secure route
import jwt from 'jsonwebtoken';

export default {

  logIn: (req, res, next) => {
    // check if we have the header
    if (!req.headers.authorization) {
      return res.status(403).json({
        success: false,
        message: 'You are not logged in!',
      });
    }
    // it splits the bearer from the token
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Please provide a valid token',
      });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'There was an error trying to process your request',
        });
      }
      req.userid = decoded.id;
    });
    next();
  },
};
