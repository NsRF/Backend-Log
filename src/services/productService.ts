import ProductRepository from '../domain/models/product'

export default {
    findAll: async () => {
        return await ProductRepository.findAll();
    },
    createProduct: async (name: string) => {
        return await ProductRepository.create({
            name: name,
        })
    },
    findById: async (id: string) => {
        return await ProductRepository.findByPk(id);
    },
    updateProduct: async(id: string, name: string) => {
        await ProductRepository.update(
            {
                name,
            },
            {
                where: {
                    id: id,
                },
            }
        );

        return ProductRepository.findByPk(id);
    },
    deleteProduct: async (id: string) => {
        await ProductRepository.destroy({
            where: {
                id: id
            }
        });
        return true;
    }
}

