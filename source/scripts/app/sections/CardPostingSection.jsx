import React, { useState, useEffect } from "react";

function ChosenArticlesSection({ title, cards = [] }) {
    return (
        <section className="content-box">
            <div className="subtitle text-center">{title}</div>
            <div className="flex flex-wrap -mx-3">
                {cards.map((card, i) => (
                    <div key={i} className="w-full md:w-1/2 px-3 mb-6">
                        <div className="content-box-secondary h-full flex flex-col">
                            <h3 className="font-light text-xl mb-3">{card.title}</h3>
                            <hr className="divider mb-3" />
                            <div className="tab-content flex-1" dangerouslySetInnerHTML={{ __html: card.description }}></div>
                            <div className="buttons">
                                <a href={card.link || card.url} className="button">
                                    Apply
                                    <i className="button-icon fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ChosenArticlesSection;
