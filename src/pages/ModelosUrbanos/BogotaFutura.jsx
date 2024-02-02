import Page_galery_docs from "../../components/page-galeria-documentos/page-galery-docs"

const BogotaFutura = () => {
    return (
        <>

            <Page_galery_docs title="Herramienta para el análisis y comprensión del POT (Decreto 555 de 2021)"
                description={[
                    "La herramienta práctica que se presenta a continuación, ayuda al análisis y comprensión del Plan de Ordenamiento Territorial adoptado mediante el Decreto Distrital 555 de 2021. ",
                    "Está constituido por 3 elementos. El primero es un completo glosario del POT, el segundo compila sus políticas, objetivos, estrategias y planes, y el tercero compendia el conjunto de normas urbanísticas aplicables al Distrito Capital.",
                    "Cada uno de los 3 elementos está estructurado en torno a cuatro componentes esenciales: el general, el poblacional, el territorial y el de bienestar, que interactúan dinámicamente en la construcción del modelo de ciudad del presente y del futuro. " ]} urls_content={
                        [
                            { url: "https://smob-storage.s3.us-east-2.amazonaws.com/modelos+de+ciudad/1.+POT+Definiciones+Nuevo+(2).docx.pdf", title: "Definiciones" },
                            { url: "https://smob-storage.s3.us-east-2.amazonaws.com/modelos+de+ciudad/2.%20POT%20Pol,Obj,Est,Pla%20(2).docx.pdf", title: "Politicas, objetivos, estrategias y planes" },
                            { url: "https://smob-storage.s3.us-east-2.amazonaws.com/modelos+de+ciudad/3. POT Normativa (2).docx.pdf", title: "Normas" }]} />
        </>
    )
}

export default BogotaFutura