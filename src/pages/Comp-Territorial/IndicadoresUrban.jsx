
function    IndicadoresUrban() {
    return (
        <div className='general-container' >
        <div className='row responsive-columa' style={{height:"12.5vh",width:"100vw",color:"black"}}>
         <div className='col-lg-2'></div>
         <div className='col-lg-8' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"24px"}}>
         <p style={{color:"#762f0b"}}>
         Indicadores Urbanísticos
        </p>

         </div>
         <div className='col-lg-2'></div>
        
       </div>

      <div className='row' style={{width:"100vw", height:"auto"}}>
        <div className="col-lg-12">
        <iframe
          src='https://geogeeks2.maps.arcgis.com/apps/dashboards/d3204ef726bf4f069eb7c4e68abf9ec2'
          className='dashboards'
          style={{width:"100%",height:"85vh"}}
        ></iframe>
        </div>

      </div>


 
    </div>
    
    );
}

export default IndicadoresUrban;