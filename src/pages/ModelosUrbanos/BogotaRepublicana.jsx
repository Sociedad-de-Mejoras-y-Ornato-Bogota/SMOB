import Pronto from '../../components/Not found/ComingSoon'
function BogotaRepublicana() {
    return (
        <>
            <div className="general-container">
                <div className="row responsive-columna">
                    <div className="col-lg-6">
                        <div className="general-title">
                            Bogotá Republicana
                        </div>

                        <div className="general-content text-responsive" style={{ textAlign: "justify" }}>
                            {/* Los principios del Pensamiento Complejo (dialógico, recursivo y holístico), tal como los formalizó hace 40 años el gran sociólogo francés Edgar Morin, son perfectamente dúctiles para emprender la tarea de comprender la ciudad moderna. Ante el incesante flujo -circular, dinámico-, de causa y efecto a lo largo del tiempo, nos permiten ver de manera integrada los elementos claves: territorio, política pública, servicios, comunidad, tecnología, cambio climático y modelos de ocupación. */}

                        </div>

                    </div>

                    <div className="col-lg-6">

                        {/* <iframe src='https://geogeeks2.maps.arcgis.com/sharing/rest/content/items/82a54e8922f04b2dad08816cb2ce0b28/data'
                            style={{ width: "40vw", height: "60vh" }}
                            className='pdf-responsive'
                        ></iframe> */}
                        <Pronto />
                    </div>

                </div>
            </div>
        </>
    );
}
export default BogotaRepublicana;