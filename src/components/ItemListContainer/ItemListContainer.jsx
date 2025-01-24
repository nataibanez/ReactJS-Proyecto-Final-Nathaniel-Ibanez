import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import BeatLoader from "react-spinners/BeatLoader";
import './itemlistcontainer.scss';
import ItemList from "./ItemList.jsx";
import db from "../../db/db.js";

const ItemListContainer = ({ motd }) => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();
  const collectionName = collection(db, "products");


  // Fetching de datos desde Firestore
  const getProductsFromFirebase = async() => {
    try {
      const dataDb = await getDocs(collectionName);

      const data = dataDb.docs.map((productDb) => {
        return {id: productDb.id, ...productDb.data()};
    });

      console.log(data);
      setProducts(data);
    } 
    catch (error) {
      console.error(error);
    } 
    finally {
      setIsLoading(false);
    }
  };

  // Filtrado por categoría

  const getProductsByCategory = async() => {
    try {
      const filterQuery = query(collectionName, where("category", "==", categoryId));
      const dataDb = await getDocs(filterQuery);
  
      const data = dataDb.docs.map((productDb) => {
        return {id: productDb.id, ...productDb.data()};
      });
      setProducts(data);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setIsLoading(false);
    } 
  }

  // Ejecución inicial
  useEffect(() => {
    categoryId
      ? getProductsByCategory()
      : getProductsFromFirebase()
    setIsLoading(true);
  }, [categoryId]);

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

  return (
    <div className="body--motd">
      {isLoading 
        ? <p>Cargando... usa spinner</p> 
        : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
