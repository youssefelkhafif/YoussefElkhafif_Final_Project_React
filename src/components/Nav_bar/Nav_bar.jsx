import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

import { images } from "../../constants";
import { Link } from "react-router-dom";


function Nav_bar() {
    return (
        <nav className=" ">
            <div className="flex items-center justify-between bg-[#f5f5f5]  p-5 pl-10 pr-10">
                <div className="flex gap-5">
                    <a className="text-2xl hover:text-[#e65540]" href="">{<FaFacebookF />}</a>
                    <a className="text-2xl hover:text-[#e65540]" href="">{<FaTwitter />}</a>
                    <a className="text-2xl hover:text-[#e65540]" href="">{<FaPinterest />}</a>
                    <a className="text-2xl hover:text-[#e65540]" href="">{<FaGooglePlusG />}</a>
                    <a className="text-2xl hover:text-[#e65540]" href="">{< FaInstagram />}</a>
                </div>
                <div>
                    <p>Free shipping for standard order over $100</p>
                </div>
                <div className="flex items-center gap-5">
                    <p>fashe@example.com</p>
                    <select>
                        <option value="">USD</option>
                        <option value="">EUR</option>
                        <option value="">GPB</option>
                        <option value="">PKR</option>
                        <option value="">CAD</option>
                        <option value="">JPY</option>
                    </select>

                </div>
            </div>

            <div className="shadow-xl flex items-center justify-between bg-[#ffffff]  p-10 pl-10 pr-10">
                <div className="cursor-pointer" >
                    <img src={images.logo_bzaf.logo} alt="" />
                </div>
                <div className="flex gap-5">
                    <Link to={"/"} ><a className=" hover:text-[#e65540]" href="">Home</a></Link>
                    <Link><a className=" hover:text-[#e65540]" href="">Shop</a></Link>
                    <Link><a className=" hover:text-[#e65540]" href="">Sale</a></Link>
                    <Link><a className=" hover:text-[#e65540]" href="">Features</a></Link>
                    <Link to={"/Blog"}><a className=" hover:text-[#e65540]" href="">Blog</a></Link>
                    <Link to={"/About"}><a className=" hover:text-[#e65540]" href="">About</a></Link>
                    <Link to={"/contact"}><a className=" hover:text-[#e65540]" href="">Contact</a></Link>
                </div>
                <div className="flex items-center gap-5">
                    <Link to={"/Signin"} ><a className="text-4xl text-gray-500" href=""><FaRegUserCircle /></a></Link>
                    <span className="w-0.5 h-5 bg-gray-500"></span>
                    <a className="text-4xl text-gray-500" href=""><MdOutlineShoppingBag /></a>

                </div>
            </div>


        </nav>
    );
}

export default Nav_bar;