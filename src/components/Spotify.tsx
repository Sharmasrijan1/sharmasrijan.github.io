import { FaSpotify } from "react-icons/fa"
import { useAppContext } from "../hooks/useContexts";

export default function Spotify() {
    const lanyard = useAppContext()

    if (!lanyard?.spotify) {
        return (
            <div className="absolute font-['Rubik'] flex gap-2 items-center text-gray-500 hover:text-white translate-y-20 opacity-0 top-0 md:right-0 px-8 pt-8">
                <FaSpotify className="text-3xl" />
                <p>Not listening to anything</p>
            </div>
        )
    } else {
        const spotifyLink = `https://open.spotify.com/track/${lanyard.spotify.track_id}`
        return (
            <div className="absolute bottom-24 -translate-y-0 left-0 md:pt-0 px-6 opacity-100 transition duration-500">
                <div className="flex flex-row-reverse font-['Rubik'] bg-[#dce0e8] dark:bg-opacity-0 rounded-lg text-[#6c6f85] dark:text-[#65D46E] group">
                    <a className="flex md:flex-col gap-2 p-4 md:p-0 md:pr-4 items-center md:items-start md:justify-center" target="_blank" href={spotifyLink} rel="noopener noreferrer">
                        <FaSpotify className="text-3xl md:hidden flex-shrink-0" />
                        <p className="drop-shadow-md hidden text-sm md:flex">
                            Listening to Spotify
                            <FaSpotify className="text-xl hidden md:ml-2 md:block flex-shrink-0"/>
                        </p>
                        <div className="flex flex-col md:flex-row">
                            <p className="drop-shadow-md text-sm md:hidden">Listening to</p>
                            <p className="drop-shadow-md md:-translate-x-0">{lanyard.spotify.song}<p className="hidden group-hover:md:flex text-[#6c6f85] dark:text-[#65D46E] text-opacity-90">by {lanyard.spotify.artist}</p></p>
                        </div>
                    </a>
                    <div className="hidden md:flex flex-shrink-0 p-4">
                        {lanyard.spotify.album_art_url && <img src={lanyard.spotify.album_art_url} className="w-24 h-24 hover:w-36 hover:h-36 shadow-xl transition-all duration-300" />}
                    </div>
                </div>
            </div>
        )
    }
};
