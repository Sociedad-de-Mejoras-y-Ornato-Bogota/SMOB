import './styles.css'
const Page_principal = (props) => {
return(
    <>
      <div className="page_principal">
            <section className='left_section'>
            <img src={props.url_imagen} className="img_componente" alt='Imagen circulo por componente'></img>

            </section>
            <section className='right_section'>
                    <p className="name_component">{props.name_component}</p>
                    <p className="description_component">{props.description_component}</p>
            </section>
        </div>
    </>
)
}

export default Page_principal