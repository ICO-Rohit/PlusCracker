import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QuillBotRoot = () => {
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
            <div className="p-6 w-8/12 bg-purple-300">
                <h1 className="text-3xl font-bold">QuillBot</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122551/jpkcwzh3cra5ajnl0vnr.jpg"
                    alt="QuillBot"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to QuillBot</a></li>
                    <li><a href="#what-is">What is QuillBot?</a></li>
                    <li><a href="#how-to-use">How to Use QuillBot</a></li>
                    <li><a href="#features">Here Are QuillBot Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using QuillBot</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to QuillBot</h3>
                    <p>
                        QuillBot is an advanced paraphrasing tool designed to help users improve their writing by rephrasing sentences and enhancing clarity. It utilizes artificial intelligence to understand context and provide suggestions that maintain the original meaning while improving the overall quality of the text. This article explores the functionalities of QuillBot, its benefits, and how to make the most of this innovative tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is QuillBot?</h3>
                    <p>
                        QuillBot is an online writing assistant that helps users paraphrase and refine their text. It offers various modes for rephrasing, allowing users to choose the level of creativity and formality they desire. QuillBot is particularly useful for students, professionals, and anyone looking to enhance their writing skills and produce high-quality content.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use QuillBot</h3>
                    <div>
                        <p>
                            Using QuillBot is simple and effective. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the QuillBot website and create an account.</li>
                            <li>Input the text you want to paraphrase into the text box.</li>
                            <li>Select the desired mode for rephrasing (e.g., Standard, Fluency, Creative).</li>
                            <li>Review the suggestions and make any necessary adjustments.</li>
                            <li>Copy the rephrased text for your use.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are QuillBot Premium Cookies</h3>
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
                                    <a href="https://quillbot.com/" target="_blank" rel="noreferrer noopener">QuillBot</a>
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
                                    to={'/8556/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using QuillBot</h3>
                    <div>
                        <p>
                            QuillBot offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Improved Writing:</strong> The tool helps users enhance their writing by providing alternative phrasing and suggestions.</li>
                            <li><strong>Time-Saving:</strong> QuillBot allows users to quickly rephrase text, saving time in the writing process.</li>
                            <li><strong>Multiple Modes:</strong> Users can choose from various modes to suit their writing style and needs.</li>
                            <li><strong>User-Friendly Interface:</strong> The intuitive design makes it easy for anyone to use, regardless of their writing experience.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        QuillBot is an invaluable tool for anyone looking to improve their writing skills. With its advanced features and user-friendly interface, it empowers users to create high-quality content efficiently. By integrating QuillBot into your writing process, you can enhance your text and communicate your ideas more effectively. Embrace the power of QuillBot and unlock your writing potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default QuillBotRoot;