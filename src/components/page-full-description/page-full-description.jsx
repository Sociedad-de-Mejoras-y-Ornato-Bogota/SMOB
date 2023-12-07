import "./styles.css"
function Page_full_Description(props) {
    return (
        <div>
            <section className='page_full_description'>
                <p className="title_description">
                    {props.title}
                </p>
                <p className="text_description">
                    {props.description}
                </p>
            </section>
        </div>
    )
}

export default Page_full_Description