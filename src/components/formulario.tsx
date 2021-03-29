import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";


interface FormData{
email: string;
nombre: string;
edad: number;

}
export const Formulario = () => {


    const{ formulario, handIeChange } = useForm({
        email:'sterlinbuenosanchez26@gmail.com',
        nombre:'Sterlyn Bueno',
        edad: 17,
    }); 
    
    const{ email, nombre, edad } = formulario;

   // const[formulario,setformulario]=useState({
  //  email:'',
  //    nombre:''
 // });
    
    // const handIeChange = ({target}: ChangeEvent<HTMLInputElement>) =>{
    //    const{name, value}  = target;

      //  setformulario({
           // ...formulario,
         //   [name]: value 
       // });
     //}
     

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
               <input type="email"
               className="form-contrl"
               name="email"
               value={ email }
               onChange={  handIeChange }
               />

            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
               <input type="text"
               className="form-contrl"
               name="nombre"
               value={nombre}
               onChange={handIeChange }
               />

            </div>

            <div className="mb-3">
                <label className="form-label">Edad:</label>
               <input type="number"
               className="form-contrl"
               name="edad"
               value={edad }
               onChange={handIeChange }
               />

            </div>
         <pre>{ JSON.stringify(formulario) }</pre>
        </form>
    )
}