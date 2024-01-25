import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/layout';
import Home from './pages/home/home';

import ConstruyendoCivilidad from './pages/Civilidad/ConstruyendoCivilidad'
import ResponsabilidadSocial from './pages/Civilidad/SMOB'
import CiudadYCiudadania from './pages/Civilidad/Ciudadyciudadania/CiudadyCiudadania'
import CiudaniaYCivildiad from './pages/Civilidad/Ciudadyciudadania/CiudadaniaYcivilidad'
import OrigenesCivilidad from './pages/Civilidad/Ciudadyciudadania/Origenesdelacivilidad'
import CivilidadyComplejidad from './pages/Civilidad/Ciudadyciudadania/CivilidadYcomplejidad'
import Responsabilidad from './pages/Civilidad/Ciudadyciudadania/Responsabilidad'
import BogotaCiudadCompleja from './pages/Civilidad/Ciudadyciudadania/BogotaCiudadCompleja';

import Marco from './pages/Marco-Institucional/Marco';
import AgendaYods from './pages/Marco-Institucional/AgendaYods';
import LeyesOrdenamiento from './pages/Marco-Institucional/LeyesOrdenamiento/LeyesOrdenamiento';
import AntecentesLey from './pages/Marco-Institucional/LeyesOrdenamiento/AntecedentesLey';
import EsquemaLey from './pages/Marco-Institucional/LeyesOrdenamiento/EsquemaLey';
import EstruturaAdmin from './pages/Marco-Institucional/EstructuraAdmin/EstructuraAdmin';
import LineaTiempoiEA from './pages/Marco-Institucional/EstructuraAdmin/LineaTiempoEA';
import Evolucion from './pages/Marco-Institucional/EstructuraAdmin/Evolucion';

import Poblacional from './pages/Comp-Poblacional/Poblacional';
import Conflicto from './pages/Comp-Poblacional/Conflicto-Civilidad/Conflicto';
import BogotaAscediada from './pages/Comp-Poblacional/Conflicto-Civilidad/bogota_asediada'
import Discordia from './pages/Comp-Poblacional/Conflicto-Civilidad/Discordia'
import CaminoIndependencia from './pages/Comp-Poblacional/Conflicto-Civilidad/CaminoIndependencia'
import Demografiavu from './pages/Comp-Poblacional/Conflicto-Civilidad/Demografia';
import Demografia from './pages/Comp-Poblacional/Demografia/Demografia'
import EvolucionDemografica from './pages/Comp-Poblacional/Demografia/Evolucion/EvolucionDemografica';
import Crecimiento from './pages/Comp-Poblacional/Demografia/Crecimiento/Crecimiento';
import Ecuacion from './pages/Comp-Poblacional/Demografia/Ecuacion/Ecuacion'
import Series from './pages/Comp-Poblacional/Demografia/Series/Series';
import Piramides from './pages/Comp-Poblacional/Demografia/Piramides/Piramides';
import PiramidesDistribucion from './pages/Comp-Poblacional/Demografia/Piramides/DistribucionSexo';
import PiramidesComparacion from './pages/Comp-Poblacional/Demografia/Piramides/ComparacionCenso';
import Indices from './pages/Comp-Poblacional/Demografia/indices/Indices';
import Proyecciones from './pages/Comp-Poblacional/Demografia/Proyecciones_Poblacion/Proyecciones_Poblacion';
import SocioEspacial from './pages/Comp-Poblacional/EstructuraSocioEspacial/SocioEspacial'
import Espacial from './pages/Comp-Poblacional/EstructuraSocioEspacial/SegregacionEspacial';
import SocioEconomica from './pages/Comp-Poblacional/EstructuraSocioEconomica/SocioEconomica'
import AnalisisPob from './pages/Comp-Poblacional/EstructuraSocioEconomica/AnalisisdePobrezaenColombia';


import Territorial from './pages/Comp-Territorial/Territorial';
import EvolucionHuella from './pages/Comp-Territorial/EvolucionHuella'
import IndicadoresUrban from './pages/Comp-Territorial/IndicadoresUrban';

