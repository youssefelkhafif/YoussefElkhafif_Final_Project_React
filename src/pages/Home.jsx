import Footer from "../components/Footer/Footer";
import Nav_bar from "../components/Nav_bar/Nav_bar";
import { Link } from "react-router-dom";

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