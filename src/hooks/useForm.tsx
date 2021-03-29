import { ChangeEvent, useState } from "react";

export function useForm<T>(initState:T){

// export const useForm =(initState: any)=>{

    const[formulario,setformulario]=useState(initState);
   

    const handIeChange = ({target}: ChangeEvent<HTMLInputElement>) =>{
       const{name, value}  = target;

       setformulario({
           ...formulario,
           [name]: value 
       });
    }
    return{
        formulario,
        handIeChange
    }

}