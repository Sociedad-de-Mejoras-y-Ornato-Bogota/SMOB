import './ComparacionCenso.css';
import GraficasComparacion from './GraficasComparacion';
function PiramidesComparacion() {


  return (
    <>
      <div style={{ minHeight: "65vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem 0" }}>
        <section className='title_section'  style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
          <h2 className='title_page'>Comparador pirámides de distribución por edad y sexo de Colombia y Bogotá por censo</h2>
          <p className="text_description">
            Para ver un conjunto de pirámides de distribución, haga clic sobre el ítem de su interés en la lista de opciones. Si desea comparar censos haga clic sobre “Comparador pirámides Colombia y Bogotá por censos.
            <br />
            Los censos disponibles corresponden a los años 1938, 1951, 1964, 1973, 1985, 1993, 2005 y 2018.
          </p>
        </section>
        <GraficasComparacion/>
      </div>
    </>


  );
}

export default PiramidesComparacion;