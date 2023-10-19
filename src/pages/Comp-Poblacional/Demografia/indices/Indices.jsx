import './Indicadores.css';


const Indices = () => {


    return (

        <div className='general-container' >
        <div className='row' style={{height:"12.5vh",width:"100vw",color:"black"}}>
         <div className='col-lg-2'></div>
         <div className='col-lg-8' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"24px"}}>
         <p style={{color:"#762f0b"}} className='general-title'>
         Índices demográficos
        </p>

         </div>
         <div className='col-lg-2'></div>
        
       </div>

      <div className='row' style={{width:"100vw",height:"97vh"}}>
        <div className="col-lg-12">
        <iframe
          src='https://experience.arcgis.com/experience/418fb6f6b9464b50ac181020a1a18fe5/page/Indicadores/?draft=true&views=Paso-10%2CPaso-5'
          className='dashboards'
          style={{width:"100%",height:"95vh"}}
        ></iframe>
        </div>

      </div>
     
    </div>
    )
}

export default Indices;