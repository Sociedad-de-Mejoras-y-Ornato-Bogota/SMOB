import React from "react";
import './style.css';

const Page_libro = (props) => {
    const zoomLevel = 1.52; // Zoom al 52%
    const viewerUrl = `https://docs.google.com/viewer?embedded=true&url=${encodeURIComponent(props.url_book)}&zoom=${zoomLevel * 100}`;

    return (
        <div className="page_book">
            <section className="center_section">
                <iframe 
                    src={viewerUrl} 
                    className="content_book" 
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
};

export default Page_libro;
