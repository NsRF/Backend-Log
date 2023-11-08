import UserService from "../services/userService"
import type * as E from 'express';

export default {
    findAll: async (req: E.Request, res: E.Response) => {
        const users = await UserService.findAll();
        res.json(users).status(200);
    },
    createUser: async (req: E.Request, res: E.Response) => {
        const newUser = await UserService.createUser(req.body.name, req.body.email);
        res.json(newUser).status(201);
    },
    findById: async (req: E.Request, res: E.Response) => {
        const userFound = await UserService.findById(req.params.id);
        res.status(200).json(userFound);
    },
    updateUser: async (req: E.Request, res: E.Response) => {
        const user = req.body as UserInterface;
        const userChanged = await UserService.updateUser(req.params.id, user);
        res.status(202).json(userChanged);
    },
    deleteUser: async (req: E.Request, res: E.Response) => {
        const userDeleted = await UserService.deleteUser(req.params.id);
        res.status(202).json(userDeleted);
    }
}
