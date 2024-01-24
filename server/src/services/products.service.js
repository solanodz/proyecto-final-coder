import ProductDao from "../dao/product.dao.js";

export default class ProductsService {
    static findAllProducts(filter = {}) {
        return ProductDao.get(filter);
    }

    static async createProduct(payload) {
        console.log('Creando producto...');
        const product = await ProductDao.create(payload);
        console.log(`Producto creado correctamente ${product._id} ✅`);
        return product;
    }

    static findProductById(pid) {
        return ProductDao.getById(pid);
    }

    static async updateProductById(pid, payload) {
        return ProductDao.updateById(pid, payload);
    }

    static async deleteProductById(pid) {
        return ProductDao.deleteById(pid);
    }
}