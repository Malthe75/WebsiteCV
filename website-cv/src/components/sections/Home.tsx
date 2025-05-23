import { RevealOnScroll } from "../revealOnScroll"

export const Home = () => {
    return(
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent leading-right">
                        Malthe Feddern
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        "Analytical, curious, and creatively minded"
                    </p>
                    
                    <div className="flex flex-col items-center space-y-4">
                        <div className="space-x-4">
                            <a href="#about" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]
                                inline-flex justify-center items-center min-w-[150px] text-center">Who am I</a>
                            <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]
                                inline-flex justify-center items-center min-w-[150px] text-center">View projects</a>
                        </div>
                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">Contact me</a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}