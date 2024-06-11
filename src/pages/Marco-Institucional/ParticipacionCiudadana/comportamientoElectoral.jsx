import { useState } from "react";
export default function ComportamientoElectoral() {
    const [menu, setMenu] = useState(1);
    const [menu2, setMenu2] = useState(2);
    return (
        <>
            <div style={{ minHeight: "65vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <section className='title_section'>
                    <h2 className='title_page'>Comportamiento electoral</h2>
                </section>
                <br />
                <section style={{ display: "flex", gap: "1rem" }}>
                    <button className={`${menu == 1 ? "button-active" : "button-inactive"}`} onClick={() => setMenu(1)} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Elecciones Alcaldía Bogotá</button>
                    <button className={`${menu == 2 ? "button-active" : "button-inactive"}`} onClick={() => setMenu(2)} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Concejo de Bogotá</button>
                    <button className={`${menu == 3 ? "button-active" : "button-inactive"}`} onClick={() => setMenu(3)} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Análisis histórico</button>
                </section>
                {menu == 1 &&
                    <>
                        <br />
                        <em style={{ padding: '2px 20px' }}><strong><span style={{ color: "#762f0b" }}>*</span> Alcaldes Mayores de Bogotá D.C. (1988 - presente)</strong>: Elegidos por voto popular: Elegidos por voto popular desde 1988, en un periodo de 4 años, sin posibilidad de reelección inmediata. Configurado en el año 2004 por la Constitución Política de Colombia pasando de 3 a 4 años de gobierno, siendo estos alcaldes del Distrito Capital, creado por la misma Constitución.</em>
                        <iframe
                            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/0ed134dfa5b94198a2c4354b0de7f727"
                            style={{ width: "100%", height: "95vh", marginTop: "3rem", marginBottom: "3rem" }}
                        ></iframe>
                    </>}
                {menu == 2 &&
                    <>
                        <section style={{ display: "flex", gap: "1rem", marginTop: "20px" }}>
                            <button className={`${menu2 == 2 ? "button-active" : "button-inactive"}`} onClick={() => setMenu2(2)} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Listado concejales 1935-1970</button>
                            <button className={`${menu2 == 1 ? "button-active" : "button-inactive"}`} onClick={() => setMenu2(1)} style={{ padding: "0.8rem", width: "100%", borderRadius: "5px", borderColor: "transparent" }}>Elecciones Concejo de Bogotá</button>
                        </section>
                        {menu2 == 1 &&
                            <>
                                <br />
                                <em style={{ padding: '2px 20px' }}><strong><span style={{ color: "#762f0b" }}>*</span> Alcalde Mayor del Distrito Especial de Bogotá (1954-1988)</strong>: Elegidos sin voto popular mediante decreto 3640 de 1954 se crea el Distrito Especial de Bogotá y el cargo comienza a denominarse como Alcalde Mayor. Pasa a ser designado directamente por el Presidente de la República.</em>
                                <em style={{ padding: '2px 20px' }}><strong><span style={{ color: "#762f0b" }}>*</span> Alcaldes Mayores de Bogotá D.C. (1988 - presente)</strong>: Elegidos por voto popular: Elegidos por voto popular desde 1988, en un periodo de 4 años, sin posibilidad de reelección inmediata. Configurado en el año 2004 por la Constitución Política de Colombia pasando de 3 a 4 años de gobierno, siendo estos alcaldes del Distrito Capital, creado por la misma Constitución.</em>
                                <iframe
                                    src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/06fd0f03bc8e4293b9ff6da858871b93"
                                    style={{ width: "100%", height: "95vh", marginTop: "3rem", marginBottom: "3rem" }}
                                ></iframe>
                            </>
                        }
                        {menu2 == 2 &&
                            <>
                                <br />
                                <em style={{ padding: '2px 20px' }}><strong><span style={{ color: "#762f0b" }}>*</span> Alcalde Municipal de Bogotá (1935-1954)</strong>: La ley 65 de diciembre de 1909 estableció el restablecimiento de los territorios concebidos originalmente por la Constitución de 1886, retornando a Bogotá a la categoría de capital del departamento de Cundinamarca y administrada por un alcalde nombrado por el gobernador.</em>
                                <em style={{ padding: '2px 20px' }}><strong><span style={{ color: "#762f0b" }}>*</span> Alcalde Mayor del Distrito Especial de Bogotá (1954-1988)</strong>: Elegidos sin voto popular mediante decreto 3640 de 1954 se crea el Distrito Especial de Bogotá y el cargo comienza a denominarse como Alcalde Mayor. Pasa a ser designado directamente por el Presidente de la República.</em>
                                <iframe
                                    src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/e39aa31ce6794dd59d5cebc6a6fd761c"
                                    style={{ width: "100%", height: "95vh", marginTop: "3rem", marginBottom: "3rem" }}
                                ></iframe>
                            </>
                        }
                    </>
                }
                {menu == 3 &&
                    <>
                        <br />
                        <em style={{ padding: '2px 20px' }}><strong><span style={{ color: "#762f0b" }}>*</span> Alcalde Municipal de Bogotá (1935-1954)</strong>: La ley 65 de diciembre de 1909 estableció el restablecimiento de los territorios concebidos originalmente por la Constitución de 1886, retornando a Bogotá a la categoría de capital del departamento de Cundinamarca y administrada por un alcalde nombrado por el gobernador.</em>
                        <em style={{ padding: '2px 20px' }}><strong><span style={{ color: "#762f0b" }}>*</span> Alcalde Mayor del Distrito Especial de Bogotá (1954-1988)</strong>: Elegidos sin voto popular mediante decreto 3640 de 1954 se crea el Distrito Especial de Bogotá y el cargo comienza a denominarse como Alcalde Mayor. Pasa a ser designado directamente por el Presidente de la República.</em>
                        <em style={{ padding: '2px 20px' }}><strong><span style={{ color: "#762f0b" }}>*</span> Alcaldes Mayores de Bogotá D.C. (1988 - presente)</strong>: Elegidos por voto popular: Elegidos por voto popular desde 1988, en un periodo de 4 años, sin posibilidad de reelección inmediata. Configurado en el año 2004 por la Constitución Política de Colombia pasando de 3 a 4 años de gobierno, siendo estos alcaldes del Distrito Capital, creado por la misma Constitución.</em>
                        <iframe
                            src="https://sosmejorasbogota.maps.arcgis.com/apps/dashboards/5ba7a1b33f084990aa452e0bcec95729"
                            style={{ width: "100%", height: "95vh", marginTop: "3rem", marginBottom: "3rem" }}
                        ></iframe>
                    </>
                }
            </div>
        </>
    );
}