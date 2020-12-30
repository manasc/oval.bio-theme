import React, { useState } from "react";
import { Link, Element } from "react-scroll";

function AnchorLinksNav({ sections }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div
                key="menu-bg"
                onClick={() => setMenuOpen(false)}
                className="fixed h-full w-full bg-white z-40"
                style={{ transitionDuration: "200ms", visibility: menuOpen ? "visible" : "hidden", opacity: menuOpen ? "1" : "0" }}
            />
            <nav
                key="menu"
                className="fixed z-50 bottom-0 right-0 mb-32"
                style={{
                    transitionDuration: "200ms",
                    transform: menuOpen ? "translateY(0)" : "translateX(100%)",
                }}
            >
                <div className="text-xs tracking-widest label-text block py-px px-8 mb-5">Page Sections</div>
                {sections.length > 0 &&
                    sections.map((section, i) => (
                        <Link
                            key={i}
                            to={section.slug}
                            className="text-base cursor-pointer block py-1 px-8 text-gray-800 hover:text-gray-800"
                            activeClass="cursor-auto text-ovalGreenDark"
                            smooth={true}
                            spy={true}
                        >
                            {section.title}
                        </Link>
                    ))}
            </nav>
            <div
                key="menu-open"
                onClick={() => setMenuOpen(!menuOpen)}
                className="h-10 w-10 z-50 shadow-xl my-10 fixed cursor-pointer bottom-0 right-0 bg-white hover:bg-gray-200 border rounded-full flex items-center justify-center"
                style={{ transform: "translateX(-100%)" }}
            >
                <i
                    className="fas fa-plus text-gray-500"
                    style={{ transitionDuration: "200ms", transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                ></i>
            </div>
        </>
    );
}

export default AnchorLinksNav;
