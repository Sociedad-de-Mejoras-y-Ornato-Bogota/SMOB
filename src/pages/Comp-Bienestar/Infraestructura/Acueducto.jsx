const AguaYAcueducto = () => {
    return (
        <div className='general-container'>
            <div className='row responsive-columna' style={{ height: "12.5vh", width: "100vw", color: "black" }}>
                <div className='col-lg-2'></div>
                <div className='col-lg-8' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "24px" }}>
                    <p style={{ color: "#762f0b" }}>
                       Agua y alcantarillado
                    </p>

                </div>
                <div className='col-lg-2'></div>

            </div>

            <div className='row' style={{ width: "100vw", height:"auto" }}>
                <div className="col-lg-12">
                    <iframe
                        src='https://storymaps.arcgis.com/stories/81cfdc0533fc4a90a2d5377f62dd512c'
                        className='dashboards'
                        style={{ width: "100%", height: "80vh" }}
                    ></iframe>
                </div>

            </div>



        </div>
    );
};
export default AguaYAcueducto;