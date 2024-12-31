import Cta from "../cta/cta";
import Icon from "../icons/Icon";
import { Body, Display } from "../typography/typography";
import { useContext } from "react";
import { CursorTextContext } from "../../hooks/cursorProvider";
import LinkWithLoader from "../loader/LinkLoader";
import { Link } from "react-router-dom";

const Footer = () => {

    const {setText} = useContext(CursorTextContext);
    
    return (
        <footer className="flex flex-col gap-20 px-[10px] py-6 justify-center items-center">
                    <div className="flex flex-row gap-[10px] w-full items-center ">
                        <div className="h-px w-full bg-neutral-900"></div>
                        <Body className="uppercase">Contact</Body>
                        <div className="h-px w-full bg-neutral-900"></div>
                    </div>
                    <div className="flex gap-[60px]">
                        <Display>Let's</Display>
                        <span className="relative overflow-hidden">
                            <Link onMouseOver={() => setText("text me")} onMouseOut={() => setText("")} to="mailto:mathieu@souflis.fr">
                                <Display  className="before:content-['Connect'] before:absolute before:-top-full before:text-indigo-600 hover:translate-y-full transition-all duration-300 ease-slow"><span className="text-indigo-500">Connect</span></Display>
                            </Link>
                        </span>
                    </div>
                <div className="w-full">
                    <div className="flex flex-row gap-[10px] w-full items-center ">
                        <div className="h-px w-full bg-neutral-900"></div>
                        <Body className="uppercase">Links</Body>
                        <div className="h-px w-full bg-neutral-900"></div>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center p-[10px]">
                        <LinkWithLoader to="/" className="w-full">
                                <Icon name="mathieusouflis" />
                        </LinkWithLoader>
                        <div className="flex flex-row gap-[30px]">
                            <Cta URL="https://www.linkedin.com/in/mathieusouflis/" iconName="linkedin">Linkedin</Cta>
                            <Cta URL="https://www.bento.me/mathieusouflis/" iconName="bento">Bento</Cta>
                        </div>
                        <div className="flex justify-end w-full">
                            <Cta URL="/legal">Legal Mentions</Cta>
                        </div>
                    </div>
                </div>
        </footer>
    );
}

export default Footer