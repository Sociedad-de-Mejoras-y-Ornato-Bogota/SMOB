import React, { useState } from 'react';

// import './popUp.css';

const Popup = ({ onClose }) => {
    const [page, setPage] = useState(1)
    return (
        <div className="popup-container">
            <div className="popup-content2">
                <button className="close-button" onClick={onClose}></button>
                {page == 1 && <>
                    <img src="https://www.arcgis.com/sharing/rest/content/items/9ae00ad4ed1041c0961d1cd8ca451cfe/resources/images/widget_2423/1694745204628.gif?token=Jb2JaFHvtGVBscS7dfZDRVS3vM2PuGOMp9QkwaaZG73XzgvYurIyrzEE7LCCUyhdMkT8_C3cp0H5pjLp6lLd3s0D9--1kzdiGmLZfuSQd8eDtwOrSAIUjGXrQOh4jVw3KJ5bdiPX40pjf8FbPw1jQbBIM53SuPhoSAiF1MuW1XpCbmGha7Cm5vrqOBJ69qv_EtUld_8s9CNApJWRtUFGV9i5e7s11_-SSRXugCESvdI." alt="Imagen" />
                    <br />
                    <center>  <p style={{color:"#762f0b"}}>Al ingresar a la sección de evolución de huella urbana primero se visualiza la línea de tiempo de la huella urbana. </p></center>
                </>}
                {page == 2 && <>
                    <img src="https://www.arcgis.com/sharing/rest/content/items/9ae00ad4ed1041c0961d1cd8ca451cfe/resources/images/widget_2426/1694746180035.gif?token=Jb2JaFHvtGVBscS7dfZDRVS3vM2PuGOMp9QkwaaZG73XzgvYurIyrzEE7LCCUyhdMkT8_C3cp0H5pjLp6lLd3s0D9--1kzdiGmLZfuSQd8eDtwOrSAIUjGXrQOh4jVw3KJ5bdiPX40pjf8FbPw1jQbBIM53SuPhoSAiF1MuW1XpCbmGha7Cm5vrqOBJ69qv_EtUld_8s9CNApJWRtUFGV9i5e7s11_-SSRXugCESvdI." alt="Imagen" />
                    <br />
                    <center>  <p style={{color:"#762f0b"}}>En la barra superior puede navegar entre los diferentes periodos cartográficos donde encontrará el plano digitalizado, los puntos de expansión, el crecimiento y los indicadores urbanísticos para cada uno de ellos.  </p></center>
                </>}
                {page == 3 && <>
                    <img src="https://www.arcgis.com/sharing/rest/content/items/9ae00ad4ed1041c0961d1cd8ca451cfe/resources/images/widget_1272/1694746637304.gif?token=Jb2JaFHvtGVBscS7dfZDRVS3vM2PuGOMp9QkwaaZG73XzgvYurIyrzEE7LCCUyhdMkT8_C3cp0H5pjLp6lLd3s0D9--1kzdiGmLZfuSQd8eDtwOrSAIUjGXrQOh4jVw3KJ5bdiPX40pjf8FbPw1jQbBIM53SuPhoSAiF1MuW1XpCbmGha7Cm5vrqOBJ69qv_EtUld_8s9CNApJWRtUFGV9i5e7s11_-SSRXugCESvdI." alt="Imagen" />
                    <br />
                    <center>       <p style={{color:"#762f0b"}}>Haga clic en la imagen del plano escaneado para poder ver el plano digitalizado por la Sociedad de Mejoras y Ornato de Bogotá. </p></center>
                </>}
                {page == 4 && <>
                    <img src="https://www.arcgis.com/sharing/rest/content/items/9ae00ad4ed1041c0961d1cd8ca451cfe/resources/images/widget_2429/1694747209257.gif?token=Jb2JaFHvtGVBscS7dfZDRVS3vM2PuGOMp9QkwaaZG73XzgvYurIyrzEE7LCCUyhdMkT8_C3cp0H5pjLp6lLd3s0D9--1kzdiGmLZfuSQd8eDtwOrSAIUjGXrQOh4jVw3KJ5bdiPX40pjf8FbPw1jQbBIM53SuPhoSAiF1MuW1XpCbmGha7Cm5vrqOBJ69qv_EtUld_8s9CNApJWRtUFGV9i5e7s11_-SSRXugCESvdI." alt="Imagen" />
                    <br />
                    <center>       <p style={{color:"#762f0b"}}>Puede usar el menú en cada periodo cartográfico para navegar entre el cambio de la huella urbana, los puntos de expansión y los indicadores urbanísticos. El botón ubicado en la esquina inferior derecha lo retornara nuevamente al menú mencionado.   </p></center>
                </>}
                {page == 5 && <>
                    <img src="https://www.arcgis.com/sharing/rest/content/items/9ae00ad4ed1041c0961d1cd8ca451cfe/resources/images/widget_1415/1694747836080.gif?token=Jb2JaFHvtGVBscS7dfZDRVS3vM2PuGOMp9QkwaaZG73XzgvYurIyrzEE7LCCUyhdMkT8_C3cp0H5pjLp6lLd3s0D9--1kzdiGmLZfuSQd8eDtwOrSAIUjGXrQOh4jVw3KJ5bdiPX40pjf8FbPw1jQbBIM53SuPhoSAiF1MuW1XpCbmGha7Cm5vrqOBJ69qv_EtUld_8s9CNApJWRtUFGV9i5e7s11_-SSRXugCESvdI." alt="Imagen" />
                    <br />
                    <center>           <p style={{color:"#762f0b"}}>En cambio de huella urbana puede observar el crecimiento entre periodos consecutivos. De clic en el botón Ver cambio huella urbana para activar la comparación. Mueva el cursor sostenido horizontalmente para observar el cambio en la huella urbana de los años comparados.   </p></center>
                </>}
                {page == 6 && <>
                    <img src="https://www.arcgis.com/sharing/rest/content/items/9ae00ad4ed1041c0961d1cd8ca451cfe/resources/images/widget_1424/1694748634779.gif?token=Jb2JaFHvtGVBscS7dfZDRVS3vM2PuGOMp9QkwaaZG73XzgvYurIyrzEE7LCCUyhdMkT8_C3cp0H5pjLp6lLd3s0D9--1kzdiGmLZfuSQd8eDtwOrSAIUjGXrQOh4jVw3KJ5bdiPX40pjf8FbPw1jQbBIM53SuPhoSAiF1MuW1XpCbmGha7Cm5vrqOBJ69qv_EtUld_8s9CNApJWRtUFGV9i5e7s11_-SSRXugCESvdI." alt="Imagen" />
                    <br />
                    <center>    <p style={{color:"#762f0b"}}>Para visualizar los puntos de expansión de la huella urbana en los años comparados, desplácese hacia abajo para explorar cada uno de ellos.  </p></center>
                </>}
                <center>
                    <button style={{backgroundColor:"transparent", border:"none", color:"#762f0b", fontWeight:"bold"}} onClick={() => {
                        if (page > 1) {
                            setPage(page - 1)
                        }
                    }}>{"<"}</button>
                    {page}
                    <button style={{backgroundColor:"transparent", border:"none", color:"#762f0b", fontWeight:"bold"}} onClick={() => {
                        if (page < 6) {
                            setPage(page + 1)
                        }
                    }}>{">"}</button></center>
            </div>

        </div>
    );
};

export default Popup;
