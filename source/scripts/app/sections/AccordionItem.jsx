import { SearchBox } from "@fluentui/react";
import React, { useState, useRef, useEffect } from "react";

function AccordionItem({ open = false, title, description, onClick }) {
    const [accOpen, setAccOpen] = useState(open);
    const descriptionTag = useRef(null);

    useEffect(() => {
        setAccOpen(open);
    }, [open]);

    return (
        <div
            onClick={() => {
                onClick && onClick();
                setAccOpen(!accOpen);
            }}
            className={"react-accordion-item react-accordion-item-has-icon " + (accOpen && "active")}
        >
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
                    maxHeight: open || accOpen ? descriptionTag.current.clientHeight + "px" : "0px",
                    transitionDuration: "300ms",
                }}
            >
                <p ref={descriptionTag} className="react-accordion-item-answer" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </div>
    );
}

export default AccordionItem;
