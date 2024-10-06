import React from 'react';
import { Link } from 'react-router-dom';

const PicMonkeyRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-pink-300">
                <h1 className="text-3xl font-bold">PicMonkey</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122484/vipaurvsnj8xterwemse.png"
                    alt="PicMonkey"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to PicMonkey</a></li>
                    <li><a href="#what-is">What is PicMonkey?</a></li>
                    <li><a href="#how-to-use">How to Use PicMonkey</a></li>
                    <li><a href="#features">Here Are PicMonkey Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using PicMonkey</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to PicMonkey</h3>
                    <p>
                        PicMonkey is a versatile online photo editing and graphic design tool that allows users to create stunning visuals with ease. It is widely used by marketers, bloggers, and social media managers to enhance their images and create engaging content. This article explores the functionalities of PicMonkey, its benefits, and how to make the most of this essential design platform.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is PicMonkey?</h3>
                    <p>
                        PicMonkey is an online photo editing and design tool that offers a wide range of features for users to enhance their images and create graphics. With its user-friendly interface, PicMonkey provides tools for photo retouching, graphic design, and collage making, making it a popular choice for both beginners and experienced designers.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use PicMonkey</h3>
                    <div>
                        <p>
                            Using PicMonkey is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the PicMonkey website and create an account.</li>
                            <li>Choose a template or upload your own image.</li>
                            <li>Edit your image using the available tools and features.</li>
                            <li>Download your finished design in your preferred format.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are PicMonkey Premium Cookies</h3>
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
                                    <a href="https://www.picmonkey.com/" target="_blank" rel="noreferrer noopener">PicMonkey</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/5285/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using PicMonkey</h3>
                    <div>
                        <p>
                            PicMonkey offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>User-Friendly Interface:</strong> Easy to navigate, making it accessible for both beginners and experienced designers.</li>
                            <li><strong>Comprehensive Editing Tools:</strong> Offers a wide range of features for photo editing and graphic design.</li>
                            <li><strong>Templates and Assets:</strong> Provides access to a variety of templates and design elements.</li>
                            <li><strong>Collage Maker:</strong> Allows users to create beautiful collages effortlessly.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        PicMonkey is an essential tool for anyone looking to enhance their images and create stunning graphics. With its comprehensive features and user-friendly interface, it empowers users to produce high-quality visual content effortlessly. By integrating PicMonkey into your design workflow, you can elevate your marketing efforts and engage your audience effectively. Embrace the power of PicMonkey and enhance your visual storytelling.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default PicMonkeyRoot;