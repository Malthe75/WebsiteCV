import { RevealOnScroll } from "../revealOnScroll";
import { TimelineEntries } from "../Details/Timeline";
export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS"];
  const backendSkills = ["Java", "C#", "MongoDB", "Python", "PHP"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8">
            <p className="text-gray-300 mb-6 text-center">
              Curious and driven software developer with a strong analytical
              mindset and a passion for learning. I enjoy working in
              collaborative environments and strive to deliver robust,
              clean-code solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <div className="rounded-xl p-6 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Horizontal Timeline */}
        <div className="mt-16 w-full">
          <div className="relative w-full border-t border-gray-600">
            <ul className="flex justify-between text-center mt-6 px-4">
              {TimelineEntries.map((item, index) => (
                <li key={index} className="relative flex flex-col items-center">
                  {/* Dot */}
                  <div className="w-4 h-4 bg-blue-500 rounded-full absolute -top-8 border-4 border-gray-900"></div>

                  {/* Label */}
                  <p className="text-sm text-gray-300 mt-2">
                    {item.year} - {item.label}
                  </p>
                  <p className="text-sm max-w-40">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
