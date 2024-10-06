import React from 'react';
import { Link } from 'react-router-dom';

const SnapiedRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-purple-300">
                <h1 className="text-3xl font-bold">Snapied</h1>
                <img
                    src="https://www.snapied.com/assets/images/snapied-logo.svg"
                    alt="Snapied"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Snapied</a></li>
                    <li><a href="#what-is">What is Snapied?</a></li>
                    <li><a href="#how-to-use">How to Use Snapied</a></li>
                    <li><a href="#features">Here Are Snapied Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Snapied</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Snapied</h3>
                    <p>
                        Snapied is a cutting-edge photo editing tool designed to help users enhance their images effortlessly. It is widely used by photographers, marketers, and social media enthusiasts to create stunning visuals and improve their online presence. This article explores the functionalities of Snapied, its benefits, and how to make the most of this essential photo editing tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Snapied?</h3>
                    <p>
                        Snapied is an online platform that provides users with a suite of photo editing tools powered by artificial intelligence. It allows users to enhance their images, apply filters, and create professional-quality graphics with ease.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Snapied</h3>
                    <div>
                        <p>
                            Using Snapied is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Snapied website and create an account.</li>
                            <li>Upload the image you want to edit.</li>
                            <li>Utilize the editing tools to enhance your photo.</li>
                            <li>Download or share your edited image directly from the platform.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Snapied Premium Cookies</h3>
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
                                    <a href="https://snapied.com/" target="_blank" rel="noreferrer noopener">Snapied</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/5731/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Snapied</h3>
                    <div>
                        <p>
                            Snapied offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>AI-Powered Editing:</strong> Utilizes artificial intelligence to enhance images automatically.</li>
                            <li><strong>User-Friendly Interface:</strong> Simple and intuitive design makes it accessible for all users.</li>
                            <li><strong>High-Quality Output:</strong> Produces professional-quality images suitable for various applications.</li>
                            <li><strong>Time Efficiency:</strong> Streamlines the editing process, saving users time and effort.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Snapied is an essential tool for anyone looking to enhance their photo editing capabilities and create stunning visuals. With its innovative features and user-friendly interface, it empowers users to produce high-quality images effortlessly. By integrating Snapied into your photo editing workflow, you can elevate your creative projects and achieve better results. Embrace the power of Snapied and transform your images effectively.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default SnapiedRoot;