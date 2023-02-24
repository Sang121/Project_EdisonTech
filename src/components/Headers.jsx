import React, {Link} from 'react'
import './headers.css' 
function Header() {
  return (
    <div>
    <header>
    <nav>
        <div class="img-nav">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png" alt="aa" />
        </div>
        <div class="content-nav">
            <ul>
                <li><a href="#">Điện thoại</a></li>
                <li><a href="#">Máy tính bảng</a></li>
                <li><a href="#">Laptop</a></li>
                <li><a href="#">Ti vi</a></li>
            </ul>
            <form>
                <input type="text" name="search" placeholder="Tìm kiếm sản phẩm..." />
                <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            </form>
        </div>
       
        <button id="cart">
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
            Giỏ Hàng
        </button> 
    </nav>
</header>
    </div>
  
  )
}

export default Header