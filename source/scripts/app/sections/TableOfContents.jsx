import React, { useState } from "react";

function MoreThanOval({ title, description, links = [] }) {
    return (
        <section className="h-full overflow-hidden">
            <div className="container nmr-container">
                <div className="h-full flex items-center justify-center -mx-2">
                    <div className="w-full max-w-xl flex-none flex flex-col px-2">
                        <div className="flex-1 p-10 overflow-y-scroll max-h-full">
                            <div className="text-5xl">{title}</div>
                            <div className="text-base mt-5" dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    </div>
                    <div className="flex-1  px-2">
                        <ul className="">
                            {links &&
                                links.map((link) => (
                                    <li className="mb-5 border-t hover" key={link.name}>
                                        <div className="py-2 text-xl">{link.name}</div>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MoreThanOval;
