import data from './ods.json';
import { useState } from 'react';

export default function AgendaYods() {
    const [modal, setModal] = useState(false)
    const [infoPresentacion, setinfoPresentacion] = useState(false)
    return (
        <>
            <div className="general-container" >
                <div className="row responsive-columna">


                    <div className="col-lg-6">
                        <div className="general-title">
                            Nueva agenda urbana y los Objetivos de Desarrollo Sostenible
                        </div>

                        <div className="general-content text-responsive" style={{ textAlign: "justify" }}>
                            Las herramientas de planificación de la ciudad y los propios mecanismos de participación ciudadana, tal vez como nunca antes en la historia, están enfrentados a fuerzas poderosas -domésticas y mundiales-, que desatan dinámicas urbanas signadas por la incertidumbre y el sufrimiento humano. ¿Cómo entender y manejar la complejidad acuciante de la ciudad moderna, ante los objetivos inaplazables de desarrollo sostenible?
                        </div>
                    </div>
                </div>
                <div className="row" style={{ height: "auto", marginTop: "-10vh" }}>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: "5vw" }}>
                        {modal && <dialog open className='modal-reseña' >
                            <header>
                                <h4>{infoPresentacion[0]}</h4>
                                <span style={{ position: "absolute", right: "0px", top: "0px", padding: "0.5vw", cursor: "pointer" }}
                                    onClick={() => {
                                        setModal(!modal)
                                    }}
                                >

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40px" height="40px" fill="#91583b"><g fill="#91583b" fill-rule="nonzero"><g transform="scale(5.33333,5.33333)"><path transform="translate(24.00059,-9.94113) rotate(45.001)" d="M21.5,4.5h5.001v39h-5.001z"></path><path transform="translate(57.94113,24.00474) rotate(135.008)" d="M21.5,4.5h5v39.001h-5z"></path></g></g></svg></span>
                            </header>
                            <section>
                                <p>{infoPresentacion[1]}</p>
                            </section>
                        </dialog>}
                        {data.map((item) => {
                            return (

                                <div className='card card-b' key={item.text} style={{ height: "auto", marginBottom: "3vh", backgroundColor: "transparent", alignItems: "center" }}>
                                    <img src={item.url} alt={item.title} style={{ height: "20vh", width: "20vw", marginBottom: "1vh" }} className='image-b' />
                                    <address className="publicaciones-card-title">{item.title}</address>
                                    <button className='publicaciones-verMas' onClick={()=>{
                                        setinfoPresentacion([item.title, item.text])
                                        setModal(true)
                                    }}>Conoce más</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}