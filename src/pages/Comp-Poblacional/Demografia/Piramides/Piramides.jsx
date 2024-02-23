import Page_principal from "../../../../components/page-principal/page-principal"
import { Link } from 'react-router-dom';
import './Piramides.css'
function Piramides() {
  return (
    <>
      <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/circulos/Componente Poblacional/1.1. Estructura demográfica-01.png" name_component="Comparador pirámides de distribución por edad y sexo de Colombia y Bogotá por censo." description_component="               Para ver un conjunto de pirámides de distribución, haga clic sobre el ítem de su interés en la lista de opciones. Si desea comparar censos haga clic sobre “Comparador pirámides Colombia y Bogotá por censos. <br/>
               Los censos disponibles corresponden a los años 1938, 1951, 1964, 1973, 1985, 1993, 2005 y 2018."/>
    <div className="contenedorP">
        <div className="botonesP">
          <Link to={`/Componente poblacional/Demografía/Pirámides de distribución por edad y sexo/Pirámides de distribución por edad y sexo de Colombia o Bogotá`} className="botonP">Pirámides de distribución por edad y sexo de Colombia o Bogotá</Link>
          <Link to={`/Componente poblacional/Demografía/Pirámides de distribución por edad y sexo/Comparador pirámides Colombia y Bogotá por censos`} className="botonP">Comparador pirámides Colombia y Bogotá por censos</Link>
        </div>
    </div>
    </>
  );
}

export default Piramides