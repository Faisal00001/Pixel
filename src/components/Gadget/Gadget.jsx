import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaStar } from "react-icons/fa";
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
    const [heart, setHeart] = useState(false)
    const [heart2, setHeart2] = useState(false)
    const [heart3, setHeart3] = useState(false)
    const [heart4, setHeart4] = useState(false)
    const [heart5, setHeart5] = useState(false)
    const [count, setCount] = useState(1)
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(prevState => !prevState);
    };
    const handleDecCount = () => {
        if (count === 1) {
            setCount(1)
            return
        }
        setCount(count - 1)
    }
    const handleIncCount = () => {
        if (count === 2) {
            setCount(2)
            return;
        }
        setCount(count + 1)
    }
    return (
        <div className='pt-24 pb-24 bg-[#F5F5F5] px-5 md:px-[65px]'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                // pagination={{
                //     clickable: true,
                // }}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper pb-10 px-20 md:px-0"
                breakpoints={{
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 5
                    }
                }}
            >
                <SwiperSlide>
                    <div className="border-r border-gray-300">
                        <div className='bg-white w-[85%]  relative'>
                            <img className='h-[240px] md:h-[320px] lg:h-[206px]' src={image4} alt="Gadget Image" />
                            {
                                heart ? <FaHeart onClick={() => setHeart(false)} className="absolute top-2
                                right-10 cursor-pointer text-red-500"></FaHeart> :
                                    <FaRegHeart onClick={() => setHeart(true)} className=" absolute top-2
                            right-10 cursor-pointer"></FaRegHeart>
                            }
                            <MdCompareArrows className=" absolute top-2
                            right-2 text-xl cursor-pointer"></MdCompareArrows>

                        </div>

                        <div className='flex justify-between mt-3 pr-10'>
                            <p className='font-bold'>2 Lens kit</p>
                            <p className='font-light flex gap-2 items-center'>
                                <FaStar className="text-red-500 text-xs"></FaStar>
                                <span className="text-sm">4.8</span></p>
                        </div>
                        <p className="font-medium text-sm">Canon</p>

                        <label className="inline-flex relative mt-3 items-center cursor-pointer">
                            <input type="checkbox" checked={isChecked}
                                onChange={handleCheckboxChange}
                                value="" className="sr-only peer" />
                            <div className="relative w-[200px] border h-[33px] 
                            border-gray-300 bg-white peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute  after:bg-red-500 after:rounded-full after:h-[33px] after:w-[99px] after:transition-all after:duration-500">

                            </div>
                            <div className={`absolute text-xs left-8 top-2 ${!isChecked ? 'text-white' : 'text-black'}`}>
                                <h3>1 Len</h3>
                            </div>
                            <div className={`absolute text-xs right-5 top-2 ${isChecked ? 'text-white' : 'text-black'}`}>
                                <h3>2 Lens Kit</h3>
                            </div>




                        </label>
                        <div className="relative mt-2 mb-2 w-[200px] border h-[33px] bg-white border-gray-300 rounded-full overflow-hidden">
                            <div onClick={handleDecCount} className="h-full flex justify-center items-center cursor-pointer bg-red-500 w-[16%] absolute left-0">
                                <FaMinus className="text-white"></FaMinus>
                            </div>
                            <div className="h-full bg-white absolute left-1/3">

                            </div>
                            <div onClick={handleIncCount} className="h-full flex justify-center items-center cursor-pointer bg-red-500 w-[16%] absolute right-0">
                                <FaPlus className="text-white"></FaPlus>
                            </div>
                            {/* Quantity */}
                            <div className="absolute top-1 left-[50%]">
                                <p className="text-sm font-semibold">{
                                    count
                                }</p>
                            </div>

                        </div>
                        <div className="flex mt-8 md:mt-2 lg:mt-2 justify-between items-center pr-10">
                            <div className="flex gap-2">
                                <MdOutlineWatchLater className="text-red-500" />
                                <p className="text-xs font-medium">17h 31m</p>
                            </div>
                            {
                                isChecked || count === 2 ? <p className="font-bold">$3000</p> :
                                    <p className="font-bold">$1,799</p>
                            }

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-r relative border-gray-300">
                        <div className="px-3 relative">
                            <img className="h-[240px] md:h-[320px] lg:h-[206px]" src={image5} alt="Gadget Image" />
                            {
                                heart3 ? <FaHeart onClick={() => setHeart3(false)} className="absolute top-2
                                 right-10 cursor-pointer text-red-500"></FaHeart> :
                                    <FaRegHeart onClick={() => setHeart3(true)} className=" absolute top-2
                             right-10 cursor-pointer"></FaRegHeart>
                            }
                            <MdCompareArrows className=" absolute top-2
                            right-3 text-xl cursor-pointer"></MdCompareArrows>

                        </div>
                        <div className='flex justify-between mt-2 pl-6 pr-8'>
                            <p className='font-bold'>EOS R5</p>
                            <p className='font-light flex gap-2 items-center'>
                                <FaStar className="text-red-500 text-xs"></FaStar>
                                <span className="text-sm">4.6</span></p>
                        </div>
                        <p className="font-medium text-sm pl-6">Canon</p>
                        <div className="pl-[46px] pr-2 mt-1">
                            <ul className="list-disc text-xs font-light text-slate-500">
                                <li>45MP Full-Frame CMOS Sensor</li>
                                <li>Sensor-Shift Image Stabilization</li>
                                <li>DIGIC X Image Processor</li>
                                <li>8K30 Raw Video</li>
                            </ul>
                        </div>
                        <div className="flex mt-8 md:mt-7 lg:mt-5 justify-between items-center pr-8 pl-6">
                            <div className="flex gap-2">
                                <MdOutlineWatchLater className="text-red-500" />
                                <p className="text-xs font-medium">2h 27m</p>
                            </div>

                            <p className="font-bold">$3,699</p>
                            <p className="text-xs absolute bottom-5 right-8 text-slate-400 line-through">3,800</p>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-r relative border-gray-300">
                        <div className="px-3  relative">
                            <img className="h-[240px] md:h-[320px] lg:h-[206px]" src={image6} alt="Gadget Image" />
                            {
                                heart2 ? <FaHeart onClick={() => setHeart2(false)} className="absolute top-2
                                 right-10 cursor-pointer text-red-500"></FaHeart> :
                                    <FaRegHeart onClick={() => setHeart2(true)} className=" absolute top-2
                             right-10 cursor-pointer"></FaRegHeart>
                            }
                            <MdCompareArrows className=" absolute top-2
                            right-3 text-xl cursor-pointer"></MdCompareArrows>

                        </div>
                        <div className='flex justify-between pl-6 pr-8'>
                            <p className='font-bold'>Mavic 3</p>
                            <p className='font-light flex gap-2 items-center'>
                                <FaStar className="text-red-500 text-xs"></FaStar>
                                <span className="text-sm">4.7</span></p>
                        </div>
                        <p className="font-medium text-sm pl-6">DJI</p>
                        <div className="pl-[46px] pr-2 mt-1">
                            <ul className="list-disc text-xs font-light text-slate-500">
                                <li>20MP 4/3" CMOS Hasselblad</li>
                                <li>4K Slow Motion at 120 fps</li>
                                <li>f/2.8 to f/11 Adjustable Aperture</li>
                                <li>DJI RC Remote Included</li>
                            </ul>
                        </div>
                        <div className="flex mt-10 justify-between items-center pr-8 pl-6">
                            <div className="flex gap-2">
                                <MdOutlineWatchLater className="text-red-500" />
                                <p className="text-xs font-medium">2h 3m</p>
                            </div>

                            <p className="font-bold">$1,599</p>
                            <p className="text-xs absolute bottom-5 right-8 text-slate-400 line-through">1,740</p>


                        </div>
                    </div> </SwiperSlide>
                <SwiperSlide>
                    <div className="border-r relative border-gray-300">
                        <div className="px-3  relative">
                            <img className="h-[240px] md:h-[320px] lg:h-[206px]" src={image7} alt="Gadget Image" />
                            {
                                heart4 ? <FaHeart onClick={() => setHeart4(false)} className="absolute top-2
                                 right-10 cursor-pointer text-red-500"></FaHeart> :
                                    <FaRegHeart onClick={() => setHeart4(true)} className=" absolute top-2
                             right-10 cursor-pointer"></FaRegHeart>
                            }
                            <MdCompareArrows className=" absolute top-2
                            right-3 text-xl cursor-pointer"></MdCompareArrows>

                        </div>
                        <div className='flex justify-between  pr-8'>
                            <p className='font-semibold'>Carbon Fiber Tripod</p>
                            <p className='font-light flex gap-2 items-center'>
                                <FaStar className="text-red-500 text-xs"></FaStar>
                                <span className="text-sm">4.2</span></p>
                        </div>
                        <p className="font-medium text-sm ">DJI</p>
                        <div className="pl-[23px] pr-2 mt-1">
                            <ul className="list-disc text-xs font-light text-slate-500">
                                <li>Load Capacity: 26.4 lb</li>
                                <li>Max Height: 64.2"</li>
                                <li>Min Height: 16.1"</li>
                                <li>Folded Length: 16.1"</li>
                            </ul>
                        </div>
                        <div className="flex mt-10 justify-between items-center pr-8">
                            <div className="flex gap-2">
                                <MdOutlineWatchLater className="text-red-500" />
                                <p className="text-xs font-medium">2h 3m</p>
                            </div>

                            <p className="font-bold">$1,599</p>
                            <p className="text-xs absolute bottom-5 right-8 text-slate-400 line-through">1,740</p>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="px-3  relative">
                            <img className="h-[240px] md:h-[320px] lg:h-[206px]" src={image8} alt="Gadget Image" />
                            {
                                heart5 ? <FaHeart onClick={() => setHeart5(false)} className="absolute top-2
                                 right-10 cursor-pointer text-red-500"></FaHeart> :
                                    <FaRegHeart onClick={() => setHeart5(true)} className=" absolute top-2
                             right-10 cursor-pointer"></FaRegHeart>
                            }
                            <MdCompareArrows className=" absolute top-2
                            right-3 text-xl cursor-pointer"></MdCompareArrows>

                        </div>
                        <div className='flex justify-between  pr-8'>
                            <p className='font-bold'>HERO 11 Black Mini</p>
                            <p className='font-light flex gap-2 items-center'>
                                <FaStar className="text-red-500 text-xs"></FaStar>
                                <span className="text-sm">4.4</span></p>
                        </div>
                        <p className="font-medium text-sm">GoPro</p>
                        <div className="pl-[23px] pr-2 mt-1">
                            <ul className="list-disc text-xs font-light text-slate-500">
                                <li>24.7MP Improved Performance</li>
                                <li>Smooth 5.0 Image Stabilization</li>
                                <li>8x Slow-Motion Video</li>
                                <li>5.3K60/2.7K240 Video</li>
                            </ul>
                        </div>
                        <div className="flex mt-10 justify-between items-center pr-8">
                            <div className="flex gap-2">
                                <MdOutlineWatchLater className="text-red-500" />
                                <p className="text-xs font-medium">7h 38m</p>
                            </div>

                            <p className="font-bold">$289</p>
                            <p className="text-xs absolute bottom-5 right-8 text-slate-400 line-through">6380</p>


                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Gadget;