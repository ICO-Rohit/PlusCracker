import React from 'react';
import { Link } from 'react-router-dom';

const WriterZenRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-purple-300">
                <h1 className="text-3xl font-bold">WriterZen</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122938/obl0xqiyfdc1sjzemx8j.jpg"
                    alt="WriterZen"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to WriterZen</a></li>
                    <li><a href="#what-is">What is WriterZen?</a></li>
                    <li><a href="#how-to-use">How to Use WriterZen</a></li>
                    <li><a href="#features">Here Are WriterZen Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using WriterZen</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to WriterZen</h3>
                    <p>
                        WriterZen is an innovative content creation and optimization tool designed to help writers, marketers, and SEO professionals produce high-quality content efficiently. It combines keyword research, content planning, and writing assistance into one platform, making it an essential tool for anyone looking to enhance their content strategy. This article explores the functionalities of WriterZen, its benefits, and how to make the most of this essential writing tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is WriterZen?</h3>
                    <p>
                        WriterZen is an all-in-one content creation platform that provides users with tools for keyword research, content planning, and writing assistance. It helps users generate ideas, optimize their content for search engines, and improve their writing quality, making it a valuable resource for content creators and marketers.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use WriterZen</h3>
                    <div>
                        <p>
                            Using WriterZen is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the WriterZen website and create an account.</li>
                            <li>Use the keyword research tool to find relevant keywords for your content.</li>
                            <li>Plan your content using the content planner feature.</li>
                            <li>Start writing and utilize the writing assistance tools to enhance your content.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are WriterZen Premium Cookies</h3>
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
                                    <a href="https://writerzen.net/" target="_blank" rel="noreferrer noopener">WriterZen</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/9165/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using WriterZen</h3>
                    <div>
                        <p>
                            WriterZen offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Comprehensive Tools:</strong> Combines keyword research, content planning, and writing assistance in one platform.</li>
                            <li><strong>Improved Writing Quality:</strong> Provides suggestions and optimizations to enhance content quality.</li>
                            <li><strong>User-Friendly Interface:</strong> Easy to navigate, making it accessible for both beginners and experienced writers.</li>
                            <li><strong>SEO Optimization:</strong> Helps users create content that is optimized for search engines, improving visibility.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        WriterZen is an essential tool for anyone looking to enhance their content creation process and improve their writing quality. With its comprehensive features and user-friendly interface, it empowers users to make informed decisions about their content strategies. By integrating WriterZen into your writing workflow, you can produce high-quality content that resonates with your audience and ranks well in search engines. Embrace the power of WriterZen and elevate your content creation efforts.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default WriterZenRoot;