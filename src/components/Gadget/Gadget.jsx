import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import image4 from "../../assets/images/gadget/image4.jpg";
import image5 from "../../assets/images/gadget/image5.png";
import image6 from "../../assets/images/gadget/image6.png";
import image7 from "../../assets/images/gadget/image7.png";
import image8 from "../../assets/images/gadget/image8.png";
// import required modules
import { useState } from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { Pagination } from 'swiper/modules';
const Gadget = () => {
    const [isChecked, setIsChecked] = useState(false);
    console.log(isChecked)
    const handleCheckboxChange = () => {
        setIsChecked(prevState => !prevState);
    };

    return (
        <div className='pt-24 pb-24 bg-[#F5F5F5] px-5 md:px-[65px]'>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <div className='bg-white w-full px-5 py-8'>
                            <img className='w-full' src={image4} alt="Gadget Image" />
                            <FaRegHeart className=" absolute top-2
                            right-10 cursor-pointer"></FaRegHeart>
                            <MdCompareArrows className=" absolute top-2
                            right-3 text-xl cursor-pointer"></MdCompareArrows>

                        </div>

                        <div className='flex justify-between mt-3'>
                            <p className='font-bold'>2 Lens kit</p>
                            <p className='font-light flex gap-2 items-center'>
                                <FaStar className="text-red-500 text-xs"></FaStar>
                                <span>4.8</span></p>
                        </div>
                        <p className="font-medium text-sm">Canon</p>

                        <label className="inline-flex relative mt-3 items-center cursor-pointer">
                            <input type="checkbox" checked={isChecked}
                                onChange={handleCheckboxChange} value="" className="sr-only peer" />
                            <div className="relative w-[233px] border h-[33px] 
                            border-gray-300 bg-white peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute  after:bg-red-500 after:rounded-full after:h-[33px] after:w-[116px] after:transition-all after:duration-500">

                            </div>
                            <div className={`absolute text-xs left-8 top-2 ${!isChecked ? 'text-white' : 'text-black'}`}>
                                <h3>1 Len</h3>
                            </div>
                            <div className={`absolute text-xs right-5 top-2 ${isChecked ? 'text-white' : 'text-black'}`}>
                                <h3>2 Lens Kit</h3>
                            </div>




                        </label>
                        <div className="relative w-[233px] border h-[33px] border-gray-300 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-[16%] absolute left-0"></div>
                            <div className="h-full bg-white absolute left-1/3"></div>
                            <div className="h-full bg-red-500 w-[16%] absolute right-0"></div>
                            {/* Quantity */}
                            <div className="absolute top-1 left-[50%]">
                                <p className="text-sm font-semibold">1</p>
                            </div>
                            {/* Plus icon */}
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                                <MdOutlineWatchLater className="text-red-500" />
                                <p className="text-xs font-medium">17h 31m</p>
                            </div>
                            {
                                isChecked ? <p className="font-bold">$3000</p> :
                                    <p className="font-bold">$1,799</p>
                            }

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <img src={image5} alt="Gadget Image" /></SwiperSlide>
                <SwiperSlide> <img src={image6} alt="Gadget Image" /></SwiperSlide>
                <SwiperSlide> <img src={image7} alt="Gadget Image" /></SwiperSlide>
                <SwiperSlide> <img src={image8} alt="Gadget Image" /></SwiperSlide>
                <SwiperSlide> <img src={image8} alt="Gadget Image" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Gadget;