import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChatGPTRoot = () => {
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
            <div className="p-6 w-8/12 bg-yellow-300">
                <h1 className="text-3xl font-bold">ChatGPT</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728121986/xvs3cjpf5j5n2v2fy6pw.jpg"
                    alt="ChatGPT"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to ChatGPT</a></li>
                    <li><a href="#what-is">What is ChatGPT?</a></li>
                    <li><a href="#how-to-use">How to Use ChatGPT</a></li>
                    <li><a href="#features">Here Are ChatGPT Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using ChatGPT</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to ChatGPT</h3>
                    <p>
                        ChatGPT is an advanced conversational AI model developed by OpenAI, designed to engage in human-like dialogue and provide informative responses. With its ability to understand and generate natural language, ChatGPT serves as a powerful tool for various applications, including customer support, content creation, and personal assistance. This article explores the functionalities of ChatGPT, its benefits, and how to make the most of this innovative AI technology.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is ChatGPT?</h3>
                    <p>
                        ChatGPT is a state-of-the-art language model that utilizes deep learning techniques to generate human-like text based on the input it receives. It is capable of understanding context, answering questions, and engaging in conversations on a wide range of topics. ChatGPT is particularly beneficial for businesses and individuals looking to automate communication and enhance user interaction.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use ChatGPT</h3>
                    <div>
                        <p>
                            Using ChatGPT is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the ChatGPT website or access it through an integrated application.</li>
                            <li>Sign up for an account if required.</li>
                            <li>Type your question or prompt in the chat interface.</li>
                            <li>Review the AI-generated response and continue the conversation as needed.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are ChatGPT Premium Cookies</h3>
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
                                    <a href="https://chatgpt.com/" target="_blank" rel="noreferrer noopener">ChatGPT</a>
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
                                    to={'/5311/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Claim Cookies
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using ChatGPT</h3>
                    <div>
                        <p>
                            ChatGPT offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>24/7 Availability:</strong> ChatGPT can provide assistance and information at any time, making it a reliable resource.</li>
                            <li><strong>Scalability:</strong> The AI can handle multiple conversations simultaneously, making it ideal for businesses.</li>
                            <li><strong>Cost-Effective:</strong> Automating responses with ChatGPT can reduce operational costs for customer support.</li>
                            <li><strong>Continuous Learning:</strong> ChatGPT improves over time with more interactions, enhancing its accuracy and relevance.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        ChatGPT is a groundbreaking tool that revolutionizes the way we interact with technology. With its advanced capabilities and user-friendly interface, it empowers users to engage in meaningful conversations and access information effortlessly. By integrating ChatGPT into your communication strategy, you can enhance user experience and streamline interactions. Embrace the power of ChatGPT and unlock new possibilities in conversational AI.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default ChatGPTRoot;