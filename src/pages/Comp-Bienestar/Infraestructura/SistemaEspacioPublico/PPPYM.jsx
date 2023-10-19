import '../infraestructura.css'


const Pppym = () => {
  return (
    <div className='general-container'>
      <div className='row responsive-columna' style={{ height: "12.5vh", width: "100vw", color: "black" }}>
        <div className='col-lg-2'></div>
        <div className='col-lg-8' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "24px" }}>
          <p style={{ color: "#762f0b" }}>
            Plazas, Plazoletas, Parques y Monumentos
          </p>

        </div>
        <div className='col-lg-2'></div>

      </div>

      <div className='row' style={{ width: "100vw",height:"97vh" }}>
        <div className="col-lg-12" style={{height:"97vh"}}>
          <iframe
            src='https://experience.arcgis.com/experience/d530eb788fe34cc89a21ef2d1a02dfe3/'
            className='dashboards'
            style={{ width: "100%",height:"95vh" }}
          ></iframe>
        </div>

      </div>



    </div>
  );
};
export default Pppym;