import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import db from "../../db/db.js";
import './itemdetail.scss';


const ItemDetailContainer = () => {

    const {productId} = useParams({})
    const [productDetails, setProductDetails] = useState({})

  // Fetching desde Firestore

    const getProductFromFirebase = async() => {
        try {
          const docRef = doc(db, "products", productId);
          const dataDb = await getDoc(docRef);
          const data = {id: dataDb.id, ... dataDb.data()};
          setProductDetails(data);
        }
        catch(error) {
          console.log(error);
        }
    }

// Ejecución inicial

useEffect(() => {
  getProductFromFirebase();
  }, [productId])

  return (
    <ItemDetail product={productDetails}/>
  )
}

export default ItemDetailContainer