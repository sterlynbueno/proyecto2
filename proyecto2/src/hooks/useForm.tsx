import { ChangeEvent } from "react";
import { useState } from "react";

export const useForm =(initState:any)=>{
    
        const [formulario, setformulario]= useState(initState)
    
        const handleChange = ({ target } : ChangeEvent<HTMLInputElement>) =>{
            const {name, value} =target;
    
    
    
          setformulario({
              ...formulario,
               [name]: value
          });
        }
        return{
            formulario,
            handleChange
        }
    }
