import React from 'react';
import { Link } from 'react-router-dom';

const VidIQRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-purple-300">
                <h1 className="text-3xl font-bold">VidIQ</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122854/zxthjvpppobxxwsdh1ci.jpg"
                    alt="VidIQ"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to VidIQ</a></li>
                    <li><a href="#what-is">What is VidIQ?</a></li>
                    <li><a href="#how-to-use">How to Use VidIQ</a></li>
                    <li><a href="#features">Here Are VidIQ Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using VidIQ</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to VidIQ</h3>
                    <p>
                        VidIQ is a powerful tool designed to help YouTube creators optimize their videos and grow their channels. With a suite of features that provide insights into video performance, keyword research, and competitor analysis, VidIQ empowers users to make data-driven decisions to enhance their content strategy. This article explores the functionalities of VidIQ, its benefits, and how to make the most of this essential tool for YouTube success.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is VidIQ?</h3>
                    <p>
                        VidIQ is an online platform that offers a variety of tools for YouTube creators. It provides features such as keyword research, video analytics, and SEO suggestions, allowing users to optimize their content for better visibility and engagement. VidIQ is particularly beneficial for content creators, marketers, and businesses looking to enhance their YouTube presence and reach a wider audience.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use VidIQ</h3>
                    <div>
                        <p>
                            Using VidIQ is simple and effective. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the VidIQ website and create an account.</li>
                            <li>Install the VidIQ browser extension for easy access.</li>
                            <li>Connect your YouTube channel to VidIQ.</li>
                            <li>Utilize the tools and features to analyze your videos and optimize your content.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are VidIQ Premium Cookies</h3>
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
                                    <a href="https://vidiq.com/" target="_blank" rel="noreferrer noopener">VidIQ</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/8188/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using VidIQ</h3>
                    <div>
                        <p>
                            VidIQ offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>SEO Optimization:</strong> The tool provides valuable insights and suggestions to improve video SEO.</li>
                            <li><strong>Performance Analytics:</strong> Users can track video performance metrics to understand audience engagement.</li>
                            <li><strong>Keyword Research:</strong> VidIQ helps users discover relevant keywords to enhance video visibility.</li>
                            <li><strong>User-Friendly Interface:</strong> The intuitive design makes it easy for anyone to use, regardless of their experience level.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        VidIQ is an invaluable tool for anyone looking to enhance their YouTube channel and optimize their video content. With its comprehensive features and user-friendly interface, it empowers creators to make informed decisions and improve their online presence. By integrating VidIQ into your content strategy, you can maximize your reach and engagement on YouTube. Embrace the power of VidIQ and unlock your channel's potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default VidIQRoot;