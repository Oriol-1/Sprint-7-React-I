import React from 'react'


export const Modal = ({titulo, tipo, cantidad}) => {

    
  return (
    <>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${tipo}`}>
            ?
        </button>

        <div className="modal fade" id={`staticBackdrop${tipo}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{titulo}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>El numero de {tipo} es: {cantidad}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </>
       
  )
}