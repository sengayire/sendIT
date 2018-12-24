class Authorize {
  static user(req, res, next) {
    const { userRole } = req.user;
    return userRole === 'Client' ? next() : res.status(401)
      .json({ message: 'Access reserved for user only' });
  }

  static admin(req, res, next) {
    const { userRole } = req.user;
    console.log(userRole);
    return userRole === 'Admin' ? next() : res.status(401)
      .json({ message: 'Access reserved to admin only' });
  }
}
export default Authorize;
