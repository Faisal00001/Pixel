
import { MdOutlineVerified } from "react-icons/md";
import image1 from "../../assets/images/FeatureSavings/image1.jpg";
import team1 from "../../assets/images/FeatureSavings/team1.jpg";
import team2 from "../../assets/images/FeatureSavings/team2.jpg";
import team3 from "../../assets/images/FeatureSavings/team3.jpg";
const FeaturedSavings = () => {
    return (
        <div className="bg-[#F5F5F5]">
            <div className="px-5 pb-24 md:px-[65px]">
                <h3 className="text-3xl font-bold mb-5">Featured savings</h3>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-[40%]">
                        <img className="h-full" src={image1} alt="" />
                    </div>
                    <div className="w-full lg:w-[60%]">
                        <h3 className="text-3xl font-bold">Turn used gear into new possibilities</h3>
                        <p className="mt-5">We offer a reliable platform for buying and selling used photography gear. Whether you're a beginner looking for affordable equipment or a professional photographer in search of high-end gear at a discounted price, we've got you covered.</p>
                        <div className="mt-10">
                            <h3 className="text-xl font-bold">Top sellers this month</h3>
                            <div>
                                <div className="grid gap-5 md:gap-0 grid-cols-1 md:grid-cols-3 mt-5">
                                    <div className="flex gap-2">
                                        <div className="overflow-hidden w-16 h-16">
                                            <img src={team1} alt="Your Image" className="object-cover w-full h-full" />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between gap-7">
                                                <div>
                                                    <h3 className="font-medium text-sm">Tom Smith</h3>
                                                    <h3 className="text-xs font-medium">Handmade Accessories</h3>
                                                </div>
                                                <div className="block md:hidden">
                                                    <div className="flex items-center gap-2">
                                                        <div>
                                                            <MdOutlineVerified className="text-red-500"></MdOutlineVerified>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-slate-500">PIXEL Verified</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <MdOutlineVerified className="text-red-500"></MdOutlineVerified>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-slate-500">PIXEL Verified</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pl-6 block md:hidden">
                                                <ul className="list-disc text-sm grid gap-1 gap-x-8 grid-cols-2 text-slate-500">
                                                    <li>Camera Bags</li>
                                                    <li>Grips & Rigs</li>
                                                    <li>Professional Straps</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex gap-2">
                                        <div className="overflow-hidden w-16 h-16">
                                            <img src={team2} alt="Your Image" className="object-cover w-full h-full" />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between gap-7">
                                                <div>
                                                    <h3 className="font-medium text-sm">Emily Wong</h3>
                                                    <h3 className="text-xs font-medium">Optics Enthusiast</h3>
                                                </div>
                                                <div className="block md:hidden">
                                                    <div className="flex items-center gap-2">
                                                        <div>
                                                            <MdOutlineVerified className="text-red-500"></MdOutlineVerified>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-slate-500">PIXEL Verified</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <MdOutlineVerified className="text-red-500"></MdOutlineVerified>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-slate-500">PIXEL Verified</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pl-6 block md:hidden">
                                                <ul className="list-disc text-sm grid gap-y-1 gap-x-8 grid-cols-2 text-slate-500">
                                                    <li>Unique Lenses</li>
                                                    <li>ND & UV Filters</li>
                                                    <li>Special Effect Filter</li>
                                                    <li>Lens Accessories</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex gap-2">
                                        <div className="overflow-hidden w-16 h-16">
                                            <img src={team3} alt="Your Image" className="object-cover w-full h-full" />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between gap-7">
                                                <div>
                                                    <h3 className="font-medium text-sm">George Duke</h3>
                                                    <h3 className="text-xs font-medium">Vintage Collector</h3>
                                                </div>
                                                <div className="block md:hidden">
                                                    <div className="flex items-center gap-2">
                                                        <div>
                                                            <MdOutlineVerified className="text-red-500"></MdOutlineVerified>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-slate-500">PIXEL Verified</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <MdOutlineVerified className="text-red-500"></MdOutlineVerified>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-slate-500">PIXEL Verified</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pl-6 block md:hidden">
                                                <ul className="list-disc text-sm grid gap-1 gap-x-8 grid-cols-2 text-slate-500">
                                                    <li>60s & 70s Cameras</li>
                                                    <li>Disposables</li>
                                                    <li>Old Prints</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="grid  grid-cols-3 mt-3">
                                        <div className="pl-6">
                                            <ul className="list-disc text-sm text-slate-500">
                                                <li>Camera Bags</li>
                                                <li>Grips & Rigs</li>
                                                <li>Professional Straps</li>
                                            </ul>
                                        </div>
                                        <div className="pl-6">
                                            <ul className="list-disc text-sm text-slate-500">
                                                <li>Unique Lenses</li>
                                                <li>ND & UV Filters</li>
                                                <li>Professional Straps</li>
                                                <li>Lens Accessories</li>
                                            </ul>
                                        </div>
                                        <div className="pl-6">
                                            <ul className="list-disc text-sm text-slate-500">
                                                <li>60s & 70s Film Cameras</li>
                                                <li>Old Prints</li>
                                                <li>Disposables</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-10">
                                <button className="px-14 md:px-16 py-2 bg-red-500 text-white font-medium">BUY</button>
                                <button className="border-2 border-slate-500 px-14 md:px-16 py-2 font-medium bg-white text-slate-500">SELL</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeaturedSavings;