import type { NextPage } from "next";
import Head from "next/head";
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { motion } from "framer-motion";
import profilePic from '/public/avatar.jpg'
const Quotes = dynamic(() => import("../components/Quotes"), {
    ssr: false,
})
import { Footer } from "../components/Footer";
const Status = dynamic(() => import("../components/Status"), {
    ssr: true,
})
const Spotify = dynamic(() => import("../components/Spotify"), {
    ssr: true,
})

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Srijan!</title>
                <link rel="shortcut icon" type="image/png" sizes="101x96" href="../public/avatar.jpg?width=101&height=96"/>
                <link rel="shortcut icon" type="image/png" sizes="34x32" href="../public/avatar.jpg?width=34&height=32"/>
                <link rel="shortcut icon" type="image/png" sizes="17x16" href="../public/avatar.jpg?width=17&height=16"/>
            </Head>
            <div className="min-h-[100vh] flex justify-center items-center bg-gradient-to-br text-[#4c4f69] from-[#eff1f5] to-[#e6e9ef] dark:from-[#12101F] dark:to-[#1E1D2E] dark:text-white">
                <div className="max-w-[64em] ml-auto mr-auto">
                    <Suspense fallback={``}>
                        <Spotify />
                    </Suspense>
                    <motion.div className="flex flex-wrap sm:flex-nowrap items-center pb-20 px-8" animate={{ opacity: [0, 1], y: [-20, 0] }}>
                        <div className="relative shrink-0 pb-4 sm:pl-2 sm:pb-0">
                            <img src={profilePic.src} alt="avatar" className="rounded-full w-28 h-28"/>
                            <Suspense fallback={``}>
                                <Status />
                            </Suspense>
                        </div>
                        <div>
                            <p className="sm:pl-4 pb-2 font-[Rubik] font-normal text-2xl">Hey, I&#39;m Sharmasrijan <span className="wave">👋🏻</span></p>
                            <p className="sm:pl-4 font-['Fira_Sans'] font-normal text-xl text-[#6c6f85] dark:text-gray-300">High School student, intermediate programmer, 15 year's old and a anime otaku</p>
                            <Suspense fallback={``}>
                                <Quotes />
                            </Suspense>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
