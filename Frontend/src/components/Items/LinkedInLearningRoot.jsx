import React from 'react';
import { Link } from 'react-router-dom';

const LinkedInLearningRoot = () => {
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-8/12 bg-green-300">
                <h1 className="text-3xl font-bold">LinkedIn Learning</h1>
                <img
                    src="https://res.cloudinary.com/duhwzzk0s/image/upload/v1728122384/xja43gibcm7ruina4cvj.jpg"
                    alt="LinkedIn Learning"
                    className="rounded-lg my-4 w-1/2"
                />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#introduction">Introduction to LinkedIn Learning</a></li>
                    <li><a href="#what-is">What is LinkedIn Learning?</a></li>
                    <li><a href="#how-to-use">How to Use LinkedIn Learning</a></li>
                    <li><a href="#features">Here Are LinkedIn Learning Premium Cookies</a></li>
                    <li><a href="#benefits">The Benefits of Using LinkedIn Learning</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>

                <section id="introduction" className="mt-8">
                    <h3 className="text-xl font-semibold">Introduction to LinkedIn Learning</h3>
                    <p>
                        LinkedIn Learning is an online educational platform that offers a vast library of video courses and tutorials across various subjects. Designed for professionals and learners, LinkedIn Learning provides users with the opportunity to enhance their skills and advance their careers. This article explores the functionalities of LinkedIn Learning, its benefits, and how to make the most of this essential learning resource.
                    </p>
                </section>

                <section id="what-is" className="mt-6">
                    <h3 className="text-xl font-semibold">What is LinkedIn Learning?</h3>
                    <p>
                        LinkedIn Learning is an online learning platform that provides access to thousands of courses taught by industry experts. Users can learn at their own pace, with courses covering topics such as business, technology, creative skills, and more. LinkedIn Learning is particularly beneficial for professionals looking to upskill or pivot in their careers.
                    </p>
                </section>

                <section id="how-to-use" className="mt-6">
                    <h3 className="text-xl font-semibold">How to Use LinkedIn Learning</h3>
                    <div>
                        <p>
                            Using LinkedIn Learning is straightforward. Follow these steps to get started:
                        </p>
                        <ol className="list-decimal pl-6">
                            <li>Visit the LinkedIn Learning website and sign in with your LinkedIn account.</li>
                            <li>Browse or search for courses that interest you.</li>
                            <li>Select a course and start watching the video lessons.</li>
                            <li>Complete quizzes and assignments to reinforce your learning.</li>
                        </ol>
                    </div>
                </section>

                <section id="features" className="mt-6">
                    <h3 className="text-xl font-semibold">Here Are LinkedIn Learning Premium Cookies</h3>
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
                                    <a href="https://www.linkedin.com/learning/" target="_blank" rel="noreferrer noopener">LinkedIn Learning</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Cookies link</td>
                                <td className="border border-black p-2">
                                    <Link to={'/6742/aB3dE3dEf7GhJaB3dEf7Gh3dEf7GhJ'}>Claim Cookies</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="benefits" className="mt-6">
                    <h3 className="text-xl font-semibold">The Benefits of Using LinkedIn Learning</h3>
                    <div>
                        <p>
                            LinkedIn Learning offers numerous advantages for users:
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Wide Range of Courses:</strong> Access to thousands of courses across various fields and industries.</li>
                            <li><strong>Expert Instructors:</strong> Learn from industry leaders and experienced professionals.</li>
                            <li><strong>Flexible Learning:</strong> Learn at your own pace, anytime and anywhere.</li>
                            <li><strong>Certificates of Completion:</strong> Earn certificates to showcase your skills on your LinkedIn profile.</li>
                        </ul>
                    </div>
                </section>

                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        LinkedIn Learning is an invaluable resource for anyone looking to enhance their skills and advance their careers. With its extensive library of courses and user-friendly interface, it empowers users to learn at their own pace and gain valuable knowledge. By integrating LinkedIn Learning into your professional development strategy, you can unlock new opportunities and achieve your career goals. Embrace the power of LinkedIn Learning and invest in your future.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default LinkedInLearningRoot;