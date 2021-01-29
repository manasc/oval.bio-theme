import React from "react";

import MilestoneSlider from "../components/MilestoneSlider";

function VideoSection() {
    return (
        <>
            <section className="h-screen overflow-hidden">
                <div className="h-full flex flex-col">
                    <div className="flex-1 .bg-gray-200 relative flex items-center justify-center">
                        <MilestoneSlider />
                        <div className="label absolute bottom-0 left-0">
                            <div className="label-text">Milestones</div>
                        </div>
                    </div>
                    <div className="flex-none">
                        <div className="container">
                            <div className="flex-1 flex items-center py-8 px-5">
                                <div className="w-full max-w-xl">
                                    <h2 className="text-3xl">So, why should you care?</h2>
                                    <p>
                                        Our company ledgers are open, and once we achieve a $500k in sales milestone we will begin the
                                        process of creating a system on the website that updates the ledger showing each product’s sales and
                                        our costs with only a 24-hour delay.
                                    </p>
                                    {/* <p className="mt-4">
                                    <a className="button mr-2">Hello</a>
                                    <a href="#" className="button">
                                        Goodbye
                                    </a>
                                </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="other-information" className="py-20 bg-white">
                <div className="container">
                    <div className="px-5">
                        <h2 className="text-3xl mb-10">Other Information</h2>
                    </div>
                    <div className="entry-content" style={{ margin: 0 }}>
                        <h4 className="text-2xl mb-4 italic text-ovalGreenDark">Legal & Money</h4>
                        <p className="wp-block">
                            Shares are split into 2 groups (all exactly the same), 1 group of 50% of the shares (500,000,000) is controlled
                            by Michael Kiamanesh and the board, to be called the internal shares. The other equal group of 500,000,000
                            shares is distributed to buyers oval.bio products and services to be the external shares.
                        </p>
                        <p className="wp-block">Shares are only given away by oval.bio and do not carry any value.</p>
                        <p className="wp-block">
                            Internal shares are meant to be given to workers and contributors. External shares are given to anyone who buys
                            product, however no individual or entity can either directly or indirectly control more than 1% of these shares.
                            Likewise no individual or entity who holds greater than 1% of internal shares can have any of the external
                            shares.
                        </p>

                        <p className="wp-block">
                            Attempts to by-pass this will result in share forfeiture of those excess shares and can be put to a vote by the
                            rest of the shareholders if the remainder of the individuals shares should be taken away.
                        </p>

                        <p className="wp-block">
                            There will not be any more shares created until all of the first 1 billion are handed out. There will be a vote
                            by existing shareholders within 30 days after the last share is given out but not sooner than 10 days. This
                            delay is intentional to allow a discussion and analysis of the situation at that time to be done. Michael
                            Kiamanesh will always be limited to a maximum 25% of outstanding shares, he will start with 250,000,000 shares.
                            Utilization of distributed ledger for keeping track of shares.
                        </p>

                        <p className="wp-block">
                            In the beginning because of capital restrictions we give external shares as points through our website, the
                            amount of points given is dependent on the direct product cost (does not include shipping or taxes or other
                            fees) and at what phase we are at (points per dollar diminish as the company grows via sales revenue). All must
                            understand and agree that any points or rewards attained during this time are not transferable and do not
                            provide any voting ability until we have setup our cryptoshares network. Once this is completed all points
                            and/or rewards will be transitioned to this setup and the holders will then be given the opportunity to transfer
                            the shares to any other account on the network and to also use each share for one vote. The transition to the
                            cryptoshares will start once we achieve $500k in sales.
                        </p>
                    </div>
                    <div className="entry-content mt-10">
                        <h4 className="text-2xl mb-4 italic text-ovalGreenDark">Licensing and intellectual property</h4>
                        <p>
                            Oval.bio follows what it calls – Rising Tide IP policy. This is a give and take policy where all of our IP
                            except brand names, are freely available for others to use anyway they want with no expectation of royalties or
                            remuneration. However there are two requirements as part of this.
                        </p>
                        <ol>
                            <li>User must give oval.bio reasonable recognition no small than 33% in size or visibility as its own name.</li>
                            <li>
                                User understands that in turn oval.bio can utilize any of their IP except brand names, as long as they give
                                the same due recognition to them.
                            </li>
                        </ol>
                        <p>
                            Trying to bypass this give take policy by using different names and shell companies will be seen as a greedy
                            under handed scumbag sleight and oval.bio will use any means necessary to find justice. Our mission we want to
                            better the situation of all of humanity, greediness is counter to that, perhaps as the top contributing factor
                            to civilizations ills.
                        </p>
                        <p>
                            Through the rising tide policy the free access of IP is meant to let everyone benefit from each others
                            innovations to allow betterment of all in the pursuit of the core goal of creating access to life extension
                            technology.
                        </p>
                        <p>
                            If there is any IP that we have not sufficiently given access to, including videos, images or other media as
                            well as the more obvious technological information please message us so we can resolve this together.
                        </p>
                    </div>
                    <div className="entry-content mt-10">
                        <h4 className="text-2xl mb-4 italic text-ovalGreenDark">Licensing and intellectual property</h4>
                        <p>
                            Many companies take your data and sell it to others with your identifiable information attached. We do not want
                            to know your name, we will not ask for your name when signing up to use a pod, instead we will have you utilize
                            a username which will give you access.
                        </p>
                        <p>
                            We do however want as much about you demographical and lifestyle and biological information as we can get.
                            Reason are so that we can internally use this data to get a more full picture of how certain demographics
                            respond and if there are correlations, as well as provide users data on how they compare to others with similar
                            data or demographic information. We will additionally release large group data with identifiable information
                            scrubbed so that researchers around the world can analyze the data and help find benefit for everyone.
                        </p>
                        <p>
                            User privacy is of major importance to us, maybe even more important than to many users. We will never sell your
                            information and will continually expend resources to further encrypt and anonymize all data gathered, so society
                            can benefit from it but users privacies are kept 100% secure. One of our earliest milestone goals is to
                            transition the website so all sales have names of buyers encrypted and untracked instead it will be driven by
                            their account number.
                        </p>
                        <p>
                            An additional early step we will be taking is for the Face and 3D scanner data to be kept separate from the rest
                            of the analytical data so as to provide an additional level of security to prevent identifying a user.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default VideoSection;
