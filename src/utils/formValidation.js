import { object, string } from "yup";
import * as Yup from "yup";

// Vale la pena mencionar que phone no se puede trabajar como number debido a que las validaciones .min y .max miden el valor y no el length
// El workaround es solicitar string y limitar a números

let userSchema = object ({
    fullname: 
        string("El nombre sólo admite letras")
        .required("El nombre es obligatorio"),
    phone: 
        string("El número telefónico debe ser un texto")
        .matches(/^\d{9}$/, "El número de teléfono debe tener exactamente 9 dígitos y sólo números")
        .required("El número de teléfono es obligatorio"),
    email:
        string("El correo electrónico sólo admite letras y símbolos")
        .email("El correo electrónico debe tener formato usuario@servidor.com")
        .required("El correo electrónico es obligatorio"),
    email2:
        string("El correo electrónico sólo admite letras y símbolos")
        .email("El correo electrónico debe tener formato usuario@servidor.com")
        .oneOf([Yup.ref("email"), null], "Los correos electrónicos no coinciden")
        .required("El correo electrónico es obligatorio"),
})

const formValidation = async(dataForm) => {
    try {
        await userSchema.validate(dataForm);
        return {
            status: "success", 
            message: "Validaciones correctas"
        }
    }
    catch (error) {
        return {
            status: "error",
            message: error.message
        }
    }
}

export default formValidation