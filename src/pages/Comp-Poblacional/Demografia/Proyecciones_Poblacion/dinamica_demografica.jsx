import Plain_content from "../../../../components/plain_content/plain_content";


const Dinamica = () => {
    
    return (
           <>
           <div className="general-container">
             <div className="row responsive-columna">
               <div className="col-lg-6">
                 <div className="general-title">
                 Dinámica demográfica y modelos de ocupación del suelo en Bogotá y la Sabana
                 </div> 
       
                 <div  className="general-content text-responsive" style={{textAlign:"justify"}}>
                 Las dinámicas poblacionales van definiendo los modelos de ocupación del territorio. Qué se puede predecir y planear, qué sucede a tal ritmo que lo que se impone son la contingencia y la precariedad, son fenómenos que hay que estudiar detenidamente. El concepto de Bogotá Región, por ejemplo, cómo ha respondido a fenómenos como las variaciones en las tasas de fecundidad o mortalidad, los flujos migratorios, el crecimiento y envejecimiento de la población, la aglomeración y la pobreza, y por último, el desarrollo institucional y normativo. Presentación realizada en la Comisión Cuidad (mesa convocada por la Alcaldesa Mayor de Bogotá, Claudia López, en el proceso de formulación del POT 2020), en el marco de la discusión para el fortalecimiento de la estructura ecológica principal, la defensa de la reserva Thomas Van der Hammen y el análisis de la vivienda de interés social.
                 </div>
       
               </div>
       
               <div className="col-lg-6">          
                   <iframe src='https://geogeeks2.maps.arcgis.com/sharing/rest/content/items/5314a54a423f40e0ae6379326adff8ea/data'
                   style={{width:"40vw",height:"60vh"}}
                   className='pdf-responsive'
                   ></iframe>
       
               </div>
       
             </div>
           </div>
         </>
    );
};
export default Dinamica;