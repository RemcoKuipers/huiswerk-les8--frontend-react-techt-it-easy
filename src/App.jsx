import calculateTvSold from "./helpers/numberOfTvSold.js";
import calculateTvInStock from "./helpers/numberOfTvInStock.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import calculateTvToSell from "./helpers/numberOfTvToSell.js";
import './App.css';
import numberToValuta from "./helpers/numberToValuta.js";
import infoStringTv from "./helpers/infoStringTv.js";
import tvScreenSizeString from "./helpers/tvScreenSizeString.js";
import check from "./assets/check.png"
import minus from "./assets/minus.png"
import showOutcomeInConsole from "./constants/oefenbestand.js";

function App() {
    showOutcomeInConsole();


    return (
        <main className="page-container">
            <h1>Tech it easy dashboard</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="sale-container">
                    <article className="sale-card tv-sold">
                        <p>Aantal verkochte producten</p>
                        <h2>{calculateTvSold(inventory)}</h2>
                    </article>
                    <article className="sale-card tv-stock">
                        <p>Aantal ingekochte producten</p>
                        <h2>{calculateTvInStock(inventory)}</h2>
                    </article>
                    <article className="sale-card tv-to-sell">
                        <p>Aantal te verkopen producten</p>
                        <h2>{calculateTvToSell(inventory)}</h2>
                    </article>
                </div>
            </section>
            <section >
                <h2>Best verkochte tv</h2>
                <article className="tv-product tv-best-seller">
                    <span className="tv-image">
                    <img src={bestSellingTv.sourceImg} alt="Afbeelding van een tv"/>
                    </span>
                    <div>
                    <h3>{infoStringTv(bestSellingTv)}</h3>
                    <p className="tv-price">{numberToValuta(bestSellingTv.price)}</p>
                    <p>{tvScreenSizeString(bestSellingTv.availableSizes)}</p>
                    <ul className="tv-options">
                        <li><img src={check} alt="Icoon checkmark" className="icon"/> wifi</li>
                        <li><img src={minus} alt="Icoon minus" className="icon"/> speech</li>
                        <li><img src={check} alt="Icoon checkmark" className="icon"/> hdr</li>
                        <li><img src={check} alt="Icoon checkmark" className="icon"/> bluetooth</li>
                        <li><img src={minus} alt="Icoon minus" className="icon"/>ambilight</li>
                    </ul>
                    </div>
                </article>
            </section>
            <section className="buttons-container">
                <h2>Alle tvs</h2>
                <button type="button" onClick={() => console.log('Meest verkocht eerst')}>Meest verkocht eerst</button>
                <button type="button" onClick={() => console.log('Goedkoopste eerst')}>Goedkoopste eerst</button>
                <button type="button" onClick={() => console.log('Meest geschikt voor sport eerst')}>Meest geschikt voor
                    sport eerst
                </button>
            </section>
        </main>

    )
}

export default App
