import Page_tipe_full from '../../../components/page-tipe-full/page-tipe-full';
import '../../Comp-Territorial/EstructuraEP.css';
function Fragmentacionpredial() {
  return (
    <>
    <Page_tipe_full title="Fragmentación predial" content_url ="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/dddccb7a449c411e9dc1449ec394e45a"/>
   <center style={{ color: "#762f0b" }}>Fuente: Distribución predial por tamaño vigencia 2020 (UPRA).</center>
    </>
  );
}

export default Fragmentacionpredial;