import React from 'react'
import ProjectCard from '@/components/Projects/ProjectCard'

const ProjectsPage = () => {
  return (
    <div className="w-[400px]">
        <div className="my-4">
            <ProjectCard/>
        </div>
        <div className="my-4">
            <ProjectCard/>
        </div>
        <div className="my-4">
            <ProjectCard/>
        </div>
        <div className="my-4">
            <ProjectCard/>
        </div>
        <div className="my-4">
            <ProjectCard/>
        </div>
    </div>
  )
}

export default ProjectsPage
