import React from 'react'
import Header from '../../components/Headers';
function Search() {
    const [products, setProducts] =  useState([])
    useEffect(() => {
      try{
    axios.get(base_url)
      .then(response => {

        setProducts(response.data.products);

      })}
      catch(error){
        console.log(error);
      }

    },[]);
  return (
    <div >
      <Header/>
      {ProductList(products)}
     <Footer/>
      </div>
  )
}

export default Search