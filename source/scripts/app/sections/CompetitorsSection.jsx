import React, { useEffect, useState } from "react";
import axios from "axios";

function CompetitorsSection({ data }) {
    const [article, setArticle] = useState({});

    useEffect(() => {
        axios.get("/wp-json/wp/v2/posts/" + data.articles.ID + "?_embed=1&").then((res) => {
            setArticle(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <section className="content-box relative">
            <div className="subtitle text-center">Competitive Comparison</div>
            {Object.keys(article).length > 0 && (
                <>
                    <div className="cover absolute top-0 left-0 w-full h-full z-10 rounded overflow-hidden bg-white-gradient">
                        <div className="w-full absolute bottom-0 py-12 px-5">
                            <div className="flex flex-wrap items-center justify-center -mx-4">
                                <div className="message px-4">
                                    <p>The full article is available on our Blogs.</p>
                                </div>
                                <div className="cta flex-none px-4">
                                    <a href={article.link} className="button">
                                        Full Article
                                        <i className="button-icon fas fa-glasses"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center -mx-4 relative overflow-hidden" style={{ maxHeight: 400 }}>
                        <div className="w-full md:w-1/2 px-4">
                            <div
                                className="bg-gray-500 bg-cover bg-center bg-no-repeat"
                                style={{
                                    paddingTop: "100%",
                                    backgroundImage:
                                        "url(" + article._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url + ")",
                                }}
                            ></div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="anchor-content">
                                <h1 className="text-3xl mb-5 leading-snug">{article.title.rendered}</h1>
                                {/* <div className="my-10" dangerouslySetInnerHTML={{ __html: article.excerpt }}></div> */}
                                <div dangerouslySetInnerHTML={{ __html: article.content.rendered }}></div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}

export default CompetitorsSection;
