import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";

function ChosenArticlesSection({ sectionTitle, articles = [] }) {
    const [articlesData, setArticlesData] = useState();

    // make api calls
    useEffect(() => {
        // console.log("Chosen Articles", articles);
        const postIds = articles.map((article) => article.ID);

        axios.get("/wp-json/wp/v2/posts?_embed=1&include=" + postIds.toString()).then((res) => {
            setArticlesData(res.data);
            // console.log(res.data);
        });
    }, []);

    return (
        <section className="content-box">
            <div className="mb-10 mx-auto max-w-3xl">
                <h1 className="subtitle md:text-center mb-5">{sectionTitle}</h1>
                <div className="content text-base">
                    <p>
                        Eveniet vitae enim deleniti provident nihil totam ipsa earum quae. Architecto ex assumenda itaque eum architecto
                        adipisci minima ut qui. Magnam voluptatum quo optio itaque consequatur deserunt. Quo placeat harum qui. Molestias
                        est praesentium quas ut dicta nihil ut harum. Eveniet qui aut ut eos et reiciendis. At eveniet id laudantium numquam
                        quos sequi sint omnis. Rerum eum dolores illum delectus ut enim quae et aliquid. Dolores accusamus itaque sed. Aut
                        et ducimus fugiat. Et quos est delectus deserunt blanditiis officia. Sunt vel perspiciatis sit aut.
                    </p>
                </div>
            </div>
            <div>
                {articlesData && (
                    <div className="blog-items flex flex-wrap items-start -mx-2">
                        {articlesData.slice(0, 3).map((article, i) => (
                            <a
                                key={i}
                                href={article.link}
                                className="blog-item cursor-pointer mb-5 md:mb-0 w-full md:w-1/3 px-2 flex flex-wrap items-center"
                            >
                                <div className="image-box product-box overflow-hidden relative w-full">
                                    <div
                                        className="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat"
                                        style={{
                                            backgroundImage:
                                                "url(" +
                                                (article._embedded["wp:featuredmedia"] &&
                                                    article._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url) +
                                                ")",
                                        }}
                                    />
                                    <div className="label  absolute top-0 right-0">
                                        <span className="label-text">
                                            {article._embedded["wp:term"][0] &&
                                                article._embedded["wp:term"][0][0] &&
                                                article._embedded["wp:term"][0][0].name}
                                        </span>
                                    </div>
                                </div>
                                <div className="content w-full">
                                    <div className="title text-base leading-snug mt-2 mb-3 pr-1">{article.title.rendered}</div>
                                    <div className="meta text-xs font-bold uppercase tracking-wider text-ovalGreen">
                                        <Moment format="YYYY/MM/DD" date={article.date} />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default ChosenArticlesSection;
