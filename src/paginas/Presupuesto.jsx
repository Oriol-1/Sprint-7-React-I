import { useState,useEffect } from "react";

import Checkbox from "../components/Checkbox"
import Listadopresupuesto from "../components/Listadopresupuesto"


function Presupuesto(){

  const [presu, setPresu] = useState([]);
  const[presuss,setPresuss] = useState({});

  useEffect(() =>{
  const obtenerLS = () =>{
    const presuLS = JSON.parse(localStorage.getItem('presu'))?? [];

    setPresu(presuLS) 
  }
  obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('presu',JSON.stringify( presu ));
    
  }, [presu]);

  const eliminarPresupuesto =(id) => {
      const nuevoPresu = presu.filter((presu) => presu.id !== id);
      setPresu(nuevoPresu);
}


  return(
    <div className="container-fluid">
      <h1 className="text-primary fs-1 fw-bold mt-5 mb-5 text-center">Presupuesto</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0 mx-auto">
          <Checkbox 
            presu={presu}
            setPresu={setPresu}
            presuss={presuss}
            setPresuss={setPresuss}
          />
        </div>
        <div className="col-lg-6 col-md-6 d-flex flex-column ms-1 ms-lg- mx-auto">
          <Listadopresupuesto 
            presu={presu}
            setPresuss={setPresuss}
            eliminarPresupuesto={eliminarPresupuesto}
          />
        </div>
      </div>
    </div>
  );
}

export default Presupuesto;
