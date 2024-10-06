import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const InVideoRoot = () => {
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
            <div className="p-6 w-8/12 bg-red-300">
                <h1 className="text-3xl font-bold">InVideo</h1>
                <img
                    src="https://web-assets.invideo.io/common/prod/logos/invideo-ai-light.svg"
                    alt="InVideo"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to InVideo</a></li>
                    <li><a href="#what-is">What is InVideo?</a></li>
                    <li><a href="#how-to-use">How to Use InVideo</a></li>
                    <li><a href="#features">Here Are InVideo Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using InVideo</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to InVideo</h3>
                    <p>
                        InVideo is an online video creation platform that allows users to create professional-quality videos quickly and easily. Designed for marketers, content creators, and businesses, InVideo provides a range of templates and tools to help users produce engaging video content for various purposes. This article explores the functionalities of InVideo, its benefits, and how to make the most of this powerful video editing tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is InVideo?</h3>
                    <p>
                        InVideo is a cloud-based video editing platform that offers a wide array of templates, stock footage, and editing tools to help users create stunning videos. Whether for social media, marketing campaigns, or personal projects, InVideo simplifies the video creation process, making it accessible to everyone, regardless of their editing experience.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use InVideo</h3>
                    <div>
                        <p>
                            Using InVideo is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the InVideo website and create an account.</li>
                            <li>Choose a template or start from scratch.</li>
                            <li>Upload your media or select from the stock library.</li>
                            <li>Edit your video using the available tools and features.</li>
                            <li>Export your video and share it on your desired platforms.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are InVideo Premium Cookies</h3>
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
                                    <a href="https://invideo.io/" target="_blank" rel="noreferrer noopener">InVideo</a>
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
                                    to={'/1168/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using InVideo</h3>
                    <div>
                        <p>
                            InVideo offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>User-Friendly Interface:</strong> Easy to navigate, making video creation accessible for everyone.</li>
                            <li><strong>Extensive Template Library:</strong> A wide variety of templates to suit different video styles and purposes.</li>
                            <li><strong>Stock Media Access:</strong> Access to a vast library of stock footage, images, and music.</li>
                            <li><strong>Fast Video Production:</strong> Create and edit videos quickly, saving time and effort.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        InVideo is a powerful tool for anyone looking to create high-quality videos efficiently. With its user-friendly interface and extensive features, it empowers users to produce engaging video content for various platforms. By integrating InVideo into your content creation strategy, you can enhance your marketing efforts and reach a wider audience. Embrace the power of InVideo and elevate your video production capabilities.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default InVideoRoot;