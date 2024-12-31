import { useContext, useEffect } from 'react';
import Project from '../components/project/Project'
import { Display, Header1 } from '../components/typography/typography'
import { CursorTextContext } from '../hooks/cursorProvider';
import projectData from '../data/projectsData.json'

function Index() {
  const { setText } = useContext(CursorTextContext);
  const project1 = projectData["nova"]
  const project2 = projectData["deleguee"]
  const project3 = projectData["music-player"]
  const project4 = projectData["ai-research"]
  const project5 = projectData["lao-cha"]

  useEffect(() => {
    setText('')
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div onMouseOver={() => setText('SCROLL')} onMouseOut={() => setText('')} className="flex flex-col h-screen items-center justify-center">
        <Display className="text-center" >Mathieu souflis</Display>
      </div>
      <div className='flex px-[10px] py-[90px] bg-gray-900 justify-center'>
        <Display className="text-white after:bg-white"><span className='text-indigo-500'>UX / UI</span> Designer</Display>
      </div>
      <div className='px-5 py-[50px] flex flex-col gap-16 h-screen max-w-screen'>
        <Header1>Projects</Header1>
        <div className='flex flex-col justify-self-center h-4/5 max-w-full'>
          <Project className='border-t-0' number={1} projectName={project1.title} type={project1.types.join(" - ")} year={project1.year} videoUrl={project1.cover}/>
          <Project number={2} projectName={project2.title} type={project2.types.join(" - ")} year={project2.year} videoUrl={project2.cover}/>
          <Project number={3} projectName={project3.title} type={project3.types.join(" - ")} year={project3.year} videoUrl={project3.cover}/>
          <Project number={4} projectName={project4.title} type={project4.types.join(" - ")} year={project4.year} videoUrl={project4.cover}/>
          <Project className='border-b-0' number={5} projectName={project5.title} type={project5.types.join(" - ")} year={project5.year} videoUrl={project5.cover}/>
        </div>
      </div>
    </>
  )
}

export default Index
