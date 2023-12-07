
import Page_full_description from "../../../../components/page-full-description/page-full-description"
import Page_tipe_full from "../../../../components/page-tipe-full/page-tipe-full";
function Ecuacion() {
  return (
    <>
      <Page_full_description title="Ecuación compensadora:" description="Técnica demográfica básica que permite establecer el cambio total del tamaño de la población entre dos fechas dadas, a partir de los componentes que producen dicho efecto. Permite conocer el comportamiento de los “componentes” del crecimiento demográfico (nacimientos, defunciones y migrantes) y sus efectos sobre el volumen, la composición y la distribución de la población." />
      <Page_full_description title="Tasa de crecimiento:" description="Incremento o disminución del tamaño de una población, experimentado por el efecto del balance entre los nacimientos y las defunciones, adicionando el aporte de la migración neta. Puede calcularse también a partir de las tasas de crecimiento natural y de migración neta. Permite explicar en forma porcentual, a qué ritmo está creciendo una población determinada." />
      <p className="text_description" style={{ padding: "0 3rem" }}>
        Tcd = (tasa de natalidad-tasa de mortalidad) + saldo migratorio (inmigraciones-emigraciones)
      </p>
      <Page_full_description title="Tasa vegetativa:" description="Es la diferencia entre los nacimientos y las defunciones de una determinada población. La tasa anual del crecimiento vegetativo o natural (referida a mil habitantes) resulta de la resta: tasa de natalidad menos tasa de mortalidad." />
      <p className="text_description" style={{ padding: "0 3rem" }}>
        Tv = tasa de natalidad- tasa de mortalidad
      </p>
      <Page_full_description title="Tasa de migración:" description="Tm = tasa de crecimiento – tasa vegetativa" />
      <Page_tipe_full content_url="https://geogeeks2.maps.arcgis.com/apps/dashboards/45a68a91109b40318c6d2bb327d7befa"></Page_tipe_full>

    </>
  );
}

export default Ecuacion