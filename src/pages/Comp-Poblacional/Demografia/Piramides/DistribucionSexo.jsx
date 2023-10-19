import { useState, useRef } from "react";
import './DistribucionSexo.css';
import GraficasDistribucion from "./GraficasDistribucion";
import GraficasDistribucionBogota from "./GraficasDistribucionBogota";


function PiramidesDistribucion() {
  let bogota = useRef()
  let colombia = useRef()
  let [bogotaActive, setBogotaActive] = useState(false)
  let [colombiaActive, setColombiaActive] = useState(false)

  const change = (type) => {
    if (type === "colombia") {
      setColombiaActive(!colombiaActive)
      setBogotaActive(false)
    }
    else if (type === "bogota") {
      setBogotaActive(!bogotaActive)
      setColombiaActive(false)
    }
  }

  return (
    <div className='general-container' >
      <div className='row responsive-columna' style={{ height: "12.5vh", width: "100vw", color: "black" }}>
        <div className='col-lg-2'></div>
        <div className='col-lg-8' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "24px" }}>
          <p style={{ color: "#762f0b" }} className="general-title">
            Pirámides de distribución por edad y sexo de Colombia o Bogotá
          </p>

        </div>
        <div className='col-lg-2'></div>

      </div>

      <div className='row' style={{ height: "12.5vh", width: "100vw", color: "black" }}>
        <div className='col-lg-2'></div>
        <div className='col-lg-8' style={{ display: "flex", flexDirection: "column", justifyContent: "center", color: "#762f0b", fontSize: "18px" }}>

          <p className="general-content text-responsive" style={{textAlign:"justify"}}>
            Para ver un conjunto de pirámides de distribución, haga clic sobre el ítem de su interés en las opciones de Colombia o Bogotá.
          </p>

          <p className="general-content text-responsive" style={{textAlign:"justify"}}>
            Los censos disponibles corresponden a los años 1938, 1951, 1964, 1973, 1985, 1993, 2005 y 2018.
          </p>
        </div>
        <div className='col-lg-2'></div>

      </div>
      <div className="row" style={{ height: "12.5vh", width: "100vw" }}>
        <div className="col-lg-12" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1vw" }}>
          <button className={`button-piramides medio f-14 ${colombiaActive ? "button-active" : "button-inactive"}`} onClick={() => change("colombia")} >Colombia</button>
          <button className={`button-piramides medio f-14 ${bogotaActive ? "button-active" : "button-inactive"}`} onClick={() => change("bogota")} >Bogotá</button>
        </div>
      </div>

      <div className='row responsive-columna' style={{ width: "100vw",height:"auto" }}>
        <div className="col-lg-12">
          {colombiaActive && <div className='distribucion-content' ref={colombia}>
            <GraficasDistribucion />
          </div>}

          {bogotaActive && <div className='distribucion-content' ref={bogota}>
            <GraficasDistribucionBogota />
          </div>}
        </div>

      </div>

      <div className="row" style={{height:"12.5vh",width:"100vw"}}>
        <div className="col-lg-12" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          {colombiaActive && <button style={{marginRight:"50vw"}} onClick={() => {
            document.querySelector(".series").scrollIntoView({ behavior: 'smooth' });
            change("bogota")
            alert("hola")
          }} className={`button-piramides-footer medio f-14 ${colombiaActive ? "button-active" : "button-inactive"}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="chevron_right">
                <path id="Vector" d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z" fill="#FDFDFD" />
              </g>
            </svg>

            Bogotá
          </button>}
          {bogotaActive && <button style={{marginLeft:"50vw"}}  onClick={() => {

            document.querySelector(".series").scrollIntoView({ behavior: 'smooth' });
            change("colombia")
          }} className={`button-piramides-footer f-14 medio ${bogotaActive ? "button-active" : "button-inactive"}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }}>
              <g id="chevron_right">
                <path id="Vector" d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z" fill="#FDFDFD" />
              </g>
            </svg >

            Colombia
          </button>}
        </div>
      </div>



    </div>
  );
}

export default PiramidesDistribucion;

