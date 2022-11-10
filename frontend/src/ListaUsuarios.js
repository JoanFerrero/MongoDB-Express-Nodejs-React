import React ,{ useEffect, useState }  from 'react'
import UsuarioIndividual from './UsuarioIndividual'
import axios from  'axios'

function ListaUsuarios(){

    const [datausuarios, setdatausuario] = useState([])

    useEffect(() => {
        axios.get('/api/usuario/obtenerusuarios').then(res => {
            setdatausuario(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    
    //Mapear Lista
    
    const listausuarios = datausuarios.map(user => {
        return(
            <div>
                <UsuarioIndividual user={user}/>
            </div>
        )
    })

    return(
        <div>
            <h2>Lista de Usuarios</h2>
            {listausuarios}
        </div>
    )
}

export default ListaUsuarios