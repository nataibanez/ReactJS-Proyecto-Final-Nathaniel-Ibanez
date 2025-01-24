import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import BeatLoader from "react-spinners/BeatLoader";
import ErrorProductNotFound from "../Errors/ErrorProductNotFound/ErrorProductNotFound.jsx";
import db from "../../db/db.js";
import './itemdetail.scss';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetching de datos desde Firebase
  const getProductFromFirebase = async () => {
    try {
      const docRef = doc(db, "products", productId);
      const dataDb = await getDoc(docRef);

      // Condicional que revisa si el productId existe en la base de datos de Firebase
      // Si no existe, marca error como true
      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProductDetails(data);
      } else {
        setError(true);
      }
    } catch (error) {
        console.error(error);
        setError(true); 
    } finally {
        setIsLoading(false);
    }


  };

  //  Ejecución inicial
  useEffect(() => {
    getProductFromFirebase();
  }, [productId]);

  // Early return mientras carga la página
  if (isLoading) {
    return (
      <div className="loading--spinner">
        <BeatLoader  
        margin={0}
        size={40}
        />
    </div>
    )
 }

  // Early return si no hay fetch o si no encuentra el producto en la Db
  if (error || !productDetails) {
    return (
      <ErrorProductNotFound />
    )
  }

  // Return normal
  return (
    <div className="item-detail-container">
      <ItemDetail product={productDetails} />
    </div>
  );
};

export default ItemDetailContainer;
