import React from 'react';
import { Link } from 'react-router-dom';

const SemrushRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-red-300">
                <h1 className="text-3xl font-bold">Semrush</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122627/bahncc7vdaz8b4nyhta6.png"
                    alt="Semrush"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Semrush</a></li>
                    <li><a href="#what-is">What is Semrush?</a></li>
                    <li><a href="#how-to-use">How to Use Semrush</a></li>
                    <li><a href="#features">Here Are Semrush Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Semrush</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Semrush</h3>
                    <p>
                        Semrush is a comprehensive digital marketing tool that provides a suite of features for SEO, PPC, content marketing, and social media management. It is widely used by marketers, SEO professionals, and businesses to enhance their online presence and improve their marketing strategies. This article explores the functionalities of Semrush, its benefits, and how to make the most of this essential marketing tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Semrush?</h3>
                    <p>
                        Semrush is an all-in-one marketing toolkit that offers a variety of tools for keyword research, site audits, competitor analysis, and more. It helps users optimize their online marketing efforts and gain insights into their competitors' strategies.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Semrush</h3>
                    <div>
                        <p>
                            Using Semrush is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Semrush website and create an account.</li>
                            <li>Choose the tool you want to use (SEO, PPC, etc.).</li>
                            <li>Enter your domain or a competitor's domain to analyze.</li>
                            <li>Utilize the insights and recommendations provided by Semrush to improve your marketing strategies.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Semrush Premium Cookies</h3>
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
                                    <a href="https://www.semrush.com/" target="_blank" rel="noreferrer noopener">Semrush</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/2947/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Semrush</h3>
                    <div>
                        <p>
                            Semrush offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Comprehensive Tools:</strong> Provides a wide range of tools for various aspects of digital marketing.</li>
                            <li><strong>Competitive Analysis:</strong> Allows users to analyze competitors and gain insights into their strategies.</li>
                            <li><strong>User-Friendly Interface:</strong> Designed to be intuitive and easy to navigate.</li>
                            <li><strong>Data-Driven Insights:</strong> Offers valuable data and recommendations to improve marketing efforts.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Semrush is an essential tool for marketers and businesses looking to enhance their online presence and improve their marketing strategies. With its innovative features and user-friendly interface, it empowers users to optimize their digital marketing efforts effectively. By integrating Semrush into your marketing workflow, you can gain valuable insights and achieve better results. Embrace the power of Semrush and transform your marketing approach effectively.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default SemrushRoot;