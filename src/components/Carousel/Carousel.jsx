import { useCallback, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Carousel = ({
    children: slides, autoSlide = false,
    autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0)
    const next = useCallback(() =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)), [slides.length]);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [next, autoSlide, autoSlideInterval]);
    return (
        <div className="overflow-hidden relative h-full lg:h-[500px] -z-10">
            <div className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides}
            </div>
            <div className="absolute bottom-20 right-0 left-10">
                {
                    curr === 0 ? <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white uppercase">Make Believe</h3> : curr === 1 ? <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white uppercase">PICTURE PREFECT DEALS</h3> : <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white uppercase">NEW ARRIVALS </h3>
                }
                <div className="mt-3 flex items-center gap-5">
                    {
                        curr === 0 ? <p className="text-slate-300 ">Sales on Selected SONY products</p> : curr === 1 ? <p className="text-slate-300 ">Browse our second-hand gear market</p> : <p className="text-slate-300 ">The newest and latest advances of technology</p>
                    }
                    <FaArrowRight className="text-xl md:text-3xl text-red-500" />
                </div>
            </div>
            <div className="absolute bottom-10 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div className={`
                        transition-all w-3 h-3 border border-white rounded-full
                        ${curr === i ? "bg-red-500 border-none" : ""}
                      `} key={i}>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;