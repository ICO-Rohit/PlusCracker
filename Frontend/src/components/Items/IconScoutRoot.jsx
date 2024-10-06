import React from 'react';
import { Link } from 'react-router-dom';

const IconScoutRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-red-300">
                <h1 className="text-3xl font-bold">IconScout</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122231/cdlpgum3kdvw2m5rfq3j.png"
                    alt="IconScout"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to IconScout</a></li>
                    <li><a href="#what-is">What is IconScout?</a></li>
                    <li><a href="#how-to-use">How to Use IconScout</a></li>
                    <li><a href="#features">Here Are IconScout Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using IconScout</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to IconScout</h3>
                    <p>
                        IconScout is a leading platform that provides a vast collection of high-quality icons, illustrations, and stock photos. It is widely used by designers, developers, and marketers looking for visual assets to enhance their projects. This article explores the functionalities of IconScout, its benefits, and how to make the most of this essential design resource.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is IconScout?</h3>
                    <p>
                        IconScout is an online marketplace that offers a wide range of design assets, including icons, illustrations, and stock photos. Users can browse through thousands of resources, download them for free or purchase premium content, making it a versatile tool for anyone in need of high-quality visual elements.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use IconScout</h3>
                    <div>
                        <p>
                            Using IconScout is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the IconScout website.</li>
                            <li>Use the search bar to find specific icons or illustrations or browse through categories.</li>
                            <li>Select the desired asset and choose between free or premium options.</li>
                            <li>Download the asset in your preferred format.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are IconScout Premium Cookies</h3>
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
                                    <a href="https://iconscout.com/" target="_blank" rel="noreferrer noopener">IconScout</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/7752/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using IconScout</h3>
                    <div>
                        <p>
                            IconScout offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Extensive Library:</strong> Access to a vast collection of icons, illustrations, and stock photos.</li>
                            <li><strong>Free and Premium Options:</strong> Offers both free and premium content to suit different budgets.</li>
                            <li><strong>User-Friendly Interface:</strong> Easy to navigate, making it accessible for both beginners and experienced designers.</li>
                            <li><strong>High-Quality Assets:</strong> Provides high-resolution graphics suitable for various projects.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        IconScout is an essential resource for anyone looking to enhance their design projects with high-quality visual assets. With its extensive library and user-friendly interface, it empowers users to find the perfect icons and illustrations for their needs. By integrating IconScout into your design workflow, you can elevate your projects and create stunning visuals effortlessly. Embrace the power of IconScout and unlock your creative potential.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default IconScoutRoot;