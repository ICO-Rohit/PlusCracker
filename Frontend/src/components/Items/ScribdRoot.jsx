import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ScribdRoot = () => {
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
                <h1 className="text-3xl font-bold">Scribd</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122575/z3bzg28mmlfcdwluqire.png"
                    alt="Scribd"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Scribd</a></li>
                    <li><a href="#what-is">What is Scribd?</a></li>
                    <li><a href="#how-to-use">How to Use Scribd</a></li>
                    <li><a href="#features">Here Are Scribd Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Scribd</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Scribd</h3>
                    <p>
                        Scribd is a digital library and e-book subscription service that provides access to a vast collection of books, audiobooks, articles, and documents. It serves as a valuable resource for readers, students, and professionals looking to expand their knowledge and enjoy a wide range of literature. This article explores the functionalities of Scribd, its benefits, and how to make the most of this essential reading platform.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Scribd?</h3>
                    <p>
                        Scribd is an online platform that offers users access to a diverse library of written content. With a subscription, users can read unlimited books, listen to audiobooks, and explore a variety of documents and articles. Scribd is particularly beneficial for avid readers, students, and anyone looking to access a wide range of literature and educational materials.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Scribd</h3>
                    <div>
                        <p>
                            Using Scribd is simple and effective. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Scribd website and create an account.</li>
                            <li>Choose a subscription plan that suits your needs.</li>
                            <li>Browse or search for books, audiobooks, or documents.</li>
                            <li>Select the content you want to read or listen to.</li>
                            <li>Enjoy your reading experience on any device.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Scribd Premium Cookies</h3>
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
                                    <a href="https://www.scribd.com/" target="_blank" rel="noreferrer noopener">Scribd</a>
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
                                    to={'/4053/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Scribd</h3>
                    <div>
                        <p>
                            Scribd offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Unlimited Access:</strong> Subscribers can read and listen to an extensive library of content without restrictions.</li>
                            <li><strong>Diverse Content:</strong> Scribd offers a wide range of materials, including books, audiobooks, articles, and documents.</li>
                            <li><strong>Convenience:</strong> Users can access Scribd on various devices, making it easy to read or listen on the go.</li>
                            <li><strong>User-Friendly Interface:</strong> The platform is designed for easy navigation, allowing users to find content quickly.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Scribd is an invaluable resource for anyone looking to expand their reading and learning opportunities. With its extensive library and user-friendly interface, it empowers users to access a wealth of knowledge and literature. By integrating Scribd into your reading habits, you can enhance your understanding and enjoyment of various topics. Embrace the power of Scribd and unlock your literary potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default ScribdRoot;