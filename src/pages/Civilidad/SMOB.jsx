export default function ResponsabilidadSocial() {
    return (
        <>
            <div className="general-container" >
                <br></br>
                <div className="row responsive-columna">
                    <div className="col-lg-6">
                        <div className="general-title">
                            La Sociedad de Mejoras y Ornato de Bogotá
                        </div>

                        <div className="general-content text-responsive" style={{ textAlign: "justify" }}>
                            {/* texto */}
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <iframe src="https://smob-storage.s3.us-east-2.amazonaws.com/Responsabilidad_SMOB.mp4" style={{ width: "40vw", height: "50vh" }} className='pdf-responsive'></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}