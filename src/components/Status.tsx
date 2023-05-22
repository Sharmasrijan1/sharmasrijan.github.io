import { FC } from 'react';
import { useAppContext } from "../hooks/useContexts";
import { HiOutlineDevicePhoneMobile, HiOutlineMinusCircle, HiOutlineMoon } from "react-icons/hi2";

const StatusIcon:FC<{IconColor: string, children: React.ReactNode;}> = ({IconColor, children}) => (
    <div className={`absolute z-10 rounded-[100%] group translate-x-[5.3rem] -translate-y-6 w-5 h-5 border ${IconColor}`}>
        <span className={`font-['Fira_Sans'] scale-0 opacity-0 origin-left absolute transition-all whitespace-nowrap -translate-x-[1px] -translate-y-1 w-auto px-4 text-lg font-normal text-white group-hover:scale-100 group-hover:opacity-100 rounded-full flex items-center gap-1 ${IconColor}`}>{children}</span>
    </div>
);

export default function Status() {
    const lanyard = useAppContext()

    switch (lanyard?.discord_status) {
        case "idle":
        return (
            <StatusIcon IconColor='bg-yellow-600 border-yellow-600'>
                <HiOutlineMoon className="text-xl"/>
                <p>Idle</p>
            </StatusIcon>
        );
        case "online":
            if (lanyard.active_on_discord_mobile) {
                return (
                    <StatusIcon IconColor='border-emerald-500 bg-emerald-500'>
                        <HiOutlineDevicePhoneMobile className="text-xl"/>
                        <p>Currently Online</p>
                    </StatusIcon>
                );
            }
            return (
                <StatusIcon IconColor='border-emerald-500 bg-emerald-500'>
                    Currently Online
                </StatusIcon>
            );
        case "dnd":
        return (
            <StatusIcon IconColor='border-red-700 bg-red-700'>
                <HiOutlineMinusCircle className="text-xl"/>
                <p>Do Not Disturb!</p>
            </StatusIcon>
        );
        default:
        return (
            <StatusIcon IconColor='border-gray-700 bg-gray-700'>
                Probably doing something else...
            </StatusIcon>
        );
    };
};
