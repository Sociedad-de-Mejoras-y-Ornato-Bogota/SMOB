
const SistemaV = () => {
    return (
        <div className='general-container'>
            <div className='row responsive-columna' style={{ height: "12.5vh", width: "100vw", color: "black" }}>
                <div className='col-lg-2'></div>
                <div className='col-lg-8' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "24px" }}>
                    <p style={{ color: "#762f0b" , paddingTop:"3vh"}}>
                        Sistema Vial y de Transporte
                    </p>

                </div>
                <div className='col-lg-2'></div>

            </div>

            <div className='row' style={{ width: "100vw", height:"auto" }}>
                <div className="col-lg-12">
                    <iframe
                        src='https://storymaps.arcgis.com/collections/61f16b3e6d244a85883e6cafae4ae3d4'
                        className='dashboards'
                        style={{ width: "100%", height: "80vh" }}
                    ></iframe>
                </div>

            </div>



        </div>
    );
};
export default SistemaV;