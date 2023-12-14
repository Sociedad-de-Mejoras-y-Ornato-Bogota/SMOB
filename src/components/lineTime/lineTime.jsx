import "./styles.css"
import { useState } from "react"
const Linetime = () => {
    const [state, setState] = useState(1)
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="linetime-container" >
                <div className="era-container" onClick={() => setState(1)}>
                    <div className="era" style={{ backgroundColor: "orange" }}></div>
                </div>

                <div className="era-container" onClick={() => setState(2)}>
                    <div className="era" style={{ backgroundColor: "#EF3964" }}>ANTECEDENTES</div>
                </div>

                <div className="era-container" onClick={() => setState(3)}>
                    <div className="era" style={{ backgroundColor: "#FAA727" }}>LA REPÚBLICA</div>
                </div>


                <div className="era-container" onClick={() => setState(4)}>
                    <div className="era" style={{ backgroundColor: "#E3E436" }}>LA RECONQUISTA</div>
                </div>

                <div className="era-container" onClick={() => setState(5)}>
                    <div className="era" style={{ backgroundColor: "#939598" }}></div>
                </div>


                <div className="era-container" onClick={() => setState(6)}>
                    <div className="era" style={{ backgroundColor: "#05A7E0" }}>CONSOLIDACIÓN</div>
                </div>

                <div className="era-container" onClick={() => setState(7)}>
                    <div className="era" style={{ backgroundColor: "#7750A0" }}>1/2 SIGLO</div>
                </div>


                <div className="era-container" onClick={() => setState(8)}>
                    <div className="era" style={{ backgroundColor: "#4FB848" }}>CIVILISTAS</div>
                </div>


                <div className="era-container" onClick={() => setState(9)}>
                    <div className="era" style={{ backgroundColor: "#C8AC30" }}>MILITARES</div>
                </div>


                <div className="era-container" onClick={() => setState(10)}>
                    <div className="era" style={{ backgroundColor: "#EB1E23" }}>OLIMPO RADICAL</div>
                </div>


                <div className="era-container" onClick={() => setState(11)}>
                    <div className="era" style={{ backgroundColor: "#0E4721" }}>REGENERACIÓN</div>
                </div>

                <div className="era-container" onClick={() => setState(12)}>
                    <div className="era" style={{ backgroundColor: "#939595" }}></div>
                </div>
            </div>
            {state && <div className="linetime" style={{ padding: "3rem" }}>
                {state == 1 && <div>
                    <div style={{ backgroundColor: "orange", width: "100%", height: "5rem" }}></div>
                    <aside style={{ display: "flex", justifyContent: "center" }}>
                        <div className="line-circle">
                            <span className="line" style={{ backgroundColor: "orange" }}></span>
                            <span className="circle" style={{ backgroundColor: "orange" }}></span>
                            <div className="content-lineTime" style={{top: "40px",left: "-140%"}}>
                                <h6>1781</h6>
                                <p>Revolución de los comuneros</p>
                            </div>
                        </div>
                    </aside>
                </div>}
                {state == 2 && <div>
                    <div style={{ backgroundColor: "#EF3964", width: "100%", height: "5rem", color: "white", textAlign: "center", padding: "1rem", fontSize: "1.5vw" }}>
                        ANTECEDENTES
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EF3964" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EF3964" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1790</h6>
                                    <p>15.620</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EF3964" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EF3964" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-120%"}}>
                                    <h6>1793</h6>
                                    <p>Derechos del hombre</p>
                                    <p>17.725</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EF3964" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EF3964" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1798</h6>
                                    <p>20.900</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EF3964" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EF3964" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-60%"}}>
                                    <h6>1800</h6>
                                    <p>21.964</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EF3964" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EF3964" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-120%"}}>
                                    <h6>1809</h6>
                                    <p>Memorial de agravios</p>
                                    <p>23.154</p>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>}
                {state == 3 && <div>
                    <div style={{ backgroundColor: "#FAA727", width: "100%", height: "5rem", color: "white", textAlign: "center", padding: "1rem", fontSize: "1.5vw" }}>
                        LA REPÚBLICA
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EF3964" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EF3964" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-220%"}}>
                                    <h6>1810</h6>
                                    <p>El grito de independencia</p>
                                    <p>23.961</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EF3964" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EF3964" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-30%"}}>
                                    <h6>1811</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EF3964" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EF3964" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1813</h6>
                                    <p>Ataque de Baraya</p>
                                    <p>23.961</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EF3964" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EF3964" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1814</h6>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>}
                {state == 4 && <div>
                    <div style={{ backgroundColor: "#E3E436", width: "100%", height: "5rem", color: "white", textAlign: "center", padding: "1rem", fontSize: "1.5vw" }}>
                        LA RECONQUISTA
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#E3E436" }}></span>
                                <span className="circle" style={{ backgroundColor: "#E3E436" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1815</h6>
                                    <p>Ataque de Bolívar</p>
                                    <p>24.811</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#E3E436" }}></span>
                                <span className="circle" style={{ backgroundColor: "#E3E436" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1819</h6>
                                    <p>Batalla de Boyacá</p>
                                    <p>26.456</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>}
                {state == 5 && <div>
                    <div style={{ backgroundColor: "#939598", width: "100%", height: "5rem", color: "white", textAlign: "center", padding: "1rem", fontSize: "1.5vw" }}>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#939598" }}></span>
                                <span className="circle" style={{ backgroundColor: "#939598" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-30%"}}>
                                    <h6>1820</h6>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>}
                {state == 6 && <div>
                    <div style={{ backgroundColor: "#05A7E0", width: "100%", height: "5rem", color: "white", textAlign: "center", padding: "1rem", fontSize: "1.5vw" }}>
                        CONSOLIDACIÓN
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-70%"}}>
                                    <h6>1821</h6>
                                    <p>27.250</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-30%"}}>
                                    <h6>1822</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-30%"}}>
                                    <h6>1827</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-180%"}}>
                                    <h6>1828</h6>
                                    <p>Noche Septembrina</p>
                                    <p>30.235</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-60%"}}>
                                    <h6>1830</h6>
                                    <p>31.088</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-60%"}}>
                                    <h6>1831</h6>
                                    <p>31.088</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-60%"}}>
                                    <h6>1832</h6>
                                    <p>31.088</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-30%"}}>
                                    <h6>1837</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-30%"}}>
                                    <h6>1838</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-30%"}}>
                                    <h6>1839</h6>
                                    <p>37.111</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-30%"}}>
                                    <h6>1840</h6>
                                    <p>37.817</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-130%"}}>
                                    <h6>1841</h6>
                                    <p> La Guerra de los Supremos</p>
                                    <p>38.650</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-30%"}}>
                                    <h6>1842</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-60%"}}>
                                    <h6>1843</h6>
                                    <p>40.086</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-30%"}}>
                                    <h6>1845</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-30%"}}>
                                    <h6>1846</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-30%"}}>
                                    <h6>1848</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#05A7E0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#05A7E0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-60%"}}>
                                    <h6>1849</h6>
                                    <p>40.200</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>}
                {state == 7 && <div>
                    <div style={{ backgroundColor: "#7750A0", width: "100%", height: "5rem", color: "white", textAlign: "center", padding: "1rem", fontSize: "1.5vw" }}>
                        1/2 SIGLO
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#7750A0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#7750A0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1850</h6>
                                    <p>39.800</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#7750A0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#7750A0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1851</h6>
                                    <p>39.649</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#7750A0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#7750A0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1852</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#7750A0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#7750A0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1853</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#7750A0" }}></span>
                                <span className="circle" style={{ backgroundColor: "#7750A0" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1854</h6>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>}
                {state == 8 && <div>
                    <div style={{ backgroundColor: "#4FB848", width: "100%", height: "5rem", color: "white", textAlign: "center", padding: "1rem", fontSize: "1.5vw" }}>
                        CIVILISTAS
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#4FB848" }}></span>
                                <span className="circle" style={{ backgroundColor: "#4FB848" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1855</h6>
                                    <p>40.595</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#4FB848" }}></span>
                                <span className="circle" style={{ backgroundColor: "#4FB848" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1856</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#4FB848" }}></span>
                                <span className="circle" style={{ backgroundColor: "#4FB848" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1857</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#4FB848" }}></span>
                                <span className="circle" style={{ backgroundColor: "#4FB848" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1858</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#4FB848" }}></span>
                                <span className="circle" style={{ backgroundColor: "#4FB848" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1859</h6>
                                    <p>41.701</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#4FB848" }}></span>
                                <span className="circle" style={{ backgroundColor: "#4FB848" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1861</h6>
                                    <p>42.867</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>}
                {state == 9 && <div>
                    <div style={{ backgroundColor: "#C8AC30" , width: "100%", height: "5rem", color: "white", textAlign: "center", padding: "1rem", fontSize: "1.5vw" }}>
                        MILITARES
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#C8AC30"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#C8AC30"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1862</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor:"#C8AC30"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#C8AC30"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1863</h6>
                                    <p>44.444</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#C8AC30"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#C8AC30"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1864</h6>
                                    <p>45.254</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#C8AC30"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#C8AC30" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1865</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#C8AC30"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#C8AC30"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1866</h6>

                                </div>
                            </div>
                        </aside>
                    </div>
                </div>}
                {state == 10 && <div>
                    <div style={{ backgroundColor: "#EB1E23" , width: "100%", height: "5rem", color: "white", textAlign: "center", padding: "1rem", fontSize: "1.5vw" }}>
                        OLIMPO RADICAL
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1867</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1868</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1869</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1870</h6>
                                    <p>60.833</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1872</h6>

                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1873</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1874</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1875</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1876</h6>

                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1877</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1878</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1879</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1880</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1881</h6>
                                    <p>84.723</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1882</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1883</h6>

                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23" }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1884</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#EB1E23"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#EB1E23" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1885</h6>
                                    <p>87.138</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>}
                {state == 11 && <div>
                    <div style={{ backgroundColor: "#0E4721" , width: "100%", height: "5rem", color: "white", textAlign: "center", padding: "1rem", fontSize: "1.5vw" }}>
                        REGENERACIÓN
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor:"#0E4721" }}></span>
                                <span className="circle" style={{ backgroundColor: "#0E4721" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1886</h6>
                                    <p>87.742</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#0E4721" }}></span>
                                <span className="circle" style={{ backgroundColor: "#0E4721"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1888</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#0E4721"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#0E4721"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1889</h6>
                                </div>
                            </div>
                        </aside>
  
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#0E4721"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#0E4721"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1890</h6>
                                    <p>90.157</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#0E4721"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#0E4721" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1892</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#0E4721"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#0E4721"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1893</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#0E4721"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#0E4721"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1897</h6>
                                    <p>84.723</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#0E4721"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#0E4721"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1898</h6>
                                    <p>94.650</p>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#0E4721"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#0E4721"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1899</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#0E4721"  }}></span>
                                <span className="circle" style={{ backgroundColor: "#0E4721"  }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1900</h6>
                                    <p>96.605</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>}
                {state == 12 && <div>
                    <div style={{ backgroundColor: "#939595", width: "100%", height: "5rem", color: "white", textAlign: "center", padding: "1rem", fontSize: "1.5vw" }}>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#939595" }}></span>
                                <span className="circle" style={{ backgroundColor: "#939595" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1901</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#939595" }}></span>
                                <span className="circle" style={{ backgroundColor: "#939595"}}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1904</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#939595" }}></span>
                                <span className="circle" style={{ backgroundColor: "#939595" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-40%"}}>
                                    <h6>1905</h6>
                                </div>
                            </div>
                        </aside>
                        <aside >
                            <div className="line-circle">
                                <span className="line" style={{ backgroundColor: "#939595" }}></span>
                                <span className="circle" style={{ backgroundColor: "#939595" }}></span>
                                <div className="content-lineTime" style={{top: "40px",left: "-80%"}}>
                                    <h6>1907</h6>
                                    <p>100.000</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>}
            </div>}
        </div>

    )
}
export default Linetime