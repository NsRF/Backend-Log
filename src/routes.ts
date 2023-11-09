import express from "express";
import userController from "./controllers/userController";
import productController from "./controllers/productController";

const routes = express.Router();

routes.get("/users", userController.findAll);
routes.post("/users", userController.createUser);
routes.get("/users/:id", userController.findById);
routes.put("/users/:id", userController.updateUser);
routes.delete("/users/:id", userController.deleteUser);

routes.get("/products", productController.findAll);
routes.post("/products", productController.createUser);
routes.get("/products/:id", productController.findById);
routes.put("/products/:id", productController.updateUser);
routes.delete("/products/:id", productController.deleteUser);

export { routes as default };
