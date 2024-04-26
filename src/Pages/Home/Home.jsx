import FeaturedSavings from "../../components/FeaturedSavings/FeaturedSavings";
import Gadget from "../../components/Gadget/Gadget";
import Help from "../../components/Help/Help";
import Slider from "../../components/Slider/Slider";
import TopItems from "../../components/TopItems/TopItems";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopItems></TopItems>
            <Help></Help>
            <Gadget></Gadget>
            <FeaturedSavings></FeaturedSavings>
        </div>
    );
};

export default Home;