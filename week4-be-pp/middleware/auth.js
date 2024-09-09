// Middleware to check for admin role
function checkAdminRole(req, res, next) {
  const role = req.headers.role;

  if (role === "admin") {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(403).send("Access denied");
  }
}

module.exports = checkAdminRole;
