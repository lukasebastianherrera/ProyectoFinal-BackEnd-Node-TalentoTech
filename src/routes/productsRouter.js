import express from 'express';
import { getAllProducts,  getProductByID, createProduct, deleteProduct, updateProduct} from '../controllers/productsController.js';
const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductByID);
router.post('/products', createProduct);
router.delete('/products/:id', deleteProduct)
router.put('/products/:id', updateProduct)
export default router