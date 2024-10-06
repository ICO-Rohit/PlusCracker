import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SiderRoot = () => {
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
                <h1 className="text-3xl font-bold">Sider</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122679/bn9qyqfqnsujgumwgcz4.png"
                    alt="Sider"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Sider</a></li>
                    <li><a href="#what-is">What is Sider?</a></li>
                    <li><a href="#how-to-use">How to Use Sider</a></li>
                    <li><a href="#features">Here Are Sider Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Sider</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Sider</h3>
                    <p>
                        Sider is an innovative platform designed to enhance collaboration and productivity among teams. It provides a suite of tools that streamline communication and project management, making it easier for teams to work together effectively. This article explores the functionalities of Sider, its benefits, and how to make the most of this essential collaboration tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Sider?</h3>
                    <p>
                        Sider is an online collaboration tool that allows teams to manage projects, communicate in real-time, and share resources seamlessly. It offers a range of features that facilitate teamwork and improve overall productivity.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Sider</h3>
                    <div>
                        <p>
                            Using Sider is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Sider website and create an account.</li>
                            <li>Create or join a team to start collaborating.</li>
                            <li>Utilize the tools provided to manage projects and communicate with team members.</li>
                            <li>Track progress and share updates through the platform.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Sider Premium Cookies</h3>
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
                                    <a href="https://sider.ai/" target="_blank" rel="noreferrer noopener">Sider</a>
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
                                    to={'/7758/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Sider</h3>
                    <div>
                        <p>
                            Sider offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Enhanced Collaboration:</strong> Facilitates real-time communication and project management among team members.</li>
                            <li><strong>Increased Productivity:</strong> Streamlines workflows and reduces time spent on administrative tasks.</li>
                            <li><strong>User-Friendly Interface:</strong> Easy to navigate, making it accessible for all users.</li>
                            <li><strong>Resource Sharing:</strong> Allows teams to share files and resources seamlessly.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Sider is an essential tool for teams looking to enhance their collaboration and productivity. With its innovative features and user-friendly interface, it empowers users to work together effectively and achieve their goals. By integrating Sider into your team's workflow, you can optimize your collaboration efforts and drive better results. Embrace the power of Sider and transform your teamwork experience effectively.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default SiderRoot;