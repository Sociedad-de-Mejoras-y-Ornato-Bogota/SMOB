import "./styles.css"
import { useState } from "react";
const Page_galery_docs = (props) => {
    let documents = props.urls_content;
    let paragraphs = props.description

    let [selected, setSelected] = useState(0)
    return (
        <div className="page_galery_docs">
            <section className='title_section_galery' >
                <h2 className='title_page-galery'>{props.title}</h2>
                {paragraphs?.map((paragraph, index) => {
                    return (
                        <p className="text_description" key={index}>
                            {paragraph}
                        </p>
                    )
                })}

            </section>
            <section style={{ width: "100%", display: "flex", justifyContent: "center" , margin:"1rem"}} className="menu_galery">
                {documents.map((document, index) => {
                    return (
                        <button key={index}  className={`filtro-publicaciones ${selected === index ? "button-selected" : ""}`}   style={{ border: "none", margin: "3rem", color: "#91583B", width:"33.3vw", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center",padding:"1rem" }} onClick={()=>{
                            setSelected(index)
                        }}>
                            {document.title} 
                        </button>
                    )
                })}
            </section>
            <section>
            </section>
            <section className='content_galery'>
                {documents?.map((document, index) => {
                    if(selected == index){                    return (
                        <article key={index}>
                            <iframe className="galery_content" src={document.url} width={100} height={100}></iframe>
                            <span className="title_galery_content">{document.title}</span>
                        </article>
                    )}
                })}

            </section>
        </div>
    )
}

export default Page_galery_docs