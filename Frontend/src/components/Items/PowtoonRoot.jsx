import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PowtoonRoot = () => {
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
                <h1 className="text-3xl font-bold">Powtoon</h1>
                <img
                    src="https://library.powtoon.co/library/asset/15382/VCP_logo-02_pORGJlB.svg"
                    alt="Powtoon"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Powtoon</a></li>
                    <li><a href="#what-is">What is Powtoon?</a></li>
                    <li><a href="#how-to-use">How to Use Powtoon</a></li>
                    <li><a href="#features">Here Are Powtoon Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Powtoon</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Powtoon</h3>
                    <p>
                        Powtoon is a popular online platform for creating animated videos and presentations. It is designed for educators, marketers, and content creators who want to engage their audience through visually appealing animations. This article explores the functionalities of Powtoon, its benefits, and how to make the most of this essential animation tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Powtoon?</h3>
                    <p>
                        Powtoon is an online animation tool that allows users to create animated videos easily. It provides a variety of templates, characters, and assets that can be customized to suit different projects, making it accessible for users of all skill levels.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Powtoon</h3>
                    <div>
                        <p>
                            Using Powtoon is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Powtoon website and create an account.</li>
                            <li>Select a template or start from scratch to create your animation.</li>
                            <li>Customize characters, backgrounds, and text to fit your project.</li>
                            <li>Export your animated video for use in presentations, social media, or other platforms.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Powtoon Premium Cookies</h3>
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
                                    <a href="https://www.powtoon.com/" target="_blank" rel="noreferrer noopener">Powtoon</a>
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
                                    to={'/8227/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Powtoon</h3>
                    <div>
                        <p>
                            Powtoon offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Easy to Use:</strong> Designed for users of all skill levels, making animation accessible to everyone.</li>
                            <li><strong>Wide Range of Assets:</strong> Provides a variety of templates, characters, and backgrounds to choose from.</li>
                            <li><strong>Engaging Content:</strong> Helps create visually appealing animations that capture audience attention.</li>
                            <li><strong>Time Efficiency:</strong> Streamlines the animation process, allowing for quicker project completion.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Powtoon is an essential tool for anyone looking to create engaging animated content. With its innovative features and user-friendly interface, it empowers users to produce high-quality animations effortlessly. By integrating Powtoon into your creative workflow, you can elevate your presentations and marketing efforts. Embrace the power of Powtoon and transform your animation experience effectively.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default PowtoonRoot;