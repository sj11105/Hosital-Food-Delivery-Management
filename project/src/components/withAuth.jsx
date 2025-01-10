import jwt from "jsonwebtoken";

export default function withAuth(handler, allowedRoles) {
  return async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ error: "Forbidden" });
      }

      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ error: "Invalid Token" });
    }
  };
}
