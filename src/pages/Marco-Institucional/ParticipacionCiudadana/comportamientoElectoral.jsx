import { useState } from "react";
export default function ComportamientoElectoral() {
    const [menu, setMenu] = useState(1);
    const [menu2, setMenu2] = useState(1);
    return (
        <>
            <div style={{ minHeight: "65vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <section className='title_section'>
                    <h2 className='title_page'>Comportamiento electoral</h2>
                </section>
                <section style={{ display: "flex", gap: "1rem" }}>
                    <button className={`${menu == 1 ? "button-active" : "button-inactive"}`} onClick={() => setMenu(1)} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Elecciones Alcaldía Bogotá</button>
                    <button className={`${menu == 2 ? "button-active" : "button-inactive"}`} onClick={() => setMenu(2)} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Concejo de Bogotá</button>
                    <button className={`${menu == 3 ? "button-active" : "button-inactive"}`} onClick={() => setMenu(3)} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Votación Alcaldía vs Concejo</button>
                </section>
                {menu == 1 && <iframe
                    src="https://geoapps.esri.co/portal/apps/dashboards/93ab9e0ae95543de8eb113247bb3922b"
                    style={{ width: "100%", height: "95vh", marginTop: "3rem", marginBottom: "3rem" }}
                ></iframe>}
                {menu == 2 &&
                    <>
                        <section style={{ display: "flex", gap: "1rem", marginTop: "20px" }}>
                            <button className={`${menu2 == 1 ? "button-active" : "button-inactive"}`} onClick={() => setMenu2(1)} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Elecciones Concejo de Bogotá</button>
                            <button className={`${menu2 == 2 ? "button-active" : "button-inactive"}`} onClick={() => setMenu2(2)} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Concejales 1935 - 1974</button>
                        </section>
                        {menu2 == 1 &&
                            <iframe
                                src="https://geoapps.esri.co/portal/apps/dashboards/ac59d4dab7c74576ad432359e2c3cd0a"
                                style={{ width: "100%", height: "95vh", marginTop: "3rem", marginBottom: "3rem" }}
                            ></iframe>
                        }
                        {menu2 == 2 &&
                            <iframe
                                src="https://geoapps.esri.co/portal/apps/dashboards/62b80c58a07b4e97b1bd803de362b946"
                                style={{ width: "100%", height: "95vh", marginTop: "3rem", marginBottom: "3rem" }}
                            ></iframe>
                        }
                    </>
                }
                {menu == 3 && <iframe
                    src="https://geoapps.esri.co/portal/apps/dashboards/54f5832e7e66431c9b07f57e5e8ac1e4"
                    style={{ width: "100%", height: "95vh", marginTop: "3rem", marginBottom: "3rem" }}
                ></iframe>}
            </div>
        </>
    );
}