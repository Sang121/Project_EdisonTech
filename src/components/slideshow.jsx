

import './slideshow.css';
function Slideshow() {
   
  return (
    <div className="slideshow">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 imgs" src="https://icdn.dantri.com.vn/thumb_w/640/2021/04/15/skydocx-1618443386249.jpeg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 imgs" src="https://icdn.dantri.com.vn/thumb_w/640/2021/04/15/skydocx-1618443386249.jpeg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 imgs" src="https://data.thoitiet.vn/weather/2022/1/14/tai-sa-bau-troi-co-mau-xanh.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
    
  )
}

export default Slideshow