import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Banner() {
  const imageStyle = {
    width: '650px',  
    height: '500px',
  };
    return (
      <div className="banner-container d-flex justify-content-center align-items-center">
        <Carousel>
          <Carousel.Item>
            <img
              style={imageStyle}
              src="Curry-champ.avif"
              alt="Primera imagen"
            />
            <Carousel.Caption>
              <h3>CHEF</h3>
              <p>FINALS MVP</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
             style={imageStyle}
              src=" Lebron-champ.png"
              alt="Segunda imagen"
            />
            <Carousel.Caption>
              <h3>THE KING</h3>
              <p>FINALS  MVP</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imageStyle}
              src="kawhi-champ.jpg"
              alt="Primera imagen"
            />
            <Carousel.Caption>
              <h3 style={{color:"black"}}>THE CLAW</h3>
              <p style={{color:"black"}} > FINALS MVP</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
             style={imageStyle}
              src="Kd-champ.jpg"
              alt="Primera imagen"
            />
            <Carousel.Caption>
              <h3>KD</h3>
              <p> FINALS MVP</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        

      </div>
      
    );
  }
  
  export default Banner;
  