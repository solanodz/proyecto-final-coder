import ProductsService from '../services/products.service.js';

export default class ProductsController {

    static async create(data) {
        console.log('Creando producto...');
        const newProduct = await ProductsService.createProduct(data);
        console.log('Producto creado correctamente ✅');
        return newProduct;
    }

    static async get(query = {}) {
        console.log('Buscando productos...');
        const products = await ProductsService.findAllProducts(query);
        console.log('Productos encontrados ✅');
        return products;
    }

    static async getById(pid) {
        console.log('Buscando producto...');
        const product = await ProductsService.findProductById(pid);
        console.log('Producto encontrado ✅');
        return product;
    }

    static async updateById(pid, data) {
        console.log('Actualizando producto...');
        await ProductsService.updateProductById(pid, data);
        console.log('Producto actualizado ✅');
    }

    static async deleteById(pid) {
        console.log('Eliminando producto...');
        await ProductsService.deleteProductById({ _id: pid });
        console.log('Producto eliminado ✅');
    }
}