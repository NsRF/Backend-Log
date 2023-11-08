import express from "express";
import userController from "./controllers/userController";

const routes = express.Router();

routes.get("/users", userController.findAll);
routes.post("/users", userController.createUser);
routes.get("/users/:id", userController.findById);
routes.put("/users/:id", userController.updateUser);
routes.delete("/users/:id", userController.deleteUser);

export { routes as default };
