import Page_tipe_full from '../../../components/page-tipe-full/page-tipe-full';
import '../../Comp-Territorial/EstructuraEP.css';
function PIB() {
  return (
    <>
    <Page_tipe_full title="Producto interno bruto" content_url ="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/be54b8d6e69d409daf6250c7825558e4"/>
   <center style={{ color: "#762f0b" }}>Fuente: Valor agregado por municipio: serie 2011 - 2023 (DANE).</center>
    </>
  );
}

export default PIB;