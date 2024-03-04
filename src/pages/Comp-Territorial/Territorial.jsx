
import Page_principal from "../../components/page-principal/page-principal";
import { useNavigate } from 'react-router-dom';
const Territorial = () => {
    const navigateTo = useNavigate(); 
    const navigate = (path) => {
        navigateTo(path)
    }
    return (
        <>
                    <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/circulos/Componente Territorial/COMPONENTE TERRITORIO-01.png" name_component="Componente territorial"
                     description_component="El territorio donde fue establecida la pequeña aldea que con el paso de los años llegaría a ser la capital de la nación -250 mil hectáreas de uno de los suelos agroecológicos más valiosos del país, a 2600 metros de altitud, pero en el centro del trópico-, se expandió y se transformó incesantemente, a medida que su población aumentaba y que ella misma lo afectaba. Se trató de un proceso de siglos, en el cual la región tuvo diversas facetas políticas y administrativas, a tono con los avatares de nuestra historia nacional. En este panorama, son de importancia mayor, asuntos como la riqueza hídrica, el sistema ambiental, la evolución de la cartografía (incluyendo el componente digital y la geo referenciación), y los índices y variables claves del crecimiento poblacional."
                     audio='https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/Audio Componente territorial.mp3'
                     areas={
                        [
                        <area shape="circle" coords="130,180,105" href='#' alt="Page2" onClick={() => {navigate('Municipio estructura rural y region metropolitana')}}/>,
                        <area shape="circle" coords="340,180,105" href='#' alt="Page3" onClick={() => {navigate('Estructura ecológica principal')}}/>,
                        <area shape="circle" coords="235,360,105" href='#' alt="Page4" onClick={() => {navigate('Evolución de la huella urbana')}}/>,
                        <area shape="circle" coords="230,245,235" href='#' alt="Page5" onClick={() => {navigate('')}}/>
                        ]
                    }/>
        </>
    )

}

export default Territorial;