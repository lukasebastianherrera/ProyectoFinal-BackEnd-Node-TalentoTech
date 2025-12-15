import { db } from "./firebase.js";
import { collection, getDocs, addDoc, deleteDoc , getDoc, doc, updateDoc } from "firebase/firestore";

const productsCollection = collection(db, 'products');

export const getAllProducts = async () => {
    try{
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } 
    catch(error){
        console.log(error);
    }
};

export const getProductByID = async (id) => {
    try{
        const productRef =  doc(productsCollection, id);
        const snapshot = await getDoc(productRef);
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
    } catch(error){
        console.log(error);
    }
};

export const createProduct = async(data) => {
    try{
        const docRef = await addDoc(productsCollection, data);
        return { id: docRef.id, ...data };
    } catch(error){
        console.log(error);
    }
}

export const deleteProduct = async (id) => {
    try{
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);
        if(!snapshot.exists()){
            return false;
        }

        await deleteDoc(productRef);
        return true;
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (id, productData) => {
    try{
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);
        if(!snapshot.exists()){
            return null;
        }

        await updateDoc(productRef, productData);
        return  { id, ...productData}
    } catch (error) {
        console.log(error);
    }
}

export default {
    getAllProducts,
    getProductByID,
    createProduct,
    deleteProduct,
    updateProduct
}