const express = require("express");

const app = express();
const router = express.Router();
port = 8080;
router.get("/", (req, res) => {
  return res.status(200).json({
    massage: "ok",
  });
});
app.use("/", router);
app.listen(port, () => {
  console.log("app listening at http://localhost:" + port);
});
