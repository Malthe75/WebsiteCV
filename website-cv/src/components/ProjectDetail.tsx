import { Navbar } from "./Navbar";
import { useState, useEffect } from "react";
import {
  schoolProjects,
  personalProjects,
  workProjects,
} from "./Details/Projects";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // v10+ React import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const allProjects = [...schoolProjects, ...personalProjects, ...workProjects];

  const project = allProjects.find((p) => p.id === projectId);
  const [menuOpen, setMenuOpen] = useState(false);

  const [fullImage, setFullImage] = useState<string | null>(null);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="pt-16 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl mt-15 mb-4 font-bold bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent text-center">
          {project?.title}
        </h1>
        {project?.overview && (
          <p className="text-gray-300 text-lg mb-6">{project.overview}</p>
        )}

        {/* METADATA BAR */}
        <div
          className="mx-auto w-fit flex flex-col md:flex-row items-center 
                gap-4 mb-10 px-4 py-3 rounded-lg border border-gray-800 
                bg-gray-900/40"
        >
          {project?.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              className="px-5 py-2 bg-blue-600 rounded-full hover:bg-blue-500 transition"
            >
              GitHub
            </a>
          ) : (
            <span className="px-5 py-2 bg-gray-800 rounded-full text-gray-300">
              No Repository
            </span>
          )}

          <span className="hidden md:block text-gray-500">•</span>

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

        {/* SWIPER IMAGE VIEWER */}
        {/* SWIPER IMAGE VIEWER */}
        {project?.images && project.images.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            slidesPerView={1}
            className="max-w-3xl mx-auto mb-12"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="h-[400px] w-full flex items-center justify-center">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="max-h-full max-w-2xl object-contain rounded-xl shadow-lg cursor-zoom-in hover:opacity-80 transition"
                    onClick={() => setFullImage(img)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* FULLSCREEN MODAL */}
        {fullImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setFullImage(null)}
          >
            <img
              src={fullImage}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};
