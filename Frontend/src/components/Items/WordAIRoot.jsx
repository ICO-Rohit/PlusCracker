import React from 'react';
import { Link } from 'react-router-dom';

const WordAIRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-orange-300">
                <h1 className="text-3xl font-bold">Word AI</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122897/pjjpmj3gemgqilr8y136.png"
                    alt="Word AI"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Word AI</a></li>
                    <li><a href="#what-is">What is Word AI?</a></li>
                    <li><a href="#how-to-use">How to Use Word AI</a></li>
                    <li><a href="#features">Here Are Word AI Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Word AI</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Word AI</h3>
                    <p>
                        Word AI is an advanced content generation tool that utilizes artificial intelligence to create high-quality written content. Designed for marketers, bloggers, and businesses, Word AI helps users produce unique and engaging text quickly and efficiently. This article explores the functionalities of Word AI, its benefits, and how to make the most of this innovative writing assistant.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Word AI?</h3>
                    <p>
                        Word AI is a cutting-edge writing tool that leverages AI technology to generate human-like text. It can rewrite existing content, create new articles, and assist with various writing tasks. Word AI is particularly beneficial for content creators looking to save time and enhance their writing process.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Word AI</h3>
                    <div>
                        <p>
                            Using Word AI is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Word AI website and create an account.</li>
                            <li>Choose the type of content you want to generate or rewrite.</li>
                            <li>Input your text or provide a prompt for the AI to work with.</li>
                            <li>Review the generated content and make any necessary edits.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Word AI Premium Cookies</h3>
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
                                    <a href="https://wordai.com/" target="_blank" rel="noreferrer noopener">Word AI</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/4805/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Word AI</h3>
                    <div>
                        <p>
                            Word AI offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Time-Saving:</strong> Quickly generate content without spending hours writing.</li>
                            <li><strong>Unique Content:</strong> Produce original text that passes plagiarism checks.</li>
                            <li><strong>Versatile Applications:</strong> Suitable for blogs, marketing materials, and more.</li>
                            <li><strong>User-Friendly Interface:</strong> Easy to navigate and use, even for beginners.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Word AI is a powerful tool for anyone looking to enhance their writing process and generate high-quality content efficiently. With its advanced AI capabilities and user-friendly interface, it empowers users to create unique text quickly and effectively. By integrating Word AI into your content creation strategy, you can save time and improve the quality of your writing. Embrace the power of Word AI and elevate your content creation efforts.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default WordAIRoot;