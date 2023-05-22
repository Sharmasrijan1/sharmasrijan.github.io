import Head from "next/head";
import type { NextPage } from "next";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import { SiTailwindcss, SiNginx, SiDocker, SiReact, SiNextdotjs, SiWindows, SiUbuntu, SiDebian, SiSpotify, SiLua, SiApplemusic, SiRazer} from "react-icons/si";

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About - Sharmasirjan</title>
            </Head>
            <div className="min-h-[100vh] bg-gradient-to-br text-[#4c4f69] from-[#eff1f5] to-[#e6e9ef] dark:from-[#12101F] dark:to-[#1E1D2E] dark:text-white">
                <motion.div className="max-w-[64em] ml-auto mr-auto pt-24 pb-48 lg:pt-[10em] px-8" animate={{ opacity: [0, 1], y: [-20, 0] }}>
                    <p className="font-[Rubik] font-normal text-2xl pb-2">/about</p>
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-2">Hello!, i&#39;m Sharmasrijan. currently residing in The United States. Graduating In 2026 from the current HighSchool Im going to. I love tinkering & playing around with server's and software.</p>
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-2">Occasionally might be a otaku, Try to create things, Run server's for games I like to play, Play games here and there aswell I have a bit of a photography interest. Oh, I love chai, coffee and listen to alot of music on repeat, playing the piano and much more.</p>
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-2">Alot of what i&#39;ve gained has been self-taught. Big chunk of it is on Game/Mod development.</p>
                    <s className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-2">So, Yeah...</s>
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl py-2">But in all honesty, I find technology interesting and all the ways it communicates with eachother. I have tried working on hardware development but I can never make something work fully without having something fail so I try to make hardware stuff but am mostly in software</p>
                    <div className="grid gap-0 sm:gap-4 grid-cols-1 sm:grid-cols-[4fr,2fr]"> 
                    <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-0 sm:pb-2">To the right of this you will be able to see everything that I know how to use some more than others the first ever programming language I started was from LUA since I loved playig roblox and making games in it I still do play roblox here and there but have not been playing as much as I would have been playing few years ago, I mainly play games like Minectaft, Microsoft Flight Simulator 2020 or Racing games like the Forza Horiozon Series</p>
                        <div className="text-[#6c6f85] font-normal bg-[#dce0e8] dark:bg-[#302D40] rounded-xl my-4 sm:m-4 p-4 text-lg font-['Fira_Sans'] dark:text-gray-300 grid gap-4 grid-cols-4 sm:grid-cols-2 md:grid-cols-4 place-items-center">
                            <SiReact className="text-3xl"/>
                            <SiTailwindcss className="text-3xl"/>
                            <SiNextdotjs className="text-3xl"/>
                            <SiNginx className="text-3xl"/>
                            <SiWindows className="text-3xl"/>
                            <SiUbuntu className="text-3xl"/>
                            <SiDebian className="text-3xl"/>
                            <SiDocker className="text-3xl"/>
                            <SiSpotify className="text-3xl"/>
                            <SiApplemusic className="text-3xl"/>
                            <SiLua className="text-3xl"/>
                            <SiRazer className="text-3xl"/>
                        </div>
                    </div>
                    <div className="grid gap-0 sm:gap-4">
                        <p className="font-['Fira_Sans'] text-[#6c6f85] dark:text-gray-300 text-xl pb-2">I daily drive Windows and Ubuntu Linux. I do stick with Windows more as I am use to using it. For servers i tend to stick with Ubuntu or Debian.</p>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default About;
