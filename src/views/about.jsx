import { useContext, useEffect } from "react";
import { Body, Display, Header2Semibold } from "../components/typography/typography";
import { CursorTextContext } from "../hooks/cursorProvider";

const About = () => {
    const { setText } = useContext(CursorTextContext);
    useEffect(() => {
        setText('')
        window.scrollTo(0, 0);
      }, []);

    return <>
        <div className="h-screen flex items-center justify-center px-5 ">
            <Display className="text-center max-w-[1400px]">Designing & developing with passion to create unforgettable digital experiences.</Display>
        </div>
        <div className="min-h-screen flex flex-col items-center justify-center px-5">
            <div className="w-[926px] pb-96 grid grid-flow-col gap-12">
                <img className="pt-16 sticky top-0 w-full aspect-[16/18] object-cover" src="/assets/Mathieu Souflis.png" alt="the most beautifull man (mathieu souflis)" />
                <div className="pt-16 flex flex-col gap-5 max-w-[453px]">
                    <Body className="leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorem voluptates veritatis accusamus nulla itaque nisi aliquam labore velit sunt.</Body>
                    <Body className="leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorem voluptates veritatis accusamus nulla itaque nisi aliquam labore velit sunt.</Body>
                    <Body className="leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorem voluptates veritatis accusamus nulla itaque nisi aliquam labore velit sunt.</Body>
                    <Body className="leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorem voluptates veritatis accusamus nulla itaque nisi aliquam labore velit sunt.</Body>
                    <Body className="leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui labore dolore, molestias facilis voluptates reiciendis cumque unde nemo, natus dicta deserunt et vero, dignissimos repellat! Illum quasi, doloribus assumenda mollitia corporis, at sunt asperiores voluptas itaque aperiam molestiae neque adipisci.</Body>
                    <Body className="leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorem voluptates veritatis accusamus nulla itaque nisi aliquam labore velit sunt.</Body>
                    <Body className="leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui labore dolore, molestias facilis voluptates reiciendis cumque unde nemo, natus dicta deserunt et vero, dignissimos repellat! Illum quasi, doloribus assumenda mollitia corporis, at sunt asperiores voluptas itaque aperiam molestiae neque adipisci.</Body>
                </div>
            </div>
            <div className="w-[926px] grid grid-flow-col gap-12 pb-28">
                <div className="flex flex-col gap-52">
                    <div className="flex flex-row gap-12">
                        <Header2Semibold>01</Header2Semibold>
                        <div className="flex flex-col gap-12">
                            <Header2Semibold className="uppercase">Experiences</Header2Semibold>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">Freelance_._Soon/Soon</Body>
                                    <Body className="uppercase">Soon...</Body>
                                    <Body className="uppercase text-neutral-500">Paris_/France</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">Freelance_._2023/2023_(2Weeks)</Body>
                                    <Body className="uppercase">Observer intern</Body>
                                    <Body className="uppercase text-neutral-500">Paris_/France</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">Redpelicans._2022/2022_(1Week)</Body>
                                    <Body className="uppercase">Observer intern</Body>
                                    <Body className="uppercase text-neutral-500">Paris_/France</Body>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <Header2Semibold>02</Header2Semibold>
                        <div className="flex flex-col gap-12">
                            <Header2Semibold className="uppercase">Formation</Header2Semibold>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">HETIC_._2024/2027</Body>
                                    <Body className="uppercase">Bachelor developpement web</Body>
                                    <Body className="uppercase text-neutral-500">Paris_/France</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">La source._2022/2024</Body>
                                    <Body className="uppercase">Baccaloreat General</Body>
                                    <Body className="uppercase text-neutral-500">Paris_/France</Body>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <Header2Semibold>03</Header2Semibold>
                        <div className="flex flex-col gap-12">
                            <Header2Semibold className="uppercase">Skills</Header2Semibold>
                            <div className="flex flex-col gap-[20px]">
                                <Body className="uppercase">Figma</Body>
                                <Body className="uppercase">Javascript</Body>
                                <Body className="uppercase">ReactJs</Body>
                                <Body className="uppercase">ThreeJs - Basics</Body>
                                <Body className="uppercase">TailwindCSS</Body>
                                <Body className="uppercase">NodeJs</Body>
                                <Body className="uppercase">ExpressJs</Body>
                                <Body className="uppercase">Jwt</Body>
                                <Body className="uppercase">Prisma</Body>
                                <Body className="uppercase">SQL</Body>
                                <Body className="uppercase">Mongo - Basics</Body>
                                <Body className="uppercase">Python</Body>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <Header2Semibold>04</Header2Semibold>
                        <div className="flex flex-col gap-12">
                            <Header2Semibold className="uppercase">Soft Skills</Header2Semibold>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I take initiatives</Body>
                                    <Body className="uppercase">Autonomous</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I like diving deeper</Body>
                                    <Body className="uppercase">Passionate</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I enjoy learning new skills</Body>
                                    <Body className="uppercase">Curious</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I develop innovative ideas</Body>
                                    <Body className="uppercase">Creative</Body>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <Header2Semibold>05</Header2Semibold>
                        <div className="flex flex-col gap-12">
                            <Header2Semibold className="uppercase">Interest</Header2Semibold>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I am eating ui/ux posts</Body>
                                    <Body className="uppercase">Ui / Ux</Body>
                                    <Body className="uppercase text-neutral-500">And websites</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I am a huge consomator</Body>
                                    <Body className="uppercase">Music</Body>
                                    <Body className="uppercase text-neutral-500">152.000_Minutes_(2024)</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">I stay updated</Body>
                                    <Body className="uppercase">Technology</Body>
                                    <Body className="uppercase text-neutral-500">Mwah</Body>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <Header2Semibold>06</Header2Semibold>
                        <div className="flex flex-col gap-12">
                            <Header2Semibold className="uppercase">Languages</Header2Semibold>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">Native</Body>
                                    <Body className="uppercase">French</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">C1 Grade</Body>
                                    <Body className="uppercase">English</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">A Bit</Body>
                                    <Body className="uppercase">Spanish</Body>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <Body className="uppercase text-neutral-500">For the joke</Body>
                                    <Body className="uppercase">Javascript</Body>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
export default About;