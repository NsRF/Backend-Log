import UserRepository from '../domain/models/user'

export default {
    findAll: async () => {
        return await UserRepository.findAll();
    },
    createUser: async (name: string, email: string) => {
        return await UserRepository.create({
            name: name,
            email: email,
        })
    },
    findById: async (id: string) => {
        return await UserRepository.findByPk(id);
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

