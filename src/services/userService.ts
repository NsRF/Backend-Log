import UserRepository from '../domain/models/user'
import User from "../domain/models/user";

export default {
    findAll: async () => {
        const users = await UserRepository.findAll();
        return users;
    },
    createUser: async (name: string, email: string) => {
       const newUser = await UserRepository.create({
            name: name,
            email: email,
        });
        return newUser
    },
    findById: async (id: string) => {
       const result = await UserRepository.findByPk(id);
        return result;
    },
    updateUser: async(id: string, user: UserInterface) => {
        await UserRepository.update(
            {
                name: user.name,
                email: user.email,
            },
            {
                where: {
                    id: id,
                },
            }
        );

        return UserRepository.findByPk(id);
    },
    deleteUser: async (id: string) => {
        await UserRepository.destroy({
            where: {
                id: id
            }
        });
        return true;
    }
}

