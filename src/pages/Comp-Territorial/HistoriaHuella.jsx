import './HistoriaCrecimiento.css';

function    HistoriaHuella() {
    return (
        <div className='series'>
        <div className='row' style={{height:"12.5vh",width:"100vw",color:"black"}}>
         <div className='col-lg-2'></div>
         <div className='col-lg-8' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"24px"}}>
         <p style={{color:"#762f0b"}}>
         Historia de la huella urbana
        </p>

         </div>
         <div className='col-lg-2'></div>
        
       </div>

      <div className='row' style={{width:"100vw", heigth:"97vh"}}>
        <div className="col-lg-12" >
        <iframe
          src='https://experience.arcgis.com/experience/9ae00ad4ed1041c0961d1cd8ca451cfe'
          style={{height:"97vh",width:"100%"}}
        ></iframe>
        </div>

      </div>


 
    </div>
    
    );
}

export default HistoriaHuella;