import Page_tipe_full from '../../../components/page-tipe-full/page-tipe-full';
import '../../Comp-Territorial/EstructuraEP.css';
function Mineria() {
  return (
    <>
    <Page_tipe_full title="Minería" content_url ="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/026bd6afe8254dca877e425a1042b2c3"/>
   <center style={{ color: "#762f0b" }}>Fuente: Títulos y solicitudes mineras vigentes 2022 (ANM).</center>
    </>
  );
}

export default Mineria;