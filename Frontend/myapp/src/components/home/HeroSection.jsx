import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function HeroSection() {
  return (
   <div className='carousel'>
     <Carousel>
      <Carousel.Item>
        {/* <img src="" className='caro_img img1'/> */}
        <div className='img1 caro_img'></div>
        <Carousel.Caption>
         <div className='carousel_div'>
         <h3>Help Poor Childerens Only From <span>$10</span></h3>
          <p>We Are Non-Profit Charity & NGO Organization.</p>
          <Button>Getting Started</Button>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img src="" className='caro_img img2' /> */}
        <div className='img2 caro_img'></div>

        <Carousel.Caption>
        <div className='carousel_div'>
         <h3>Help Poor Childerens Only From <span>$10</span></h3>
          <p>We Are Non-Profit Charity & NGO Organization.</p>
          <Button>Getting Started</Button>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img src="" className='caro_img img3'/> */}
        <div className='img3 caro_img'></div>

        <Carousel.Caption>
        <div className='carousel_div'>
         <h3>Help Poor Childerens Only From <span>$10</span></h3>
          <p>We Are Non-Profit Charity & NGO Organization.</p>
          <Button>Getting Started</Button>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default HeroSection;