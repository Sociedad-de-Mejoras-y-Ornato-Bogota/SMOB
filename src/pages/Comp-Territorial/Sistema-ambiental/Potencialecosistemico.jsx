import { useState, useEffect } from "react";

export default function Potencialecosistemico() {
  // Mapa de hash → estado
  const slugMap = {
    "Ecosistemas": { menu: 1 },
    "Areas protegidas": { menu: 2 },
    "EEP": { menu: 3 },
    "Analisis": { menu: 4 },
  };

  // Lee el hash actual y devuelve el estado inicial
  const parseHashToState = () => {
    try {
      const raw = (window.location.hash || "#Ecosistemas").replace(/^#/, "");
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
    if (m === 1) return "Ecosistemas";
    if (m === 2) return "Areas protegidas";
    if (m === 3) return "EEP";
    if (m === 4) return "Analisis";
    return "Ecosistemas";
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
          <h2 className="title_page">Potencial ecosistémico</h2>
        </section>

        <br />

        {/* Cuatro BOTONES PRINCIPALES */}
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
            Ecosistemas naturales, bosques, y zonas de vidas
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
            Áreas protegidas
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
            Estructura ecológica principal
          </button>
          <button
            className={menu === 4 ? "button-active" : "button-inactive"}
            onClick={() => navigateHash(4)}
            style={{
              padding: "0.8rem",
              width: "100%",
              borderRadius: "5px",
              borderColor: "transparent",
            }}
          >
            Análisis conflictos EEP Sabana
          </button>
        </section>

        {/* CONTENIDO: UN IFRAME POR CADA BOTÓN */}
        {menu === 1 && (
            <>
          <iframe
            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/6480a1a6656a4f11a050b688693d34cd"
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          />
         <center style={{ color: "#762f0b", marginBottom: "3rem" }}>
         Fuente: Ecosistemas continentales, costeros, y marinos 2024 (IDEAM). Superficie de bosque 1990 - 2021 (IDEAM). Zonas de vida de Holdrige 1981 - 2010 (CAR - Cundinamarca).
         </center>
          </>
        )}

        {menu === 2 && (
            <>
          <iframe
            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/6750ec51e1e44c83b4d9d8e5f2430013"
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          />
          <center style={{ color: "#762f0b", marginBottom: "3rem" }}>
         Fuente: Áreas protegidas declaradas CAR 2023 (CAR - Cundinamarca). Registro único de Áreas protegidas 2020 (Minambiente).
         </center>
          </>
        )}

        {menu === 3 && (
            <>
          <iframe
            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/13434d36a3e7409cbbd5b9b0a4fd7520" 
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          />
         <center style={{ color: "#762f0b", marginBottom: "3rem" }}>
         Fuente: Estructura ecológica principal 2021 (CAR - Cundinamarca).
         </center>
          </>
        )}
        {menu === 4 && (
            <>
          <iframe
            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/1512ed16c3cc463fa129c0cd23539a16"
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          />
          <center style={{ color: "#762f0b", marginBottom: "3rem" }}>
         Fuente: Identificación de conflictos EEP (CIDER).
         </center>
          </>
        )}
      </div>
    </>
  );
}