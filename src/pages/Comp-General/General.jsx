
import './General.css';

function General() {

    return (
        <>
            <div className="general-container" >
                <div className="row responsive-columna">

                    <div className="col-lg-6">
                        <img src="https://geoapps.esri.co/recursos/SMOB/circulos/Componente Marco Institucional/Componente general-01.png" alt="imagen-general" style={{width:"600px", height:"600px"}} className='imagen-responsive'></img>
                    </div>

                    <div className="col-lg-6">
                        <div className="general-title">
                            Marco Institucional
                        </div> 

                        <div className="general-content">
                            {/* Texto */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default General