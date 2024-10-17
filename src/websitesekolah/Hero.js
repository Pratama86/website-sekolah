import { Carousel } from "react-bootstrap";
import hero1 from './../asset/aset3.jpg'
import hero2 from './../asset/aset2.jpg'
import hero3 from './../asset/aset3.jpg'


const Hero = ()=> {
    return (
        <Carousel>
          <Carousel.Item>
            <img
            className="d-blok w-100"
            src={hero1}
            alt=""
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-blok w-100"
            src={hero2}
            alt=""
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-blok w-100"
            src={hero3}
            alt=""
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default Hero;