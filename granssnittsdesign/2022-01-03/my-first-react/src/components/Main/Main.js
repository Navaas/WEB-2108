import './Main.css'
import picaut from '../img/picaut.JPG'
import product1 from '../img/product-1.JPG'
import product2 from '../img/product-2.JPG'
import product3 from '../img/product-3.JPG'
import product4 from '../img/product-4.JPG'
import product5 from '../img/product-5.JPG'
import product6 from '../img/product-6.JPG'
import product7 from '../img/product-7.JPG'
import product8 from '../img/product-8.JPG'

function Main() {

    return (
        <>

            <main>
                <div className="container-main">
                    <section className="mobile-view"></section>
                    <section className="img-picaut">
                        <img src={picaut} alt="picaut" className="img-picaut-responsive"/>
                    </section>
                    <section>
                        <p>M Picaut är en exklusiv hudvårdsserie för ansiktet som tillverkas i Sverige.
                            Ingredienserna
                            har en dokumenterad synbar effekt av anti-age som sedan kombineras med det renaste naturen
                            kan
                            erbjuda. Naturligtvis är alla produkter helt fria från mineraloljor, parabener, silikoner,
                            sulfater,
                            onödiga artificiella utfyllnader och färgämnen.</p>
                        <p>Huden tar upp mer än hälften av det som smörjs på den. Mette Picauts serie, med 95-99 procent
                            ekologiska ingredienser, stöder och stärker hudens naturliga funktioner. Kollagenhalten i
                            huden ökar tack vare peptider i en ovanligt hög dos (3%), vilket gör att serien samverkar
                            till att ge en fastare hy med färre linjer och rynkor redan efter tvåmånaders användning.
                            Produkterna är
                            skräddarsydda för att hjälpa hudens egna funktioner.</p>

                        <p>Mette Picaut har skapat en serie som hon själv alltid önskat och som är underbar att använda
                            - så som
                            hudvård bör vara!
                        </p>
                    </section>
                    <section className="mobile-view"></section>
                </div>
                <hr/>
                <div className="container-products">
                    <article><img src={product1} alt="product" className="img-product"/>
                        <p>Glorius Foaming Cleanser (150ml)</p>
                        <p>379:-</p>
                        <button className="button-bye">Köp</button>
                    </article>
                    <article><img src={product2} alt="product" className="img-product"/>
                        <p>Hydrating Water (100ml)</p>
                        <p>329:-</p>
                        <button className="button-bye">Köp</button>
                    </article>
                    <article><img src={product3} alt="product" className="img-product"/>
                        <p>Exfoliating Peel Mask (50ml)</p>
                        <p>399:-</p>
                        <button className="button-bye">Köp</button>
                    </article>
                    <article><img src={product4} alt="product" className="img-product"/>
                        <p>Hydra Overnight Mask (50ml)</p>
                        <p>699:-</p>
                        <button className="button-bye">Köp</button>
                    </article>
                    <article><img src={product5} alt="product" className="img-product"/>
                        <p>Ruby Probiotic Lifting Serum (30ml)</p>
                        <p>999:-</p>
                        <button className="button-bye">Köp</button>
                    </article>
                    <article><img src={product6} alt="product" className="img-product"/>
                        <p>Precious Oil (30ml)</p>
                        <p>729:-</p>
                        <button className="button-bye">Köp</button>
                    </article>
                    <article><img src={product7} alt="product" className="img-product"/>
                        <p>Precious Eye Cream (15ml)</p>
                        <p>599:-</p>
                        <button className="button-bye">Köp</button>
                    </article>
                    <article><img src={product8} alt="product" className="img-product"/>
                        <p>Skin Perfect Moisturiser (50ml)</p>
                        <p>649:-</p>
                        <button className="button-bye">Köp</button>
                    </article>
                </div>
            </main>
        </>
    )
}

export default Main