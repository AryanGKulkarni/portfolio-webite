import React from 'react'
import ProjectCard from '@/components/Projects/ProjectCard'

const ProjectsPage = () => {
  return (
    <div className="w-[400px]">
        <div className="my-4">
        <ProjectCard
            projectName="My Project"
            description={[
                "Lorem ipsum dolor sit amet.",
                "Consectetur adipiscing elit.",
                "Sed do eiusmod tempor incididunt.",
            ]}
            techStacks={["React", "Next.js", "TypeScript"]}
            github=''
            imageUrls={[""]}
            weburl=''
            redirecturl=''
        />
        </div>
    </div>
  )
}

export default ProjectsPage
