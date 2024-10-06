import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WordtuneRoot = () => {
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
                <h1 className="text-3xl font-bold">Wordtune</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122924/zlwygecyllh0gltjwe62.png"
                    alt="Wordtune"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Wordtune</a></li>
                    <li><a href="#what-is">What is Wordtune?</a></li>
                    <li><a href="#how-to-use">How to Use Wordtune</a></li>
                    <li><a href="#features">Here Are Wordtune Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Wordtune</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Wordtune</h3>
                    <p>
                        Wordtune is an innovative writing assistant designed to help users enhance their writing by providing real-time suggestions for rephrasing and improving clarity. It leverages advanced AI technology to understand context and offer alternatives that maintain the original meaning while enhancing the overall quality of the text. This article explores the functionalities of Wordtune, its benefits, and how to make the most of this powerful tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Wordtune?</h3>
                    <p>
                        Wordtune is an online writing tool that assists users in refining their text. It offers various suggestions for rephrasing sentences, improving fluency, and enhancing overall readability. Wordtune is particularly beneficial for students, professionals, and anyone looking to elevate their writing skills and produce high-quality content.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Wordtune</h3>
                    <div>
                        <p>
                            Using Wordtune is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Wordtune website and create an account.</li>
                            <li>Input the text you want to improve into the text box.</li>
                            <li>Review the suggestions provided by Wordtune.</li>
                            <li>Select the rephrasing options that best fit your writing style.</li>
                            <li>Copy the improved text for your use.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Wordtune Premium Cookies</h3>
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
                                    <a href="https://www.wordtune.com/" target="_blank" rel="noreferrer noopener">Wordtune</a>
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
                                    to={'/7199/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Wordtune</h3>
                    <div>
                        <p>
                            Wordtune offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Enhanced Writing:</strong> The tool helps users improve their writing by providing alternative phrasing and suggestions.</li>
                            <li><strong>Real-Time Suggestions:</strong> Wordtune offers instant feedback, allowing users to refine their text as they write.</li>
                            <li><strong>Multiple Options:</strong> Users can choose from various rephrasing options to suit their writing style.</li>
                            <li><strong>User-Friendly Interface:</strong> The intuitive design makes it easy for anyone to use, regardless of their writing experience.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Wordtune is an invaluable tool for anyone looking to enhance their writing skills. With its advanced features and user-friendly interface, it empowers users to create high-quality content efficiently. By integrating Wordtune into your writing process, you can improve your text and communicate your ideas more effectively. Embrace the power of Wordtune and unlock your writing potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default WordtuneRoot;