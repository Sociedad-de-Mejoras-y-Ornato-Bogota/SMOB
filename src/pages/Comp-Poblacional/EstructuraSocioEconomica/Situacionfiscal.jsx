import Page_tipe_full from '../../../components/page-tipe-full/page-tipe-full';
import '../../Comp-Territorial/EstructuraEP.css';
function Situacionfiscal() {
  return (
    <>
    <Page_tipe_full title="Situación fiscal" content_url ="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/2464d47fde3c418493a4eacf133ce5db"/>
   <center style={{ color: "#762f0b" }}>Fuente: Ejecuciones presupuestales municipales: 2012 - 2024 (DNP).</center>
    </>
  );
}

export default Situacionfiscal;