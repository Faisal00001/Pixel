import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import logo from "../../assets/images/Logo/Logo.png";
const Navbar = () => {
    const links = [
        {
            name: 'Brands'
        },
        {
            name: 'Cameras',
            subMenu: true,
            subLinks: [
                {
                    head: 'DIGITAL',
                    subLink: [
                        {
                            name: 'DSLR'
                        },
                        {
                            name: 'Mirrorless'
                        },
                        {
                            name: 'Compact'
                        },
                        {
                            name: 'Medium Format'
                        }
                    ]
                },
                {
                    head: 'FlIM',
                    subLink: [
                        {
                            name: '35mm'
                        },
                        {
                            name: 'Medium Format'
                        },
                        {
                            name: 'Large Format'
                        },
                        {
                            name: 'Instant'
                        },
                        {
                            name: 'Disposable'
                        },

                    ]
                },
                {
                    head: 'VIDEO',
                    subLink: [
                        {
                            name: 'Camcorder'
                        },
                        {
                            name: 'Pro-Consumer'
                        },
                        {
                            name: 'Super-Clip'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Lenses'
        },
        {
            name: 'Accessories'
        },
        {
            name: 'Studio'
        },
        {
            name: 'Extreme'
        },
        {
            name: 'Used'
        }
    ]
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav className="bg-[#1A1A1B] w-full">
                <div className="flex justify-between items-center px-5 md:px-16 pt-5  md:pb-5">
                    {/* Menu Icons */}
                    <div className="z-50 md:hidden">
                        {
                            open ? <IoMdClose onClick={() => setOpen(!open)} className="text-3xl cursor-pointer text-white " /> : <IoMdMenu onClick={() => setOpen(!open)} className="text-3xl cursor-pointer text-white " />
                        }
                    </div>
                    {/* Logo */}
                    <div className="z-50 ml-16 md:ml-0 flex md:">

                        <img className="w-[75%] md:w-full" src={logo} alt="Logo" />
                    </div>
                    {/* Icons */}
                    <div className="flex space-x-4 z-50">
                        <LuUser className="text-red-500 hidden md:block text-2xl md:text-3xl cursor-pointer" />
                        <IoCartOutline className="text-red-500 text-2xl md:text-3xl cursor-pointer" />
                        <IoSearchSharp className="text-red-500 text-2xl md:text-3xl cursor-pointer" />
                    </div>
                </div>
                <div className="md:px-12 lg:px-6">
                    <ul className="md:flex hidden uppercase justify-between text-white">
                        {
                            links.map((link, index) => (
                                <div className="group" key={index}>
                                    <li className={`cursor-pointer text-sm pb-[21px] pt-5 ${link.subMenu ? 'group-hover:bg-red-500' : ''} px-5 lg:px-10`}>{link.name}</li>

                                    {
                                        link?.subMenu && (
                                            <div>
                                                <div className={`absolute duration-700 -z-20 group-hover:z-0 opacity-0 group-hover:opacity-100 top-[0%] group-hover:top-[131px] left-0 right-0  text-black`}>
                                                    <div className="bg-white pl-[325px] p-3.5">
                                                        <div className="grid grid-cols-3">
                                                            {
                                                                link?.subLinks.map((mySublink, index) => (
                                                                    <div key={index}>


                                                                        <h3 className="font-bold cursor-pointer text-sm underline">{mySublink.head}</h3>
                                                                        {
                                                                            mySublink?.subLink.map((slink, index) => (
                                                                                <li className="text-xs cursor-pointer my-2.5" key={index}>{slink.name}</li>
                                                                            ))
                                                                        }


                                                                    </div>
                                                                ))
                                                            }
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </ul>
                </div>
                {/* Mobile Nav */}
                <div>

                    <ul className={`text-white z-40 md:hidden bg-[#1A1A1B] absolute w-full bottom-[0%] h-full py-24 pl-7 space-y-7 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                        <LuUser className="text-red-500 text-4xl cursor-pointer" />
                        {
                            links.map((link, index) => (<li key={index}>{link.name}</li>


                            ))

                        }
                    </ul>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;