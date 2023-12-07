import { Link } from "react-router-dom";
import './style.css'
const Page_libro = (props) => {
    return (
        <>
            <div className="page_book">
                <section className='left_section'>
                    <p className="name_component">{props.name_component}</p>
                    <Link to={props.url_book} target="_blank">
                        <button className="button_book" >
                            Descargar documento
                        </button>
                    </Link>

                </section>
                <section className='right_section'>
                    <iframe src={props.url_book} className='content_book' allowFullScreen ></iframe>
                </section>
            </div>
        </>
    )
}

export default Page_libro;