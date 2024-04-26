import image1 from "../../assets/images/slider/image1.jpg";
import image2 from "../../assets/images/slider/image2.jpg";
import image3 from "../../assets/images/slider/image3.jpg";
import Carousel from "../Carousel/Carousel";
const slides = [
    image1,
    image2,
    image3
]
const Slider = () => {
    return (
        <div>
            <div className="w-full">
                <Carousel autoSlide={true}>
                    {
                        slides.map((e, index) => (
                            <img key={index} src={e} alt="" />
                        ))
                    }
                </Carousel>

            </div>
        </div>
    );
};

export default Slider;