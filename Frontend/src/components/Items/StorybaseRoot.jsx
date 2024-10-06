import React from 'react';
import { Link } from 'react-router-dom';

const StorybaseRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-purple-300">
                <h1 className="text-3xl font-bold">Storybase</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122769/tcwthrxdwfkv6jzksb0m.png"
                    alt="Storybase"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Storybase</a></li>
                    <li><a href="#what-is">What is Storybase?</a></li>
                    <li><a href="#how-to-use">How to Use Storybase</a></li>
                    <li><a href="#features">Here Are Storybase Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Storybase</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Storybase</h3>
                    <p>
                        Storybase is a powerful storytelling platform designed to help users create, manage, and share compelling narratives. It provides tools for organizing content, collaborating with teams, and presenting stories in an engaging manner. This article explores the functionalities of Storybase, its benefits, and how to make the most of this innovative tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Storybase?</h3>
                    <p>
                        Storybase is an online platform that enables users to craft and share stories effectively. It offers a range of features, including templates, multimedia integration, and collaboration tools, making it suitable for journalists, marketers, and content creators. With Storybase, users can enhance their storytelling capabilities and reach their audience more effectively.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Storybase</h3>
                    <div>
                        <p>
                            Using Storybase is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Create an account on the Storybase website.</li>
                            <li>Choose a template or start from scratch to create your story.</li>
                            <li>Add content, images, and multimedia elements to enhance your narrative.</li>
                            <li>Share your story with your audience or collaborate with your team.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Storybase Premium Cookies</h3>
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
                                    <a href="https://storybase.com/" target="_blank" rel="noreferrer noopener">Storybase</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/2525/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Storybase</h3>
                    <div>
                        <p>
                            Storybase offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Enhanced Storytelling:</strong> The platform provides tools that help users create more engaging and structured narratives.</li>
                            <li><strong>Collaboration:</strong> Teams can work together seamlessly, making it easier to develop stories collectively.</li>
                            <li><strong>Multimedia Integration:</strong> Users can easily incorporate images, videos, and other media to enrich their stories.</li>
                            <li><strong>User-Friendly Interface:</strong> The intuitive design makes it accessible for users of all skill levels.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Storybase is an invaluable tool for anyone looking to enhance their storytelling capabilities. With its extensive features and user-friendly interface, it empowers users to create compelling narratives that resonate with their audience. By integrating Storybase into your content creation process, you can elevate your storytelling and engage your audience more effectively. Embrace the power of Storybase and unlock your storytelling potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default StorybaseRoot;