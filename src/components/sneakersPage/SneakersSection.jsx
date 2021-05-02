import { ItemList } from '../itemListContainer/ItemList'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SneakersStyles.css'

export const SneakersSection = () => {

  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    const SneakersProducts = ItemList.filter(product => product.category === 'Sneakers')
    setSneakers(SneakersProducts);
  }, [sneakers]);

  return(
    <main className='sneakersPage'>
      <ul className='productList'>
        {sneakers.map((product) => 
          <li className='product'>
            <img src={product.image} alt=''></img>
            <h3>{product.name}</h3>
            <p>{`$ ${product.price}`}</p>
            <Link className='buttonBuy' to={`/ItemDetail/${product.id}`}>Buy</Link>
          </li>
        )}
      </ul>
    </main>
  )
} 