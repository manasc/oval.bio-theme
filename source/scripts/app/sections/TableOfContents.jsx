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
