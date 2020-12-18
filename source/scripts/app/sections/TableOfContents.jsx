import React, { useState } from "react";

function MoreThanOval({ title, description, links = [] }) {
    return (
        <section className="h-full overflow-hidden flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <div className="h-full flex justify-center -mx-2">
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
