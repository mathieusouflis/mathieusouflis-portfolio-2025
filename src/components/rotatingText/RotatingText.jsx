import { useEffect, useState } from "react";
import { Display } from "../typography/typography";
  
const RotatingText = () => {
    const [index, setIndex] = useState(0);
    const texts = [
        ['UX / UI', "Designer"],
        ['Fullstack', "Developer"],
        ["Creative", "Developer"],
    ];
    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return <Display className="text-white after:bg-white"><span className='text-indigo-400'>{texts[index][0]}</span> {texts[index][1]}</Display>
}

export default RotatingText