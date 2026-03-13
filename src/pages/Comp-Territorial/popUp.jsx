import React, { useState } from 'react';


const Popup = ({ onClose }) => {
    const [page, setPage] = useState(1)
    return (
        <div className="popup-container">
            <div className="popup-content2">
                <button className="close-button" onClick={onClose}></button>
                {page == 1 && <>
                    <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Gif+instrucciones+huella+urbana+DEF/Paso+1+1.gif" alt="Imagen" />
                    <br />
                    <center style={{padding:"0 3rem"}}>  <p style={{color:"#762f0b"}}>Al ingresar a la sección de evolución de huella urbana primero se visualiza la línea de tiempo de la huella urbana. </p></center>
                </>}
                {page == 2 && <>
                    <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Gif+instrucciones+huella+urbana+DEF/Paso+2+1.gif" alt="Imagen" />
                    <br />
                    <center style={{padding:"0 3rem"}}> <p style={{color:"#762f0b"}}>En la barra superior puede navegar entre los diferentes periodos cartográficos donde encontrará el plano digitalizado, los puntos de expansión, el crecimiento y los indicadores urbanísticos para cada uno de ellos.  </p></center>
                </>}
                {page == 3 && <>
                    <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Gif+instrucciones+huella+urbana+DEF/Paso+3+1.gif" alt="Imagen" />
                    <br />
                    <center style={{padding:"0 3rem"}}>       <p style={{color:"#762f0b"}}>Haga clic en la imagen del plano escaneado para poder ver el plano digitalizado por la Sociedad de Mejoras y Ornato de Bogotá. </p></center>
                </>}
                {page == 4 && <>
                    <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Gif+instrucciones+huella+urbana+DEF/Paso+4+1.gif" alt="Imagen" />
                    <br />
                    <center style={{padding:"0 3rem"}}>       <p style={{color:"#762f0b"}}>Puede usar el menú en cada periodo cartográfico para navegar entre el cambio de la huella urbana, los puntos de expansión y los indicadores urbanísticos. Retorne a este menú con el botón inferior derecho.   </p></center>
                </>}
                {page == 5 && <>
                    <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Gif+instrucciones+huella+urbana+DEF/Paso+5+1.gif" alt="Imagen" />
                    <br />
                    <center style={{padding:"0 3rem"}}>           <p style={{color:"#762f0b"}}>De clic en el botón Ver cambio huella urbana para activar la comparación con el periodo anterior. Mueva el cursor sostenido horizontalmente para observar el cambio.   </p></center>
                </>}
                {page == 6 && <>
                    <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Gif+instrucciones+huella+urbana+DEF/Paso+6+1.gif" alt="Imagen" />
                    <br />
                    <center style={{padding:"0 3rem"}}>    <p style={{color:"#762f0b"}}>Para visualizar los puntos de expansión de la huella urbana en los años comparados, desplácese hacia abajo para explorar cada uno de ellos.  </p></center>
                </>}
                {page == 7 && <>
                    <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Gif+instrucciones+huella+urbana+DEF/Paso+7+1.gif" alt="Imagen" />
                    <br />
                    <center style={{padding:"0 3rem"}}>    <p style={{color:"#762f0b"}}>Puede interactuar con los mapas utilizando las herramientas de capas, mapa base, zoom y norte.  </p></center>
                </>}
                <center style={{display:"flex", gap:"3rem", alignItems:"center", justifyContent:"center"}}>
                    <button style={{backgroundColor:"transparent", border:"none", color:"#762f0b", fontWeight:"bold"}} onClick={() => {
                        if (page > 1) {
                            setPage(page - 1)
                        }
                    }}>{"<"}</button>
                    {page}
                    <button style={{backgroundColor:"transparent", border:"none", color:"#762f0b", fontWeight:"bold"}} onClick={() => {
                        if (page < 7) {
                            setPage(page + 1)
                        }
                    }}>{">"}</button></center>
            </div>

        </div>
    );
};

export default Popup;
