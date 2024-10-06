import React from 'react';
import { Link } from 'react-router-dom';

const SpamZillaRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-red-300">
                <h1 className="text-3xl font-bold">SpamZilla</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122757/jdaunv5dmbl2zyauoqdu.png"
                    alt="SpamZilla"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to SpamZilla</a></li>
                    <li><a href="#what-is">What is SpamZilla?</a></li>
                    <li><a href="#how-to-use">How to Use SpamZilla</a></li>
                    <li><a href="#features">Here Are SpamZilla Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using SpamZilla</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to SpamZilla</h3>
                    <p>
                        SpamZilla is a powerful tool designed to help users identify and analyze spammy backlinks and domains. It is particularly useful for SEO professionals and website owners who want to maintain a clean backlink profile and improve their website's search engine rankings. This article explores the functionalities of SpamZilla, its benefits, and how to make the most of this essential SEO tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is SpamZilla?</h3>
                    <p>
                        SpamZilla is an online platform that provides users with insights into potentially harmful backlinks and domains. It helps users analyze their backlink profiles, identify spammy links, and take necessary actions to disavow or remove them. This tool is crucial for maintaining a healthy SEO strategy and protecting your website from penalties.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use SpamZilla</h3>
                    <div>
                        <p>
                            Using SpamZilla is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the SpamZilla website and create an account.</li>
                            <li>Enter your website URL to analyze your backlink profile.</li>
                            <li>Review the generated report for spammy links and domains.</li>
                            <li>Take action to disavow or remove harmful backlinks as needed.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are SpamZilla Premium Cookies</h3>
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
                                    <a href="https://spamzilla.io/" target="_blank" rel="noreferrer noopener">SpamZilla</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/1628/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using SpamZilla</h3>
                    <div>
                        <p>
                            SpamZilla offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Backlink Analysis:</strong> Provides detailed insights into your backlink profile.</li>
                            <li><strong>Spam Detection:</strong> Identifies potentially harmful backlinks that could affect your SEO.</li>
                            <li><strong>User-Friendly Interface:</strong> Easy to navigate, making it accessible for both beginners and experienced users.</li>
                            <li><strong>Protect Your Rankings:</strong> Helps maintain a clean backlink profile to avoid penalties from search engines.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        SpamZilla is an essential tool for anyone looking to protect their website from harmful backlinks and maintain a healthy SEO strategy. With its comprehensive analysis and user-friendly interface, it empowers users to make informed decisions about their backlink profiles. By integrating SpamZilla into your SEO efforts, you can enhance your website's visibility and safeguard your rankings. Embrace the power of SpamZilla and ensure your online presence remains strong.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default SpamZillaRoot;