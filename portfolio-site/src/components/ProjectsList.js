import Project from "./Project"
import projectsData from "../utils/projectsData"

export default function ProjectsList() {
    
    const data = projectsData.projects
    const projects = data.map(item => {
        return (<Project 
            key={item.id}
            {...item}
        />)
    })
    
    return (
        <div id="projects" className="bg-primary border-t-transparent pb-6"> 
            <h3 className="text-white mb-10 text-2xl font-bold">PROJECTS</h3>
            {projects}
            <hr className="mt-12 mb-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50" />
        </div>
    )
}