import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PlaceitRoot = () => {
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
                <h1 className="text-3xl font-bold">Placeit</h1>
                <img
                    src="https://placeit.net/static/placeit-and-envato.svg"
                    alt="Placeit"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Placeit</a></li>
                    <li><a href="#what-is">What is Placeit?</a></li>
                    <li><a href="#how-to-use">How to Use Placeit</a></li>
                    <li><a href="#features">Here Are Placeit Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Placeit</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Placeit</h3>
                    <p>
                        Placeit is a versatile online design tool that allows users to create stunning visuals for their brands and products. It is widely used by marketers, designers, and entrepreneurs to generate high-quality mockups, videos, and graphics without the need for advanced design skills. This article explores the functionalities of Placeit, its benefits, and how to make the most of this essential design tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Placeit?</h3>
                    <p>
                        Placeit is an online platform that provides users with a wide range of design templates and tools to create professional-quality graphics, including product mockups, logos, and promotional videos. It simplifies the design process, making it accessible for users of all skill levels.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Placeit</h3>
                    <div>
                        <p>
                            Using Placeit is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Placeit website and create an account.</li>
                            <li>Select the type of design you want to create (mockup, video, etc.).</li>
                            <li>Choose a template and customize it with your content.</li>
                            <li>Download or share your completed design directly from the platform.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Placeit Premium Cookies</h3>
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
                                    <a href="https://placeit.net/" target="_blank" rel="noreferrer noopener">Placeit</a>
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
                                    to={'/9730/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Placeit</h3>
                    <div>
                        <p>
                            Placeit offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Easy to Use:</strong> The platform is designed for users of all skill levels, making it accessible for everyone.</li>
                            <li><strong>High-Quality Output:</strong> Produces professional-quality graphics and videos suitable for marketing and branding.</li>
                            <li><strong>Wide Range of Templates:</strong> Offers a vast library of templates for various design needs.</li>
                            <li><strong>Time Efficiency:</strong> Streamlines the design process, allowing users to create visuals quickly.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Placeit is an essential tool for anyone looking to enhance their design capabilities and create stunning visuals for their brand. With its innovative features and user-friendly interface, it empowers users to produce high-quality graphics effortlessly. By integrating Placeit into your design workflow, you can elevate your marketing efforts and achieve better results. Embrace the power of Placeit and transform your visual content effectively.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default PlaceitRoot;