import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <main className='main'>
      Solucion de la prueba tecnica desarrollada por Carlos Alberto Manso Cid<br/>
      <strong>urls disponibles:</strong><br/>
      <Link to='/login'>/login</Link>(pruebe con cualquier correo/contrasena)<br/>
      <Link to='/signup'>/signup</Link> (sin funcionalidad real)<br/>
      <Link to='/dashboard'>/dashboard</Link> (ruta protegida, debe estar logueado)<br/>
      <Link to='#'>/dashboard/dm/:id</Link> (ruta protegida, debe estar logueado, debe acceder por un enlace de mensajeria directa)<br/>

    </main>
  );
}

export default App;
