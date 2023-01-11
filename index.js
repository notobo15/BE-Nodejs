const express = require("express");
var cors = require("cors");
const initAPIRoute = require("./src/route/api");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
port = 8080;

initAPIRoute(app);
// router.get("/", (req, res) => {
//   return res.status(200).json({
//     massage: "ok",
//   });
// });
// router.get("/users", (req, res) => {
//   return res.status(200).json({
//     massage: "ok",
//     data: [
//       {
//         id: 1,
//         name: "a",
//       },

//       {
//         id: 2,
//         name: "b",
//       },
//       {
//         id: 3,
//         name: "d",
//       },
//     ],
//   });
// });
app.listen(port, () => {
  console.log("app listening at http://localhost:" + port);
});
