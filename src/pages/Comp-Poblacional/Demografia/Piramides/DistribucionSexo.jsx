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
    <>
      <div style={{ minHeight: "65vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "3rem" }}>
        <section className='title_section' >
          <h2 className='title_page'>Pirámides de distribución por edad y sexo de Colombia o Bogotá</h2>
          <p className="text_description">
            Para ver un conjunto de pirámides de distribución, haga clic sobre el ítem de su interés en las opciones de Colombia o Bogotá.
            <br />
            Los censos disponibles corresponden a los años 1938, 1951, 1964, 1973, 1985, 1993, 2005 y 2018. Adicionalmente, podrá consultar las piramides con datos proyectados para los años 2024 y 2035.
          </p>
        </section>
        <section className="button-section" style={{ display: "flex", gap: "3rem", width: "50%" }}>
          <button className={`${colombiaActive ? "button-active" : "button-inactive"}`} onClick={() => change("colombia")} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Colombia</button>
          <button className={`${bogotaActive ? "button-active" : "button-inactive"}`} onClick={() => change("bogota")} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Bogotá</button>
        </section>

        {colombiaActive && <div className='distribucion-content' ref={colombia}>
            <GraficasDistribucion />
          </div>}

          {bogotaActive && <div className='distribucion-content' ref={bogota}>
            <GraficasDistribucionBogota />
          </div>}

        <section className="footer-button-section" style={{marginTop:"3rem", display:"flex", width:"50%"}}>
          {colombiaActive && <button style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }} onClick={() => {
            document.querySelector(".title_section").scrollIntoView({ behavior: 'smooth' });
            change("bogota")

          }} className={`${colombiaActive ? "button-active" : "button-inactive"}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="chevron_right">
                <path id="Vector" d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z" fill="#FDFDFD" />
              </g>
            </svg>

            Bogotá
          </button>}
          {bogotaActive && <button style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }} onClick={() => {

            document.querySelector(".title_section").scrollIntoView({ behavior: 'smooth' });
            change("colombia")
          }} className={` ${bogotaActive ? "button-active" : "button-inactive"}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }}>
              <g id="chevron_right">
                <path id="Vector" d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z" fill="#FDFDFD" />
              </g>
            </svg >

            Colombia
          </button>}
        </section>
      </div>















  










    </>
  );
}

export default PiramidesDistribucion;

