import { motion } from "framer-motion";
import { FiGithub, FiGitlab } from "react-icons/fi";
import { HiOutlineHomeModern, HiOutlineBookOpen, HiCodeBracket, HiOutlineAtSymbol } from "react-icons/hi2";
import PageLink from "./PageLinks";

export const Footer = () => {
    return (
        <div className="fixed bottom-0 font-['Fira_Sans'] left-0 w-screen h-20 m-0 flex justify-center md:justify-start flex-row bg-[#dce0e8] dark:bg-[#1E1D2E]/90 z-10 dark:border-solid dark:border-t-[1px] dark:border-[#1E1D2E] dark:backdrop-blur">
                <PageLink href="/" setColor="#f5c2e7">
                    <button className="ml-0 md:ml-4 hover:bg-[#f5c2e7] group bg-[#dce0e8] dark:bg-opacity-0 dark:drop-shadow-sm drop-shadow-md hover:text-black flex p-2 rounded-lg gap-2 items-center font-normal text-lg transition-all active:scale-[.96]">
                        <HiOutlineHomeModern className="text-2xl"/>
                        <span className="hidden font-normal group-hover:block">Home</span>
                    </button>
                </PageLink>
                <PageLink href="/about/" setColor="#cba6f7">
                    <button className="hover:bg-[#cba6f7] group bg-[#dce0e8] dark:bg-opacity-0 dark:drop-shadow-sm drop-shadow-md hover:text-black flex p-2 rounded-lg gap-2 items-center font-normal text-lg transition-all active:scale-[.96]">
                        <HiOutlineBookOpen className="text-2xl"/>
                        <span className="hidden font-normal group-hover:block md:block">About</span>
                    </button>
                </PageLink>
                <PageLink href="/projects/" setColor="#f38ba8">
                    <button className="hover:bg-[#f38ba8] group bg-[#dce0e8] dark:bg-opacity-0 dark:drop-shadow-sm drop-shadow-md hover:text-black flex p-2 rounded-lg gap-2 items-center font-normal text-lg transition-all active:scale-[.96]">
                        <HiCodeBracket className="text-2xl"/>
                        <span className="hidden font-normal group-hover:block md:block">Projects</span>
                    </button>
                </PageLink>
                <PageLink href="/etc/" setColor="#eba0ac">
                    <button className="hover:bg-[#eba0ac] group bg-[#dce0e8] dark:bg-opacity-0 dark:drop-shadow-sm drop-shadow-md hover:text-black flex p-2 rounded-lg gap-2 items-center font-normal text-lg transition-all active:scale-[.96]">
                        <HiOutlineAtSymbol className="text-2xl"/>
                        <span className="hidden font-normal group-hover:block md:block">Contact + Other</span>
                    </button>
                </PageLink>
                <a target="_blank" className="flex p-1 items-center" href="https://github.com/SrijanSharma21" rel="noopener noreferrer">
                    <motion.button whileHover={{ y: [0, -4] }} className="hover:bg-[#fab387] group bg-[#dce0e8] dark:bg-opacity-0 dark:drop-shadow-sm drop-shadow-md dark:text-gray-300 text-[#6c6f85] hover:text-black flex p-2 rounded-lg gap-2 items-center font-normal text-lg transition-all">
                        <FiGithub className="text-2xl stroke-[1.5]"/>
                        <span className="hidden font-normal group-hover:block">Github</span>
                    </motion.button>
                </a>
        </div>
    );
};
