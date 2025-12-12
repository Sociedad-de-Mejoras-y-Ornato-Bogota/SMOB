import { useState, useEffect } from "react";
import Page_libro from "../../components/page-libro/page-libro";
import Pronto from "../../components/Not found/ComingSoon";



export default function Visionsabana() {
  // Mapa de hash → estado
  const slugMap = {
    "Publicacion": { menu: 1 },
    "Metodologia": { menu: 2 },
    "Espacializacion": { menu: 3 },
  };

  // Lee el hash actual y devuelve el estado inicial
  const parseHashToState = () => {
    try {
      const raw = (window.location.hash || "#Publicacion").replace(/^#/, "");
      const decoded = decodeURIComponent(raw);
      return slugMap[decoded] ?? { menu: 1 };
    } catch {
      return { menu: 1 };
    }
  };

  const initial = parseHashToState();
  const [menu, setMenu] = useState(initial.menu);

  // Convierte el estado (menu) en el slug para la URL
  const stateToSlug = (m) => {
    if (m === 1) return "Publicacion";
    if (m === 2) return "Metodologia";
    if (m === 3) return "Espacializacion";
    return "Publicacion";
  };

  // Actualiza hash + estado cuando haces clic en un botón
  const navigateHash = (newMenu) => {
    const nm = newMenu;
    const slug = stateToSlug(nm);
    // Cambia SOLO el hash, sin recargar la página
    window.location.hash = encodeURI(slug);
    setMenu(nm);
  };

  // Escuchar back/forward (hashchange) y sincronizar en carga inicial
  useEffect(() => {
    const onHash = () => {
      const parsed = parseHashToState();
      setMenu(parsed.menu);
    };
    window.addEventListener("hashchange", onHash);
    onHash(); // sincronizar al montar, por si ya viene con hash
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <div
        style={{
          minHeight: "65vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section className="title_section">
          <h2 className="title_page">Visión prospectiva de la Sabana: 2025 - 2035</h2>
        </section>

        <br />

        {/* TRES BOTONES PRINCIPALES */}
        <section style={{ display: "flex", gap: "1rem" }}>
          <button
            className={menu === 1 ? "button-active" : "button-inactive"}
            onClick={() => navigateHash(1)}
            style={{
              padding: "0.8rem",
              width: "100%",
              borderRadius: "5px",
              borderColor: "transparent",
            }}
          >
            Publicación
          </button>

          <button
            className={menu === 2 ? "button-active" : "button-inactive"}
            onClick={() => navigateHash(2)}
            style={{
              padding: "0.8rem",
              width: "100%",
              borderRadius: "5px",
              borderColor: "transparent",
            }}
          >
            Metodología y síntesis de resultados
          </button>

          <button
            className={menu === 3 ? "button-active" : "button-inactive"}
            onClick={() => navigateHash(3)}
            style={{
              padding: "0.8rem",
              width: "100%",
              borderRadius: "5px",
              borderColor: "transparent",
            }}
          >
            Espacialización de directrices de ordenamiento ambiental
          </button>
        </section>

        {/* CONTENIDO: UN IFRAME POR CADA BOTÓN */}
        {menu === 1 && (
            
          
            <Page_libro url_book="https://smob-storage.s3.us-east-2.amazonaws.com/modelos+de+ciudad/Visi%C3%B3n+Sabana.pdf" name_component={
              <>
            Bases para la construcción de una visión prospectiva de la Sabana 2025 - 2035: {" "}
                 <em>
              Cálculo del área necesaria para el desarrollo de vivienda futura en la Región y caracterización de la dinámica de urbanización y el potencial agroambiental
                </em>
              </>
            }
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          />
        
      
        )}

        {menu === 2 && (
            
          <iframe
            src="https://storymaps.arcgis.com/stories/8146e87e2485487fa76627b30cbc3167"
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          />
        )}

        {menu === 3 && ( 
     <iframe
            src="https://storymaps.arcgis.com/stories/7b4edd909ec34e90abb33d8291177a22"
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          />
        )}
      </div>
    </>
  );
}