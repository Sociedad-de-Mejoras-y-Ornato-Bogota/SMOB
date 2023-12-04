
export default function BogotaCiudadCompleja() {

    return (
        <div className="general-container">
            <div className="row responsive-columna">
                <div className="col-lg-6" style={{ justifyContent: "center", alignItems: "center" }}>
                    <div className="general-title">
                        Bogotá: una ciudad compleja
                    </div>

                    <div style={{ textAlign: "justify" }}>
                        <a href="https://smob-storage.s3.us-east-2.amazonaws.com/libros/construyendo-civilidad/3.pdf" target="_blank" style={{ width: "200px", padding: "10px", fontSize: "14px", backgroundColor: "#762f0b", borderRadius: "5px #762f0b", borderColor: "#762f0b", color: "white", textAlign: "center", textDecoration: "none" }}>Descargar documento</a>
                    </div>

                </div>

                <div className="col-lg-6">
                    <iframe
                        src="https://smob-storage.s3.us-east-2.amazonaws.com/libros/construyendo-civilidad/3.pdf"
                        style={{ width: "50vw", height: "70vh" }}
                        className="pdf-responsive"
                        allow="accelerometer; autoplay; camera; encrypted-media; gyroscope; fullscreen"
                    ></iframe>
                </div>

            </div>
        </div>
    )
}
