import { useState, useEffect } from "react";

export default function Potencialagricola() {
  // Mapa de hash → estado
  const slugMap = {
    "Clases agrológicas": { menu: 1 },
    "Degradación del suelo": { menu: 2 },
  };

  // Lee el hash actual y devuelve el estado inicial
  const parseHashToState = () => {
    try {
      const raw = (window.location.hash || "#Clases agrológicas").replace(
        /^#/,
        ""
      );
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
    if (m === 1) return "Clases agrológicas";
    if (m === 2) return "Degradación del suelo";
    return "Clases agrológicas";
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
          <h2 className="title_page">Potencial agrícola</h2>
        </section>

        <br />

        {/* DOS BOTONES PRINCIPALES */}
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
            Clases agrológicas
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
            Degradación del suelo
          </button>
        </section>

        {/* CONTENIDO: UN IFRAME POR CADA BOTÓN */}
        {menu === 1 && (
            <>
          <iframe
            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/eef35ff6cba64699a402aca769707a7a"
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          />
          <center style={{ color: "#762f0b", marginBottom: "3rem" }}>
      Fuente: Capacidad de uso de las tierras de Cundinamarca 2001 (IGAC).
    </center>
          </>
        )}

        {menu === 2 && (
            <>
          <iframe
            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/ecbaf75af7a54621aadbba7dfb7d16ef"
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
            
          />
<center style={{ color: "#762f0b", marginBottom: "3rem" }}>
      Fuente: Degradación de suelos por salinización 2019 (IDEAM). Degradación de suelos por desertificación 2020 (IDEAM). Zonificación de degradación de suelos por erosión 2022 (CAR - Cundinamarca).
    </center>
          </>
        )}
      </div>
    </>
  );
}