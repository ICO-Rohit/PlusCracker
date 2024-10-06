import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SkillshareRoot = () => {
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
                <h1 className="text-3xl font-bold">Skillshare</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122715/wgnkue7unot4d3b6vqpe.jpg"
                    alt="Skillshare"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Skillshare</a></li>
                    <li><a href="#what-is">What is Skillshare?</a></li>
                    <li><a href="#how-to-use">How to Use Skillshare</a></li>
                    <li><a href="#features">Here Are Skillshare Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Skillshare</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Skillshare</h3>
                    <p>
                        Skillshare is an online learning community that offers a wide range of classes in various subjects, including art, design, business, technology, and more. Designed for creative individuals and lifelong learners, Skillshare provides users with the opportunity to learn new skills and enhance their knowledge through engaging video lessons. This article explores the functionalities of Skillshare, its benefits, and how to make the most of this valuable learning platform.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Skillshare?</h3>
                    <p>
                        Skillshare is an online platform that hosts thousands of classes taught by industry professionals and experts. Users can access a variety of courses, participate in projects, and connect with a community of learners. Skillshare is particularly beneficial for those looking to develop creative skills or explore new hobbies.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Skillshare</h3>
                    <div>
                        <p>
                            Using Skillshare is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Skillshare website and create an account.</li>
                            <li>Browse or search for classes that interest you.</li>
                            <li>Select a class and start watching the video lessons.</li>
                            <li>Engage with the community by participating in discussions and projects.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Skillshare Premium Cookies</h3>
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
                                    <a href="https://www.skillshare.com/" target="_blank" rel="noreferrer noopener">Skillshare</a>
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
                                    to={'/6234/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Skillshare</h3>
                    <div>
                        <p>
                            Skillshare offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Diverse Course Offerings:</strong> Access to a wide range of classes across various subjects.</li>
                            <li><strong>Expert Instructors:</strong> Learn from experienced professionals and industry leaders.</li>
                            <li><strong>Community Engagement:</strong> Connect with other learners and share your projects.</li>
                            <li><strong>Flexible Learning:</strong> Learn at your own pace, anytime and anywhere.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Skillshare is an invaluable resource for anyone looking to learn new skills and explore creative interests. With its extensive library of classes and user-friendly interface, it empowers users to learn at their own pace and connect with a community of learners. By integrating Skillshare into your personal development strategy, you can unlock new opportunities and enhance your creative abilities. Embrace the power of Skillshare and invest in your lifelong learning journey.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default SkillshareRoot;