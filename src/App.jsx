import calculateTvSold from "./helpers/numberOfTvSold.js";
import calculateTvInStock from "./helpers/numberOfTvInStock.js";
import {inventory} from "./constants/inventory.js";
import calculateTvToSell from "./helpers/numberOfTvToSell.js";
import './App.css';



function App() {
    return (
        <main className="page-container">
            <h1>Tech it easy dashboard</h1>
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
        </main>

    )
}

export default App
