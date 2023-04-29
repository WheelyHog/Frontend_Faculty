import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [findedProducts, setFindedProducts] = useState([])
  const url = 'https://fakestoreapi.com/products'
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  const search = (e) => {
    e.preventDefault()
    const data = e.target.product.value
    const tempProducts = products.filter(elem => elem.description.includes(data))
    setFindedProducts([...tempProducts])
  }
  console.log(findedProducts);
  return (
    <>
      <form onSubmit={search}>
        <input type='text' placeholder='Enter something' name='product' />
        <button type='submit'>Search</button>
      </form>
      <div>
        {findedProducts.map((elem, index) => {
          return (
            <div key={index}>
              <p>{elem.title}</p>
              <p>ID: {elem.id}</p>
              <p>{elem.price}</p>
            </div>

          )
        })}
      </div>
    </>

  );
}

export default App;
