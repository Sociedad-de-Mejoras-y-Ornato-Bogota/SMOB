import { useEffect, useState } from "react";
import Page_principal from "../../components/page-principal/page-principal";

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
      <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/Bienestar/Componente Bienestar.png" name_component="Componente Bienestar" 
      description_component="Los instrumentos de ordenamiento territorial que históricamente se han concebido, tienen el propósito de hacer de la Bogotá del presente una metrópolis moderna capaz de albergar a millones de colombianos. Es imprescindible que la ciudad les proporcione servicios públicos, salud, vivienda, movilidad y vías, espacios públicos, esparcimiento y seguridad, y condiciones de habitabilidad apropiadas, entre otros elementos vitales para lograr una vida plena y digna. En este proceso, la capital del país ha sido entendida de diversas maneras, con diversas ópticas, como lo reflejan las normas, acuerdos y decretos que en cada etapa han sido desarrollados.       
      En consecuencia, es indispensable que quien estudia estos asuntos conozca el proceso histórico que atravesó Bogotá para lograr albergar a millones y millones de personas a lo largo de los últimos cien años.
      En este caso específico, se trata de la historia de la planeación en Bogotá, de cómo en cada momento de la vida de la ciudad se tomaron las providencias y se dispusieron los recursos técnicos, humanos e institucionales para hacerles frente a los inmensos desafíos que surgían a cada paso. En cuáles elementos se hizo el énfasis, qué visiones de ciudad se privilegiaron, qué clase de futuro se entreveía o era dable anticipar, son el tipo de preguntas que se busca responder en esta sección."
      audio='https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/Audio Componente bienestar.mp3' 
      />


      {windowWidth > 800 && (
        <div style={{ height: "auto" }} className="grafica-top">
          <center style={{ color: "#762f0b", fontSize: "1.2vw", marginTop:'5vh', marginBottom: "-6vw", fontWeight: "bold" }}>
            Población de Bogotá 1902 a 2025 con Planes de Desarrollo y de Ordenamiento
          </center>
          <Graph2 />
        </div>
      )}
      {windowWidth > 800 && (
        <div style={{ height: "auto" }} className="grafica-dowm">
          <center style={{ color: "#762f0b", fontSize: "1.2vw", marginBottom: "-13vh", fontWeight: "bold" }}>
            Tasas de crecimiento, vegetativa y migración de Bogotá 1923 a 2023 con Planes de Desarrollo y de  Ordenamiento
          </center>
          <Graph />
        </div>
      )}
    </>
  );
}
