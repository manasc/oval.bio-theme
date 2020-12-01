import React, { useState } from "react";

const Accordion = ({ title, children }) => (
    <section className="content-box">
        <div className="max-w-3xl mx-auto">
            <h1 className="subtitle text-center">{title}</h1>
            <div className="react-accordion-box">
                <div className="react-accordion">{children}</div>
            </div>
        </div>
    </section>
);

export default Accordion;
