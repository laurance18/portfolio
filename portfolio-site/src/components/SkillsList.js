import Skill from "./Skill";
import skillsData from "../utils/skillsData";

export default function SkillsList() {
    const data = skillsData.skills
    const skills = data.map(item => {
        return (<Skill 
            key={item.id}
            {...item}
        />)
    })

    return (
        // border-t-transparent to fix the border issue
        <div id="skills" className="bg-primary border-t-transparent pb-6"> 
            <h3 className="text-white mb-6 text-2xl font-bold">SKILLS</h3>
            <div className="flex flex-col flex-wrap justify-center items-center md:flex-row p-5 bg-primary gap-5">
                {skills}
            </div> 
            <hr className="mt-12 mb-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50" />
        </div>

    )
}


