import React from "react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";

const FaqSection = ({ data }) => {
    const { faqs } = data;

    return (
        <Accordion title="Frequently Asked Questions">
            {faqs.map((faq, i) => (
                <AccordionItem key={i} title={faq.question} description={faq.answer} />
            ))}
        </Accordion>
    );
};

export default FaqSection;
