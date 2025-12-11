import Page_tipe_full from '../../../components/page-tipe-full/page-tipe-full';
import '../../Comp-Territorial/EstructuraEP.css';
function Floricultura() {
  return (
    <>
    <Page_tipe_full title="Floricultura" content_url ="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/a782c3a6d5864956a1c49a7e2cbf38b2"/>
   <center style={{ color: "#762f0b" }}>Fuente: Cobertura cultivos confinados 2022 (IDEAM).</center>
    </>
  );
}

export default Floricultura;