import { ChangeEvent, useState } from "react";

interface FormData{
    email: string,
    name: string,
    edad: number
}

export const Formulario = ()=>{
    const [formulario, setformulario]= useState({
        email:"samuel@gmail.com",
        nombre:"Samuel Ángeles",
        edad:17
    })

    const handleChange = ({ target } : ChangeEvent<HTMLInputElement>) =>{
        const {name, value} =target;



      setformulario({
          ...formulario,
           [name]: value
      });
    }
    return(
        <form autoComplete="off">
            <div className ="mb-3">
                <label className="form-label">Email:</label>
                <input type= "email"
                        className="form-control" 
                        name="email"
                        value ={formulario.email}
                        onChange ={ handleChange}
                      />

            </div>


            <div className ="mb-3">
                <label className="form-label">Nombre:</label>
                <input type= "email"
                        className="form-control" 
                        name="nombre"
                        value={formulario.nombre}
                        onChange={handleChange}
                      />

            </div>

            <div className ="mb-3">
                <label className="form-label">Edad</label>
                <input type= "email"
                        className="form-control" 
                        name="edad"
                        value={formulario.edad}
                        onChange={handleChange}
                      />

            </div>
            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}