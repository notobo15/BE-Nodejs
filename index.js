const express = require("express");

const app = express();
const router = express.Router();
port = 8080;
router.get("/", (req, res) => {
  return res.status(200).json({
    massage: "ok",
  });
});
router.get("/users", (req, res) => {
  return res.status(200).json({
    massage: "ok",
    data: [
      {
        id: 1,
        name: "a",
      },

      {
        id: 2,
        name: "b",
      },
      {
        id: 3,
        name: "d",
      },
    ],
  });
});
app.use("/", router);
app.listen(port, () => {
  console.log("app listening at http://localhost:" + port);
});
