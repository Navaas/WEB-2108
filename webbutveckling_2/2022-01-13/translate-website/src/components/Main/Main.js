import './Main.css'
import laptop from '../../utils/global/image/laptop.svg'
export default function Main(){
    return(
<main className='grid-container-main'>
    <div className='item-a'>
        <h1>Vi utbildar Sverige inom</h1>
        <h2>IT och programmering</h2>
    </div>

    <div className='item-b'>
        <p>Söker du kompetenta lärare till en yrkesutbildning, kodstuga eller gästföreläsning i Göteborg?</p>
        <a href='#'>Hur bokar jag ett möte</a>
    </div>

    <div className='item-d'>
        <button className='primary-button'>Våra kurser</button>
        <button className='secondary-button'>Kontakta oss</button>
    </div>

    <div className='item-c'>
        <img src={laptop} alt='Bild på laptop' className='img-laptop'/>
    </div>
    
    
    
    
</main>
    )
}