import { useEffect, useState } from "react";
import "../../components/news_content/noticias.css";
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
      <div className="general-container">
        <div className="responsive-columna row ">
          <div className="col-lg-6">
            <img
              src="https://smob-storage.s3.us-east-2.amazonaws.com/circulos/Componente Bienestar/3. Componente Ordenamiento Territorial-01.png"
              style={{ width: "400px", height: "400px" }}
              className="imagen-responsive"
            ></img>
          </div>

          <div className="col-lg-6">
            <div className="general-title">Componente Bienestar</div>

            <div
              className="general-content text-responsive"
              style={{ textAlign: "justify" }}
            >
              Los instrumentos de ordenamiento territorial que históricamente se
              han concebido, tienen el propósito de hacer de la Bogotá del
              presente una metrópolis moderna capaz de albergar a millones de
              colombianos. Es imprescindible que la ciudad les proporcione
              servicios públicos, salud, vivienda, movilidad y vías, espacios
              públicos, esparcimiento y seguridad, y condiciones de
              habitabilidad apropiadas, entre otros elementos vitales para
              lograr una vida plena y digna. En este proceso, la capital del
              país ha sido entendida de diversas maneras, con diversas ópticas,
              como lo reflejan las normas, acuerdos y decretos que en cada etapa
              han sido desarrollados.
            </div>
          </div>
        </div>
        <center style={{color: "#762f0b",fontWeight: "bold", fontSize:"18px"}}>Gráficas de crecimiento de población y planes de ordenamiento</center>
      </div>

      {windowWidth > 800 && (
        <div>
          <Graph2 />
        </div>
      )}
      {windowWidth > 800 && (
        <div>
          <Graph />
        </div>
      )}
    </>
  );
}
