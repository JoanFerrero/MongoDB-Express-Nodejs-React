import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

function EditarUsuarios(){

    const params = useParams()
    
    //Hocks
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    
    const navegar = useNavigate()

    useEffect(() => {
        axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.id})
          .then(res => {
            const dataUser = res.data[0]
            setNombre(dataUser.nombre)
            setEmail(dataUser.email)
            setTelefono(dataUser.telefono)
          })
    }, [])

    //Funcion editar
    function editarUsuario(){
        var updateUsuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: params.id
        }
        
        axios.post('/api/usuario/actualizausuario', updateUsuario)
          .then(() => {
            Swal.fire("Felicidades",`El usuario ${updateUsuario.nombre} se borro con exito.`)
            navegar('/')
          })
        
    }

    return(
        <div className="container">
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <h2>Editar Usuario {params.idusuario}</h2>
                </div>
            </div>
            <form>
                <div className='row'>
                    <div className='col-sm-6 offset-3'>
                        <div className='mb-3'>
                            <label htmlFor='nombre' className='form-label'>Nombre</label>
                            <input type='text' className='form-control' value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input type='text' className='form-control' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='telefono' className='form-label'>Telefono</label>
                            <input type='text' className='form-control' value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></input>
                        </div>

                        <button type="button" className='btn btn-success' onClick={editarUsuario}>Editar Usuario</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditarUsuarios