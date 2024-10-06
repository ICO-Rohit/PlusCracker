import React from 'react';
import { Link } from 'react-router-dom';

const EnvatoElementsRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-green-300">
                <h1 className="text-3xl font-bold">Envato Elements</h1>
                <img
                    src="https://www.envato.com/static/media/elements.670875e1.png"
                    alt="Envato Elements"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to Envato Elements</a></li>
                    <li><a href="#what-is">What is Envato Elements?</a></li>
                    <li><a href="#how-to-use">How to Use Envato Elements</a></li>
                    <li><a href="#features">Here Are Envato Elements Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using Envato Elements</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to Envato Elements</h3>
                    <p>
                        Envato Elements is a subscription-based service that provides access to a vast library of digital assets, including graphics, templates, stock photos, videos, and more. It is designed for creatives, designers, and marketers who need high-quality resources to enhance their projects. This article explores the functionalities of Envato Elements, its benefits, and how to make the most of this powerful tool.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is Envato Elements?</h3>
                    <p>
                        Envato Elements is an online platform that offers unlimited downloads of creative assets for a monthly subscription fee. Users can access thousands of templates, graphics, and stock media to use in their projects without worrying about licensing issues. Whether you are creating a website, designing a presentation, or producing a video, Envato Elements provides the resources you need to bring your ideas to life.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use Envato Elements</h3>
                    <div>
                        <p>
                            Using Envato Elements is simple and user-friendly. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Create an account on the Envato Elements website.</li>
                            <li>Choose a subscription plan that suits your needs.</li>
                            <li>Browse the extensive library of assets and select what you need.</li>
                            <li>Download the assets and use them in your projects.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are Envato Elements Premium Cookies</h3>
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
                                    <a href="https://elements.envato.com/" target="_blank" rel="noreferrer noopener">Envato Elements</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/7882/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using Envato Elements</h3>
                    <div>
                        <p>
                            Envato Elements offers numerous advantages for creatives:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Cost-Effective:</strong> With a single subscription, users can access a vast library of assets, saving money compared to purchasing items individually.</li>
                            <li><strong>Time-Saving:</strong> The extensive collection allows users to find the right resources quickly, streamlining the creative process.</li>
                            <li><strong>High-Quality Assets:</strong> All resources are created by professionals, ensuring high quality and relevance for various projects.</li>
                            <li><strong>Flexibility:</strong> The subscription model allows users to download and use assets as needed, providing flexibility for different projects.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Envato Elements is an invaluable resource for anyone involved in creative work. With its extensive library of high-quality assets and user-friendly interface, it empowers users to enhance their projects with ease. By integrating Envato Elements into your workflow, you can save time, reduce costs, and elevate the quality of your work. Embrace the power of Envato Elements and unlock your creative potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default EnvatoElementsRoot;