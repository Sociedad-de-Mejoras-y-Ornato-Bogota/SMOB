import Page_principal from "../../components/page-principal/page-principal";
import { useNavigate } from 'react-router-dom';
const Poblacional = () => {
    const navigateTo = useNavigate(); 
    const navigate = (path) => {
        navigateTo(path)
    }
    return (
        <>
            <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/circulos/Componente Poblacional/1. Componente Poblacional-01.png" name_component="Componente Poblacional" description_component="Los habitantes de una ciudad, desde los primeros pobladores de la aldea
que habrá de transformarse, con el paso de los años, en una urbe, definen el
carácter y los rasgos de esa ciudad. Desde el primer día, este carácter se reflejará
en la manera en que las gentes tratan el medio ambiente y el espacio físico que
los alberga, y, por supuesto, de la manera en que se tratan unos a otros. Esa es la
compleja dinámica que se pone en movimiento. Los efectos sociales del trato
humano y de las transformaciones infligidas al espacio físico, además, se
convierten, a su vez, en nuevas fuerzas transformadoras, que afectan la
estructura social y cultural y el territorio que les dieron origen. Y así,
incesantemente. Los elementos de estudio claves serán, en consecuencia, la
historia y los anales particulares, el surgimiento del espíritu civil o la civilidad,
las ideas políticas y las instituciones, las luchas sociales y la violencia, la
demografía y las migraciones, las tasas poblacionales y las metodologías para su
estudio y cálculo, la conformación familiar y social, la pobreza, el crecimiento y
los avances técnicos y científicos, entre otros." 
    areas={
        [
        <area shape="rect" coords="80,240,385,280" href='#' alt="Page1" onClick={() => {navigate('Conflicto%20-%20civilidad')}}/>,
        <area shape="circle" coords="130,180,105" href='#' alt="Page2" onClick={() => {navigate('demograf%C3%ADa')}}/>,
        <area shape="circle" coords="340,180,105" href='#' alt="Page2" onClick={() => {navigate('Estructura%20socioecon%C3%B3mica')}}/>,
        <area shape="circle" coords="235,360,105" href='#' alt="Page2" onClick={() => {navigate('Estructura%20socioespacial')}}/>
        ]
    }/>
</>
    )
}
export default Poblacional;