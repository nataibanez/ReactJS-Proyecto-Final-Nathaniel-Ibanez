import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import CheckoutForm from "./CheckoutForm";
import db from "../../db/db.js";
import formValidation from "../../utils/formValidation.js";
import './checkout.scss';


const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
        }
    );

    const [orderId, setOrderId] = useState(null);

    const {cart, totalProductsPrice, deleteEntireCart} = useContext(CartContext);

    // Funciones que manejan inputs del formulario

    const handleChangeFormInput = (event) => {
        setDataForm({...dataForm, [event.target.name]:event.target.value});
    }

    const handleSubmitForm =  async(event) => {
        event.preventDefault();
        const customerOrder = {
            customer: {...dataForm},
            products: [...cart],
            totalPrice: totalProductsPrice(),
            date: Timestamp.fromDate(new Date()),
        }
        console.log(customerOrder);

    // Validación de formulario según formValidation.js y si se valida correctamente, se sube la orden a Firebase

        const validationResponse = await formValidation(dataForm)
        
        if (validationResponse.status === "success") {
            await uploadOrder(customerOrder);
        }
        else {
            alert(validationResponse.message);
        }
    }

    // Función que sube la orden ya armada con handleSubmitForm

    const uploadOrder = async(newOrder) => {
        try {
            const ordersRef = collection (db, "orders")
            const orderResponse = await addDoc(ordersRef, newOrder);
            console.log("orden: ", orderResponse.id);
            setOrderId(orderResponse.id)
            deleteEntireCart();
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            {
                (orderId) 
                ? (
                    <div>
                        <h1 className="brief--main-text">Pedido realizado exitosamente</h1>
                        <h2 className="brief--sub-text">Número de seguimiento: {orderId}</h2>
                    </div>
                )
                : (
                    <div>
                        <CheckoutForm
                            dataForm={dataForm}
                            handleChangeFormInput={handleChangeFormInput}
                            handleSubmitForm={handleSubmitForm}
                        />
                    </div>
                )
            } 
        </div>
        
    )
}

export default Checkout