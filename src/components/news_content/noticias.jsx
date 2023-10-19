
import data from './noticias.json'
// import Noticia from './noticia';
import './noticias.css'
 
const Noticias =()=>{
    return(
        <section className='news_section'>
        <div className='news_title'>
            <p><h1 className='news_title_h'>Noticias relacionadas</h1></p>
            <div className='span_new'>
            <span></span>
            </div>
        </div>
        {/* <div className='news_container'>
            {
                data.map(news=> 
                    <Noticia
                    key={news.url}
                    imagen={news.imagen}
                    texto={news.texto}
                    />
                )}
        </div> */}
        </section>
    )
}
export default Noticias; 