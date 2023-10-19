
// import Noticias from "../../components/news_content/noticias";
import '../../components/news_content/noticias.css';
function ConstruyendoCivilidad() {
    return (
            <>
            <div className="general-container">
                <div className="row responsive-columna">
    
                    <div className="col-lg-6">
                    <img src="https://geoapps.esri.co/recursos/smob/circulos/Construyendo-civilidad.png" style={{width:"400px", height:"400px"}}className='imagen-responsive'></img>
                    </div>
    
                    <div className="col-lg-6">
                        <div className="general-title">
                        Construyendo civilidad
                        </div> 
    
                        <div className="general-content text-responsive" style={{textAlign:"justify"}}>
                        La civilidad, es decir, la savia vital de la conducta ciudadana, se construye gradualmente, desde el origen mismo de la ciudad, y es el requisito para que exista un futuro colectivo y promisorio. El proceso de crecimiento de Bogotá ha fraguado en una sociedad altamente compleja, que se intenta descifrar y analizar desde la perspectiva del llamado Pensamiento complejo. La memoria colectiva se constituye en una fuerza poderosa capaz de tejer profundos lazos de respeto y solidaridad.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ConstruyendoCivilidad;