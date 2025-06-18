import { ProjectsCard } from "./ProjectsCard";
import { projects } from "../data/projectsData";

export const Projects = () => {
    return (
        <section className="py-16 px-8 bg-gray-100">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((proj, index) => (
                    <ProjectsCard index={index} project={proj} />
                ))}
            </div>
        </section>
    )
}
