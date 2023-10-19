import '../General.css';

export default function EstruturaAdmin() {
  return (
    <>
      <div className="general-container">
        <br></br>
        <div className="row responsive-columna">

          <div className="col-lg-6">
            <div className="general-title">
              Evolución de la estructura administrativa de Bogotá desde su fundación hasta el año 2021
            </div>

          </div>

          <div className="col-lg-6">

            <iframe src='https://geogeeks2.maps.arcgis.com/sharing/rest/content/items/5fe7248b1f7c44dbbd46c048513e7426/data'
              style={{ width: "40vw", height: "60vh" }}
              className='pdf-responsive'
            ></iframe>

          </div>

        </div>
      </div>
    </>

  );
}