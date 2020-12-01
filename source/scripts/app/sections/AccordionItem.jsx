import React, { useState, useRef, useEffect } from "react";

function AccordionItem({ defaultOpen = false, title, description }) {
    const [open, setOpen] = useState(defaultOpen);

    const descriptionTag = useRef(null);

    return (
        <div onClick={() => setOpen(!open)} className={"react-accordion-item react-accordion-item-has-icon " + (open && "active")}>
            <div className="react-accordion-item-header">
                <div className="react-accordion-item-question">
                    <div className="react-accordion-item-icon">
                        <i className="fas fa-plus-circle"></i>
                    </div>
                    {title}
                </div>
            </div>
            <div
                className="react-accordion-item-content"
                style={{
                    maxHeight: open ? descriptionTag.current.clientHeight + "px" : "0px",
                    transitionDuration: "300ms",
                }}
            >
                <p ref={descriptionTag} className="react-accordion-item-answer" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </div>
    );
}

export default AccordionItem;
