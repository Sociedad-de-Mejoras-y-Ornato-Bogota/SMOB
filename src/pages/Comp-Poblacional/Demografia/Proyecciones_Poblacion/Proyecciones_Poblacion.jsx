

const Proyecciones = () => {
    return (

           <>
           <div className="general-container">
               <div className="row responsive-columna">
                   <div className="col-lg-6">
                       <div className="general-title">
                           Proyecciones de población
                       </div>

                       <div className="general-content text-responsive" style={{textAlign:"justify"}}>
                           {/* texto */}
                       </div>

                   </div>

                   <div className="col-lg-6">
                           <iframe src="https://www.youtube.com/embed/PcWDpkTmoHY" style={{width:"40vw",height:"50vh"}}
                           className='pdf-responsive'></iframe>
                   </div>
               </div>
           </div>
       </>
    )
}

export default Proyecciones;