const connection = require("../configs/connectDBMySQL");

let getAllUsers = (req, res) => {
  connection.query("SELECT * FROM `users`", (err, results, fields) => {
    return res.status(200).json({
      users: results,
    });
  });
};

let postCreateUser = (req, res) => {
  let { name, email, address } = req.body;
  if (!name || !email || !address) {
    return res.status(200).json({
      message: "missing required params",
    });
  } else {
    connection.query(
      `INSERT INTO users(name, email, address) values ('${name}', '${email}', '${address}')`,
      (err, results) => {
        return res.status(200).json({
          message: "added successful",
        });
      }
    );
  }
};

let updateUser = (req, res) => {
  let id = req.params.id;
  let { name, email, address } = req.body;
  if (!name || !email || !address) {
    return res.status(200).json({
      message: "missing required params",
    });
  } else {
    let query = `UPDATE users SET name='${name}', email='${email}', address='${address}' WHERE ID = ${id}`;
    connection.query(query, (err, results) => {
      return res.status(200).json({
        message: "ok",
      });
    });
  }
};

let deleteUser = (req, res) => {
  let id = req.params.id;
  console.log(id);
  let query = `DELETE FROM users WHERE ID = ${id}`;
  connection.query(query, (err, results) => {
    return res.status(200).json({
      message: "ok",
    });
  });
};
module.exports = { getAllUsers, postCreateUser, updateUser, deleteUser };
