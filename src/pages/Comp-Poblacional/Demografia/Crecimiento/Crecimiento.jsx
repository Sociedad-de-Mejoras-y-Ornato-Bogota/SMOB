import Page_full_Description from "../../../../components/page-full-description/page-full-description";
import Page_tipe_full from "../../../../components/page-tipe-full/page-tipe-full";
import Two_content from "../../../../components/two-content/two-content"
function Crecimiento() {
  return (
    <>
      <section style={{display:"flex", justifyContent:"center", paddingTop:"3rem"}}>
        <h2 className='title_page'>Crecimiento de la población (1970 - 2035)</h2>
      </section>
      <Page_full_Description title="Crecimiento de población:" description="El crecimiento poblacional se refiere al incremento del número de habitantes en un espacio y tiempo determinado, el cual se puede medir a través de una fórmula matemática. También se puede emplear como sinónimo el término crecimiento demográfico." />
      <Two_content link_1="https://geogeeks2.maps.arcgis.com/apps/dashboards/586d8531b4d6443fbeb0caea786b6dcb" link_2="https://geogeeks2.maps.arcgis.com/apps/dashboards/3ccec03e3cdc4ac9862aaf38fcf30106"></Two_content>
      <Page_full_Description title="Porcentaje de concentración de la población:" description="El porcentaje de concentración de la población de Colombia en la ciudad capital de Bogotá. La concentración de la población esta relacionada con del nivel de urbanización del país, teniendo un efecto directo en la migración interna, la agricultura, la concentración de la propiedad rural y el escaso dinamismo del sector agrícola tradicional, las ventajas comparativas sociales y económicas entre el campo y la ciudad, así como entre las áreas menores y las grandes capitales." />
      <Page_tipe_full content_url="https://geogeeks2.maps.arcgis.com/apps/dashboards/d2b67f4294a14f64a7c936b9c20b01d0" />
    </>
  )
}

export default Crecimiento;