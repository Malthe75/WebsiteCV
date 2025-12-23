import { RevealOnScroll } from "../revealOnScroll";
import { TimelineEntries } from "../Details/Timeline";
export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
  ];
  const backendSkills = [
    "C#",
    "Java",
    "Unity",
    "PostgreSQL",
    "Docker",
    "AWS",
    "MongoDB",
    "Python",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-8xl mx-auto px-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent text-center">
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

            <div className="w-full max-w-3xl mx-auto mt-10">
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
          <div className="mt-10 w-full">
            <div className="relative w-full h-40">
              {/* Line */}
              <div className="absolute top-1/2 w-full border-t border-gray-600"></div>

              <ul className="flex justify-between px-4">
                {TimelineEntries.map((item, index) => {
                  const isTop = index % 2 === 0;

                  return (
                    <li
                      key={index}
                      className="
              relative
              w-52
              h-40
              flex
              flex-col
              items-center
            "
                    >
                      {/* TOP */}
                      {isTop && (
                        <div className="absolute top-0 left-0 w-full h-1/2 flex flex-col justify-end items-center px-2">
                          <p className="text-xs text-gray-400 text-center">
                            {item.description}
                          </p>
                          <p className="mb-2 text-sm text-gray-100 font-semibold">
                            {item.year} – {item.label}
                          </p>
                        </div>
                      )}

                      {/* Dot */}
                      <div
                        className="
              absolute 
              top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2
              w-4 h-4 bg-blue-500 rounded-full 
              border-4 border-gray-900
            "
                      ></div>

                      {/* BOTTOM */}
                      {!isTop && (
                        <div className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col justify-start items-center px-2">
                          <p className="mt-2 text-sm text-gray-100 font-semibold">
                            {item.year} – {item.label}
                          </p>

                          <p className="text-xs text-gray-400 text-center">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
