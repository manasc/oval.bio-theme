import React from "react";
import { Link } from "react-scroll";

const TableOfContents = ({ title, description, links = [] }) => (
    <section className="min-h-full py-10 px-5 flex items-center justify-center">
        <div className="w-full h-auto max-w-5xl flex flex-wrap md:flex-no-wrap justify-center md:-mx-4">
            <div className="w-full md:w-1/2 mb-10 md:px-4">
                <div className="text-4xl md:text-5xl">{title}</div>
                <div className="text-base mt-5" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className="w-full md:w-1/3 md:px-4">
                <ul className="">
                    {links &&
                        links.map((link) => (
                            <li className="mb-1 " key={link.name}>
                                <Link
                                    className="block py-1 mb-2 text-xl border-t cursor-pointer text-gray-600 hover:text-gray-900 hover:border-gray-700"
                                    to={link.link}
                                    spy={true}
                                    smooth={true}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    </section>
);

export default TableOfContents;
