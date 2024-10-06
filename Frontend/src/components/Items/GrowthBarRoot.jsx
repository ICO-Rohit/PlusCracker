import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GrowthBarRoot = () => {
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
            }, 1);
        } else if (seconds === 0) {
            clearInterval(interval);
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-green-300">
                <h1 className="text-3xl font-bold">GrowthBar</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122195/yotead71vqwjarf2cgxb.png"
                    alt="GrowthBar"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to GrowthBar</a></li>
                    <li><a href="#what-is">What is GrowthBar?</a></li>
                    <li><a href="#how-to-use">How to Use GrowthBar</a></li>
                    <li><a href="#features">Here Are GrowthBar Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using GrowthBar</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to GrowthBar</h3>
                    <p>
                        GrowthBar is an all-in-one SEO tool designed to help users improve their website's visibility and performance in search engines. It is widely used by marketers, bloggers, and business owners to optimize their content and track their SEO efforts. This article explores the functionalities of GrowthBar, its benefits, and how to make the most of this essential SEO tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is GrowthBar?</h3>
                    <p>
                        GrowthBar is an online SEO tool that provides users with insights into their website's performance, keyword rankings, and competitor analysis. It offers a range of features to help users optimize their content, track their SEO progress, and identify growth opportunities.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use GrowthBar</h3>
                    <div>
                        <p>
                            Using GrowthBar is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the GrowthBar website and create an account.</li>
                            <li>Enter your website URL to analyze its performance.</li>
                            <li>Explore the various features, including keyword research and competitor analysis.</li>
                            <li>Implement the suggested optimizations to improve your SEO strategy.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are GrowthBar Premium Cookies</h3>
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
                                    <a href="https://www.growthbarseo.com/" target="_blank" rel="noreferrer noopener">GrowthBar</a>
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
                                    to={'/9147/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using GrowthBar</h3>
                    <div>
                        <p>
                            GrowthBar offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Comprehensive SEO Insights:</strong> Provides detailed analysis of website performance and keyword rankings.</li>
                            <li><strong>Competitor Analysis:</strong> Allows users to track competitors and identify growth opportunities.</li>
                            <li><strong>User-Friendly Interface:</strong> Easy to navigate, making it accessible for both beginners and experienced marketers.</li>
                            <li><strong>Content Optimization:</strong> Offers suggestions to improve content for better search engine visibility.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        GrowthBar is an essential tool for anyone looking to enhance their SEO strategies and improve their website's performance. With its comprehensive features and user-friendly interface, it empowers users to make informed decisions about their content and marketing efforts. By integrating GrowthBar into your digital marketing strategy, you can drive more organic traffic and achieve better search engine rankings. Embrace the power of GrowthBar and optimize your online presence effectively.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default GrowthBarRoot;