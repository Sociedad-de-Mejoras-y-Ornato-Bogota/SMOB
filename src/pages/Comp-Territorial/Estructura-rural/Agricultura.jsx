import { useState, useEffect } from "react";

export default function comportamientoElectoral() {
  // Mapa de hash → estado
  const slugMap = {
    "Agricultura en la Sabana": { menu: 1 },
    "Frontera agrícola y áreas con probable agricultura familiar": { menu: 2 },
  };

  // Lee el hash actual y devuelve el estado inicial
  const parseHashToState = () => {
    try {
      const raw = (window.location.hash || "#Agricultura en la Sabana").replace(
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
    if (m === 1) return "Agricultura en la Sabana";
    if (m === 2) return "Frontera agrícola y áreas con probable agricultura familiar";
    return "Agricultura en la Sabana";
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
          <h2 className="title_page">Agricultura</h2>
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
            Agricultura en la Sabana
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
            Frontera agrícola y áreas con probable agricultura familiar
          </button>
        </section>

        {/* CONTENIDO: UN IFRAME POR CADA BOTÓN */}
        {menu === 1 && (
          <iframe
            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/b7db5c64879c407294b1feee672202b1"
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
            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/38cda88c70e64988a0c8f11320e381ee"
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