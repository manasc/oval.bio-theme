import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import { data } from "isotope-layout";

function ChosenArticlesSection({ title, description }) {
    return (
        <section className="content-box">
            <div className="subtitle md:text-center">{title}</div>
            <div className="flex flex-wrap relative overflow-hidden">
                <div className="meta mt-2 max-w-3xl mx-auto">
                    <div className="tab-content text-base" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </section>
    );
}

export default ChosenArticlesSection;
