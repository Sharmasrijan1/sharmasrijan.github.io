import { NextPage } from "next";
import { Footer } from "../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";
import confetti from 'canvas-confetti';

function fireConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.45, x: 0.5 }
    });
}

const NotFound: NextPage = () => {
    if (typeof window !== 'undefined') {
        window.addEventListener('load', fireConfetti);
    }

	return (
        <>
            <Head>
                <title>404 - 😔</title>
            </Head>
            <div className="min-h-[100vh] flex justify-center items-center bg-gradient-to-br from-[#12101F] to-[#1E1D2E] text-white">
                <div className="max-w-[64em] ml-auto mr-auto">
                    <motion.div className="flex flex-col pb-20 px-8" animate={{ opacity: [0, 1], y: [-20, 0] }}>
                    <p className="font-['Fira_Sans'] font-bold text-gray-300 text-3xl">😢 404 - Not Found</p>
                        <p className="font-['Fira_Sans'] font-bold text-gray-300 text-2xl">The thing you were looking for appears to not exist, if you think this is an error please contact me on discord my user is sharmasrijan#7005</p>
                    </motion.div>
                </div>
            </div>
            <Footer/>
        </>
	);
};

export default NotFound;
