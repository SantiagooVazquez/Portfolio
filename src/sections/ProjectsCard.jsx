export const ProjectsCard = ({ index, project }) => {
    return (
        <a key={index} className="p-4 bg-white rounded-xl shadow transform hover:scale-105 hover:shadow-2xl transition duration-300" href={project.git} target="_blank" rel="noopener noreferrer">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <p className="mt-1 text-sm text-gray-400">Techs: {project.tech}</p>
        </a>
    )
}
