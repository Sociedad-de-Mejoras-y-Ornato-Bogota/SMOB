
import '../infraestructura.css'

const Equipamientos = () => {
  return (
    <div className='general-container'>
      <div className='row responsive-column' style={{ height: "12.5vh", width: "100vw", color: "black" }}>
        <div className='col-lg-2'></div>
        <div className='col-lg-8' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "24px" }}>
          <p style={{ color: "#762f0b" }}>
            Equipamientos
          </p>

        </div>
        <div className='col-lg-2'></div>

      </div>

      <div className='row' style={{height:"auto"}}>
        <div className="col-lg-12" style={{height:"80vh"}}>
          <iframe
            src='https://experience.arcgis.com/experience/4ea28cc4a9c3408aa81128490520201e/'
            className='dashboards'
            style={{ width: "100vw", height: "80vh" }}
          ></iframe>
        </div>

      </div>



    </div>
  );
};
export default Equipamientos;