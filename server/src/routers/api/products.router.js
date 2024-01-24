import { Router } from 'express';
import ProductController from '../../controllers/products.controller.js'

const router = Router();


router.post('/products', async (req, res, next) => {
    try {
        const newProduct = await ProductController.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.log('Ocurrio un error al crear el producto ⛔');
        next(error);
    }
})

router.get('/products', async (req, res, next) => {
    try {
        const products = await ProductController.get(req.query);
        res.status(200).json(products);
    } catch (error) {
        console.log('Ocurrio un error al obtener los productos ⛔');
        next(error);
    }
})

router.get('/products/:pid', async (req, res, next) => {
    try {
        const { params: { pid } } = req;
        const product = await ProductController.getById(pid, req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log('Ocurrio un error al actualizar el producto ⛔');
        next(error);
    }
})

router.put('/products/:pid', async (req, res, next) => {
    try {
        const { params: { pid } } = req;
        await ProductController.updateById(pid, req.body);
        res.status(204).end();
    } catch (error) {
        console.log('Ocurrio un error al actualizar el producto ⛔');
        next(error);
    }
})

router.delete('/products/:pid', async (req, res, next) => {
    try {
        const { params: { pid } } = req;
        await ProductController.deleteById(pid);
        res.status(204).end();
    } catch (error) {
        console.log('Ocurrio un error al eliminar el producto ⛔');
        next(error);
    }
})


export default router;