import React from 'react'
import ProjectCard from '@/components/Projects/ProjectCard'
import {data} from '@/app/data/data'

const ProjectsPage = () => {
  return (
    <div className="w-[400px]">
        {data.map((item,index)=>(
            <div key={index} className="my-4">
            <ProjectCard
                projectName={item.projectName}
                description={item.description}
                techStacks={item.techStacks}
                github={item.github}
                imageUrls={item.imageurls}
                weburl={item.weburl}
                redirecturl={item.redirecturl}
            />
            </div>
        ))}
    </div>
  )
}

export default ProjectsPage
