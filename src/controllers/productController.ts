import ProductService from "../services/productService"
import type * as E from 'express';

export default {
    findAll: async (req: E.Request, res: E.Response) => {
        const users = await ProductService.findAll();
        res.json(users).status(200);
    },
    createUser: async (req: E.Request, res: E.Response) => {
        const newUser = await ProductService.createProduct(req.body.name);
        res.json(newUser).status(201);
    },
    findById: async (req: E.Request, res: E.Response) => {
        const userFound = await ProductService.findById(req.params.id);
        res.status(200).json(userFound);
    },
    updateUser: async (req: E.Request, res: E.Response) => {
        const userChanged = await ProductService.updateProduct(req.params.id, req.body.name);
        res.status(202).json(userChanged);
    },
    deleteUser: async (req: E.Request, res: E.Response) => {
        const userDeleted = await ProductService.deleteProduct(req.params.id);
        res.status(202).json(userDeleted);
    }
}
