import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import InputCustom from "./InputCustom";
import { Modal } from "./Modall";

const Panell = (props) => {
  const [pagina, setPagina] = useLocalStorage("pagina", 0);
  const [idioma, setIdioma] = useLocalStorage("idioma", 0);
 

    const sumarPagina = () => {
    setPagina(pagina + 1);
    };
    const restarPagina = () => {
    if (pagina > 0) {
        setPagina(pagina - 1);
    }
    };
    const sumarIdioma = () => {
    setIdioma(idioma + 1);
    };
    const restarIdioma = () => {
    if (idioma > 0) {
        setIdioma(idioma - 1);
    }
    };

    const getOpciones = () => {
        return (pagina + idioma) * 30;
      };
      
      useEffect(() => {
        const opciones = getOpciones();
        props.setTotalOpciones(Math.max(opciones, 0));
        }, [pagina, idioma]);


        // riniciar a 0
        const reset = () => {
            setPagina(0);
            setIdioma(0);
          };
          useEffect(() => {
            reset();
            
          }, []);



          


  return (
    <div className="container">
      <div className="col-12 my-2 p-2 border border-secondary border-3 rounded-3">
        <div className="row align-items-center mb-1">
          <div className="col-12 col-lg-3 fw-bold mb-2">
            Numero de Paginas
          </div>
          <div className="col-9 col-lg-7">
            <InputCustom
              onChange={setPagina}
              suma={sumarPagina}
              resta={restarPagina}
              value={pagina}
            />
          </div>
          <div className="col-1">
            <Modal titulo={"Numero de paginas"} tipo={"paginas"} cantidad={pagina} />
          </div>
        </div>
        <div className="row align-items-center mb-2">
          <div className="col-12 col-lg-3 fw-bold mb-2">Numero de Idiomas</div>
          <div className="col-9 col-lg-7">
            <InputCustom
              onChange={setIdioma}
              suma={sumarIdioma}
              resta={restarIdioma}
              value={idioma}
            />
          </div>
          <div className="col-1">
            <Modal titulo={"Numero de idiomas"} tipo={"idiomas"} cantidad={idioma} />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Panell;
