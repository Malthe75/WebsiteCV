import { Navbar } from "./Navbar";
import { useState } from "react";
import { schoolProjects } from "./Details/Projects";
import { useParams } from "react-router-dom";

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const project = schoolProjects.find((p) => p.id === projectId);
  // if (!project) {
  //   return <div>Project not found</div>;
  // }

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> {/* OUTSIDE */}
      <div className="pt-16 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl mt-15 font-bold mb-4">{project?.title}</h1>
        {project?.overview && (
          <p className="text-gray-700 text-lg mb-6">{project.overview}</p>
        )}

        {/* METADATA BAR */}
        <div
          className="mx-auto w-fit flex flex-col md:flex-row items-center 
                gap-4 mb-10 px-4 py-3 rounded-lg border border-gray-800 
                bg-gray-900/40"
        >
          {/* GitHub button */}
          {project?.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="px-5 py-2 bg-blue-600 rounded-full hover:bg-blue-500 transition"
            >
              GitHub
            </a>
          )}

          {/* Divider dot (hidden on mobile) */}
          <span className="hidden md:block text-gray-500">•</span>

          {/* Tech stack chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {project?.techStack.map((t, i) => (
              <span
                key={i}
                className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {project?.images && project.images.length > 0 && (
          <img
            src={project.images[0]}
            alt={project.title}
            className="rounded-xl shadow-lg mx-auto max-h-96 object-contain mb-12"
          />
        )}
      </div>
    </div>
  );
};
