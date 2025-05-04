import React from 'react'
import ProjectCard from './ProjectCard';
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold"> Projects </h1>
<div className='py-12 px-8 flex flex-wrap gap-5'>

  <ProjectCard
   title="Blogging website"
   main="this is a blogging website created in next.js and used some component library"/>
  <ProjectCard 
   title="Snake Game" 
   main="this is a snake game created by using java and used some component library"/>
  <ProjectCard
   title="Job Portal" 
   main="this is a website created by using MERN STACK and used TailwindCSS"/>
  <ProjectCard 
  title="Course Management" 
  main="this is a website created by using MERN STACK and used TailwindCSS"/>
</div>
    </div>
  );
}

export default Projects
