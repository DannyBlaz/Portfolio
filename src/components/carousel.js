import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'
import ruby from '../assets/ruby.jpg'
import aws from '../assets/aws.jpg'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import sql from '../assets/sql.png'
import htmlcss from '../assets/html-css.png'
import bootstrap from '../assets/bootstrap.png'
import swift from '../assets/swift.png'


const Carousell = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        id="carousel-img"
                        className="d-block w-100"
                        src={ruby}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        id="carousel-img"
                        className="d-block w-100"
                        src={javascript}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        id="carousel-img"
                        className="d-block w-100"
                        src={react}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        id="carousel-img"
                        className="d-block w-100"
                        src={sql}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        id="carousel-img"
                        className="d-block w-100"
                        src={htmlcss}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        id="carousel-img"
                        className="d-block w-100"
                        src={bootstrap}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        id="carousel-img"
                        className="d-block w-100"
                        src={swift}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        id="carousel-img"
                        className="d-block w-100"
                        src={aws}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousell