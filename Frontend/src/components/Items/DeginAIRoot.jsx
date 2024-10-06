import React from 'react';
import { Link } from 'react-router-dom';

const DeginAIRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-red-300">
                <h1 className="text-3xl font-bold">Degin AI</h1>
                <img
                    src="https://assets.designs.ai/images/dsai-logo/default.webp"
                    alt="Degin AI"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Degin AI</a></li>
                    <li><a href="#what-is">What is Degin AI?</a></li>
                    <li><a href="#how-to-use">How to Use Degin AI</a></li>
                    <li><a href="#features">Here Are Degin AI Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Degin AI</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Degin AI</h3>
                    <p>
                        Degin AI is an innovative design tool that leverages artificial intelligence to assist users in creating stunning visuals and graphics. It is widely used by designers, marketers, and content creators to streamline their design processes and enhance creativity. This article explores the functionalities of Degin AI, its benefits, and how to make the most of this essential design tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Degin AI?</h3>
                    <p>
                        Degin AI is an online platform that utilizes AI technology to help users generate design ideas, create graphics, and optimize their visual content. It offers a range of features that simplify the design process and enhance the quality of the output.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Degin AI</h3>
                    <div>
                        <p>
                            Using Degin AI is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Degin AI website and create an account.</li>
                            <li>Select the type of design you want to create.</li>
                            <li>Utilize the AI tools to generate design ideas and customize your graphics.</li>
                            <li>Download or share your completed designs directly from the platform.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Degin AI Premium Cookies</h3>
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
                                    <a href="https://designs.ai/" target="_blank" rel="noreferrer noopener">Degin AI</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/9340/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Degin AI</h3>
                    <div>
                        <p>
                            Degin AI offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>AI-Powered Design:</strong> Leverages artificial intelligence to generate creative design ideas.</li>
                            <li><strong>Time Efficiency:</strong> Streamlines the design process, saving users time and effort.</li>
                            <li><strong>User-Friendly Interface:</strong> Easy to navigate, making it accessible for both beginners and experienced designers.</li>
                            <li><strong>High-Quality Output:</strong> Produces professional-quality graphics suitable for various applications.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Degin AI is an essential tool for anyone looking to enhance their design capabilities and create stunning visuals. With its innovative features and user-friendly interface, it empowers users to produce high-quality graphics effortlessly. By integrating Degin AI into your design workflow, you can elevate your creative projects and achieve better results. Embrace the power of Degin AI and transform your design process effectively.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default DeginAIRoot;