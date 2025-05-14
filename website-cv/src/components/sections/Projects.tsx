import { RevealOnScroll } from "../revealOnScroll"
export const Projects = () => {
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent text-center"> Featured Projects </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                        hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2"> World Of Zuul - 1ˢᵗ Semester Project</h3>
                            <p className="text-gray-400 mb-4"> My first bigger project, which is a small game that targets a sustainable development goal </p>
                            <div className="flex flex-wrap gap-2">
                            {["Java", "Git"].map((tech, key) => 
                            (   <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                            </div>
                            <div className="flex justify-between items-center mt-8 font-bold">
                                <a href="/project/1" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                        hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2"> TV2 Credits Database - 2ⁿᵈ Semester Project</h3>
                            <p className="text-gray-400 mb-4"> A system, which aids in giving credits to contributors for TV2 programs  </p>
                            <div className="flex flex-wrap gap-2">
                            {["Java", "PostgreSQL", "Git"].map((tech, key) => 
                            (   <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                            </div>
                            <div className="flex justify-between items-center mt-8 font-bold">
                                <a href="#SpecificProject" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                        hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2"> Beermachine Cyber-Physical System - 3ʳᵈ Semester Project</h3>
                            <p className="text-gray-400 mb-4"> A cyber physical system that connects to a beer machine and a GUI with controls for the machine </p>
                            <div className="flex flex-wrap gap-2">
                            {["Java", "Git"].map((tech, key) => 
                            (   <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                            </div>
                            <div className="flex justify-between items-center mt-8 font-bold">
                                <a href="#SpecificProject" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                        hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2"> Drone Assembly Line - 4ᵗʰ Semester Project</h3>
                            <p className="text-gray-400 mb-4"> System which helps with communication between links in a drone assembly line</p>
                            <div className="flex flex-wrap gap-2">
                            {["Java", "Git", "AWS", "Docker"].map((tech, key) => 
                            (   <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                            </div>
                            <div className="flex justify-between items-center mt-8 font-bold">
                                <a href="#SpecificProject" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                        hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2"> Expert In Teams - 5ᵗʰ Semester Project</h3>
                            <p className="text-gray-400 mb-4"> An interdisciplinary non technical project, which focused on logistics for construction sites, with the help of scannable notes </p>
                            <div className="flex flex-wrap gap-2">
                            {[].map((tech, key) => 
                            (   <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                            </div>
                            <div className="flex justify-between items-center mt-8 font-bold">
                                <a href="#SpecificProject" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project </a>
                            </div>
                        </div>


                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                        hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2"> Unity Card Game - Final Semester Project</h3>
                            <p className="text-gray-400 mb-4"> A video card game made in Unity, with coding including assets made from the ground up</p>
                            <div className="flex flex-wrap gap-2">
                            {["Unity", "Aseprite", "Git"].map((tech, key) => 
                            (   <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                            </div>
                            <div className="flex justify-between items-center mt-8 font-bold">
                                <a href="#SpecificProject" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>

    );
}