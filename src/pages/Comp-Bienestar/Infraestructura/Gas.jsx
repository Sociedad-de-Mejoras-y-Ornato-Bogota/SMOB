const SGas = () => {
    return (
        <div className='general-container'>
            <div className='row responsive-columna' style={{ height: "12.5vh", width: "100vw", color: "black" }}>
                <div className='col-lg-2'></div>
                <div className='col-lg-8' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "24px" }}>
                    <p style={{ color: "#762f0b" }}>
                       Sistema de Gas
                    </p>

                </div>
                <div className='col-lg-2'></div>

            </div>

            <div className='row' style={{ width: "100vw", height:"auto" }}>
                <div className="col-lg-12">
                    <iframe
                        src='https://storymaps.arcgis.com/stories/8a6395158bea4746809933e34939f4f1'
                        className='dashboards'
                        style={{ width: "100%", height: "80vh" }}
                    ></iframe>
                </div>

            </div>



        </div>
    );
};
export default SGas;