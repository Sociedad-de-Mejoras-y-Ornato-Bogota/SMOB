const Page_tipe_full = (props) => {
    return (
        <div className="page_t1">
        <section className='title_section'>
            <h2 className='title_page'>{props.title}</h2>
        </section>
        <section className='content_section'>   
                <iframe src={props.content_url} className='content_full_page'></iframe>
        </section>
    </div>
    )
}
export default Page_tipe_full