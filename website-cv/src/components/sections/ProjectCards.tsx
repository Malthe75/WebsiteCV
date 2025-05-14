import { RevealOnScroll } from "../revealOnScroll"
import { projects } from "../Details/Projects";
import type { Project } from "../Details/Projects"; // Make sure Project is exported from Projects.ts

export const ProjectCards =  () => {
    return (
        <section id="ProjectCards" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent text-center"> Featured Projects </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}


                    </div>
                </div>
            </RevealOnScroll>
        </section>

    );
};

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.smallDesc}</p>
            <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, key) =>
                (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                </span>
                ))}
            </div>
            <div className="flex justify-between items-center mt-8 font-bold">
                <a href={`/project/${project.id}`} className="text-blue-400 hover:text-blue-300 transition-colors"> View Project </a>
            </div>
        </div>
    );
};