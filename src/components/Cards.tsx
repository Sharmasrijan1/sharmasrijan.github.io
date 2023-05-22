import { useState, FC } from "react";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronRight } from "react-icons/hi2";

const variants: Variants = {
    open: {
      height: "auto",  
    },
    closed: {
      height: "0px",
    },
};

export const Card: FC<{title: string, children: React.ReactNode;}> = ({title, children}) => {
    const [isOpen, setCard] = useState(false)

    return (
    <div>
        <motion.div whileHover={{ scale: 1.03 }} className="bg-[#dce0e8] dark:bg-[#302D40] overflow-hidden rounded-xl shadow-xl">
            <motion.div className="p-4 flex justify-between items-center cursor-pointer group" onClick={ () => setCard(!isOpen)}>
                <h1 className="font-[Rubik] font-normal text-lg">{title}</h1>
                <motion.div animate={{rotate: isOpen ? 90 : 0}}>
                    <HiOutlineChevronRight className="text-[#6c6f85] dark:group-hover:text-zinc-300 dark:text-zinc-300 flex text-3xl group-hover:text-[#6c6f85] group-hover:bg-[#cfced7] dark:group-hover:bg-[#3f3b54] rounded-full p-1"/>
                </motion.div>
            </motion.div>
            <AnimatePresence>{isOpen && <motion.div variants={variants} initial="closed" animate="open" exit="closed">{children}</motion.div>}</AnimatePresence>
        </motion.div>
    </div>
    );
};
