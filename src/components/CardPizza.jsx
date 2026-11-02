import { formatPrice } from '../utils/formatPrice'

function CardPizza({ name, price, ingredients, img }) {
  return (
    <article className="pizza-card">
      <img src={img} alt={`Pizza ${name}`} />
      <h2>Pizza {name}</h2>
      <div className="ingredients">
        <h3>Ingredientes:</h3>
        <p>🍕 {ingredients.join(', ')}</p>
      </div>
      <div className="card-bottom">
        <p className="price">Precio: ${formatPrice(price)}</p>
        <div className="card-actions">
          <button type="button">Ver más 👀</button>
          <button type="button" className="button-dark">Añadir 🛒</button>
        </div>
      </div>
    </article>
  )
}

export default CardPizza
