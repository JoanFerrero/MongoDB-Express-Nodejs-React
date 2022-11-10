import { useState }  from 'react'
import uniqid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function AgregarUsuarios(){

    //Hocks
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    const navegar = useNavigate()

    function agregarUsuario() {
        var usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: uniqid()
        }
        
        axios.post('/api/usuario/agregarusuario', usuario)
          .then(() => {
            Swal.fire("Felicidades",`El usuario ${usuario.nombre} se creo con exito.`)
            navegar('/')
          })
          .then(err => {console.log(err)})
        
    }
    
    return(
        <div className="container">
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <h2>Crear un nuevo usuario</h2>
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

                        <button type="button" className='btn btn-success' onClick={agregarUsuario}>Guardar Usuario</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AgregarUsuarios