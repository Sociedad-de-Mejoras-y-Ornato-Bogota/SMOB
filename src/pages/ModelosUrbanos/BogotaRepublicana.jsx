import Pronto from "../../components/Not found/ComingSoon";

function BogotaRepublicana() {
    return (
        <>
            <>
                <div style={{ minHeight: "65vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <section className='title_section'>
                        <h2 className='title_page'>Bogotá: ciudad republicana</h2>
                    </section>
                    <div style={{ width: '100%' }}>
                        {/* <br />
                        <iframe src="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/Bogot%C3%A1+Ciudad+Republicana_SMOB.pdf" style={{ width: "60%", height: "80vh", display: 'block', margin: '0 auto' }} /> */}
                        <Pronto/>
                    </div>
                </div>
            </>

        </>
    );
}
export default BogotaRepublicana;