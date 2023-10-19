import './Crecimiento.css';


function Crecimiento() {
    return (
        <div className='general-container' style={{backgroundColor:"#F4F1EE"}}>
        <div className='row responsive-columna' style={{height:"12.5vh",width:"100vw",color:"black"}}>
         <div className='col-lg-2'></div>
         <div className='col-lg-8' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"24px"}}>
         <p style={{color:"#762f0b"}} className="general-content text-responsive">
          Crecimiento de la población (1970 - 2035)
        </p>

         </div>
         <div className='col-lg-2'></div>
        
       </div>

       <div className='row' style={{height:"12.5vh",width:"100vw",color:"black",marginBottom:"12vh"}}>
         <div className='col-lg-2'></div>
         <div className='col-lg-8' style={{display:"flex",flexDirection:"column",justifyContent:"center",color:"#762f0b", fontSize:"18px"}}>
            <p className="general-content text-responsive">Crecimiento de población:</p>
         <p  className="general-content text-responsive" style={{textAlign:"justify"}}>
            El crecimiento poblacional se refiere al incremento del número de habitantes en un espacio y tiempo determinado, el cual se puede medir a través de una fórmula matemática. También se puede emplear como sinónimo el término crecimiento demográfico.
        </p>
         </div>
         <div className='col-lg-2'></div>
        
       </div>

      <div className='row responsive-row' style={{width:"100vw",height:"97vh"}}>
        <div className="col-lg-6 todo">
        <iframe
          src='https://geogeeks2.maps.arcgis.com/apps/dashboards/586d8531b4d6443fbeb0caea786b6dcb'
          className='dashboards'
          style={{width:"100%",height:"95vh"}}
        ></iframe>
        </div>
        <div className="col-lg-6 todo">
        <iframe
          src='https://geogeeks2.maps.arcgis.com/apps/dashboards/3ccec03e3cdc4ac9862aaf38fcf30106'
          className='dashboards'
          style={{width:"100%",height:"95vh"}}
        ></iframe>
        </div>
      </div>


       <div className='row' style={{height:"25vh",width:"100vw",color:"black"}}>
         <div className='col-lg-2'></div>
         <div className='col-lg-8' style={{display:"flex",flexDirection:"column",justifyContent:"center",color:"#762f0b", fontSize:"18px"}}>
            <p className="general-content text-responsive">Porcentaje de concentración de la población:</p>
         <p style={{textAlign:"justify"}} className="general-content text-responsive">
           El porcentaje de concentración de la población de Colombia en la ciudad capital de Bogotá. La concentración de la población esta relacionada con del nivel de urbanización del país, teniendo un efecto directo en la migración interna, la agricultura, la concentración de la propiedad rural y el escaso dinamismo del sector agrícola tradicional, las ventajas comparativas sociales y económicas entre el campo y la ciudad, así como entre las áreas menores y las grandes capitales.
        </p>
         </div>
         <div className='col-lg-2'></div>
        
       </div>
     
  <div className='row' style={{width:"100vw",height:"97vh"}}>
        <div className="col-lg-12">
        <iframe
          src='https://geogeeks2.maps.arcgis.com/apps/dashboards/d2b67f4294a14f64a7c936b9c20b01d0'
          className='todo'
          style={{width:"100vw",height:"97vh"}}
        ></iframe>
        </div>

      </div>
    </div>
    )
}

export default Crecimiento;