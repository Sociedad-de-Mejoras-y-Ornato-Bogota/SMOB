
export default function LineaTiempoiEA() {
  return (
    <div className="general-container">
      <div
        className="row"
        style={{ height: "12.5vh", width: "100vw", color: "black" }}
      >
        <div className="col-lg-2"></div>
        <div
          className="col-lg-8"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          <p style={{ color: "#762f0b" }} className="general-title">
            Línea del tiempo Estructura Administrativa de Bogotá
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>

      <div className="row" style={{ width: "100vw", height: "auto" }}>
        <div className="col-lg-12">
          <iframe
            src="https://storymaps.arcgis.com/stories/b0e0c6d0807146b7baa9cc8d3cb69054"
            className="dashboards"
            style={{ width: "100%", height: "80vh" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
