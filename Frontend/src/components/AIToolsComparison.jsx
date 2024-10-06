import React, { useEffect, useState } from 'react';
import AIToolsOverview from '../assets/AIToolComp/AI_Tools_Overview.png'
import ChatGPT from '../assets/imgs/chatgpt_logo.jpg'
import AIFuture from '../assets/AIToolComp/AI_Future.png'

const AIToolsComparison = () => {
    const [firstSeconds, setFirstSeconds] = useState(60);
    const [secondSeconds, setSecondSeconds] = useState(60);
    const [isFirstActive, setIsFirstActive] = useState(false);
    const [isSecondActive, setIsSecondActive] = useState(false);
    const [isFirstStarted, setIsFirstStarted] = useState(false);
    const [isSecondStarted, setIsSecondStarted] = useState(false);

    const startFirstTimer = () => {
        if (!isFirstStarted) {
            setIsFirstActive(true);
            setFirstSeconds(60);
            setIsFirstStarted(true);
        }
    };

    const startSecondTimer = () => {
        if (!isSecondStarted) {
            setIsSecondActive(true);
            setSecondSeconds(60);
            setIsSecondStarted(true);
        }
    };

    useEffect(() => {
        let firstInterval = null;
        if (isFirstActive && firstSeconds > 0) {
            firstInterval = setInterval(() => {
                setFirstSeconds(prevSeconds => prevSeconds - 1);
            }, 1100);
        } else if (firstSeconds === 0) {
            clearInterval(firstInterval);
            setIsFirstActive(false);
        }
        return () => clearInterval(firstInterval);
    }, [isFirstActive, firstSeconds]);

    useEffect(() => {
        let secondInterval = null;

        if (isSecondActive && secondSeconds > 0) {
            secondInterval = setInterval(() => {
                setSecondSeconds((prevSeconds) => prevSeconds - 1);
            }, 1100);
        } else if (secondSeconds === 0) {
            clearInterval(secondInterval);
            setIsSecondActive(false);

            const currentUrl = new URL(window.location.href);
            currentUrl.port = '3000';

            console.log(currentUrl);
            window.location.href = `${currentUrl.origin}${currentUrl.pathname}/get`;
        }

        return () => clearInterval(secondInterval);
    }, [isSecondActive, secondSeconds]);




    function timerCall() {
        console.log(30)
    }
    return (
        <div className='flex justify-center'>
            <div className="p-6 w-10/12 bg-gray-100">
                <h1 className="text-3xl font-bold">Comparison of Popular AI Tools</h1>
                <p className="mt-4">
                    In the rapidly evolving landscape of artificial intelligence, various tools have emerged, each with unique features and capabilities. This blog compares some of the most popular AI tools, including ChatGPT, Gemini, Perplexity, Llama, DALL-E, and Midjourney, to help you understand their strengths and weaknesses. As AI technology continues to advance, it's essential to stay informed about the tools available to leverage their full potential in various applications.
                </p>
                <img src={AIToolsOverview} alt="AI Tools Overview" className="mt-4 rounded-lg shadow-lg w-1/3" />

                <h2 className="text-2xl font-semibold mt-6 mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6">
                    <li><a href="#chatgpt" className="text-blue-600 hover:underline">ChatGPT</a></li>
                    <li><a href="#gemini" className="text-blue-600 hover:underline">Gemini</a></li>
                    <li><a href="#perplexity" className="text-blue-600 hover:underline">Perplexity</a></li>
                    <li><a href="#llama" className="text-blue-600 hover:underline">Llama</a></li>
                    <li><a href="#dall-e" className="text-blue-600 hover:underline">DALL-E</a></li>
                    <li><a href="#midjourney" className="text-blue-600 hover:underline">Midjourney</a></li>
                    <li><a href="#comparison" className="text-blue-600 hover:underline">Comparison Table</a></li>
                    <li><a href="#conclusion" className="text-blue-600 hover:underline">Conclusion</a></li>
                </ul>

                <section id="chatgpt" className="mt-8">
                    <h3 className="text-xl font-semibold">ChatGPT</h3>
                    <img src={ChatGPT} alt="ChatGPT" className="mt-2 rounded-lg shadow-md w-1/3" />
                    <p className='mt-10'>
                        ChatGPT, developed by OpenAI, is a conversational AI model that excels in generating human-like text responses. It is widely used for chatbots, content creation, and customer support. Its ability to understand context and generate coherent responses makes it a popular choice among developers and businesses alike. ChatGPT can also be fine-tuned for specific industries, enhancing its effectiveness in specialized applications.
                    </p>
                    <h4 className="font-semibold">Features:</h4>
                    <ul className="list-disc pl-6">
                        <li>Natural language understanding and generation</li>
                        <li>Contextual awareness in conversations</li>
                        <li>Customizable for specific applications</li>
                        <li>Supports multiple languages for global reach</li>
                        <li>Integration with various platforms and APIs</li>
                    </ul>
                    <h4 className="font-semibold">Advantages:</h4>
                    <ul className="list-disc pl-6">
                        <li>High-quality text generation</li>
                        <li>Wide range of applications</li>
                        <li>Strong community support and resources</li>
                        <li>Regular updates and improvements from OpenAI</li>
                        <li>Ability to learn from user interactions for better responses</li>
                    </ul>
                </section>

                <section id="gemini" className="mt-6">
                    <h3 className="text-xl font-semibold">Gemini</h3>
                    <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="Gemini" className="mt-2 rounded-lg shadow-md w-1/3" />
                    <p className='mt-10'>
                        Gemini is an AI tool designed for data analysis and visualization. It helps users make sense of complex datasets through intuitive visual representations. With its user-friendly interface, Gemini allows users to create insightful reports and dashboards without needing extensive technical knowledge. It is particularly beneficial for businesses looking to derive actionable insights from their data.
                    </p>
                    <h4 className="font-semibold">Features:</h4>
                    <ul className="list-disc pl-6">
                        <li>Data visualization capabilities</li>
                        <li>Integration with various data sources</li>
                        <li>Interactive dashboards for real-time analysis</li>
                        <li>Collaboration tools for team projects</li>
                        <li>Automated reporting features for efficiency</li>
                    </ul>
                    <h4 className="font-semibold">Advantages:</h4>
                    <ul className="list-disc pl-6">
                        <li>Easy to use for non-technical users</li>
                        <li>Powerful analytics tools</li>
                        <li>Customizable visualizations</li>
                        <li>Supports sharing and exporting of reports</li>
                        <li>Real-time data updates for accurate insights</li>
                    </ul>
                </section>

                <div className='m-5 flex flex-col items-center'>
                    <button
                        onClick={startFirstTimer}
                        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        continue
                    </button>
                    {isFirstActive && (
                        <div className="text-red-600 text-2xl">
                            {firstSeconds} seconds remaining in First Timer
                        </div>
                    )}
                    {isFirstStarted && !isFirstActive && (
                        <div className="text-gray-600 text-lg mt-2">
                            First Timer has ended. You can now start the Second Timer.
                        </div>
                    )}
                </div>
                <section id="perplexity" className="mt-6">
                    <h3 className="text-xl font-semibold">Perplexity</h3>
                    <svg width="1588" height="400" viewBox="0 0 1588 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M101.008 42L190.99 124.905V124.886V42.1913H208.506V125.276L298.891 42V136.524H336V272.866H299.005V357.035L208.506 277.525V357.948H190.99V278.836L101.11 358V272.866H64V136.524H101.008V42ZM177.785 153.826H81.5159V255.564H101.088V223.472L177.785 153.826ZM118.625 231.149V319.392L190.99 255.655V165.421L118.625 231.149ZM209.01 254.812V165.336L281.396 231.068V272.866H281.489V318.491L209.01 254.812ZM299.005 255.564H318.484V153.826H222.932L299.005 222.751V255.564ZM281.375 136.524V81.7983L221.977 136.524H281.375ZM177.921 136.524H118.524V81.7983L177.921 136.524Z" fill="black" />
                        <path d="M768.761 134.448H779.882V157.366H765.486C754.204 157.366 745.79 160.08 740.213 165.524C734.669 170.951 731.881 179.877 731.881 192.284V267.432H709.153V134.971H731.881V156.108C731.881 157.301 732.481 157.89 733.648 157.89C734.313 157.89 734.815 157.726 735.172 157.383C735.528 157.039 735.836 156.369 736.193 155.339C740.57 141.428 751.448 134.464 768.777 134.464H768.761V134.448ZM919.945 162.843C925.911 173.452 928.91 186.236 928.91 201.177C928.91 216.118 925.927 228.902 919.945 239.511C913.963 250.121 906.214 258.065 896.698 263.329C887.183 268.593 876.953 271.225 866.011 271.225C844.45 271.225 829.293 262.561 820.539 245.233C819.874 243.876 819.015 243.189 818.01 243.189C817.005 243.189 816.486 243.696 816.486 244.726V315.804H793.758V134.954H816.486V157.628C816.486 158.641 816.989 159.165 818.01 159.165C819.031 159.165 819.858 158.494 820.539 157.121C829.293 139.793 844.45 131.129 866.011 131.129C876.953 131.129 887.183 133.761 896.698 139.025C906.214 144.289 913.947 152.233 919.945 162.843ZM906.198 201.177C906.198 185.549 902.032 173.37 893.699 164.625C885.367 155.879 874.392 151.514 860.726 151.514C847.06 151.514 836.085 155.895 827.753 164.625C819.404 173.37 816.357 185.565 816.357 201.177C816.357 216.789 819.42 228.984 827.753 237.729C836.085 246.492 847.076 250.84 860.726 250.84C874.376 250.84 885.367 246.459 893.699 237.729C902.032 229 906.198 216.789 906.198 201.177ZM537.17 163.039C543.136 173.648 546.135 186.432 546.135 201.373C546.135 216.315 543.152 229.098 537.17 239.707C531.188 250.317 523.44 258.262 513.924 263.525C504.408 268.789 494.179 271.421 483.236 271.421C461.676 271.421 446.518 262.757 437.764 245.429C437.1 244.072 436.241 243.386 435.235 243.386C434.23 243.386 433.712 243.892 433.712 244.922V316H411V135.151H433.728V157.824C433.728 158.838 434.23 159.361 435.252 159.361C436.273 159.361 437.1 158.691 437.781 157.317C446.535 139.989 461.692 131.325 483.253 131.325C494.195 131.325 504.424 133.957 513.94 139.221C523.456 144.485 531.189 152.43 537.187 163.039H537.17ZM523.407 201.373C523.407 185.745 519.241 173.567 510.909 164.821C502.576 156.091 491.585 151.71 477.935 151.71C464.286 151.71 453.295 156.091 444.962 164.821C436.63 173.583 433.566 185.762 433.566 201.373C433.566 216.985 436.63 229.18 444.962 237.926C453.295 246.688 464.269 251.036 477.935 251.036C491.601 251.036 502.576 246.655 510.909 237.926C519.241 229.196 523.407 216.985 523.407 201.373ZM668.982 225.355H692.975C689.781 237.762 683.248 248.502 673.408 257.575C663.551 266.664 649.448 271.192 631.081 271.192C617.269 271.192 605.111 268.348 594.59 262.659C584.069 256.97 575.947 248.878 570.208 238.334C564.47 227.807 561.617 215.415 561.617 201.144C561.617 186.873 564.405 174.482 569.949 163.954C575.493 153.427 583.291 145.318 593.309 139.63C603.328 133.941 615.064 131.096 628.536 131.096C642.007 131.096 653.176 133.908 662.514 139.499C671.868 145.106 678.838 152.544 683.475 161.78C688.111 171.049 690.413 181.184 690.413 192.219V207.503H585.593C586.419 220.745 590.861 231.289 598.853 239.086C606.845 246.9 617.593 250.807 631.065 250.807C642.007 250.807 650.404 248.568 656.208 244.056C662.011 239.544 666.259 233.316 668.966 225.322L668.982 225.355ZM585.123 188.426H664.443C664.443 176.885 661.493 167.829 655.592 161.29C649.691 154.767 640.435 151.481 627.806 151.481C616.021 151.481 606.375 154.669 598.886 161.045C591.396 167.404 586.809 176.542 585.123 188.426ZM947.244 267.4H969.988V84H947.244V267.416V267.4ZM1266.89 120.487H1293.45V91.814H1266.89V120.487ZM1364.95 247.669C1360.82 248.094 1358.32 248.306 1357.5 248.306C1356.33 248.306 1355.37 247.963 1354.71 247.276C1354.04 246.606 1353.69 245.674 1353.69 244.464C1353.69 243.631 1353.91 241.113 1354.34 236.945C1354.74 232.793 1354.97 226.368 1354.97 217.72V154.342H1387.39L1381 134.938H1354.98V99.2683H1332.26V134.922H1307.53V154.326H1332.26V224.063C1332.26 238.678 1335.81 249.548 1342.87 256.676C1349.94 263.803 1360.72 267.383 1375.22 267.383H1392.9V247.015H1384.05C1375.46 247.015 1369.1 247.227 1364.97 247.652L1364.95 247.669ZM1502.34 134.938L1464.7 246.083C1464.2 247.456 1463.4 249.238 1460.83 249.238C1458.25 249.238 1457.44 247.456 1456.93 246.083L1419.29 134.938H1396.11L1439.7 267.4H1455.12C1456.12 267.4 1456.89 267.498 1457.41 267.661C1457.91 267.825 1458.33 268.25 1458.67 268.936C1459.33 269.95 1459.25 271.486 1458.41 273.514L1451.34 292.869C1450.32 295.419 1448.39 296.694 1445.54 296.694C1444.52 296.694 1442.17 296.481 1438.47 296.056C1434.76 295.631 1429.98 295.419 1424.08 295.419H1405.63V315.787H1429.88C1444.03 315.787 1452.54 313.368 1459.87 308.529C1467.2 303.691 1472.87 295.157 1476.92 282.93L1524 140.022V134.938H1502.37H1502.34ZM1189.96 184.356L1154.34 134.938H1129.33V140.022L1172.01 197.335L1119.97 262.299V267.383H1145.49L1186.92 214.14L1225.57 267.383H1250.08V262.299L1204.85 201.161L1253.88 140.284V134.938H1228.36L1189.97 184.356H1189.96ZM1269.31 267.4H1292.05V134.954H1269.31V267.416V267.4ZM1119.66 225.355C1116.45 237.762 1109.94 248.502 1100.1 257.575C1090.24 266.664 1076.14 271.192 1057.77 271.192C1043.96 271.192 1031.8 268.348 1021.28 262.659C1010.74 256.97 1002.64 248.878 996.899 238.334C991.176 227.807 988.323 215.415 988.323 201.144C988.323 186.873 991.111 174.482 996.656 163.954C1002.22 153.427 1010 145.318 1020.02 139.63C1030.03 133.941 1041.77 131.096 1055.26 131.096C1068.75 131.096 1079.9 133.908 1089.25 139.499C1098.59 145.106 1105.58 152.544 1110.21 161.78C1114.85 171.049 1117.15 181.184 1117.15 192.219V207.503H1012.32C1013.16 220.745 1017.58 231.289 1025.58 239.086C1033.57 246.9 1044.32 250.807 1057.79 250.807C1068.73 250.807 1077.13 248.568 1082.93 244.056C1088.73 239.544 1092.98 233.316 1095.67 225.322H1119.68L1119.66 225.355ZM1012.38 188.426H1091.7C1091.7 176.885 1088.75 167.829 1082.87 161.29C1076.96 154.767 1067.71 151.481 1055.08 151.481C1043.29 151.481 1033.65 154.669 1026.16 161.045C1018.67 167.404 1014.07 176.542 1012.4 188.426H1012.38Z" fill="black" />
                    </svg>

                    <p>
                        Perplexity is an AI tool focused on natural language processing and understanding. It is particularly useful for tasks involving sentiment analysis and text classification. Its advanced algorithms allow for accurate interpretation of text, making it a valuable asset for marketers and researchers. Perplexity can analyze large volumes of text data quickly, providing insights that can drive strategic decisions.
                    </p>
                    <h4 className="font-semibold">Features:</h4>
                    <ul className="list-disc pl-6">
                        <li>Sentiment analysis capabilities</li>
                        <li>Text classification and tagging</li>
                        <li>Support for multiple languages</li>
                        <li>Real-time processing for immediate insights</li>
                        <li>Customizable models for specific use cases</li>
                    </ul>
                    <h4 className="font-semibold">Advantages:</h4>
                    <ul className="list-disc pl-6">
                        <li>Accurate sentiment detection</li>
                        <li>Versatile for various text analysis tasks</li>
                        <li>Robust API for integration</li>
                        <li>Comprehensive documentation and support</li>
                        <li>Ability to handle large datasets efficiently</li>
                    </ul>
                </section>

                <section id="llama" className="mt-6">
                    <h3 className="text-xl font-semibold">Llama</h3>
                    <img src="https://miro.medium.com/v2/resize:fit:840/1*M_lMTgd0kiBFlH3WORabYQ.png" alt="Llama" className="mt-2 rounded-lg shadow-md w-1/3" />
                    <p className='mt-10'>
                        Llama is an AI tool designed for creative content generation, including art and music. It leverages machine learning to produce unique and engaging content. Artists and creators can use Llama to explore new ideas and push the boundaries of their creativity. The tool is particularly popular among content creators looking to enhance their projects with innovative artistic elements.
                    </p>
                    <h4 className="font-semibold">Features:</h4>
                    <ul className="list-disc pl-6">
                        <li>Generates art and music based on user input</li>
                        <li>Supports various artistic styles</li>
                        <li>Collaboration features for creative teams</li>
                        <li>Integration with popular design tools</li>
                        <li>Ability to learn from user preferences for tailored outputs</li>
                    </ul>
                    <h4 className="font-semibold">Advantages:</h4>
                    <ul className="list-disc pl-6">
                        <li>Encourages creativity and experimentation</li>
                        <li>High-quality output for artistic projects</li>
                        <li>Community sharing and collaboration options</li>
                        <li>Regular updates with new features and styles</li>
                        <li>Accessible to both amateur and professional creators</li>
                    </ul>
                </section>

                <section id="dall-e" className="mt-6">
                    <h3 className="text-xl font-semibold">DALL-E</h3>
                    <img src="https://external-preview.redd.it/dall-e-3-a-new-era-for-ai-art-but-at-what-cost-to-artists-v0-SLY_WS8jWeAyUC4C1IhEM39OegQyVN2G-1TWJSguS-I.jpg?auto=webp&s=a4ebe180a1d1490ab936714a2aae90a448ee8e2c" alt="DALL-E" className="mt-2 rounded-lg shadow-md w-1/3" />
                    <p className='mt-10'>
                        DALL-E, also developed by OpenAI, is an AI model that generates images from textual descriptions. It allows users to create unique visuals based on their imagination, making it a powerful tool for artists, designers, and marketers. DALL-E's ability to understand and interpret complex prompts enables it to produce highly creative and contextually relevant images.
                    </p>
                    <h4 className="font-semibold">Features:</h4>
                    <ul className="list-disc pl-6">
                        <li>Image generation from text prompts</li>
                        <li>Ability to create variations of existing images</li>
                        <li>Supports a wide range of artistic styles</li>
                        <li>High-resolution output for professional use</li>
                    </ul>
                    <h4 className="font-semibold">Advantages:</h4>
                    <ul className="list-disc pl-6">
                        <li>Innovative approach to visual content creation</li>
                        <li>Highly customizable outputs based on user input</li>
                        <li>Useful for marketing, advertising, and branding</li>
                        <li>Regular updates with improved capabilities</li>
                    </ul>
                </section>

                <section id="midjourney" className="mt-6">
                    <h3 className="text-xl font-semibold">Midjourney</h3>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Midjourney_Emblem_%E2%80%94_Discord.svg/2048px-Midjourney_Emblem_%E2%80%94_Discord.svg.png" alt="Midjourney" className="mt-2 rounded-lg shadow-md w-1/3" />
                    <p className='mt-10'>
                        Midjourney is an AI tool focused on generating high-quality images and artwork based on user prompts. It is particularly popular among digital artists and designers for its ability to create stunning visuals that can be used in various projects. Midjourney emphasizes community collaboration, allowing users to share their creations and gain inspiration from others.
                    </p>
                    <h4 className="font-semibold">Features:</h4>
                    <ul className="list-disc pl-6">
                        <li>Image generation from descriptive prompts</li>
                        <li>Community-driven platform for sharing artwork</li>
                        <li>Supports various artistic styles and techniques</li>
                        <li>Integration with design software for seamless workflow</li>
                    </ul>
                    <h4 className="font-semibold">Advantages:</h4>
                    <ul className="list-disc pl-6">
                        <li>Encourages artistic exploration and creativity</li>
                        <li>High-quality outputs suitable for professional use</li>
                        <li>Active community for feedback and collaboration</li>
                        <li>Regular updates with new features and improvements</li>
                    </ul>
                </section>

                <section id="comparison" className="mt-6">
                    <h3 className="text-xl font-semibold">Comparison Table</h3>
                    <table className="min-w-full border-collapse border border-black mt-2">
                        <thead>
                            <tr>
                                <th className="border border-black p-2">Tool</th>
                                <th className="border border-black p-2">Main Focus</th>
                                <th className="border border-black p-2">Key Features</th>
                                <th className="border border-black p-2">Best For</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-black p-2">ChatGPT</td>
                                <td className="border border-black p-2">Conversational AI</td>
                                <td className="border border-black p-2">Natural language generation, contextual awareness, multi-language support</td>
                                <td className="border border-black p-2">Chatbots, content creation, customer support</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Gemini</td>
                                <td className="border border-black p-2">Data Analysis</td>
                                <td className="border border-black p-2">Data visualization, interactive dashboards, automated reporting</td>
                                <td className="border border-black p-2">Data analysts, business intelligence, decision-makers</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Perplexity</td>
                                <td className="border border-black p-2">Text Analysis</td>
                                <td className="border border-black p-2">Sentiment analysis, text classification, real-time processing</td>
                                <td className="border border-black p-2">Marketers, researchers, content creators</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Llama</td>
                                <td className="border border-black p-2">Creative Content</td>
                                <td className="border border-black p-2">Art and music generation, collaboration features</td>
                                <td className="border border-black p-2">Artists, content creators, creative teams</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">DALL-E</td>
                                <td className="border border-black p-2">Image Generation</td>
                                <td className="border border-black p-2">Image generation from text, high-resolution outputs</td>
                                <td className="border border-black p-2">Artists, marketers, designers</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">Midjourney</td>
                                <td className="border border-black p-2">Artistic Creation</td>
                                <td className="border border-black p-2">Image generation, community sharing, various styles</td>
                                <td className="border border-black p-2">Digital artists, designers, creative professionals</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <div className='flex flex-col items-center'>
                    {isFirstStarted && !isSecondStarted && !isFirstActive && (
                        <button
                            onClick={startSecondTimer}
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            Get Link
                        </button>
                    )}
                    {isSecondActive && (
                        <div className="text-red-600 text-2xl">
                            {secondSeconds} seconds remaining in Second Timer
                        </div>
                    )}
                </div>
                <section id="conclusion" className="mt-6">
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Each AI tool discussed in this blog has its unique strengths and applications. Depending on your needs—whether it's conversational AI, data analysis, text processing, or creative content generation—there's an AI tool that can help you achieve your goals. Understanding the features and advantages of each tool will enable you to make informed decisions and leverage AI effectively in your projects. As the field of AI continues to grow, staying updated on these tools will be crucial for maximizing their potential in various industries. Embracing these technologies can lead to innovative solutions and enhanced productivity in your work.
                    </p>
                    <img src={AIFuture} alt="AI Future" className="mt-4 rounded-lg shadow-lg w-1/3" />
                </section>
            </div>
        </div>
    );
}

export default AIToolsComparison;  