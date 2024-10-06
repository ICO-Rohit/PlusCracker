import React from 'react';
import { Link } from 'react-router-dom';

const OffeoRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-blue-300">
                <h1 className="text-3xl font-bold">Offeo</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122441/o9nu0pthngljtwd5sasi.png"
                    alt="Offeo"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Offeo</a></li>
                    <li><a href="#what-is">What is Offeo?</a></li>
                    <li><a href="#how-to-use">How to Use Offeo</a></li>
                    <li><a href="#features">Here Are Offeo Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Offeo</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Offeo</h3>
                    <p>
                        Offeo is a powerful online design tool that allows users to create stunning animated videos and graphics effortlessly. It is widely used by marketers, content creators, and businesses looking to enhance their visual content. This article explores the functionalities of Offeo, its benefits, and how to make the most of this essential design platform.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Offeo?</h3>
                    <p>
                        Offeo is an online design platform that specializes in creating animated videos and graphics. It offers a wide range of templates, animations, and design elements that users can customize to suit their needs. This tool is particularly useful for anyone looking to create engaging visual content without the need for extensive design skills.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Offeo</h3>
                    <div>
                        <p>
                            Using Offeo is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Offeo website and create an account.</li>
                            <li>Choose a template or start from scratch.</li>
                            <li>Customize your design by adding text, images, and animations.</li>
                            <li>Export your finished video or graphic in your preferred format.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Offeo Premium Cookies</h3>
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
                                    <a href="https://offeo.com/" target="_blank" rel="noreferrer noopener">Offeo</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/6973/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Offeo</h3>
                    <div>
                        <p>
                            Offeo offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Easy to Use:</strong> User-friendly interface that allows anyone to create stunning visuals.</li>
                            <li><strong>Wide Range of Templates:</strong> Access to a variety of templates for different types of content.</li>
                            <li><strong>Animation Features:</strong> Ability to add animations to enhance visual appeal.</li>
                            <li><strong>Export Options:</strong> Multiple export formats to suit different platforms and needs.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Offeo is an essential tool for anyone looking to create engaging animated videos and graphics. With its comprehensive features and user-friendly interface, it empowers users to produce high-quality visual content effortlessly. By integrating Offeo into your content creation process, you can elevate your marketing efforts and captivate your audience. Embrace the power of Offeo and enhance your visual storytelling.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default OffeoRoot;