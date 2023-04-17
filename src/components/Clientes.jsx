import React from 'react';

const Clientes = ({ presu, setPresuss, eliminarPresupuesto}) => {

  const { nombre, cliente, input1, input2, input3, fecha, total, id } = presu;

  const handleEliminar =() => {
    const repuesta = 
    window.confirm(`¿Estás seguro de eliminar el presupuesto de ${nombre}?`);
    if (repuesta) {
      eliminarPresupuesto(id);
    }
  }
  return (
    <tr>
      <td>{nombre}</td>
      <td>{cliente}</td>
      <td className="text-center">{input1 ? "Sí" : "No"}</td>
      <td className="text-center">{input2 ? "Sí" : "No"}</td>
      <td className="text-center">{input3 ? "Sí" : "No"}</td>
      <td>{presu.id}</td>
      <td>{fecha}</td>
      <td>{total}</td>
      <td>
        <div className="btn-group">
          <button
            type='button'
            className='btn btn-danger mx-2'
            onClick={() => {setPresuss(presu)}}
          >
            Editar
          </button>
          <button
            type='button'
            className='btn btn-danger mx-2'
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Clientes;
