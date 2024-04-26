import { FaArrowRight } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/gadget/image1.jpg";
import image2 from "../../assets/images/gadget/image2.jpg";
import image3 from "../../assets/images/gadget/image3.jpg";
const Help = () => {
    return (
        <div className="bg-[#F5F5F5]">
            <div className="px-5 pb-24 md:px-[65px]">
                <div className="flex flex-col lg:flex-row gap-5 justify-between ">
                    <div className="flex-1 mt-2">
                        <img className="h-full" src={image1} alt="" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold">New to photography? Let us help!</h3>
                        <p className="mt-2 w-full">We offer a variety of written & recorded guides for all aspects of photography, ranging from equipment handling to artistic theory.</p>
                        <div className="relative mt-3">
                            <input className="py-3 w-full md:w-[49%] mb-3 rounded bg-gray-100 focus:outline-none pl-10 pr-2 text-sm" type="text" placeholder="Search guides" />
                            <IoSearchSharp className="text-red-500 absolute top-[20%] left-2 text-2xl cursor-pointer"></IoSearchSharp>
                        </div>
                        <div>

                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="flex-1">
                                    <img className="w-full" src={image2} alt="Help section Image" />
                                </div>
                                <div className="flex-1 flex flex-col flex-grow">
                                    <div>
                                        <h3 className="text-xl font-semibold">Image Editing</h3>
                                        <p className="mt-1 text-sm">Learn the basics of Adobe Lightroom and elevate your photos to a new standard.</p>
                                    </div>
                                    <div className="mt-auto">
                                        <Link className="flex relative items-center group">
                                            <p className="border-b border-gray-500 text-gray-500 w-32 group-hover:text-red-500 group-hover:border-red-500">Read More</p>
                                            <FaArrowRight className="text-red-500 absolute left-28 transition-transform duration-500 group-hover:-translate-x-5"></FaArrowRight>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-5 mt-5
                            ">
                                <div className="mt-2 flex-1">
                                    <img className="w-full" src={image3} alt="Help section Image" />
                                </div>
                                <div className="flex-1 flex flex-col flex-grow">
                                    <div>
                                        <h3 className="text-xl font-semibold">Composition</h3>
                                        <p className="mt-1 text-sm">Master the art of creating visually appealing photography that tells a story, with practical tips and examples.</p>
                                    </div>
                                    <div className="mt-auto">
                                        <Link className="flex relative items-center group">
                                            <p className="border-b border-gray-500 text-gray-500 w-32 group-hover:text-red-500 group-hover:border-red-500">Read More</p>
                                            <FaArrowRight className="text-red-500 absolute left-28 transition-transform duration-500 group-hover:-translate-x-5"></FaArrowRight>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Help;