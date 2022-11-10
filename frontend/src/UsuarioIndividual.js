import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'

function UsuarioIndividual({user}){

    const navegar = useNavigate()

    //Para animacion de scroll al bajar
    useEffect(() => {
        AOS.init()
    }, [])
    


    //Funcion borra usuario
    function borrarusuario(id, nombre){
        console.log(id)
        axios.post('/api/usuario/borrarusuario', {idusuario: id})
        .then(() => {
          Swal.fire("Felicidades",`El usuario ${nombre} se modifico con exito.`)
          navegar('/')
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3' data-aos="flip-right">
                    <ul className='list-group'>
                        <li className="list-group-item">{user.id}</li>
                        <li className="list-group-item">{user.nombre}</li>
                        <li className="list-group-item">{user.email}</li>
                        <li className="list-group-item">{user.telefono}</li>
                    </ul>

                    <Link to={`/editarusuario/${user.id}`}><li className='btn btn-success'>Editar</li></Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={() => {borrarusuario(user.id, user.nombre)}}>Borrar</button>
                    <hr className='mt-4'></hr>
                </div>
            </div>
        </div>
    )
}

export default UsuarioIndividual