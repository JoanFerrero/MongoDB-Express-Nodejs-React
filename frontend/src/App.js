import AgregarUsuarios from './AgregarUsuarios';
import './App.css';
import EditarUsuarios from './EditarUsuario';
import ListaUsuarios from './ListaUsuarios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a className="navbar-brand" href="/">Crud Mern Stack</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Agregar Usuario</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuarios/>} exact></Route>
          <Route path='/agregarusuario' element={<AgregarUsuarios/>} exact></Route>
          <Route path='/editarusuario/:id' element={<EditarUsuarios/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