import Bienestar from './pages/Comp-Bienestar/Ordenamiento';
import Infraestructura from './pages/Comp-Bienestar/Infraestructura/infraestructura';
import SistemaV from './pages/Comp-Bienestar/Infraestructura/SistemaVial';
import SistemaEP from './pages/Comp-Bienestar/Infraestructura/SistemaEspacioPublico/SistemaEspacioPublico';
import Pppym from './pages/Comp-Bienestar/Infraestructura/SistemaEspacioPublico/PPPYM';
import Equipamientos from './pages/Comp-Bienestar/Infraestructura/SistemaEspacioPublico/Equipamientos';
import SistemaS from './pages/Comp-Bienestar/Infraestructura/SistemaServiciosPublicos';
import Iglesias from './pages/Comp-Bienestar/Infraestructura/SistemaEspacioPublico/Iglesias';
import AguaYAcueducto from './pages/Comp-Bienestar/Infraestructura/Acueducto';
import SGas from './pages/Comp-Bienestar/Infraestructura/Gas';
import Energia from './pages/Comp-Bienestar/Infraestructura/Energia';
import Telecomunicaciones from './pages/Comp-Bienestar/Infraestructura/Telecomunicaciones';
import Basuras from './pages/Comp-Bienestar/Infraestructura/Basuras';
import EstructuraUrb from './pages/Comp-Bienestar/Estructura/Estructura';
import SisUrbanos from './pages/Comp-Bienestar/Estructura/SisUrbanos/SisUrbanos';
import HistoriaBarrios from './pages/Comp-Bienestar/Estructura/SisUrbanos/HistoriaBarrios';
import CondicionesHab from './pages/Comp-Bienestar/Estructura/SisUrbanos/CondicionesHab';
import Vivienda from './pages/Comp-Bienestar/Estructura/Vivienda/Vivienda';
import Informal from './pages/Comp-Bienestar/Estructura/Vivienda/vivienda/informal';
import Obrera from './pages/Comp-Bienestar/Estructura/Vivienda/vivienda/obrera';
import DesarrolloUrb from './pages/Comp-Bienestar/Estructura/Vivienda/DesarrollosUrb';
import Estudios from './pages/Comp-Bienestar/Estructura/Vivienda/Desarrollos/estudio';
import Barrios from './pages/Comp-Bienestar/Estructura/Vivienda/Desarrollos/barrios';
import LineaTiempo from './pages/Comp-Bienestar/Estructura/Vivienda/LineaTiempo';
import Tratamientos from './pages/Comp-Bienestar/Estructura/Tratamientos/Tratamientos';
import TraConservacion from './pages/Comp-Bienestar/Estructura/Tratamientos/Conservacion';
import TraRenovacion from './pages/Comp-Bienestar/Estructura/Tratamientos/Renovacion';
import TraDesarrollo from './pages/Comp-Bienestar/Estructura/Tratamientos/Desarrollo';
import Instrumentos from './pages/Comp-Bienestar/Instrumentos/Instrumentos';
import Planificacion from './pages/Comp-Bienestar/Instrumentos/Planificacion';
import Gestion from './pages/Comp-Bienestar/Instrumentos/Gestion';
import Financiacion from './pages/Comp-Bienestar/Instrumentos/Financiacion';




import Modelos from './pages/ModelosUrbanos/Modelos'
import BogotaColonial from './pages/ModelosUrbanos/BogotaColonial'
import BogotaRepublicana from './pages/ModelosUrbanos/BogotaRepublicana'

import Noticias from './pages/Noticias/Noticias';
import Libros from './pages/Repositorio/Libros';
import SistemaEquipamientos from './pages/Comp-Bienestar/Estructura/SistemaEquipamientos';






