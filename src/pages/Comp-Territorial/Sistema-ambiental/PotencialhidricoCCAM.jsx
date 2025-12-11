import { useState, useEffect } from "react";

export default function PotencialhidricoCCAM() {
  // Mapa de hash → estado
  const slugMap = {
    "acuiferos": { menu: 1 },
    "cambio-climatico": { menu: 2 },
    "amenazas-naturales": { menu: 3 },
  };

  // Lee el hash actual y devuelve el estado inicial
  const parseHashToState = () => {
    try {
      const raw = (window.location.hash || "#acuiferos").replace(/^#/, "");
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
    if (m === 1) return "acuiferos";
    if (m === 2) return "cambio-climatico";
    if (m === 3) return "amenazas-naturales";
    return "acuiferos";
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
          <h2 className="title_page">Potencial hídrico, cambio climático, y amenazas naturales</h2>
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
            Acuíferos
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
            Cambio climático
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
            Amenazas naturales
          </button>
        </section>

        {/* CONTENIDO: UN IFRAME POR CADA BOTÓN */}
        {menu === 1 && (
            <>
          <iframe
            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/abe478dbcdec411588c705e64fc7d585"
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          />
         <center style={{ color: "#762f0b", marginBottom: "3rem" }}>
         Fuente: Zonas Potenciales de recarga de agua subterránea 2018 (IDEAM).
         </center>
          </>
        )}

        {menu === 2 && (
            <>
          <iframe
            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/dbee9524f00b4a47a34cbf32b7e14321"
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          />
          <center style={{ color: "#762f0b", marginBottom: "3rem" }}>
         Fuente: Índice de vulnerabilidad y riesgo ante el CC, Subíndice de Amenaza, sensibilidad, y capacidad adaptativa ante el CC 2017 (IDEAM).
         </center>
          </>
        )}

        {menu === 3 && (
            <>
          <iframe
            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/3ad017f4f1b94a6d86e6b7d0222ea4e3" 
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          />
         <center style={{ color: "#762f0b", marginBottom: "3rem" }}>
         Fuente: Zonificación de amenazas naturales POMCA Río Bogotá -2019- y Sumapaz -2023- (CAR - Cundinamarca). Amenaza por movimientos en masa departamento de Cundinamarca 2019 (SGC).
         </center>
          </>
        )}
      </div>
    </>
  );
}