import React from 'react';
import { Link } from 'react-router-dom';

const UnbounceRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-green-300">
                <h1 className="text-3xl font-bold">Unbounce</h1>
                <img
                    src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark-new.svg?v=1"
                    alt="Unbounce"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Unbounce</a></li>
                    <li><a href="#what-is">What is Unbounce?</a></li>
                    <li><a href="#how-to-use">How to Use Unbounce</a></li>
                    <li><a href="#features">Here Are Unbounce Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Unbounce</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Unbounce</h3>
                    <p>
                        Unbounce is a powerful landing page builder designed to help marketers create high-converting landing pages without the need for coding. It is widely used by businesses to optimize their online marketing campaigns and improve conversion rates. This article explores the functionalities of Unbounce, its benefits, and how to make the most of this essential marketing tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Unbounce?</h3>
                    <p>
                        Unbounce is an online platform that allows users to create and publish landing pages quickly and easily. It offers a range of templates and customization options, enabling users to design pages that align with their marketing goals.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Unbounce</h3>
                    <div>
                        <p>
                            Using Unbounce is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Unbounce website and create an account.</li>
                            <li>Select a template or start from scratch to create your landing page.</li>
                            <li>Customize the page using the drag-and-drop editor.</li>
                            <li>Publish your landing page and track its performance using analytics.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Unbounce Premium Cookies</h3>
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
                                    <a href="https://unbounce.com/" target="_blank" rel="noreferrer noopener">Unbounce</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/4619/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Unbounce</h3>
                    <div>
                        <p>
                            Unbounce offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Easy to Use:</strong> The drag-and-drop editor makes it simple for anyone to create landing pages.</li>
                            <li><strong>High Conversion Rates:</strong> Designed to optimize landing pages for better conversion rates.</li>
                            <li><strong>Customizable Templates:</strong> Offers a wide range of templates that can be tailored to fit your brand.</li>
                            <li><strong>Analytics and A/B Testing:</strong> Provides tools to track performance and test different versions of your landing pages.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Unbounce is an essential tool for marketers looking to enhance their online campaigns and improve conversion rates. With its user-friendly interface and powerful features, it empowers users to create high-quality landing pages that drive results. By integrating Unbounce into your marketing strategy, you can optimize your campaigns and achieve better outcomes. Embrace the power of Unbounce and elevate your marketing efforts effectively.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default UnbounceRoot;