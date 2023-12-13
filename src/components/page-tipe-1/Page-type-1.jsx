import './styles.css'
const Page_type_1 = (props) => {
    return (
        <div className="page_t1">
            <section className='title_section'>
                <h2 className='title_page'>{props.title}</h2>
            </section>
            <section className='content_section'>   
            <video controls  style={{objectFit:"cover"}} className='content_page'>
            <source src={props.content_url} type="video/mp4" />
            Tu navegador no admite la reproducción de video.
          </video>
            </section>
        </div>
    )
}

export default Page_type_1;