import Page_galery_docs from "../../components/page-galeria-documentos/page-galery-docs"

const BogotaFutura = () => {
    return (
        <>

            <Page_galery_docs title="Bogotá: Ciudad Futura"
                description={[
                    "El producto que se presenta a continuación es una reestructuración del POT adoptado mediante el Decreto Distrital 555 de 2021 “Por el cual se adopta la revisión general del Plan de Ordenamiento Territorial de Bogotá D.C.”, buscando simplificar y facilitar la comprensión del articulado.",
                    "Contiene un apartado que compila en un solo documento todo lo que comprende definiciones, conformando un completo glosario del POT, el siguiente apartado compila el conjunto de políticas, objetivos, estrategias y planes, para así tener en un tercer apartado muy depurado del compendio de normatividad urbanística propiamente, aplicable para el Distrito Capital. A su vez, cada uno de los tres apartados esta ordenado de acuerdo a cuatro componentes (general, poblacional, territorial, bienestar) que en el ámbito de la construcción de ciudad gravitan entre sí para la conformación del modelo de ciudad futuro."]} urls_content={
                        [
                            { url: "https://smob-storage.s3.us-east-2.amazonaws.com/modelos+de+ciudad/1.+POT+Definiciones+Nuevo+(2).docx.pdf", title: "Definiciones" },
                            { url: "https://smob-storage.s3.us-east-2.amazonaws.com/modelos+de+ciudad/2.%20POT%20Pol,Obj,Est,Pla%20(2).docx.pdf", title: "Politicas, objetivos, estrategias y planes" },
                            { url: "https://smob-storage.s3.us-east-2.amazonaws.com/modelos+de+ciudad/3. POT Normativa (2).docx.pdf", title: "Normas" }]} />
        </>
    )
}

export default BogotaFutura