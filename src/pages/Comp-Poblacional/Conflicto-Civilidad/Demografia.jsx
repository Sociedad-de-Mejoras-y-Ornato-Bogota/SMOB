const Demografiavu = () =>{
    return(
        <>
         <div style={{ minHeight: "65vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <section className='title_section'>
                    <h2 className='title_page'>Demografía, violencia y urbanización</h2>
                </section>
               <div style={{width: '100%'}}>
                    <br/>
                    <iframe src="https://smob-storage.s3.us-east-2.amazonaws.com/publicaciones/Demografi%CC%81a+violencia+y+urbanizacio%CC%81n_SMOB.pdf"  style={{width:"60%", height:"80vh", display: 'block', margin: '0 auto'}}/>
                </div>
            </div>
        </>
    )
}

export  default Demografiavu