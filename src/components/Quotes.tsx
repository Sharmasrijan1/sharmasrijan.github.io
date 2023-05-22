import { useRef } from "react";

export default function Quotes() {
    const Array = [
        "Leaving and coming back with a fresh set of eyes always solves problems. 👀",
        "It should work, it should but why is it not?!",
        "My projects are not a work of art.",
        "This is a giant array full of quotes.",
        "Well, some projects i am kinda proud of.",
        "What about a coffee? I could use one. ☕️",
        "Does this part change?",
        "Yes, this part can change. Try refreshing the page",
        "A wee in the rain that will melt away into a little puddle that will evaporate into nothing.",
        "When was the last time i rewrote this whole website?",
        "I could use a nice hot tea.",
        "My brain is wired to be such a tangled mess. 🧠",
        "I don’t know everything, I just know what I know.",
        "Anything that can go wrong will go wrong.",
        "Nature is where you will find ur inner harmony. 🌲",
        "I USE UBUNTU BTW.",
        //"What if you wrote /suzume at the end of the url?",
        //"Have you tried adding /sparkle to the end of the url?",
        "The restaurant at the end of the internet",
        "Have you been keeping a count of these?",
        "Any suggestions or ideas? You can send them to me at sharmasrijan#7005",
        "Web design is something of a drug.",
        "Why am i still up at 1 in the night sitting infront of a computer.",
    ];
    const randomArray = useRef(Array[Math.floor(Math.random()*Array.length)]).current;
    return (
        <p className="sm:pl-4 font-['Fira_Sans'] font-normal text-xl text-[#6c6f85] dark:text-gray-300">{randomArray}</p>
    );
};
