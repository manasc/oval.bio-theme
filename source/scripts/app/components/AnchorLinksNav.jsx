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
                style={{ transitionDuration: "200ms", visibility: menuOpen ? "visible" : "hidden", opacity: menuOpen ? "0.9" : "0" }}
            />
            <nav
                key="menu"
                className="fixed z-50 bottom-0 right-0 mb-32"
                style={{
                    transitionDuration: "200ms",
                    transform: menuOpen ? "translateY(0)" : "translateX(100%)",
                }}
            >
                <div className="text-xs tracking-widest label-text block py-px px-8 mb-5">
                    <span className="text-ovalGreenDark">#</span>
                    Sections
                </div>
                {sections.length > 0 &&
                    sections.map((section, i) => (
                        <Link
                            key={i}
                            to={section.slug}
                            className="text-xl cursor-pointer block px-8 text-gray-600 hover:text-gray-900"
                            activeClass="cursor-auto text-ovalGreenDark hover:text-ovalGreenDark"
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
                className="h-10 w-10 z-50 shadow-lg my-10 fixed cursor-pointer bottom-0 right-0 bg-ovalGreen hover:bg-ovalGreenLight rounded-full flex items-center justify-center"
                style={{ transform: "translateX(-100%)" }}
            >
                <i
                    className="fas fa-plus text-gray-900 opacity-75"
                    style={{ transitionDuration: "200ms", transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                ></i>
            </div>
        </>
    );
}

export default AnchorLinksNav;
