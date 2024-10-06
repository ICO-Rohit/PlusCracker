import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FreepikRoot = () => {
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
                <h1 className="text-3xl font-bold">Freepik</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122145/thlnkitcmqfe5ayq0zok.png"
                    alt="Freepik"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Freepik</a></li>
                    <li><a href="#what-is">What is Freepik?</a></li>
                    <li><a href="#how-to-use">How to Use Freepik</a></li>
                    <li><a href="#features">Here Are Freepik Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Freepik</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Freepik</h3>
                    <p>
                        Freepik is a popular online platform that offers a vast collection of graphic resources, including vectors, illustrations, icons, and photos. It serves as a valuable resource for designers, marketers, and content creators looking to enhance their projects with high-quality visuals. This article explores the functionalities of Freepik, its benefits, and how to make the most of this essential design tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Freepik?</h3>
                    <p>
                        Freepik is an online repository that provides users with access to a wide range of graphic resources. It offers both free and premium content, allowing users to download and use high-quality images, vectors, and illustrations for their projects. Freepik is particularly beneficial for graphic designers, web developers, and anyone in need of visual content for marketing and branding purposes.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Freepik</h3>
                    <div>
                        <p>
                            Using Freepik is simple and effective. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Freepik website and create an account.</li>
                            <li>Browse or search for the desired graphic resources.</li>
                            <li>Select the resource you want to download.</li>
                            <li>Choose the format and download the file.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Freepik Premium Cookies</h3>
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
                                    <a href="https://freepik.noxtools.com/index.php" target="_blank" rel="noreferrer noopener">Freepik</a>
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
                                    to={'/5548/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Freepik</h3>
                    <div>
                        <p>
                            Freepik offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Extensive Library:</strong> Access to a vast collection of high-quality graphic resources.</li>
                            <li><strong>Variety of Formats:</strong> Users can download resources in various formats, including PSD, AI, and JPG.</li>
                            <li><strong>Free and Premium Options:</strong> Freepik offers both free resources and premium content for subscribers.</li>
                            <li><strong>User-Friendly Interface:</strong> The intuitive design makes it easy for anyone to find and download resources.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Freepik is an invaluable resource for anyone looking to enhance their projects with high-quality graphic content. With its extensive library and user-friendly interface, it empowers users to find the perfect visuals for their needs. By integrating Freepik into your design process, you can elevate your projects and create stunning visuals that capture attention. Embrace the power of Freepik and unlock your creative potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default FreepikRoot;