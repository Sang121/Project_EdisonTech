import Header from '../../components/Headers'
import Footer from '../../components/footer';
   function ProductDetail(){
    
   
      return (
        <div>
            <Header/>
        <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="nav nav-tabs nav-justified">
                  <li className="nav-item">
                    <a className="nav-link" href="cat1.html">Product Category 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="cat1.html">Product Category 2</a>
                  </li><li className="nav-item">
                    <a className="nav-link" href="cat2.html">Product Category 3</a>
                  </li>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="card">
                  <img src="C://Users/admin/Desktop/lab html/product_details/tui1.jpg" alt="Lacos" title="Túi Lacos" />
                </div>
              </div>
              <div className="col-9">
                <h1>Tên sản phẩm: Quần áo nam</h1>
                <p>Giá sản phẩm: 1.000$</p>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                  <h2>Màu sắc &nbsp;</h2> 
                  <button type="button" className="btn btn-outline-primary">Black</button>
                  <button type="button" className="btn btn-outline-primary">Green</button>
                  <button type="button" className="btn btn-outline-primary">White</button>
                </div><br />
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                  <h2>Kích cỡ &nbsp;</h2> 
                  <button type="button" className="btn btn-outline-primary">M</button>
                  <button type="button" className="btn btn-outline-primary">L</button>
                  <button type="button" className="btn btn-outline-primary">XL</button>
                </div>
                <div>
                  <button type="button">Add to cart</button>
                </div>
                <div>
                  <p>
                    <button onclick="totalClick(-1)">-</button>
                    <span id="totalClicks">1</span>
                    <button onclick="totalClick(1)">+</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">DESCRIPTION</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">POLICY</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT</a>
                </li>
              </ul>
            </div>
            
          </div>
          <Footer/>
          </div>
      );
    }
export default ProductDetail