import React from "react";
import { Link } from "react-scroll";

const TableOfContents = ({ title, description, links = [] }) => (
    <section className="h-full flex items-center justify-center">
        <div className="w-full h-auto max-w-5xl flex justify-center -mx-2">
            <div className="w-full max-w-xl flex-none flex flex-col px-2">
                <div className="flex-1 px-10 overflow-y-scroll max-h-full">
                    <div className="text-5xl">{title}</div>
                    <div className="text-base mt-5" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
            <div className="flex-1  px-2">
                <ul className="">
                    {links &&
                        links.map((link) => (
                            <li className="mb-2 border-t hover" key={link.name}>
                                <div className="py-2 text-xl cursor-pointer" style={{ transitionDuration: "200ms" }}>
                                    <Link activeClass="font-bold text-ovalGreenDark" to={link.link} spy={true} smooth={true}>
                                        {link.name}
                                    </Link>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    </section>
);

export default TableOfContents;