const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          {/* Rutas contruyendo civilidad */}
          <Route path="construyendo civilidad" Component={ConstruyendoCivilidad} />
          <Route path="construyendo civilidad/ La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá" Component={ResponsabilidadSocial} />
          <Route path='construyendo civilidad/Cuidad y cuidadanía' Component={CiudadYCiudadania} />
          <Route path='construyendo civilidad/Cuidad y cuidadanía/Cuidadanía y civilidad' Component={CiudaniaYCivildiad} />
          <Route path='construyendo civilidad/Cuidad y cuidadanía/Orígenes de la civilidad en Colombia' Component={OrigenesCivilidad} />
          <Route path='construyendo civilidad/Cuidad y cuidadanía/Bogotá: una ciudad compleja' Component={BogotaCiudadCompleja} />
          <Route path='construyendo civilidad/Cuidad y cuidadanía/Civilidad y complejidad' Component={CivilidadyComplejidad} />
          <Route path='construyendo civilidad/Cuidad y cuidadanía/La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá' Component={Responsabilidad} />

          {/* Rutas marco institucional  */}
          <Route path="marco institucional" Component={Marco} />
          <Route path="marco institucional/Nueva agenda urbana y los ODS" Component={AgendaYods} />
          <Route path="marco institucional/Leyes de ordenamiento territorial" Component={LeyesOrdenamiento} />
          <Route path="marco institucional/Leyes de ordenamiento territorial/Antecedentes de la Ley 388 de 1997" Component={AntecentesLey} />
          <Route path="marco institucional/Leyes de ordenamiento territorial/Esquema de la Ley 388 de 1997" Component={EsquemaLey} />
          {/* <Route path="marco institucional/Leyes de ordenamiento territorial/Concepto Plan de Ordenamiento Territorial año 2019" Component={ConceptoLey} /> */}
          <Route path="marco institucional/Estructura administrativa de Bogotá" Component={EstruturaAdmin} />
          <Route path="marco institucional/Estructura administrativa de Bogotá/Evolución de la estructura administrativa de Bogotá desde su fundación hasta el año 2021" Component={Evolucion} />

          <Route path='marco institucional/Estructura administrativa de Bogotá/Línea del tiempo Estructura Administrativa de Bogotá' Component={LineaTiempoiEA} />

          {/* Rutas Componente poblacional */}
          <Route path="Componente poblacional" Component={Poblacional} />
          <Route path='Componente poblacional/Conflicto - civilidad' Component={Conflicto} />
          <Route path='Componente poblacional/Conflicto - civilidad/ Bogotá asediada siglo XIX' Component={BogotaAscediada} />
          <Route path='Componente poblacional/Conflicto - civilidad/Caminos hacia la Independencia' Component={CaminoIndependencia} />
          <Route path='Componente poblacional/Conflicto - civilidad/ Demografía: violencia y urbanización' Component={Demografiavu} />
          <Route path='Componente poblacional/Conflicto - civilidad/ ¿Por qué tanta discordia?' Component={Discordia} />
          <Route path="Componente poblacional/demografía" Component={Demografia} />
          <Route path="Componente poblacional/demografía/Evolución demográfica de Colombia y Bogotá en ochenta años 1938 - 2018" Component={EvolucionDemografica} />
          <Route path="Componente poblacional/demografía/Series de población" Component={Series} />
          <Route path="Componente poblacional/Demografía/Crecimiento de la población (1790 - 2035)" Component={Crecimiento} />
          <Route path="Componente poblacional/Demografía/Ecuación compensadora de Bogotá" Component={Ecuacion} />
          <Route path="Componente poblacional/Demografía/Pirámides de distribución por edad y sexo" Component={Piramides} />
          <Route path="Componente poblacional/Demografía/Pirámides de distribución por edad y sexo/Pirámides de distribución por edad y sexo de Colombia o Bogotá" Component={PiramidesDistribucion} />
          <Route path="Componente poblacional/Demografía/Pirámides de distribución por edad y sexo/Comparador pirámides Colombia y Bogotá por censos" Component={PiramidesComparacion} />
          <Route path="Componente poblacional/Demografía/Indices demográficos" Component={Indices} />
          <Route path="Componente poblacional/Demografía/Proyecciones de población" Component={Proyecciones}></Route>
          <Route path='Componente poblacional/Estructura socioespacial' Component={SocioEspacial} />
          <Route path='Componente poblacional/Estructura socioespacial/Segregación espacial por Localidades' Component={Espacial} />
          <Route path='Componente poblacional/Estructura socioeconómica' Component={SocioEconomica} />
          <Route path='Componente poblacional/Estructura socioeconómica/Pobreza en Colombia y Bogotá' Component={AnalisisPob} />


          {/* Rutas Componente territorial */}
          <Route path="Componente territorial" Component={Territorial} />
          <Route path="Componente territorial/Evokución de la huella urbana" Component={EvolucionHuella} />
          <Route path="Componente territorial/Indicadores urbanísticos" Component={IndicadoresUrban} />

          {/* Rutas Componente Bienestar */}
          <Route path="componente bienestar" Component={Bienestar} />
          <Route path="componente bienestar/infraestructura" Component={Infraestructura} />
          <Route path="componente bienestar/infraestructura/Sistema vial y de transporte" Component={SistemaV} />
          <Route path="componente bienestar/infraestructura/Sistema de servicios públicos" Component={SistemaS} />
          <Route path="componente bienestar/infraestructura/Sistema de servicios públicos/Acueducto" Component={AguaYAcueducto} />
          <Route path="componente bienestar/infraestructura/Sistema de servicios públicos/Energia" Component={Energia} />
          <Route path="componente bienestar/infraestructura/Sistema de servicios públicos/Gas" Component={SGas} />
          <Route path="componente bienestar/infraestructura/Sistema de servicios públicos/Telecomunicaciones" Component={Telecomunicaciones} />
          <Route path="componente bienestar/infraestructura/Sistema de servicios públicos/Basuras" Component={Basuras} />
          <Route path="componente bienestar/infraestructura/Sistema de espacio público" Component={SistemaEP} />
          <Route path="componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Plazas" Component={Pppym} />

          <Route path="componente bienestar/Estructura urbana" Component={EstructuraUrb} />
          <Route path="componente bienestar/Estructura urbana/Sistema de equipamientos" Component={SistemaEquipamientos} />
          <Route path="/componente bienestar/Estructura Urbana/Sistema de equipamientos/Equipamentos" Component={Equipamientos} />
          <Route path="/componente bienestar/Estructura Urbana/Sistema de equipamientos/Iglesias" Component={Iglesias} />
          <Route path="componente bienestar/Estructura urbana/Sistemas urbanos (subdivisón y lotificación)" Component={SisUrbanos} />
          <Route path="componente bienestar/Estructura urbana/Sistemas urbanos (subdivisón y lotificación)/Historia de barrios" Component={HistoriaBarrios} />
          <Route path="componente bienestar/Estructura urbana/Sistemas urbanos (subdivisón y lotificación)/Condiciones de habitabilidad UPZ" Component={CondicionesHab} />
          <Route path="componente bienestar/Estructura urbana/Vivienda, comercio e industria" Component={Vivienda} />
          <Route path="/componente bienestar/Estructura urbana/ Vivienda, comercio e industria/Línea de tiempo Historia de la vivienda/Vivienda informal" Component={Informal} />
          <Route path="/componente bienestar/Estructura urbana/ Vivienda, comercio e industria/Línea de tiempo Historia de la vivienda/Vivienda informal" Component={Obrera} />
          <Route path="componente bienestar/Estructura urbana/Vivienda, comercio e industria/Desarrollos urbanísticos" Component={DesarrolloUrb} />
          <Route path="/componente bienestar/Estructura urbana/Vivienda, comercio e industria/Desarrollos urbanísticos/Estudio de caso de barrios" Component={Estudios} />
          <Route path="/componente bienestar/Estructura urbana/Vivienda, comercio e industria/Desarrollos urbanísticos/Barrios generales" Component={Barrios} />
          <Route path="componente bienestar/Estructura urbana/ Vivienda, comercio e industria/Línea de tiempo Historia de la vivienda" Component={LineaTiempo} />
          <Route path="componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas" Component={Tratamientos} />
          <Route path="componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Conservación" Component={TraConservacion} />
          <Route path="componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Renovación" Component={TraRenovacion} />
          <Route path="componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Desarrollo" Component={TraDesarrollo} />
          <Route path="componente bienestar/instrumentos" Component={Instrumentos} />
          <Route path="componente bienestar/instrumentos/Planificación" Component={Planificacion} />
          <Route path="componente bienestar/instrumentos/Gestión" Component={Gestion} />
          <Route path="componente bienestar/instrumentos/Financiación" Component={Financiacion} />


          {/* Rutas Componente modelos urbanos */}
          <Route path="Modelos Urbanos" Component={Modelos} />
          <Route path="Modelos Urbanos/Bogotá Colonial" Component={BogotaColonial} />
          <Route path="Modelos Urbanos/Bogotá Republicana" Component={BogotaRepublicana} />

          {/* Rutas Componente noticias */}
          <Route path="noticias" Component={Noticias} />

          {/* Rutas Componente biblioteca */}

          <Route path="Repositorio/Libros" Component={Libros} />


        </Routes>
      </Layout>


    </Router>

  );
}
export default App;