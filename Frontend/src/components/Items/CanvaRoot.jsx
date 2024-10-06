import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CanvaRoot = () => {
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
            <div className="p-6 w-8/12 bg-blue-300">
                <h1 className="text-3xl font-bold">Canva</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728121957/pum1m0fhduceyzskmeqk.jpg"
                    alt="Canva"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Canva</a></li>
                    <li><a href="#what-is">What is Canva?</a></li>
                    <li><a href="#how-to-use">How to Use Canva</a></li>
                    <li><a href="#features">Here Are Canva Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Canva</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Canva</h3>
                    <p>
                        Canva is a graphic design platform that allows users to create a wide range of visual content, including presentations, social media graphics, posters, and more. With its user-friendly interface and extensive library of templates and design elements, Canva has become a go-to tool for both professionals and amateurs looking to enhance their design skills. This article explores the functionalities of Canva, its benefits, and how to make the most of this innovative tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Canva?</h3>
                    <p>
                        Canva is an online design tool that simplifies the process of creating stunning graphics. It offers a drag-and-drop interface, making it accessible for users of all skill levels. Canva provides a vast library of templates, images, icons, and fonts, allowing users to customize their designs easily. Whether you are designing for personal use or professional projects, Canva provides the resources you need to create visually appealing content.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Canva</h3>
                    <div>
                        <p>
                            Using Canva is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Create an account on the Canva website.</li>
                            <li>Choose a design type or template that suits your needs.</li>
                            <li>Customize your design using the drag-and-drop editor.</li>
                            <li>Download or share your finished design directly from Canva.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Canva Premium Cookies</h3>
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
                                    <a href="https://www.canva.com/en_in/" target="_blank" rel="noreferrer noopener">Canva</a>
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
                                    to={'/5809/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Canva</h3>
                    <div>
                        <p>
                            Canva offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>User-Friendly:</strong> The intuitive interface makes it easy for anyone to create stunning designs without prior experience.</li>
                            <li><strong>Extensive Library:</strong> Access to a vast collection of templates, images, and design elements saves time and enhances creativity.</li>
                            <li><strong>Collaboration:</strong> Canva allows users to collaborate on designs in real-time, making it ideal for teams.</li>
                            <li><strong>Accessibility:</strong> Available on both web and mobile platforms, Canva can be used anywhere, anytime.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Canva is an invaluable tool for anyone looking to create high-quality visual content. With its extensive features and user-friendly interface, it empowers users to design with confidence and ease. By integrating Canva into your creative process, you can enhance your projects and bring your ideas to life. Embrace the power of Canva and unlock your design potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default CanvaRoot;