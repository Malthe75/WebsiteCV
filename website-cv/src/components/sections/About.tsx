import { RevealOnScroll } from "../revealOnScroll";
import { TimelineEntries } from "../Details/Timeline";
export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS"];
  const backendSkills = ["Java", "C#", "MongoDB", "Python", "PHP", "DA?"];

  return (
    <section
      id="about"
      className="min-h-100 flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-8xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8">
            <p className="text-gray-200 text-center max-w-140 mx-auto">
              I’ve spent several years studying software technology and building
              a solid foundation across many areas of development. But during
              the last year, things have really clicked — coding has shifted
              from something I learned in class to something I immerse myself in
              daily, both at work and in my free time.
            </p>

            <div className="w-full max-w-2xl mx-auto mt-10">
              <div className="flex rounded-full border border-white/10 overflow-hidden backdrop-blur p-6">
                {/* LEFT – FRONTEND */}
                <div className="flex-1 pr-6 border-r border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-center">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT – BACKEND */}
                <div className="flex-1 pl-6">
                  <h3 className="text-xl font-bold mb-4 text-center">
                    Backend
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm"
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
                  <li
                    key={index}
                    className="relative flex flex-col items-center"
                  >
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
        </div>
      </RevealOnScroll>
    </section>
  );
};
