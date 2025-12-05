
import { Navbar } from './Navbar';
import { useState } from 'react';
import { schoolProjects } from './Details/Projects';
import { useParams } from 'react-router-dom';


export const ProjectDetail: React.FC = () => {
    const {projectId} = useParams<{ projectId: string }>();

    // Find the project by ID
    const project = schoolProjects.find(p => p.id === projectId);
    if (!project) {
        return <div>Project not found</div>;
    }

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <div className={`min-h-screen bg-gray-950 text-gray-200`}>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <section className="min-h-screen flex items-center justify-center relative">
                <div className="text-center z-10 px-4 ">
                    <h1 className="text-5xl font-bold text-white mb-8">{project.title}</h1>

                    {/* BOXES */}
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="min-h-[200px] max-w-[600px] max-h-[300px] p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all overflow-auto">
                            <h3 className="text-xl font-bold mb-2">Overview</h3>
                            <p className="text-gray-400 mb-4 break-words">
                                {project.overview}
                            </p>
                        </div>

                        {/* LINK BOX */}
                        <div className="min-h-[200px] max-w-[600px] max-h-[300px] p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all overflow-auto">
                            <h3 className="text-xl font-bold mb-2">Links</h3>
                            <p className="text-gray-400 mb-4 break-words">
                                <p>
                                    Github:&
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        {project.githubUrl}
                                    </a>
                                </p>
                            </p>
                        </div>

                        {/* TECH STACK BOX */}
                        <div className="min-h-[200px] max-w-[500px] max-h-[300px] p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all overflow-auto">
                            <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all mb-2 whitespace-nowrap">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* FEATURES BOX */}
                        <div className="min-h-[200px] max-w-[500px] max-h-[300px] p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all overflow-auto">
                            <h3 className="text-xl font-bold mb-2">Features</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.features.map((feature, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all mb-2 whitespace-nowrap">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Challenges */}
                        {project.challenges &&(
                        <div className="min-h-[200px] max-w-[600px] max-h-[300px] p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all overflow-auto">
                            <h3 className="text-xl font-bold mb-2">Overview</h3>
                            <p className="text-gray-400 mb-4 break-words">
                                {project.challenges}
                            </p>
                        </div>
                        )}
                        {/* Learnings */}
                        {project.learnings &&(
                        <div className="min-h-[200px] max-w-[600px] max-h-[300px] p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all overflow-auto">
                            <h3 className="text-xl font-bold mb-2">Overview</h3>
                            <p className="text-gray-400 mb-4 break-words">
                                {project.learnings}
                            </p>
                        </div>
                        )}
                        {/* Decisions */}
                        {project.decisions &&(
                        <div className="min-h-[200px] max-w-[600px] max-h-[300px] p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all overflow-auto">
                            <h3 className="text-xl font-bold mb-2">Overview</h3>
                            <p className="text-gray-400 mb-4 break-words">
                                {project.decisions}
                            </p>
                        </div>
                        )}
                        {/* Future */}
                        {project.decisions &&(
                        <div className="min-h-[200px] max-w-[600px] max-h-[300px] p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all overflow-auto">
                            <h3 className="text-xl font-bold mb-2">Overview</h3>
                            <p className="text-gray-400 mb-4 break-words">
                                {project.decisions}
                            </p>
                        </div>
                        )}
                    </div>
                </div>
            </section>
        </div>



    );
}