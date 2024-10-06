import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MozRoot = () => {
    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    const startTimer = () => {
        if (!isStarted) {
            setIsActive(true);
            setSeconds(60);
            setIsStarted(true);
        }
    };

    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1100);
        } else if (seconds === 0) {
            clearInterval(interval);
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-purple-300">
                <h1 className="text-3xl font-bold">Moz</h1>
                <img
                    src="https://i.pcmag.com/imagery/reviews/05KpzEBwxbTONoHz2Zo1xZg-15.fit_lim.size_1050x591.v1569481534.jpg"
                    alt="Moz"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Moz</a></li>
                    <li><a href="#what-is">What is Moz?</a></li>
                    <li><a href="#how-to-use">How to Use Moz</a></li>
                    <li><a href="#features">Here Are Moz Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Moz</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Moz</h3>
                    <p>
                        Moz is a leading SEO software platform that provides tools and resources to help businesses improve their online visibility and search engine rankings. Designed for marketers and SEO professionals, Moz offers a suite of features that assist users in optimizing their websites and tracking their performance. This article explores the functionalities of Moz, its benefits, and how to make the most of this essential SEO tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Moz?</h3>
                    <p>
                        Moz is an all-in-one SEO software that provides insights and tools for keyword research, link building, site audits, and more. It helps users understand their website's performance and offers actionable recommendations to enhance their SEO strategies. Moz is particularly beneficial for businesses looking to increase their organic traffic and improve their search engine rankings.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Moz</h3>
                    <div>
                        <p>
                            Using Moz is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Moz website and create an account.</li>
                            <li>Access the dashboard to explore various tools and features.</li>
                            <li>Conduct keyword research and analyze your website's performance.</li>
                            <li>Implement the recommendations provided by Moz to improve your SEO.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Moz Premium Cookies</h3>
                    <table className="min-w-full border-collapse border border-black mt-2">
                        <thead>
                            <tr>
                                <th colSpan="2" className="border border-black p-2">Cookies Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-black p-2">Cookies update</td>
                                <td className="border border-black p-2">A few hours ago (Latest)</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Website link</td>
                                <td className="border border-black p-2">
                                    <a href="https://moz.com/" target="_blank" rel="noreferrer noopener">Moz</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <button
                                        onClick={startTimer}
                                        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                        Claim Cookies
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex justify-center'>
                        {isActive && (
                            <div className="text-red-600 text-2xl">
                                {seconds} seconds remaining
                            </div>
                        )}

                        {isStarted && !isActive && (
                            <div className="mt-4">
                                <Link
                                    to={'/8730/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Moz</h3>
                    <div>
                        <p>
                            Moz offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Comprehensive SEO Tools:</strong> Access to a wide range of tools for keyword research, link building, and site audits.</li>
                            <li><strong>Data-Driven Insights:</strong> Provides actionable insights based on data analysis to improve SEO strategies.</li>
                            <li><strong>User-Friendly Interface:</strong> Easy to navigate, making it accessible for both beginners and experienced users.</li>
                            <li><strong>Community Support:</strong> Access to a community of SEO professionals and resources for continuous learning.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Moz is an essential tool for anyone looking to enhance their SEO efforts and improve their online visibility. With its comprehensive features and user-friendly interface, it empowers users to make informed decisions about their SEO strategies. By integrating Moz into your digital marketing efforts, you can drive more organic traffic and achieve better search engine rankings. Embrace the power of Moz and unlock your website's potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default MozRoot;