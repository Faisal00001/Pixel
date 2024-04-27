import { BiLogoFacebook } from "react-icons/bi";
import { FaCcApplePay, FaCcMastercard, FaCcPaypal, FaCcVisa, FaCopyright, FaEuroSign, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { LiaTwitter } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { SiAmericanexpress } from "react-icons/si";
import footerMap from "../../assets/images/Footer/FooterMap.png";
import logo from "../../assets/images/Logo/Logo.png";
const Footer = () => {
    return (
        <div>
            <div className="bg-[#1A1A1B] hidden lg:block">
                <div className="container mx-auto">
                    <div className="flex justify-between pt-10 px-20">
                        <div>
                            <div className="flex gap-5">
                                <div>
                                    <img className="w-[210px] rounded-sm" src={footerMap} alt="" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-white font-semibold">Come visit us!</h3>
                                    <div className="flex gap-3 items-center">
                                        <FaLocationCrosshairs className="text-red-600 text-2xl"></FaLocationCrosshairs>
                                        <div className="text-slate-600 text-sm">
                                            <p>71 Park Lane, London</p>
                                            <p>SW43 2LW</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <IoMdTime className="text-red-600 text-2xl"></IoMdTime>
                                        <div className="text-slate-600 text-sm">
                                            <p>Sunday to Friday</p>
                                            <p>8:00 - 21:00</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <img className="" src={logo} alt="" />
                        </div>
                        <div>
                            <p className="text-white mb-3">Join our newsletter for exclusive offers!</p>
                            <input className="bg-[#FAFAFA]  rounded-sm text-sm py-2 pl-2 focus:outline-none" placeholder="Name" type="text" />
                            <input className="bg-[#FAFAFA] rounded-sm w-56 text-sm py-2 pl-2 ml-5 focus:outline-none" placeholder="Email Address" type="text" />
                            <div className="mt-3 flex gap-2">
                                <FaInstagram className="bg-red-600 rounded text-3xl text-black"></FaInstagram>
                                <BiLogoFacebook className="bg-red-600 rounded text-3xl text-black"></BiLogoFacebook>
                                <LiaTwitter className="bg-red-600 rounded text-3xl text-black"></LiaTwitter>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">

                    </div>
                    <div>
                        <hr style={{ borderWidth: '1px' }} className="border-gray-600 w-[93%] mx-auto" />
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-between pl-[46px]">
                            <div className="flex gap-5 w-[40%]">
                                <div>
                                    <h3 className="text-white font-medium">Shop</h3>
                                    <div className="grid gap-x-3 gap-y-1 grid-cols-2 text-slate-600 mt-3">
                                        <div>
                                            <p>Cameras</p>
                                        </div>
                                        <div>
                                            <p>Studio</p>
                                        </div>
                                        <div>
                                            <p>Lenses</p>
                                        </div>
                                        <div>
                                            <p>Brands</p>
                                        </div>
                                        <div>
                                            <p>Accessories</p>
                                        </div>
                                        <div>
                                            <p>Extreme</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium">USD</h3>
                                    <div className="space-y-1 mt-3 text-slate-600">
                                        <p>Buy & Sell</p>
                                        <p>Policy</p>
                                        <p>Report Fraud</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium">About</h3>
                                    <div className="space-y-1 mt-3 text-slate-600">
                                        <p>Contact</p>
                                        <p>Our Story</p>
                                        <p>Blog</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 w-[30%]">
                                <div>
                                    <h3 className="bg-red-600 font-bold text-black px-5 py-1">USD $</h3>
                                </div>
                                <div>
                                    <h3 style={{ borderWidth: '1px' }} className=" border-slate-600 flex items-center font-bold text-slate-500  px-5 py-1 ">EUR <span> <FaEuroSign className="text-sm" /></span></h3>

                                </div>

                            </div>
                            <div className="w-[30%]">
                                <h3 className="text-white font-medium">Contact Information</h3>
                                <div className="space-y-1 mt-3 text-slate-600">
                                    <div className="flex gap-2 items-center">
                                        <FaPhoneAlt className="text-red-600" />
                                        <p>+972 123-456-78</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <MdEmail className="text-red-600 text-xl" />
                                        <p>name@camera.com</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex mt-10 justify-between pl-[46px] ">
                            <div className="w-[38%]">
                                <div className="flex items-center gap-1">
                                    <FaCopyright className="text-slate-600" />
                                    <p className="text-slate-600">2023 PIXEL</p>
                                </div>
                                <p className="text-slate-600">All Rights Reserved</p>
                            </div>
                            <div className="flex w-[23%] gap-5 text-4xl text-white">
                                <SiAmericanexpress />
                                <FaCcMastercard />
                                <FaCcPaypal />
                                <FaCcVisa />
                                <FaCcApplePay />
                            </div>
                            <div className="w-[39%] flex gap-5">
                                <h3 className="text-slate-600">Return Policy</h3>
                                <h3 className="text-slate-600">Accessibility</h3>
                                <h3 className="text-slate-600">Terms of Use</h3>
                                <h3 className="text-slate-600">Privacy Policy</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-[#1A1A1B] block lg:hidden">
                <div className="flex justify-center pt-5">
                    <img className="w-[80px]" src={logo} alt="" />
                </div>
                <div className="flex justify-between px-5 mt-10 pb-5">
                    <div className="space-y-2">
                        <h3 className="text-white font-semibold">Come visit us!</h3>
                        <div className="flex flex-wrap justify-between gap-5">
                            <div className="flex gap-3 ">
                                <FaLocationCrosshairs className="text-red-600 text-2xl"></FaLocationCrosshairs>
                                <div className="text-slate-600 text-sm">
                                    <p>71 Park Lane, London</p>
                                    <p>SW43 2LW</p>
                                </div>
                            </div>
                            <div className="flex gap-3 ">
                                <IoMdTime className="text-red-600 text-2xl"></IoMdTime>
                                <div className="text-slate-600 text-sm">
                                    <p>Sunday to Friday</p>
                                    <p>8:00 - 21:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center">
                    <img className="w-full px-5 h-[200px] md:h-[350px] rounded-sm" src={footerMap} alt="" />
                </div>
                <div className="flex flex-wrap gap-3 justify-between px-5 mt-5">
                    <div>
                        <h3 className="text-white font-medium">Shop</h3>
                        <div className="text-slate-600 mt-3 space-y-1">
                            <div>
                                <p>Cameras</p>
                            </div>
                            <div>
                                <p>Studio</p>
                            </div>
                            <div>
                                <p>Lenses</p>
                            </div>
                            <div>
                                <p>Brands</p>
                            </div>
                            <div>
                                <p>Accessories</p>
                            </div>
                            <div>
                                <p>Extreme</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-medium">Used</h3>
                        <div className="space-y-1 mt-3 text-slate-600">
                            <p>Buy & Sell</p>
                            <p>Policy</p>
                            <p>Report Fraud</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-medium">About</h3>
                        <div className="space-y-1 mt-3 text-slate-600">
                            <p>Contact</p>
                            <p>Our Story</p>
                            <p>Blog</p>
                        </div>
                    </div>

                </div>
                <div className="px-5 mt-5">
                    <h3 className="text-white font-medium">Contact Information</h3>
                    <div className="space-y-1 mt-3 text-slate-600">
                        <div className="flex gap-2 items-center">
                            <FaPhoneAlt className="text-red-600" />
                            <p>+972 123-456-78</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MdEmail className="text-red-600 text-xl" />
                            <p>name@camera.com</p>
                        </div>

                    </div>
                </div>
                <div className="mt-5 px-5">
                    <p className="text-white mb-3 text-center">Join our newsletter for exclusive offers!</p>

                    <div className="flex justify-center">
                        <input className="bg-[#FAFAFA] mx-auto w-56 rounded-sm text-sm py-2 pl-2 focus:outline-none" placeholder="Name" type="text" />
                    </div>
                    <div className="flex justify-center mt-3">
                        <input className="bg-[#FAFAFA] rounded-sm w-56 text-sm py-2 pl-2 focus:outline-none" placeholder="Email Address" type="text" />
                    </div>

                </div>
                <div className="mt-5 flex justify-center">
                    <button className="px-5 py-2 bg-red-500 font-light text-white">SIGN UP</button>
                </div>
                <div className="flex justify-center">
                    <div className="mt-5 pb-5 flex gap-10">
                        <FaInstagram className="bg-red-600 rounded text-3xl text-black"></FaInstagram>
                        <BiLogoFacebook className="bg-red-600 rounded text-3xl text-black"></BiLogoFacebook>
                        <LiaTwitter className="bg-red-600 rounded text-3xl text-black"></LiaTwitter>
                    </div>
                </div>
                <div className="flex flex-wrap content-center justify-center gap-x-5 gap-y-2 px-2">
                    <h3 className="text-slate-600">Return Policy</h3>
                    <h3 className="text-slate-600">Accessibility</h3>
                    <h3 className="text-slate-600">Terms of Use</h3>
                    <h3 className="text-slate-600">Privacy Policy</h3>
                </div>
                <div className="text-4xl mt-5 text-white flex gap-4 justify-center">
                    <SiAmericanexpress />
                    <FaCcMastercard />
                    <FaCcPaypal />
                    <FaCcVisa />
                    <FaCcApplePay />
                </div>
                <div className="flex gap-2 justify-center py-5">
                    <div className="flex items-center gap-1">
                        <FaCopyright className="text-slate-600" />
                        <p className="text-slate-600">2023 PIXEL</p>
                    </div>
                    <p className="text-slate-600">All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;