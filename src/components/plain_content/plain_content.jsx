import './plain_content.css'

const plain_content = ({titulo,texto}) =>{
  return(
    <div className="plain_c-container">
      <main className='plain_c-main'>
        <div className='plain_c-main-title'>
          <p>
            {titulo}
          </p>
					<span></span>
        </div>
        <div className='plain_c-main-content'>
          <p style={{textAlign:"justify"}}>{texto}</p>
        </div>
      </main>
    </div>
        
    )

}
export default plain_content;