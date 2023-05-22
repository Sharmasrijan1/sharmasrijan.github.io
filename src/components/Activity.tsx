import { useAppContext } from "../hooks/useContexts";
import { TbBrandVisualStudio } from "react-icons/tb";

// Really, really bad implementation of Discord activities!
// Currently unused, but I'll keep it here for now.

export default function Activity() {
    const lanyard = useAppContext()
    if (lanyard?.discord_status === "offline") {
        return (null)
    };
    switch (lanyard?.activities[0]?.type) {
        case 0:
            if (lanyard?.activities[0]?.name === "Visual Studio Code") {
                return (
                    <div className="font-['Rubik'] absolute bottom-24 -translate-y-0 left-6 bg-[#dce0e8] dark:bg-opacity-0 rounded-lg dark:text-gray-300 text-[#6c6f85] p-4 opacity-100 transition duration-500 delay-200">
                        <div className="flex gap-1 items-center">
                            <p>In {lanyard?.activities[0]?.assets?.small_text}</p>
                            <TbBrandVisualStudio className="text-3xl stroke-[1.3]"/>
                        </div>
                        <p>{lanyard?.activities[0]?.state}</p>
                    </div>
                );
            };
            return (null);
        case 1:
            return (null);
        case 2:
            if (lanyard?.activities[1]?.type === 0) {
                if (lanyard?.activities[1]?.name === "Visual Studio Code") {
                    return (
                        <div className="font-['Rubik'] absolute bottom-24 -translate-y-0 left-6 bg-[#dce0e8] dark:bg-opacity-0 rounded-lg dark:text-gray-300 text-[#6c6f85] p-4 opacity-100 transition duration-500 delay-200">
                            <div className="flex gap-1 items-center">
                                <p>In {lanyard?.activities[1]?.assets?.small_text}</p>
                                <TbBrandVisualStudio className="text-3xl stroke-[1.3]"/>
                            </div>
                            <p>{lanyard?.activities[1]?.state}</p>
                        </div>
                    );
                }
                return (null);
            }
            return (null)
        default:
        return (
            <div className="absolute font-['Rubik'] flex gap-2 items-center translate-y-20 opacity-0 top-0 md:right-0 px-8 pt-8">
                <p></p>
            </div>
        );
    };
};
