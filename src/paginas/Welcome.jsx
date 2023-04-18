import React from "react";
import { Link } from 'react-router-dom';



function Welcome() {
  return (
    <div className="container-fluid bg-light welcome-container d-flex justify-content-center align-items-center">
      <div className="row d-flex justify-content-center align-items-center text-center">
        <div className="col-md-6 align-self-center d-flex flex-column justify-content-center mt-5">
          <h1>Bienvenido/a a nuestro sitio web</h1>
          <p>Explora nuestros servicios y encuentra el plan que se adapte a tus necesidades.</p>
          <div className="text-center">
            <Link to="/presupuesto">
              <button className="btn btn-primary btn-lg mt-5">Solicitar Presupuesto</button>
            </Link>
          </div>
        </div>
        
       
      </div>
    </div>
  );
}
export default Welcome;