import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VecteezyRoot = () => {
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
                <h1 className="text-3xl font-bold">Vecteezy</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122838/bmwgq08c1nhgxohkvspk.png"
                    alt="Vecteezy"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Vecteezy</a></li>
                    <li><a href="#what-is">What is Vecteezy?</a></li>
                    <li><a href="#how-to-use">How to Use Vecteezy</a></li>
                    <li><a href="#features">Here Are Vecteezy Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Vecteezy</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Vecteezy</h3>
                    <p>
                        Vecteezy is a popular online platform that offers a vast collection of free and premium vector graphics, illustrations, and design resources. It is widely used by graphic designers, marketers, and content creators looking for high-quality visuals to enhance their projects. This article explores the functionalities of Vecteezy, its benefits, and how to make the most of this essential design tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Vecteezy?</h3>
                    <p>
                        Vecteezy is an online resource that provides users with access to a wide range of vector graphics, including illustrations, icons, and backgrounds. Users can download these resources for free or purchase premium content, making it a versatile tool for anyone in need of high-quality design elements.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Vecteezy</h3>
                    <div>
                        <p>
                            Using Vecteezy is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Vecteezy website.</li>
                            <li>Use the search bar to find specific vector graphics or browse through categories.</li>
                            <li>Select the desired graphic and choose between free or premium options.</li>
                            <li>Download the graphic in your preferred format.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Vecteezy Premium Cookies</h3>
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
                                    <a href="https://www.vecteezy.com/" target="_blank" rel="noreferrer noopener">Vecteezy</a>
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
                                    to={'/6725/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Vecteezy</h3>
                    <div>
                        <p>
                            Vecteezy offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Extensive Library:</strong> Access to a vast collection of vector graphics and design resources.</li>
                            <li><strong>Free and Premium Options:</strong> Offers both free and premium content to suit different budgets.</li>
                            <li><strong>User-Friendly Interface:</strong> Easy to navigate, making it accessible for both beginners and experienced designers.</li>
                            <li><strong>High-Quality Graphics:</strong> Provides high-resolution graphics suitable for various projects.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Vecteezy is an essential resource for anyone looking to enhance their design projects with high-quality vector graphics. With its extensive library and user-friendly interface, it empowers users to find the perfect visuals for their needs. By integrating Vecteezy into your design workflow, you can elevate your projects and create stunning visuals effortlessly. Embrace the power of Vecteezy and unlock your creative potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default VecteezyRoot;