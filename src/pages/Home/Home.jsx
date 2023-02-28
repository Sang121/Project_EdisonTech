  import React, { useEffect, useState }  from 'react';
  import axios from 'axios';
  import style from './home.module.css';

  import 'bootstrap/dist/css/bootstrap.min.css';
  import Header from '../../components/Headers';
import Footer from '../../components/footer';
const base_url = 'https://dummyjson.com/products/2';

  function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    axios.get(base_url).then((res) => {
    setProducts(res.data);
    });
  }, []);

    return (
      <div>
      <Header/>
      <div className={style.container}>
      
      <div className={style.cardView}>
      <img src={products.thumbnail} className={style.thumbnail}/>
     <h2> {products.title}</h2>
     <h4>Price: {products.price}</h4>
      <p> {products.description}</p>
      </div>
      <div className={style.cardView}>
      <img src={products.thumbnail} className={style.thumbnail}/>
     <h2> {products.title}</h2>
     <h4>Price: {products.price}</h4>
      <p> {products.description}</p>
      </div>
      <div className={style.cardView}>
      <img src={products.thumbnail} className={style.thumbnail}/>
     <h2> {products.title}</h2>
     <h4>Price: {products.price}</h4>
      <p> {products.description}</p>
      </div>
      <div className={style.cardView}>
      <img src={products.thumbnail} className={style.thumbnail}/>
     <h2> {products.title}</h2>
     <h4>Price: {products.price}</h4>
      <p> {products.description}</p>
      </div>
    
    </div>
     <Footer/>
      </div>
    )
  }
  export default Home