import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EpidemicSoundRoot = () => {
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
            <div className="p-6 w-8/12 bg-blue-300">
                <h1 className="text-3xl font-bold">Epidemic Sound</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122060/ebuhvsytszmsylgapdjz.png"
                    alt="Epidemic Sound"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Epidemic Sound</a></li>
                    <li><a href="#what-is">What is Epidemic Sound?</a></li>
                    <li><a href="#how-to-use">How to Use Epidemic Sound</a></li>
                    <li><a href="#features">Here Are Epidemic Sound Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Epidemic Sound</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Epidemic Sound</h3>
                    <p>
                        Epidemic Sound is a leading platform for royalty-free music and sound effects, designed to cater to content creators, filmmakers, and marketers. It provides a vast library of high-quality audio tracks that can be used in various projects without the hassle of licensing issues. This article explores the functionalities of Epidemic Sound, its benefits, and how to make the most of this essential audio resource.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Epidemic Sound?</h3>
                    <p>
                        Epidemic Sound is an online music library that offers a wide range of royalty-free music tracks and sound effects. It allows users to easily search for and license music for their projects, ensuring that they can find the perfect audio to complement their content.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Epidemic Sound</h3>
                    <div>
                        <p>
                            Using Epidemic Sound is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Epidemic Sound website and create an account.</li>
                            <li>Browse the music library or use the search function to find specific tracks.</li>
                            <li>Select the desired track and download it for use in your project.</li>
                            <li>Utilize the downloaded audio in your videos, podcasts, or other content.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Epidemic Sound Premium Cookies</h3>
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
                                    <a href="https://www.epidemicsound.com/" target="_blank" rel="noreferrer noopener">Epidemic Sound</a>
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
                                    to={'/3165/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Epidemic Sound</h3>
                    <div>
                        <p>
                            Epidemic Sound offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Royalty-Free Music:</strong> Provides a vast library of music tracks that can be used without worrying about licensing fees.</li>
                            <li><strong>High-Quality Audio:</strong> Offers professionally produced tracks and sound effects suitable for various projects.</li>
                            <li><strong>User-Friendly Interface:</strong> Designed to be intuitive and easy to navigate, making it simple to find the right audio.</li>
                            <li><strong>Flexible Licensing:</strong> Allows users to license music for different types of projects, including commercial use.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Epidemic Sound is an essential resource for content creators and marketers looking to enhance their projects with high-quality audio. With its innovative features and extensive library, it empowers users to find and utilize music and sound effects effortlessly. By integrating Epidemic Sound into your creative workflow, you can elevate your content and achieve better results. Embrace the power of Epidemic Sound and transform your audio experience effectively.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default EpidemicSoundRoot;