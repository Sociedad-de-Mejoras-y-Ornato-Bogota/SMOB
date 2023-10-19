const Telecomunicaciones = () => {
    return (
        <div className='general-container'>
            <div className='row responsive-columna' style={{ height: "12.5vh", width: "100vw", color: "black" }}>
                <div className='col-lg-2'></div>
                <div className='col-lg-8' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "24px" }}>
                    <p style={{ color: "#762f0b" }}>
                       Sistema de Telecomunicaciones
                    </p>

                </div>
                <div className='col-lg-2'></div>

            </div>

            <div className='row' style={{ width: "100vw", height:"97vh" }}>
                <div className="col-lg-12">
                    <iframe
                        src='https://storymaps.arcgis.com/collections/bc734b3237b14f8f9f7cb736fb81588e'
                        className='dashboards'
                        style={{ width: "100%", height: "95vh" }}
                    ></iframe>
                </div>

            </div>



        </div>
    );
};
export default Telecomunicaciones