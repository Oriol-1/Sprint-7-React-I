import React, { useState, useEffect } from 'react';
import Clientes from './Clientes';

const Listadopresupuesto = ({ presu, setPresuss, eliminarPresupuesto }) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [presuList, setPresuList] = useState([]);



  useEffect(() => {
    setPresuList(presu);
  }, [presu]);

  const handleSortByName = () => {
    const sortedPresu = [...presuList].sort((a, b) => a.nombre.localeCompare(b.nombre));
    setPresuList(sortedPresu);
    setSortOrder('name');
  }

  const handleSortByDate = () => {
    const sortedPresu = [...presuList].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    setPresuList(sortedPresu);
    setSortOrder('date');
  }

  const handleResetSort = () => {
    setPresuList(presu);
    setSortOrder(null);
  }

  return (
    <div className="container">
      {presuList.length ? (
        <h2 className="text-center mt-5">Listado de Presupuestos
          <span className="badge bg-secondary ms-2">Nº{presuList.length} </span>
        </h2>
      ) : (
        <h2 className="text-center mt-5">No hay presupuestos (introduce presupuesto)</h2>
      )}
      <br />
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <button className="btn btn-primary me-2" onClick={handleSortByName}>Ordenar por nombre</button>
          <button className="btn btn-primary me-2" onClick={handleSortByDate}>Ordenar por fecha</button>
          {sortOrder !== null && <button className="btn btn-secondary" onClick={handleResetSort}>Reinicializar orden</button>}
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => window.print()}>Imprimir</button>
        </div>
      </div>
      <div className="table-responsive-sm table-responsive-md mt-5">
        <table className="table table-striped w-100">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Presupuesto Cliente</th>
              <th className="text-center" scope="col">Web (500€)</th>
              <th className="text-center" scope="col">Consultoria SEO (300€)</th>
              <th className="text-center" scope="col">Google Ads(200€)</th>
              <th scope="col">ID</th>
              <th scope="col">Fecha</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {presuList.map(p => (
              <Clientes
                key={p.id}
                presu={p}
                setPresuss={setPresuss}
                eliminarPresupuesto={eliminarPresupuesto}
                // setPresu={setPresu}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listadopresupuesto;
