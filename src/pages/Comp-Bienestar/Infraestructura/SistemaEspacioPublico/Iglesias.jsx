const Iglesias = () => {


    return (

        <div className='general-container' >
        <div className='row responsive-columna' style={{height:"7vh",width:"100vw",color:"black"}}>
         <div className='col-lg-2'></div>
         <div className='col-lg-8' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"24px"}}>
         <p style={{color:"#762f0b"}}>
         Iglesias
        </p>

         </div>
         <div className='col-lg-2'></div>
        
       </div>

      <div className='row' style={{width:"100vw",height:"97vh"}}>
        <div className="col-lg-12 " style={{height:"97vh"}}>
        <iframe
          src='https://experience.arcgis.com/experience/b39099d39a25486d92ae98ff09616d86/'
          className='dashboards'
          style={{width:"100vw",height:"100%"}}
        ></iframe>
        </div>

      </div>
     
    </div>
    )
}

export default Iglesias;