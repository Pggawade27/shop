import Carousel from 'react-bootstrap/Carousel';
import Carousel_img1 from '../../../assets/images/caruosel_img_1.jpg'
import Carousel_img2 from '../../../assets/images/caruosel_img_2.jpg'

function MainCarousel() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carousel_img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carousel_img2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carousel_img2}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default MainCarousel;