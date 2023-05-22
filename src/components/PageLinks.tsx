import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion"

const PageLink: FC<{href: string, setColor: string, children: React.ReactNode;}> = ({href, setColor, children}) => {
  const router = useRouter();
  
  return (
    <Link href={href}>
      <motion.a 
        whileHover={router.asPath === href ? { y: [-4, -4] } : { y: [0, -4] }} 
        className={router.asPath === href ? `flex p-1 items-center drop-shadow-md -translate-y-1` : `dark:text-gray-300 text-[#6c6f85] dark:drop-shadow-sm drop-shadow-md flex p-1 items-center`}
        style={router.asPath === href ? { color:setColor } : {}}
      >
        {children}
      </motion.a>
    </Link>
  );
}
export default PageLink;
