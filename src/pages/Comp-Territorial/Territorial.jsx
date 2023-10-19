
import '../../components/news_content/noticias.css';
const Territorial = () => {
    return (
        <>
            <div className="general-container">
                <div className="row responsive-columna">

                    <div className="col-lg-6">
                        <img src="https://geoapps.esri.co/recursos/smob/circulos/Componente Territorial/COMPONENTE TERRITORIO-01.png"  style={{width:"400px", height:"400px"}}
                        className='imagen-responsive'></img>
                    </div>

                    <div className="col-lg-6">
                        <div className="general-title">
                            Componente Territorial
                        </div>

                        <div className="general-content text-responsive" style={{ textAlign: "justify" }}>
                            El territorio donde fue establecida la pequeña aldea que con el paso de los
                            años llegaría a ser la capital de la nación, se expandió y se transformó
                            incesantemente, a medida que su población aumentaba y que ella misma lo
                            afectaba. Se trató de un proceso de siglos, a lo largo del cual el ente geográfico
                            que iba naciendo tuvo diversas facetas políticas y administrativas, a tono con los
                            avatares de nuestra historia nacional. En este panorama, son de importancia
                            mayor, además, asuntos como la riqueza hídrica, el sistema de ambiental, la
                            evolución de la cartografía (incluyendo el componente digital y la geo
                            referenciación), y los índices y variables claves del crecimiento poblacional.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Territorial;