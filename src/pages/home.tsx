import CustomNavbar from "@/components/layouts/navigation/custom-navbar";
import PricingCards from "@/components/pricing/pricing-cards";
import * as React from "react";
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LinkButton from "@/components/ui/link-button";
export default function Home() {
    React.useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const fadeInUpVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    return (
        <>
            <CustomNavbar />
            <div className="flex overflow-hidden flex-col bg-white">
                <div className="flex  flex-col md:px-12 mt-36 max-w-full max-md:mt-10">
                    <div
                        className="flex flex-col relative justify-center   max-md:max-w-full"
                    // data-aos="fade-up"
                    // data-aos-duration="1000"
                    >
                        <div className="flex z-10 flex-col max-md:max-w-full">
                            <div className="flex flex-col px-6 " data-aos="fade-up" data-aos-duration="1000">
                                {/* Main Title */}
                                <div
                                    className="text-6xl font-bold md:w-1/2 mt-72 text-center md:text-left   md:mt-6 tracking-tighter leading-[77px] text-slate-900 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
                                    data-aos="fade-down"
                                    data-aos-duration="2000"
                                >
                                    Unlock the Power of AI for Your Online Store
                                </div>

                                {/* Description */}
                                <div
                                    className="mt-6 text-lg tracking-wide leading-7 text-neutral-600 w-full md:w-1/2 max-md:max-w-full"
                                    data-aos="fade-up"
                                >
                                    Our vendor dashboard gives you complete control over your products, shops, and sales. From product recommendations powered by AI to seamless management, scale your business with ease.
                                </div>
                            </div>

                            <div className="py-5 px-6 text-center md:text-left">
                                <div
                                    data-aos="fade-up-right"
                                    data-aos-duration="1000"
                                    className="mb-4 text-sm">No credit card required</div>
                                <LinkButton
                                    data-aos="fade-up-right"
                                    data-aos-duration="2000"
                                    href={"Routes.shop.create"}
                                    size="small"
                                    className="px-3.5 py-2 text-base text-lg"
                                >
                                    GET STARTED 🚀
                                </LinkButton>
                            </div>

                        </div>

                        {/* Image of Phone Mockup */}
                        <div className="">
                            <img
                                data-aos="fade-left"
                                data-aos-duration="2000"
                                loading="lazy"
                                src="/hero.svg"
                            
                                className="object-contain  md:w-5/6 absolute md:-right-12 -top-6 md:-top-24"
                            />
                        </div>
                    </div>

                    {/* Premium Features Section */}
                    <div
                        className="flex px-6 flex-col justify-center items-center mt-72 w-full max-md:mt-10"
                        data-aos="fade-up"
                    >
                        <div className="flex flex-col text-center">
                            <div className="text-6xl font-bold tracking-tight leading-tight text-slate-900 max-md:text-4xl">
                                Discover Our Premium Vendor Features
                            </div>
                            <div className="mt-6 text-lg leading-7 text-neutral-600">
                                Our platform offers exclusive tools to help you grow your online business. Get access to advanced analytics, AI-powered product suggestions, and more.
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div
                        className="mt-20 px-6 w-full flex justify-between gap-5 max-md:flex-col max-md:mt-10"
                        data-aos="fade-up"
                    >
                        <div className="flex flex-col items-center w-1/3 p-5 rounded-md shadow-lg text-slate-900 max-md:w-full" data-aos="fade-up">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a4265541da7b5c4db94ed2994f6fdc5aed32c19a26b0ef6b24f1b115dd07bf9"
                                className="object-contain w-16 mb-6"
                                alt="Effortless Management"
                            />
                            <div className="text-3xl font-bold">Effortless Management</div>
                            <div className="mt-4 text-lg leading-7 text-center">
                                Manage your shops, products, and inventory from a single, user-friendly interface. No hassle, just simplicity.
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-1/3 p-5 text-white bg-accent text-center shadow-lg rounded-lg max-md:w-full" data-aos="fade-up">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/938e05ad2f9e52cbc3135b98b480ffc71c2b6dc55d64b609433a54950e1da238"
                                className="object-contain w-16 mb-6"
                                alt="AI-Powered Insights"
                            />
                            <div className="text-3xl font-bold">AI-Powered Insights</div>
                            <div className="mt-4 text-lg leading-7">
                                Use our AI-driven advisor to optimize your products and boost sales, with insights tailored to your business.
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-1/3 p-5 text-center shadow-lg rounded-lg max-md:w-full" data-aos="fade-up">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d36c913ff85881666967afeffe8bf99dc254567b197a895ae51840d3ae2d7fce"
                                className="object-contain w-16 mb-6"
                                alt="Professional Design"
                            />
                            <div className="text-3xl font-bold text-slate-900">Professional Design</div>
                            <div className="mt-4 text-lg leading-7 text-neutral-600">
                                Enjoy a clean and professional dashboard interface designed to streamline your business operations.
                            </div>
                        </div>
                    </div>

                </div>


                <div className="flex justify-center items-start mt-20 bg-white max-md:mt-10">
                    <div className="flex flex-col px-8 min-w-[240px] w-[1280px] max-md:px-5">
                        <div className="self-start text-base tracking-wide leading-loose text-center text-gray-500 max-md:max-w-full">
                            Join businesses thriving with our platform
                        </div>

                        {/* Logos Section */}
                        <div
                            className="flex flex-wrap gap-10 justify-evenly items-center mt-8 w-full max-md:max-w-full"
                            data-aos="fade-up"
                        >
                            <img
                                loading="lazy"
                                src="/image/lipro.png"
                                className="object-contain shrink-0 self-stretch my-auto aspect-[3.82] w-[183px]"
                                alt="Company Logo"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            />
                            <img
                                loading="lazy"
                                src="/logo1.png"
                                className="object-contain shrink-0 self-stretch my-auto aspect-[3.04] w-[146px]"
                                alt="Devshop Ug"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            />
                            <img
                                loading="lazy"
                                src="/stylish.jpg"
                                className="object-contain shrink-0 self-stretch my-auto aspect-[3.52] w-[169px]"
                                alt="Stylish Hub"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            />


                        </div>
                    </div>
                </div>

                <div className="self-end  relative w-full max-w-[1600px] mt-16 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col-reverse">

                        {/* Left Content Section */}
                        <div
                            className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full"
                            data-aos="fade-up"
                        >
                            <div className="flex px-6 md:pr-0 flex-col  self-stretch my-auto max-md:mt-24 max-md:max-w-full" data-aos="fade-up">
                                <div className="flex flex-col max-w-full w-[566px]" data-aos="fade-up" data-aos-delay="100">
                                    <div className="text-6xl font-bold tracking-tight text-black leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                                        Clients App
                                    </div>
                                    <div className="mt-6 text-lg tracking-wide leading-7 text-neutral-600 max-md:max-w-full">
                                        Lets the users discover the products they need with our AI-driven platform. Whether by uploading an image or entering a prompt, our system identifies the best solutions for your clients.
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row mt-14 max-md:mt-10 max-md:max-w-full gap-6">
                                    {/* Feature 1 */}
                                    <div className="flex flex-col border rounded-lg shadow-md p-6 max-md:p-4 bg-white" data-aos="fade-up" data-aos-delay="200">
                                        <div className="text-2xl font-bold tracking-tight text-slate-900">
                                            Image Recognition
                                        </div>
                                        <div className="mt-4 text-base tracking-wide leading-6 text-neutral-600">
                                            Upload or take a picture, and our AI analyzes the image to recommend the best products based on what it recognizes.
                                        </div>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="flex flex-col border rounded-lg shadow-md p-6 max-md:p-4 bg-white" data-aos="fade-up" data-aos-delay="300">
                                        <div className="text-2xl font-bold tracking-tight text-slate-900">
                                            Prompt-Based Recommendations
                                        </div>
                                        <div className="mt-4 text-base tracking-wide leading-6 text-neutral-600">
                                            Simply describe what you're looking for, and our AI will use the prompt to provide tailored product suggestions that meet your needs.
                                        </div>
                                    </div>

                                    {/* App Store Buttons */}
                                    {/* > */}
                                </div>
                                <div className="flex flex-col border mt-6 rounded-lg shadow-md p-6 max-md:p-4 bg-white items-center" data-aos="fade-up" data-aos-delay="400">
                                    <div className="text-lg font-semibold mb-4 text-slate-900">
                                        Download Our App
                                    </div>
                                    <div className="flex gap-8 items-center">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dd2c78dee0e0e90440d3cb1fd6a1e79677936c2343f38dfb39393155b40acb7?placeholderIfAbsent=true&apiKey=c4b289b0ae264c378a51e310c1d6d054"
                                            className="object-contain w-[150px] h-auto"
                                            alt="Google Play Store"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c558c0da6e48fac12c644c679b7c2d04aee85b63352a5bc6195abab82429518e?placeholderIfAbsent=true&apiKey=c4b289b0ae264c378a51e310c1d6d054"
                                            className="object-contain w-[150px] h-auto"
                                            alt="Apple App Store"
                                        />
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Right Image Section */}
                        <div
                            className="flex flex-col mt-12   w-[100px] md:w-1/2 max-md:ml-0 max-md:w-full"
                            data-aos="fade-up"
                        >
                            <img
                                data-aos="fade-up"
                                loading="lazy"
                                src="/hero22.svg"
                                className="object-contain grow w-1/2 right-0 md:block -top-40 absolute md:w-full aspect-[0.77] max-md:mt-10 max-md:max-w-full"
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                </div>



                {/* <div className="flex relative flex-col justify-center items-center px-16 py-60 mt-9 w-full font-bold leading-tight text-center text-white min-h-[619px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/03f4aea4a3162bcff79136a24b2f75876a8176c30c5214a19895c124fb0b25b7?placeholderIfAbsent=true&apiKey=c4b289b0ae264c378a51e310c1d6d054"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative flex-wrap gap-5 justify-between -mb-12 max-w-full w-[1280px] max-md:mb-2.5">
                        <div className="flex flex-col items-center">
                            <div className="text-3xl">Smart Clients</div>
                            <div className="mt-8 text-6xl tracking-tight max-md:text-4xl">21K</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl">App Downloads</div>
                            <div className="mt-8 text-6xl tracking-tight max-md:text-4xl">100k</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl">Certified Apps</div>
                            <div className="mt-8 text-6xl tracking-tight max-md:text-4xl">100</div>
                        </div>
                    </div>
                </div> */}

                <div className="flex relative mt-16 md:mt-64 flex-col justify-center  max-w-full">
                    <motion.div
                        className="flex z-0 flex-col my-4 items-center w-full text-center max-md:max-w-full"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUpVariant}
                    >
                        <div className="text-6xl font-bold tracking-tight leading-[67px] text-slate-900 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                            Vendor Pricing Plan
                        </div>

                        {/* Subheading */}
                        <div className="mt-6 text-lg tracking-wide leading-7 text-neutral-600 w-[659px] max-md:max-w-full">
                            All our features are currently freeeeee!

                        </div>

                        {/* No credit card required */}
                        <div className="mt-4 text-base tracking-wide leading-6 text-neutral-600">

                        </div>

                    </motion.div>

                    {/* Pricing Cards Component */}
                    <PricingCards />

                    <motion.div
                        className="flex overflow-hidden z-10 flex-col justify-center items-center px-16 py-0.5 w-full bg-orange-600 max-md:px-5 max-md:mt-10 max-md:max-w-full"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUpVariant}
                    >

                    </motion.div>

                    <div className="flex flex-col items-center px-20 py-4 -mt-1 w-full bg-slate-900 max-md:px-5 max-md:pb-24 max-md:max-w-full">
                        <div className="shrink-0 mt-16 max-w-full h-px border bg-zinc-200 border-zinc-200 w-[1719px] max-md:mt-10" />
                        <div className="flex flex-wrap gap-5 justify-between mt-16 mb-0 w-full text-white max-w-[1720px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-2xl font-bold tracking-tight">About the Vendor Dashboard</div>
                                <div className="mt-9 text-base tracking-wide leading-6 max-md:max-w-full">
                                    Our Vendor Dashboard is designed to provide seamless management for your products and shop. With real-time analytics, product management, and intuitive features, you can easily track performance, manage inventory, and update your listings. Whether you're a small business or an enterprise, the dashboard gives you all the tools you need to scale your shop and reach more customers.
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7307c89b8c6f0bb95fb5986ec88ff6235435c4dd5bb3e4b4a7813acd9b576a3c?placeholderIfAbsent=true&apiKey=c4b289b0ae264c378a51e310c1d6d054"
                                    className="object-contain mt-9 max-w-full aspect-[8.26] w-[199px]"
                                    alt="Vendor Dashboard Logo"
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </>
    );
}