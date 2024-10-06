import React from 'react';
import { Link } from 'react-router-dom';

const LinguixProRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-blue-300">
                <h1 className="text-3xl font-bold">Linguix Pro</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122362/rnus757rnvwvg9eegmjl.png"
                    alt="Linguix Pro"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Linguix Pro</a></li>
                    <li><a href="#what-is">What is Linguix Pro?</a></li>
                    <li><a href="#how-to-use">How to Use Linguix Pro</a></li>
                    <li><a href="#features">Here Are Linguix Pro Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Linguix Pro</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Linguix Pro</h3>
                    <p>
                        Linguix Pro is an advanced writing assistant designed to help users improve their writing skills and enhance the quality of their content. With a range of features that provide real-time grammar and style suggestions, Linguix Pro is an essential tool for writers, students, and professionals looking to communicate effectively. This article explores the functionalities of Linguix Pro, its benefits, and how to make the most of this powerful writing tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Linguix Pro?</h3>
                    <p>
                        Linguix Pro is an online writing tool that offers users a comprehensive suite of features to enhance their writing. It provides grammar checking, style suggestions, and vocabulary enhancements, allowing users to produce high-quality content. Linguix Pro is particularly beneficial for anyone looking to improve their writing skills, including students, professionals, and content creators.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Linguix Pro</h3>
                    <div>
                        <p>
                            Using Linguix Pro is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the Linguix Pro website and create an account.</li>
                            <li>Install the Linguix browser extension for easy access.</li>
                            <li>Start writing or paste your text into the Linguix editor.</li>
                            <li>Review the suggestions and make necessary adjustments to your content.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Linguix Pro Premium Cookies</h3>
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
                                    <a href="https://linguix.com/" target="_blank" rel="noreferrer noopener">Linguix Pro</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/1210/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Linguix Pro</h3>
                    <div>
                        <p>
                            Linguix Pro offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Real-Time Suggestions:</strong> The tool provides instant feedback on grammar and style, helping users improve their writing as they type.</li>
                            <li><strong>Enhanced Vocabulary:</strong> Linguix Pro suggests synonyms and alternative phrases to enrich the user's writing.</li>
                            <li><strong>Plagiarism Checker:</strong> Users can ensure their content is original with the built-in plagiarism detection feature.</li>
                            <li><strong>User-Friendly Interface:</strong> The intuitive design makes it easy for anyone to use, regardless of their writing experience.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Linguix Pro is an invaluable tool for anyone looking to enhance their writing skills and produce high-quality content. With its advanced features and user-friendly interface, it empowers users to communicate effectively and confidently. By integrating Linguix Pro into your writing process, you can improve your text and express your ideas more clearly. Embrace the power of Linguix Pro and unlock your writing potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default LinguixProRoot;