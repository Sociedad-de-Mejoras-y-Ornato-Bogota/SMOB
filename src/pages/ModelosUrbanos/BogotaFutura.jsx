import Page_galery_docs from "../../components/page-galeria-documentos/page-galery-docs"

const BogotaFutura = () => {
    return (
        <>
            <Page_galery_docs title="Bogotá: Ciudad Futura" urls_content={
                [
                    { url:"https://smob-storage.s3.us-east-2.amazonaws.com/modelos+de+ciudad/1.+POT+Definiciones+Nuevo+(2).docx.pdf", title:"POT - Definiciones"},
                    { url:"https://smob-storage.s3.us-east-2.amazonaws.com/modelos+de+ciudad/2.%20POT%20Pol,Obj,Est,Pla%20(2).docx.pdf", title:"POT - Politicas, objetivos, estrategias y planes"},
                    { url:"https://smob-storage.s3.us-east-2.amazonaws.com/modelos+de+ciudad/3. POT Normativa (2).docx.pdf", title:"POT - Normativa"},
                     { url:"https://smob-storage.s3.us-east-2.amazonaws.com/modelos+de+ciudad/Reseña trabajo de reestructuración del Decreto 555 de 2021.docx.pdf", title:"Decreto 555 de 2021"}]} />
        </>
    )
}

export default BogotaFutura