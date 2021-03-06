import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import axios from "axios";
import animationData from "../lottie/oval-logo.json";

function Header({ menu }) {
    const headerMenu = JSON.parse(menu);

    const [cartCount, setCartCount] = useState("0");
    // const [cartItems, set] = useState(0);

    const [mobileOpen, setMobileOpen] = useState(false);

    const headerHeight = 60;

    const logoBox = useRef(null);
    const logoAnimation = useRef(null);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
    };

    useEffect(() => {
        axios({
            method: "get",
            url: "/wp-json/wc/store/cart",
        })
            .then((res) => {
                console.log(res);
                setCartCount(`${res.data.items_count}`);
            })
            .catch((err, msg) => {});
    }, []);

    useEffect(() => {
        logoBox.current.addEventListener("mouseenter", () => logoAnimation.current.anim.goToAndPlay(0));
    }, [logoBox, logoAnimation]);

    return (
        <>
            <header className="w-full z-50">
                <div id="header-navbar" className="bg-gray-800 text-sm text-white py-3 md:py-2 px-5" style={{ height: headerHeight }}>
                    <div className="container-fluid h-full mx-auto">
                        <div className="flex h-full items-center">
                            <div className="w-1/3 left-menu hidden lg:block">
                                <div className="flex">
                                    {headerMenu &&
                                        headerMenu.length > 0 &&
                                        headerMenu.map((item, i) => (
                                            <a key={i} href={item.url} className="mx-2">
                                                {item.title}
                                            </a>
                                        ))}
                                </div>
                            </div>
                            <div className="w-1/3 left-menu-mobile block lg:hidden">
                                <ul className="flex items-center -mx-1">
                                    <li id="open-mobile-menu" onClick={() => setMobileOpen(true)} className="px-1 leading-none">
                                        <a className="font-medium text-ovalGreen" href="#">
                                            <i className={mobileOpen ? "fas fa-times text-lg" : "fas fa-bars text-lg"}></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div ref={logoBox} className="w-1/3 flex items-center justify-center" onClick={() => (location.href = "/")}>
                                {/* <span ref={logoRef} /> */}
                                <Lottie ref={logoAnimation} options={defaultOptions} height={60} width={200} />
                            </div>
                            <div className="w-1/3 right-menu text-right hidden lg:block">
                                <ul className="flex items-center justify-end -mx-1">
                                    {/* <li className="px-1 leading-none">
                                        <div className="badge bg-ovalGreen h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                            <span id="initials" className="absolute">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                    </li> */}
                                    <li className="px-1 leading-none">
                                        <a className="badge bg-white h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                            <span id="cartCount" className="absolute">
                                                {cartCount || 0}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="px-1 leading-none">
                                        <a
                                            href="/cart"
                                            className="badge bg-ovalGreen h-8 px-5 w-auto rounded-full relative text-gray-700 font-bold flex items-center justify-center"
                                        >
                                            <span className="leading-inherit">Shop</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-1/3 right-menu text-right block lg:hidden">
                                <ul className="flex items-center justify-end -mx-1">
                                    <li className="px-1 leading-none">
                                        <div className="badge bg-white h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                            <span id="cartCount" className="absolute">
                                                {cartCount || 0}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="px-1 leading-none">
                                        <a className="font-medium text-ovalGreen" href="#">
                                            <i className="fas fa-shopping-cart text-lg"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
