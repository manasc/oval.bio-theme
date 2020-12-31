import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../lottie/oval-logo.json";

function Header({ menu, menuMobile }) {
    const headerMenu = JSON.parse(menu);

    const [openBanner, setOpenBanner] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    const logoRef = useRef(null);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50">
                <div id="header-navbar" className="h-15 bg-gray-800 text-sm text-white py-3 md:py-2 px-5">
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
                            <div ref={logoRef} className="w-1/5 flex items-center text-center">
                                {/* <span ref={logoRef} /> */}
                                {/* <span className="text-ovalGreen font-brand font-bold text-2xl">oval.bio</span> */}
                                <Lottie options={defaultOptions} height={60} width={200} />
                            </div>
                            <div className="w-1/3 right-menu text-right hidden lg:block">
                                <ul className="flex items-center justify-end -mx-1">
                                    <li className="px-1 leading-none">
                                        <div className="badge bg-ovalGreen h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                            <span id="initials" className="absolute">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="px-1 leading-none">
                                        <div className="badge bg-white h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                            <span id="cartCount" className="absolute">
                                                2
                                            </span>
                                        </div>
                                    </li>
                                    <li className="px-1 leading-none">
                                        <div className="badge bg-ovalGreen h-8 px-5 w-auto rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                            <span className="leading-inherit">Shop</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-1/3 right-menu text-right block lg:hidden">
                                <ul className="flex items-center justify-end -mx-1">
                                    <li className="px-1 leading-none">
                                        <div className="badge bg-white h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                            <span id="cartCount" className="absolute">
                                                2
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
                {openBanner && (
                    <div
                        id="header-banner"
                        className="banner bg-ovalGreen hover:bg-ovalGreenLight cursor-pointer text-sm text-gray-800 top-0 py-3 text md:py-2 px-5"
                    >
                        <div className="container h-full mx-auto">
                            <div className="flex h-full items-center">
                                <span className="w-full truncate">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sequi error reiciendis magnam
                                    eligendi, repudiandae dolor perspiciatis. Deserunt cum sequi veritatis labore cumque, modi qui.
                                </span>
                                <div
                                    id="close-header-banner"
                                    onClick={() => setOpenBanner(false)}
                                    className="close pl-2 text-gray-700 hover:text-gray-800"
                                >
                                    <div className="fas fa-times-circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
            <div id="faux-header" className="h-15 bg-blue-200"></div>
            <div
                id="mobile-menu"
                className="fixed h-screen w-full top-0 left-0 flex cursor-pointer bg-white z-50"
                style={{
                    transitionDuration: "400ms",
                    transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
                }}
            >
                <div onClick={() => setMobileOpen(false)} className="absolute top-0 left-0 py-3 px-6 text-base">
                    <i className="fas fa-times text-ovalGreen mr-2"></i> Close
                </div>
                <div className="px-5 pt-32 pb-5 w-full">
                    <ul className="flex flex-col">
                        {headerMenu.length > 0 &&
                            headerMenu.map((item) => (
                                <li className="px-2 truncate text-3xl" key={item.title}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
