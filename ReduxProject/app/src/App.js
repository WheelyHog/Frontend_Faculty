import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ProductsItem from './ProductsItem/ProductsItem';
import { fetchProductList } from './requests/requests';

function App() {
  const dispatch = useDispatch()
  const products = useSelector(store => store.products)

  useEffect(() => dispatch(fetchProductList()), [])



  const discount_products = products.filter(elem => elem.discont_price)
  const indexArray = []
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * discount_products.length)
    indexArray.push(discount_products[randomIndex])
  }
  console.log(products);
  console.log(discount_products);
  console.log(indexArray);

  return (
    <div>
      {indexArray.map(elem => <ProductsItem {...elem} />)}
    </div>
  );
}

export default App;
