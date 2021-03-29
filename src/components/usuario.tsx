import { useState } from 'react';

interface user{
    uid: string;
    name: string;
}



export const Usuario = () => {
    const[User, setUser] = useState<user>();

const login =() => {
    setUser({
 uid: 'ABC123',
 name:'Sterlyn Bueno'
    });
}


return(
<div className="nt-5">
<h3>Usuario: useState</h3>

<button
 onClick={ login }
    className="btn btn-outline-primary">
        login
</button>

{
    (!User) 
    ? <pre> No hay un usuario </pre>
    : <pre> { JSON.stringify(User) }</pre>
}


</div>

)

}