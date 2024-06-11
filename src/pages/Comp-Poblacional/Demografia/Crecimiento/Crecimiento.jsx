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
      <Two_content link_1="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/613423c94d5b4d069dd079a00c4583a9" link_2="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/5f628184f0d743b6ac61295030c9c4d4"></Two_content>
      <Page_full_Description title="Porcentaje de concentración de la población:" description="El porcentaje de concentración de la población de Colombia en la ciudad capital de Bogotá. La concentración de la población esta relacionada con del nivel de urbanización del país, teniendo un efecto directo en la migración interna, la agricultura, la concentración de la propiedad rural y el escaso dinamismo del sector agrícola tradicional, las ventajas comparativas sociales y económicas entre el campo y la ciudad, así como entre las áreas menores y las grandes capitales." />
      <Page_tipe_full content_url="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/b940d7ba7478468cbb1b5547c1665f99" />
    </>
  )
}

export default Crecimiento;