import db from "../config/db.js";

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Server error", error: err });
    }

    if (results.length > 0) {
      res.json({ success: true, message: "Login successful", user: results[0] });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
};

// export const RegisterUser = (req, res) => {
//   const { email, password } = req.body;

//   const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
//   db.query(sql, [email, password], (err, results) => {
//     if (err) {
//       return res.status(500).json({ message: "Server error", error: err });
//     }

//     if (results.length > 0) {
//       res.json({ success: true, message: "Login successful", user: results[0] });
//     } else {
//       res.status(401).json({ success: false, message: "Invalid credentials" });
//     }
//   });
// };
