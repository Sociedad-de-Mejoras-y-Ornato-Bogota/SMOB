function BogotaColonial() {
    return (
        <>
            <div style={{ minHeight: "65vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <section className='title_section'>
                    <h2 className='title_page'>Bogotá: ciudad colonial</h2>
                </section>
               <div style={{width: '100%'}}>
                    <br/>
                    <iframe src="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/Bogot%C3%A1+Ciudad+Colonial_SMOB.pdf"  style={{width:"60%", height:"80vh", display: 'block', margin: '0 auto'}}/>
                </div>
            </div>
        </>
    );
}
export default BogotaColonial;