import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const IndexificationRoot = () => {
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
                <h1 className="text-3xl font-bold">Indexification</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122263/fvy8fa5nllnru7yucqus.jpg"
                    alt="Indexification"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Indexification</a></li>
                    <li><a href="#what-is">What is Indexification?</a></li>
                    <li><a href="#how-to-use">How to Use Indexification</a></li>
                    <li><a href="#features">Here Are Indexification Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Indexification</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Indexification</h3>
                    <p>
                        Indexification is a powerful tool designed to help users optimize their online presence and improve their search engine rankings. By providing insights into indexing and SEO strategies, Indexification empowers businesses and individuals to enhance their visibility on search engines. This article explores the functionalities of Indexification, its benefits, and how to make the most of this essential digital marketing tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Indexification?</h3>
                    <p>
                        Indexification is an online platform that offers users tools and resources to improve their website's indexing and search engine optimization (SEO). It provides insights into how search engines crawl and index content, helping users make informed decisions to enhance their online visibility. Indexification is particularly beneficial for website owners, digital marketers, and SEO professionals.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Indexification</h3>
                    <div>
                        <p>
                            Using Indexification is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Indexification website and create an account.</li>
                            <li>Connect your website to the platform for analysis.</li>
                            <li>Explore the available tools and resources for SEO optimization.</li>
                            <li>Implement the suggested strategies to improve your website's indexing.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Indexification Premium Cookies</h3>
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
                                    <a href="http://www.indexification.com/members/index.php" target="_blank" rel="noreferrer noopener">Indexification</a>
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
                                    to={'/7265/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Indexification</h3>
                    <div>
                        <p>
                            Indexification offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Improved SEO:</strong> The tool provides actionable insights to enhance search engine optimization.</li>
                            <li><strong>Comprehensive Analysis:</strong> Users receive detailed reports on their website's indexing status.</li>
                            <li><strong>User-Friendly Interface:</strong> The platform is designed for easy navigation, making it accessible for all users.</li>
                            <li><strong>Ongoing Support:</strong> Indexification offers resources and support to help users implement effective SEO strategies.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Indexification is an invaluable tool for anyone looking to optimize their online presence and improve their search engine rankings. With its comprehensive features and user-friendly interface, it empowers users to make informed decisions about their SEO strategies. By integrating Indexification into your digital marketing efforts, you can enhance your website's visibility and drive more traffic. Embrace the power of Indexification and unlock your website's potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default IndexificationRoot;