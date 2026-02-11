import { IoChevronForwardSharp } from "react-icons/io5";
import Footer from "../Footer/Footer";
import Nav_bar from "../Nav_bar/Nav_bar";
import { Link } from "react-router-dom";


function Signup() {
    return (
        <div>
            <Nav_bar/>
            <div className="p-10 flex flex-col gap-y-10">
                <div className="flex gap-2 items-center">
                    <a className="flex items-center hover:text-[#e65540]" href="">Home <IoChevronForwardSharp /></a>
                    <a className="hover:text-[#e65540]" href="">Create Account</a>
                </div>
                <div className="pl-43 pr-43 ">
                        <div className="w-full   ">
                            <h1 className="text-4xl font-bold">Create Account</h1>
                            <p>Your Personal Details</p>
                            <div className="p-5 flex flex-col gap-y-5">
                                <label htmlFor="">First Name</label>
                                <input className="p-3 border" type="text" placeholder="First Name" />
                                <label  htmlFor="">Last Name</label>
                                <input className="p-3 border" type="text" placeholder="Last Name" />
                                <label  htmlFor="">Email</label>
                                <input className="p-3 border" type="email" placeholder="Email" />
                                <label htmlFor="">Password</label>
                                <input className="p-3 border" type="password" placeholder="Password" />
                                <div className="flex gap-2 items-center">
                                    <button className="w-30 h-10 bg-black text-white">sign in</button>
                                    <span >or</span>
                                    <Link to={"/"}><p className="hover:text-[#e65540]">Return to Store</p></Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Footer/>


        </div>
    );
}

export default Signup;