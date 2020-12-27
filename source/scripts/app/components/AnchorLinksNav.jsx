import React, { useState } from "react";
import { Link, Element } from "react-scroll";

function AnchorLinksNav({ sections }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div
                className="fixed h-full z-50 right-0 top-0 border py-1 bg-white shadow-xl"
                style={{
                    transitionDuration: "200ms",
                    transform: menuOpen ? "translateX(0)" : "translateX(100%)",
                }}
            >
                <nav className="mt-20">
                    <div
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="h-10 w-10 mt-24 absolute cursor-pointer bottom-0 mb-24 left-0 bg-white hover:bg-gray-200 border border-r-0 rounded-l flex items-center justify-center"
                        style={{ transform: "translateX(-100%)" }}
                    >
                        <i
                            className="fas fa-plus text-gray-500"
                            style={{ transitionDuration: "200ms", transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                        ></i>
                    </div>

                    <div className="text-xs tracking-widest label-text block py-px px-5 mb-5">Page Sections</div>
                    {sections.length > 0 &&
                        sections.map((section, i) => (
                            <Link
                                key={i}
                                to={section.slug}
                                className="text-base cursor-pointer block py-1 px-5 bg-white hover:bg-gray-100"
                                activeClass="cursor-auto bg-gray-300 hover:bg-gray-300"
                                smooth={true}
                                spy={true}
                            >
                                {section.title}
                            </Link>
                        ))}
                </nav>
            </div>
            <div
                onClick={() => setMenuOpen(false)}
                className="fixed h-full w-full bg-gray-900 z-40"
                style={{ transitionDuration: "200ms", visibility: menuOpen ? "visible" : "hidden", opacity: menuOpen ? ".7" : "0" }}
            ></div>
        </>
    );
}

export default AnchorLinksNav;
