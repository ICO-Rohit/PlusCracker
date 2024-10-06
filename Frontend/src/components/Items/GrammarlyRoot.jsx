import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const GrammarlyRoot = () => {
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
                <h1 className="text-3xl font-bold">Grammarly</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122170/unbz0sao9h01txgnvvvc.png"
                    alt="no image"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Grammarly</a></li>
                    <li><a href="#what-is">What is Grammarly?</a></li>
                    <li><a href="#how-to-use">How to Use Grammarly</a></li>
                    <li><a href="#features">Here Are Grammarly Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Grammarly</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Grammarly</h3>
                    <p>
                        Grammarly is an advanced writing assistant that helps users enhance their writing skills by providing real-time feedback on grammar, punctuation, style, and tone. With its intuitive interface and powerful algorithms, Grammarly has become an essential tool for students, professionals, and anyone looking to improve their writing. This article explores the functionalities of Grammarly, its benefits, and how to make the most of this innovative tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Grammarly?</h3>
                    <p>
                        Grammarly is a digital writing assistant that analyzes text for grammatical errors, spelling mistakes, and stylistic issues. It offers suggestions to improve clarity, engagement, and delivery, making it a valuable resource for anyone who writes. Whether you are drafting an email, writing an essay, or creating content for social media, Grammarly helps ensure your writing is polished and professional.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Grammarly</h3>
                    <div>
                        <p>
                            Using Grammarly is straightforward. First, sign up for an account on the Grammarly website or download the browser extension. Once installed, Grammarly will automatically check your writing in real-time as you type. You can also upload documents directly to the Grammarly editor for comprehensive feedback. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Create an account on Grammarly's website.</li>
                            <li>Install the browser extension or desktop app.</li>
                            <li>Start writing in any text field, and Grammarly will provide suggestions.</li>
                            <li>Review and apply the suggestions to enhance your writing.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Envato Elements Premium Cookies</h3>
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
                                    <a href="https://www.grammarly.com/" target="_blank" rel="noreferrer noopener">Grammarly</a>
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
                                    to={'/9533/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Grammarly</h3>
                    <div>
                        <p>
                            Grammarly offers numerous benefits that enhance the writing experience:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Improved Writing Quality:</strong> By catching errors and suggesting improvements, Grammarly helps users produce high-quality writing.</li>
                            <li><strong>Time-Saving:</strong> The real-time feedback feature allows users to correct mistakes as they write, saving time on revisions.</li>
                            <li><strong>Learning Tool:</strong> Grammarly serves as an educational resource, helping users learn from their mistakes and improve their writing skills over time.</li>
                            <li><strong>Accessibility:</strong> Available as a browser extension, desktop app, and mobile keyboard, Grammarly is accessible across various platforms.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Grammarly is an invaluable tool for anyone looking to enhance their writing skills. With its comprehensive features and user-friendly interface, it empowers users to write with confidence and clarity. By integrating Grammarly into your writing routine, you can ensure that your work is polished, professional, and free of errors. Embrace the power of Grammarly and take your writing to the next level.
                    </p>
                </section>
            </div >
        </div>
    );
}

export default GrammarlyRoot
