import { useEffect, useState } from "react";
import Page_principal from "../../components/page-principal/page-principal";
import Page_full_description from "../../components/page-full-description/page-full-description"

import Graph from "../../components/graphics/graph";
import Graph2 from "../../components/graphics/graph2";

export default function Bienestar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/circulos/Componente Bienestar/3. Componente Ordenamiento Territorial-01.png" name_component="Componente Bienestar" description_component="              Los instrumentos de ordenamiento territorial que históricamente se han concebido, tienen el propósito de hacer de la Bogotá del presente una metrópolis moderna capaz de albergar a millones de colombianos. Es imprescindible que la ciudad les proporcione servicios públicos, salud, vivienda, movilidad y vías, espacios públicos, esparcimiento y seguridad, y condiciones de habitabilidad apropiadas, entre otros elementos vitales para lograr una vida plena y digna. En este proceso, la capital del país ha sido entendida de diversas maneras, con diversas ópticas, como lo reflejan las normas, acuerdos y decretos que en cada etapa han sido desarrollados." />


      {windowWidth > 800 && (
        <div style={{ height: "auto" }} className="grafica-top">
          <center style={{ color: "#762f0b", fontSize: "1.2vw", marginBottom: "-6vw", fontWeight: "bold" }}>
            Población de Bogotá 1902 a 2025 con Planes de Desarrollo y de Ordenamiento
          </center>
          <Graph2 />
        </div>
      )}
      {windowWidth > 800 && (
        <div style={{ height: "auto" }} className="grafica-dowm">
          <center style={{ color: "#762f0b", fontSize: "1.2vw", marginBottom: "-8vw", fontWeight: "bold" }}>
            Tasas de crecimiento, vegetativa y migración de Bogotá 1923 a 2023 con Planes de Desarrollo y de  Ordenamiento
          </center>
          <Graph />
        </div>
      )}
    </>
  );
}
