import "./styles.css"
const Page_galery_docs = (props) => {
    let documents = props.urls_content
    return (
        <div className="page_galery_docs">
            <section className='title_section_galery'>
                <h2 className='title_page'>{props.title}</h2>
            </section>
            <section className='content_galery'>
                {documents?.map((document, index) => {
                    return (
                        <article key={index}>
                            <iframe className="galery_content" src={document.url} ></iframe>
                            <span className="title_galery_content">{document.title}</span>
                        </article>
                    )
                })}

            </section>
        </div>
    )
}

export default Page_galery_docs