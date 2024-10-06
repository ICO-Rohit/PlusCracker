import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WordHeroRoot = () => {
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
            <div className="p-6 w-8/12 bg-red-300">
                <h1 className="text-3xl font-bold">WordHero</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122911/rzjlypksqart2mel9vti.png"
                    alt="WordHero"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to WordHero</a></li>
                    <li><a href="#what-is">What is WordHero?</a></li>
                    <li><a href="#how-to-use">How to Use WordHero</a></li>
                    <li><a href="#features">Here Are WordHero Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using WordHero</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to WordHero</h3>
                    <p>
                        WordHero is an innovative writing assistant designed to help users generate high-quality content quickly and efficiently. Utilizing advanced AI technology, WordHero provides suggestions for writing, editing, and enhancing text, making it an essential tool for writers, marketers, and content creators. This article explores the functionalities of WordHero, its benefits, and how to make the most of this powerful tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is WordHero?</h3>
                    <p>
                        WordHero is an online writing tool that assists users in creating and refining their content. It offers a variety of features, including content generation, rephrasing, and grammar checking, allowing users to enhance their writing skills and produce high-quality text. WordHero is particularly beneficial for bloggers, marketers, and anyone looking to improve their writing efficiency.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use WordHero</h3>
                    <div>
                        <p>
                            Using WordHero is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the WordHero website and create an account.</li>
                            <li>Input your text or topic into the provided text box.</li>
                            <li>Review the suggestions and enhancements provided by WordHero.</li>
                            <li>Make any necessary adjustments to your content.</li>
                            <li>Copy the final text for your use.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are WordHero Premium Cookies</h3>
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
                                    <a href="https://wordhero.co/" target="_blank" rel="noreferrer noopener">WordHero</a>
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
                                    to={'/2989/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using WordHero</h3>
                    <div>
                        <p>
                            WordHero offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Content Generation:</strong> The tool helps users quickly generate ideas and content for various topics.</li>
                            <li><strong>Time-Saving:</strong> WordHero allows users to create high-quality content in a fraction of the time it would normally take.</li>
                            <li><strong>Enhanced Writing:</strong> Users can improve their writing with suggestions for rephrasing and grammar corrections.</li>
                            <li><strong>User-Friendly Interface:</strong> The intuitive design makes it easy for anyone to use, regardless of their writing experience.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        WordHero is an invaluable tool for anyone looking to enhance their writing skills and efficiency. With its advanced features and user-friendly interface, it empowers users to create high-quality content quickly and effectively. By integrating WordHero into your writing process, you can improve your text and communicate your ideas more clearly. Embrace the power of WordHero and unlock your writing potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default WordHeroRoot;