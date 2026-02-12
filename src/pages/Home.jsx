import Footer from "../components/Footer/Footer";
import Nav_bar from "../components/Nav_bar/Nav_bar";
import { Link } from "react-router-dom";
import 'flowbite';
import { motion } from "framer-motion";


import { images } from "../constants";

function Home() {

    const back = {
        backgroundImage: `url(${images.banner.banner8})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }

        const back1 = {
        backgroundImage: `url(${images.cart.card1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }
        const back2 = {
        backgroundImage: `url(${images.cart.card2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }
        const back3 = {
        backgroundImage: `url(${images.cart.card3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }
        const back4 = {
        backgroundImage: `url(${images.cart.card4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }
        const back5 = {
        backgroundImage: `url(${images.cart.card5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }
        const back6 = {
        backgroundImage: `url(${images.cart.card6})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }

        const glases = {
        backgroundImage: `url(${images.shops.shop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }



    const animation = {
        initial: { backgroundSize: "100% 100%" },
        animate: { backgroundSize: "100% 100%" },
        whileHover: { backgroundSize: "110% 110%" },
        transition: { duration: 0.4, ease: "easeOut" }
    };


    return (
        <div >
            <Nav_bar />
            {/* carousel section */}
            <div id="animation-carousel" className="relative w-full" data-carousel="static">
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-base md:h-96">

                    {/* Item 1 */}
                    <div className="hidden duration-200 ease-linear" data-carousel-item>
                        <img
                            src={images.carousel.carousel1}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="carousel-1"
                        />
                    </div>

                    {/* Item 2 */}
                    <div className="hidden duration-200 ease-linear" data-carousel-item>
                        <img
                            src={images.carousel.carousel2}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="carousel-2"
                        />
                    </div>

                    {/* Item 3 */}
                    <div className="hidden duration-200 ease-linear" data-carousel-item="active">
                        <img
                            src={images.carousel.carousel3}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="carousel-3"
                        />
                    </div>

                </div>

                {/* Previous Button */}
                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-5 h-5 text-white rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m15 19-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>

                {/* Next Button */}
                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-5 h-5 text-white rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m9 5 7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            {/* section 2  */}

            <section className="container mx-auto p-10 pt-3">
                <div className="w-full h-200 flex gap-2">

                    {/* Column 1 */}
                    <div className="w-1/3 h-full flex flex-col gap-3">

                        <div className="w-full h-[60%]">
                            <motion.div {...animation} className="flex items-center justify-center h-full w-full relative" style={{...back1,backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"}}>
                                
                                <button className="bg-white w-40 h-12 text-lg cursor-pointer hover:text-white hover:bg-red-500 absolute bottom-10 left-1/2 -translate-x-1/2">
                                    Dresses
                                </button>
                            </motion.div>
                        </div>

                        <div className="w-full h-[40%]">
                            <motion.div {...animation}className="flex items-center justify-center h-full w-full relative" style={{...back4,backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"}}>
                                
                                <button className="bg-white w-40 h-12 text-lg cursor-pointer hover:text-white hover:bg-red-500 absolute bottom-6 left-1/2 -translate-x-1/2">
                                    Sunglasses
                                </button>
                            </motion.div>
                        </div>

                    </div>

                    {/* Column 2 */}
                    <div className="w-1/3 h-full flex flex-col gap-3">

                        <div className="w-full h-[40%]">
                            <motion.div {...animation}className="flex items-center justify-center h-full w-full relative" style={{...back2,backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"}}>
                                
                                <button className="bg-white w-40 h-12 text-lg cursor-pointer hover:text-white hover:bg-red-500 absolute bottom-6 left-1/2 -translate-x-1/2" >
                                    Watches
                                </button>
                            </motion.div>
                        </div>

                        <div className="w-full h-[60%]">
                            <motion.div {...animation} className="flex items-center justify-center h-full w-full relative" style={{...back5,backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"}}>
                                
                                <button className="bg-white w-40 h-12 text-lg cursor-pointer hover:text-white hover:bg-red-500 absolute bottom-10 left-1/2 -translate-x-1/2" >
                                    Footwear
                                </button>
                            </motion.div>
                        </div>

                    </div>

                    {/* Column 3 */}
                    <div className="w-1/3 h-full flex flex-col gap-3">

                        <div className="w-full h-[60%]">
                            <motion.div {...animation} className="flex items-center justify-center h-full w-full relative" style={{...back3,backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"}}>
                                <button className="bg-white w-40 h-12 text-lg cursor-pointer hover:text-white hover:bg-red-500 absolute bottom-10 left-1/2 -translate-x-1/2" >
                                    Bags
                                </button>
                            </motion.div>
                        </div>

                        <div className="w-full h-[40%]">
                            <motion.div {...animation} className="flex items-center justify-center h-full w-full relative" style={{...back6,backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"}}>
                                <button className="bg-white w-40 h-12 text-lg cursor-pointer hover:text-white hover:bg-red-500 absolute bottom-6 left-1/2 -translate-x-1/2" >
                                    Accessories
                                </button>
                            </motion.div>
                        </div>

                    </div>

                </div>
            </section>






            {/* section 4 */}
            <motion.section className=" w-full  bg-[#f2f2f2] p-10 pl-35 pr-35 flex gap-5  ">

                <motion.div {...animation} className="w-full h-120  text-white flex flex-col items-center justify-center gap-y-5 " style={{
                    ...back, backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}>
                    <div className="flex flex-col items-center justify-center ">
                        <h1 className="text-4xl ">The Beauty</h1>
                        <p className="text-7xl">Lookbook</p>
                    </div>
                    <Link><a className="hover:border-b-2 " href="">View Collection</a></Link>
                </motion.div>

                <motion.div {...animation} className="w-full h-120 flex flex-col justify-end items-center gap-y-5 p-10  " style={{...glases ,  backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"}} >
                        <Link><p>Boxy2 T-Shirt with Roll Sleeve</p></Link>
                        <p>Rs.5,577.73</p>
                        <div className="flex gap-5">
                            <div className="w-20 h-20 border flex flex-col justify-center items-center">
                                <p>-2600</p>
                                <p>days</p>
                            </div>
                            <div className="w-20 h-20 border flex flex-col justify-center items-center">
                                <p>-13</p>
                                <p>hrs</p>
                            </div>
                            <div className="w-20 h-20 border flex flex-col justify-center items-center">
                                <p>-4</p>
                                <p>mins</p>
                            </div>
                            <div className="w-20 h-20 border flex flex-col justify-center items-center">
                                <p>-56</p>
                                <p>secs</p>
                            </div>

                        </div>
                    </motion.div>

            </motion.section>


            <Footer />
        </div>
    );
}

export default Home;