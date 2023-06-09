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
        <div className="bg-primary border-t-transparent"> 
            <h3 className="text-white mb-6 text-2xl">SKILLS</h3>
            <div className="flex flex-col md:flex-row p-5 justify-around bg-primary gap-5">
                {skills}
            </div> 
        </div>

    )
}


