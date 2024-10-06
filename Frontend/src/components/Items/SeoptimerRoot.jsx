import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SeoptimerRoot = () => {
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
            <div className="p-6 w-8/12 bg-green-300">
                <h1 className="text-3xl font-bold">Seoptimer</h1>
                <img
                    src="https://www.seoptimer.com/img/logo_nav.png"
                    alt="Seoptimer"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Seoptimer</a></li>
                    <li><a href="#what-is">What is Seoptimer?</a></li>
                    <li><a href="#how-to-use">How to Use Seoptimer</a></li>
                    <li><a href="#features">Here Are Seoptimer Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Seoptimer</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Seoptimer</h3>
                    <p>
                        Seoptimer is an online SEO analysis tool that helps users evaluate their website's performance and identify areas for improvement. Designed for website owners, marketers, and SEO professionals, Seoptimer provides a comprehensive analysis of various SEO factors, enabling users to optimize their sites effectively. This article explores the functionalities of Seoptimer, its benefits, and how to make the most of this essential SEO tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Seoptimer?</h3>
                    <p>
                        Seoptimer is a powerful SEO audit tool that analyzes websites based on multiple criteria, including on-page SEO, performance, mobile-friendliness, and more. It provides users with actionable insights and recommendations to enhance their website's search engine visibility and overall performance.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Seoptimer</h3>
                    <div>
                        <p>
                            Using Seoptimer is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Seoptimer website.</li>
                            <li>Enter your website URL in the provided field.</li>
                            <li>Click on the "Analyze" button to start the audit.</li>
                            <li>Review the generated report and implement the suggested improvements.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Seoptimer Premium Cookies</h3>
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
                                    <a href="https://www.seoptimer.com/" target="_blank" rel="noreferrer noopener">Seoptimer</a>
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
                                    to={'/9630/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Seoptimer</h3>
                    <div>
                        <p>
                            Seoptimer offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Comprehensive Analysis:</strong> Provides a detailed audit of various SEO factors affecting your website.</li>
                            <li><strong>Actionable Insights:</strong> Offers specific recommendations to improve your site's performance.</li>
                            <li><strong>User-Friendly Interface:</strong> Easy to navigate, making it accessible for both beginners and experienced users.</li>
                            <li><strong>Free and Paid Options:</strong> Offers a free analysis with the option to upgrade for more in-depth features.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Seoptimer is an essential tool for anyone looking to enhance their website's SEO performance. With its comprehensive analysis and actionable insights, it empowers users to make informed decisions about their SEO strategies. By integrating Seoptimer into your digital marketing efforts, you can improve your website's visibility and drive more organic traffic. Embrace the power of Seoptimer and optimize your online presence effectively.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default SeoptimerRoot;