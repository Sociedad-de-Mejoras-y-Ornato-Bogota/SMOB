import data from "./ods.json";
import { useState } from "react";
import Page_principal from '../../components/page-principal/page-principal'
import './agendayods.css'

export default function AgendaYods() {
  const [modal, setModal] = useState(false);
  const [infoPresentacion, setinfoPresentacion] = useState(false);
  return (
    <>
    <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/MarcoInstitucional/0.1. ODS, NUEVA AGENDA URBANA, PLAN NACIONAL DE DESARROLLO, IDENTIDAD Y MEMORIA COLECTIVA..png" name_component="Nueva agenda urbana y los Objetivos de Desarrollo Sostenible" description_component="Las herramientas de planificación de la ciudad y los propiosmecanismos de participación ciudadana, tal vez como nunca antes en la historia, están enfrentados a fuerzas poderosas -domésticas y mundiales-, que desatan dinámicas urbanas signadas por la incertidumbre y el sufrimiento humano. ¿Cómo entender y manejar la complejidad acuciante de la ciudad moderna, ante los objetivos inaplazables de desarrollo sostenible?"/>

        <div   className="ods-div">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "3rem",
              padding:"2rem",
              width:"100%"
            }}
          >
            {modal && (
              <dialog open className="popup-container">
                <div className="popup-content3">
                <header>
                  <h4 style={{color:"#762f0b"}}>{infoPresentacion[0]}</h4>
                  <span
                    style={{
                      position: "absolute",
                      right: "0px",
                      top: "0px",
                      padding: "0.5vw",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setModal(!modal);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="40px"
                      height="40px"
                      fill="#91583b"
                    >
                      <g fill="#91583b" fill-rule="nonzero">
                        <g transform="scale(5.33333,5.33333)">
                          <path
                            transform="translate(24.00059,-9.94113) rotate(45.001)"
                            d="M21.5,4.5h5.001v39h-5.001z"
                          ></path>
                          <path
                            transform="translate(57.94113,24.00474) rotate(135.008)"
                            d="M21.5,4.5h5v39.001h-5z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                </header>
                <section>
                  <p style={{ fontSize:"1rem"}}>{infoPresentacion[1]}</p>
                </section>
                </div>

              </dialog>
            )}
            {data.map((item) => {
              return (
                <div
                  key={item.text}
                  className="card-ods"
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    style={{
                      height: "20vh",
                      width: "20vw",
                      marginBottom: "1vh",
                    }}
                    className="image-b"
                  />
                  <address className="publicaciones-card-title">
                    {item.title}
                  </address>
                  <button
                    className="mas-ods"
                    onClick={() => {
                      setinfoPresentacion([item.title, item.text]);
                      setModal(true);
                    }}
                  >
                    Conoce más
                  </button>
                </div>
              );
            })}
          </div>
        </div>
    </>
  );
}
