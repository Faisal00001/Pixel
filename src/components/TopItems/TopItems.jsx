import { FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/images/topItems/image1.jpg";
import image2 from "../../assets/images/topItems/image2.jpg";
import image3 from "../../assets/images/topItems/image3.jpg";
const TopItems = () => {
    return (
        <div className="py-20 bg-[#F5F5F5] px-5 md:px-[65px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="relative group">
                    <img src={image1} className="w-full rounded h-auto" alt="First Image" />

                    <div className="absolute rounded top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-50 transition-opacity duration-300 hover:opacity-0"></div>
                    <div className="absolute top-[75%] left-5">
                        <h3 className="text-2xl font-bold text-white">Cameras</h3>
                        <div className="flex items-center gap-4">
                            <p className="text-sm text-slate-200">Browse throw our selection of cameras</p>
                            <FaArrowRight className="text-xl text-red-500 transition-transform duration-300 group-hover:translate-x-5"></FaArrowRight>
                        </div>
                    </div>

                </div>
                <div className="relative group">
                    <img src={image2} className="w-full rounded h-auto" alt="Second Image" />
                    <div className="absolute rounded top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-50 transition-opacity duration-300 hover:opacity-0"></div>
                    <div className="absolute top-[75%] left-5">
                        <h3 className="text-2xl font-bold text-white">Lenses</h3>
                        <div className="flex items-center gap-4">
                            <p className="text-sm text-slate-200">Find the sharpest lens for your photoshoot</p>
                            <FaArrowRight className="text-xl text-red-500 transition-transform duration-300 group-hover:translate-x-5"></FaArrowRight>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <img src={image3} className="w-full rounded h-auto" alt="Thrid Image" />
                    <div className="absolute rounded top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-50 transition-opacity duration-300 hover:opacity-0"></div>
                    <div className="absolute top-[75%] left-5">
                        <h3 className="text-2xl font-bold text-white">Accessories</h3>
                        <div className="flex items-center gap-4">
                            <p className="text-sm text-slate-200">Highest quality accessories to fit your gear</p>
                            <FaArrowRight className="text-xl text-red-500 transition-transform duration-300 group-hover:translate-x-5"></FaArrowRight>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopItems;