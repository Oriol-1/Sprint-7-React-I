import { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Panell from "./Panell/Panell";


const Checkbox = ({ presu, setPresu, presuss, setPresuss}) => {
  const [nombre, setNombre] = useState("");
  const [cliente, setCliente] = useState("");
  const [input1, setInput1] = useLocalStorage("input1", false);
  const [input2, setInput2] = useLocalStorage("input2", false);
  const [input3, setInput3] = useLocalStorage("input3", false);

  const [totalOpciones, setTotalOpciones] = useState(0);
  const [total, setTotal] = useState(0);

  const [error, setError] = useState(false);
  const [inperror, setinperror] = useState(false);

useEffect(() => {
if(Object.keys(presuss).length > 0){
   setNombre(presuss.nombre)
   setCliente(presuss.cliente)
    setInput1(presuss.input1)
    setInput2(presuss.input2)
    setInput3(presuss.input3)
    setTotalOpciones(presuss.totalOpciones)
    setTotal(presuss.total)

}
}, [presuss])

  useEffect(() => {
    let sumaTotal = 0;
    input1 && (sumaTotal += 500);
    input2 && (sumaTotal += 300);
    input3 && (sumaTotal += 200);
    sumaTotal += totalOpciones; // se agrega el valor de totalOpciones
    setTotal(sumaTotal);
  }, [input1, input2, input3, totalOpciones]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (nombre.trim() === "" || cliente.trim() === "") {
      setError(true);
      return;
    } 
  
    if (!input1 && !input2 && !input3) {
      setinperror(true);
      return;
    }
  
    const datosPresupuesto = {
      nombre,
      cliente,
      input1,
      input2,
      input3,
      totalOpciones,
      total,
      fecha: new Date().toLocaleDateString(),
   
    };

    if(presuss.id){
    //    editamos el Registro
    datosPresupuesto.id = presuss.id
    const nuevoPresu = presu.map(presuState => presuState.id === presuss.id ? datosPresupuesto : presuState)
    setPresu(nuevoPresu)
    setPresuss({})
    }else{
    //    nuevo registro
    datosPresupuesto.id= generarId();
    setPresu([...presu, datosPresupuesto]);
    }
 
 
  
    if (nombre.trim() !== "" && cliente.trim() !== "" && (input1 || input2 || input3)) {
      setError(false);
      setinperror(false);
      setNombre("");
      setCliente("");
      setInput1(false);
      setInput2(false);
      setInput3(false);
      setTotalOpciones(0);
      setTotal(0);
    }
  };
      
//  si  setInput1 esta en false setTotalOpciones rinicia a 0
useEffect(() => {
    if (!input1 || !input2 || !input3) {
      setTotalOpciones(0);
    }
  }, [input1, input2, input3]);


    return (
        <div>
            <h2>Crea tu presupuesto</h2>
            <form
                onSubmit={handleSubmit}
                className="bg-light mt-5 border rounded shadow w-100 p-2 d-flex flex-column">
               
                <div className="m-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-check d-flex flex-column p-3">
                                <label htmlFor="nombre" className="d-flex flex-row align-items-center">
                                    Nombre
                                    <input
                                        id="nombre"
                                        className="form-control ms-5"
                                        type="text"
                                        name="input1"
                                        placeholder="Nombre"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </label>
                                <br />
                                <label htmlFor="cliente" className="d-flex flex-row align-items-center">
                                    Presupuesto Cliente
                                    <input
                                        id="cliente"
                                        className="form-control ms-2"
                                        type="text"
                                        name="input1"
                                        placeholder="cliente"
                                        value={cliente}
                                        onChange={(e) => setCliente(e.target.value)}
                                    />
                                </label>
                                <br />
                                <label className="mb-1 p-2">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        name="input1"
                                        checked={input1}
                                        onChange={(e) => setInput1(e.target.checked)}
                                    />
                                    Una pagina web (500€)
                                </label>
                                <br />
                                {input1 && <Panell setTotalOpciones={setTotalOpciones} />}
                                <label className="mb-1 p-2">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        name="input2"
                                        checked={input2}
                                        onChange={(e) => setInput2(e.target.checked)}
                                    />
                                    Una consultoria SEO (300€)
                                </label>
                                <br />
                                <label className="mb-1 p-2">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        name="input3"
                                        checked={input3}
                                        onChange={(e) => setInput3(e.target.checked)}

                                    />
                                    Una campaña de Google Ads (200€)
                                </label>
                                <br />
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        <p>Total:{total} €</p>
                                    </div>
                                </div>
                                <input
                                    className="btn btn-primary hover:bg-red-500 mx-auto p-2 w-100 rounded shadow m-2"
                                    type="submit"
                                    value={presuss.id? "Editar Presupuesto" : "Crear Presupuesto"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {error ? <p className="alert alert-danger">Los campos nombre y presupuesto son obligatorios</p> : null || 
                inperror ? <p className="alert alert-danger">Debes seleccionar al menos un servicio</p> : null}
 
            </form>
        </div>
    )
    
}

export default Checkbox
