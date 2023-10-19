import '../../components/news_content/noticias.css';
import Graph from "../../components/graphics/graph";
import Graph2 from '../../components/graphics/graph2';
export default function Bienestar () {
    return (
        <>
            <div className="general-container">
                <div className="row responsive-columna">

                    <div className="col-lg-6">
                        <img src="https://geoapps.esri.co/recursos/smob/circulos/Componente Bienestar/3. Componente Ordenamiento Territorial-01.png" style={{width:"400px", height:"400px"}}
                        className='imagen-responsive'></img>
                    </div>

                    <div className="col-lg-6">
                        <div className="general-title">
                            Componente Bienestar
                        </div>

                        <div className="general-content text-responsive" style={{textAlign:"justify"}}>
                            Los instrumentos de ordenamiento territorial que históricamente se han
                            concebido, tienen el propósito de hacer de la Bogotá del presente una metrópolis
                            moderna capaz de albergar a millones de colombianos. Es imprescindible que la
                            ciudad les proporcione servicios públicos, salud, vivienda, movilidad y vías,
                            espacios públicos, esparcimiento y seguridad, y condiciones de habitabilidad
                            apropiadas, entre otros elementos vitales para lograr una vida plena y digna. En
                            este proceso, la capital del país ha sido entendida de diversas maneras, con
                            diversas ópticas, como lo reflejan las normas, acuerdos y decretos que en cada
                            etapa han sido desarrollados.
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <Graph />
            </div>
            <div >
                <Graph2 />
            </div>
        </>

    )

}