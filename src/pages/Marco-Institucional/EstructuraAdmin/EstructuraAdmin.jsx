import { useState } from "react";
import LineaTiempoiEA from './LineaTiempoEA'
import Evolucion from "./Evolucion";
export default function EstruturaAdmin() {
  const [menu, setMenu] = useState(1)
  return (
    <>
      <div style={{ minHeight: "65vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <section className='title_section'>
          <h2 className='title_page'>Estructura administrativa de Bogotá</h2>
        </section>
        <section style={{display:"flex", gap:"1rem"}}>
          <button className={`${menu == 1 ? "button-active" : "button-inactive"}`} onClick={() => setMenu(1)} style={{padding: "0.8rem", width:"100%", borderRadius:"5px", borderColor:"transparent"}}>Ver línea del tiempo</button>
          <button className={`${menu == 2 ? "button-active" : "button-inactive"}`} onClick={() => setMenu(2)} style={{padding: "0.8rem", width:"100%", borderRadius:"5px", borderColor:"transparent"}}>Ver evolución</button>
        </section>
        {menu == 1 && <LineaTiempoiEA />}
        {menu == 2 && <Evolucion />}
      </div>
    </>
  );
}
