const express = require("express");
const APIController = require("../controller/APIController");
const router = express.Router();
const initAPIRoute = (app) => {
  router.get("/users", APIController.getAllUsers);
  router.post("/create-user", APIController.postCreateUser);
  router.put("/update-user/:id", APIController.updateUser);
  router.delete("/delete-user/:id", APIController.deleteUser);

  return app.use("/api/", router);
};

module.exports = initAPIRoute;
