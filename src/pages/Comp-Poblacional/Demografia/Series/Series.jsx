import { useRef } from "react";
import "./Series.css";

const Series = () => {
  const seriesRef = useRef(null);

  return (
    <div className="general-container" ref={seriesRef}>
      <div
        className="row responsive-columna"
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
          <p style={{ color: "#762f0b", paddingTop: "3vh" }}>
            Series de población
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>

      <div className="row" style={{ width: "100vw", height: "auto" }}>
        <div className="col-lg-12">
          <iframe
            src="https://www.arcgis.com/apps/dashboards/60d645f0e5be4965a03daadaafbc945e"
            referrerPolicy="origin"
            style={{ width: "100%", height: "80vh" }}
          ></iframe>
          <p  style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#762f0b",
            fontSize: "18px",
            textAlign:"center"
          }}>
            Serie de población de Colombia con base en estimaciones DANE, SMOB y
            Álvaro Pachon M.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Series;
