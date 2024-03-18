import Pronto from '../Not found/ComingSoon';
import './style.css'
const Page_libro_description = (props) => {
    return (
        <>
            <div className="page_book">
                <section className='left_section'>
                    <p className="name_component">{props.name_component}</p>
                    <p className="description_component">{props.description_component}</p>

                </section>
                <section className='right_section'>
                    {props.url_book ? 
                    <iframe src={props.url_book} className='content_book pdf-responsive' allowFullScreen ></iframe>
                    :
                    <Pronto/>
                 }
                    
                </section>
            </div>
        </>
    )
}

export default Page_libro_description;