const Proyecciones = () => {
  return (
    <>
      <div className="general-container">
        <div className="row responsive-columna">
          <div className="col-lg-6">
            <div className="general-title">Proyecciones de población</div>

            <div
              className="general-content text-responsive"
              style={{ textAlign: "justify" }}
            >
              {/* texto */}
            </div>
          </div>

          <div className="col-lg-6">
            <iframe
              src="https://www.youtube.com/embed/PcWDpkTmoHY"
              style={{ width: "40vw", height: "50vh" }}
              className="pdf-responsive"
            ></iframe>
          </div>
        </div>
        <div className="row" style={{ width: "100vw", height: "auto" }}>
          <div className="col-lg-12">
            <iframe
              src=" https://www.arcgis.com/apps/dashboards/7ee3a26da8d64108ad58b55f25645c8c"
              className="dashboards"
              style={{ width: "100%", height: "80vh" }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyecciones;
