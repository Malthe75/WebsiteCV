
import { Navbar } from './Navbar';
import { useState } from 'react';
import { projects } from './Details/Projects';
import { useParams } from 'react-router-dom';


export const ProjectDetail: React.FC = () => {
    const {projectId} = useParams<{ projectId: string }>();

    // Find the project by ID
    const project = projects.find(p => p.id === projectId);
    if (!project) {
        return <div>Project not found</div>;
    }

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <div className={`min-h-screen bg-gray-950 text-gray-200`}>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <section className="min-h-screen flex items-center justify-center relative">
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl font-bold text-white">{project.title}</h1>
                    <p className="text-gray-400 mt-4">{project.overview}</p>
                    <a className="text-sky-400 underline hover:text-sky-300" href={project.githubUrl} target="_blank" rel="noopener noreferrer"> Github link</a>
                </div>
            </section>
        </div>



    );
}