import productsModel from '../models/productsModel.js';

export const getAllProducts = async (req, res) => {
    try{
        const products = await productsModel.getAllProducts(); 
        res.status(200).json(products);
    } catch (error){
        console.log(error); 
    }
    
}
export const getProductByID = async (req, res) => {
    const { id } = req.params;
    const product = await productsModel.getProductByID(id);
    if (!product) {
    return res.status(404).json({ error: "Not Found" });
    }
    res.json(product);
};

export const createProduct = async (req, res) => {
    if (typeof req.body.name == undefined) {
    return res.status(422).json({ error: "El nombre es obligatorio" });
    }

    const { name, price } = req.body;

    const product = await productsModel.createProduct({ name, price});

    res.status(201).json(product);
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const deleted = await productsModel.deleteProduct(id);

    if(!deleted){
        return res.status(404).json({ error: "Not Found" })
    } 
    res.json({ message: "Product Deleted" })
}

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const { name, price } = req.body;
    const updatedProduct = await productsModel.updateProduct(id, { name, price });

    if(!updatedProduct){
        return res.status(404).json({ error: "Not Found" })
    }
    res.json(updatedProduct);
}