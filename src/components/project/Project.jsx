import { Details, Header2 } from "../typography/typography";
import { useContext } from "react";
import { CursorTextContext } from "../../hooks/cursorProvider";
import LinkWithLoader from "../loader/LinkLoader";
import Video from "../video/Video";

const Project = ({number=0, projectName="Project Name", type="type", videoUrl="" ,year=2000, className=""}) => {
    const {setText} = useContext(CursorTextContext);

    return (
        <LinkWithLoader to={`/works/${projectName.replace(' ', '-').toLowerCase()}`} onMouseOver={() => setText("explore")} onMouseLeave={() => setText('')} className={`p-5 flex flex-row justify-between items-center w-full border border-neutral-200 border-x-0 group max-h-1/5 h-1/5 hover:h-full relative overflow-hidden transition-all duration-500 ${className}`}>
            <div className="flex flex-row gap-[200px] items-center">
                <Header2>{number >= 10 ? number : `0${number}`}</Header2>
                <Header2 className="uppercase" >{projectName}</Header2>
            </div>
            <div className="h-2/3 w-auto aspect-[17/11] max-h-full relative opacity-0 group-hover:block group-hover:opacity-100 transition-all">
                <Video url={videoUrl} className="absolute top-0 left-0 border border-neutral-900 pointer-events-none h-full w-full" />
            </div>
            <Details className="uppercase" >{type.toUpperCase()} / {year}</Details>
        </LinkWithLoader>
    );
}

export default Project
