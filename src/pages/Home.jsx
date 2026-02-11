import Footer from "../components/Footer/Footer";
import Nav_bar from "../components/Nav_bar/Nav_bar";
import { Link } from "react-router-dom";
import 'flowbite';


import { images } from "../constants";

function Home() {

    const back = {
        backgroundImage: `url(${images.banner.banner8})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"

    }
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





            {/* section 4 */}
            <section className=" w-full bg-[#f2f2f2] p-10 pl-35 pr-35 flex gap-5">
                <div className="w-full h-120  text-white flex flex-col items-center justify-center gap-y-5" style={back}>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl ">The Beauty</h1>
                        <p className="text-7xl">Lookbook</p>
                    </div>
                    <Link><a className="hover:border-b-2 " href="">View Collection</a></Link>
                </div>
                <div className="w-full h-120 bg-amber-300">2</div>

            </section>


            <Footer />
        </div>
    );
}

export default Home;