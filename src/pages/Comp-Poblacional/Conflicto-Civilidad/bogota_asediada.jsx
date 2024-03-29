import { useState } from "react";
import Pronto from "../../../components/Not found/ComingSoon"
import Linetime from "../../../components/lineTime/lineTime";
const Bogota_Ascediada = () => {
    const [menu, setMenu] = useState(2)
    return (
        <>
            <div style={{ minHeight: "65vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <section className='title_section'>
                    <h2 className='title_page'>Bogotá asediada</h2>
                </section>
                <section style={{ display: "flex", gap: "1rem" }}>
                    <button className={`${menu == 2 ? "button-active" : "button-inactive"}`} onClick={() => setMenu(2)} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Ver publicación</button>
                    <button className={`${menu == 1 ? "button-active" : "button-inactive"}`} onClick={() => setMenu(1)} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Ver línea del tiempo hechos violentos</button>
                </section>
                {menu == 1 && <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "3rem" }}>
                    <iframe
                        src="https://storymaps.arcgis.com/stories/c6bf68fe97d94cf8a057b075ef240596"
                        style={{ width: "100%", height: "95vh", marginTop: "3rem", marginBottom: "3rem" }}
                    ></iframe>
                    {/* <iframe src="https://smob-storage.s3.us-east-2.amazonaws.com/INFOGRAF%C3%8DA+EVOLUCI%C3%93N+DE+LA+CIUDADAN%C3%8DA+CORRECI%C3%93N.pdf" style={{width:"60%", height:"65vh"}}></iframe> */}
                </div>}
                {menu == 2 && <div style={{ width: '100%' }}>
                    {/* <br />
                    <iframe src="https://smob-storage.s3.us-east-2.amazonaws.com/publicaciones/BOGOTA%CC%81+ASEDIADA+SIGLO+XIX_SMOB.pdf" style={{ width: "60%", height: "80vh", display: 'block', margin: '0 auto' }} /> */}
                    <Pronto/>
                </div>}
            </div>
        </>
    )
}

export default Bogota_Ascediada