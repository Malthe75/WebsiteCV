
import { Navbar } from './Navbar';
import { useState } from 'react';

export const ProjectDetail = () => {
const [menuOpen, setMenuOpen] = useState(false);

    return (
        
<div className={`min-h-screen bg-gray-950 text-gray-200`}>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

    <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl font-bold text-white">TITLE</h1>
            <p className="text-gray-400 mt-4">This is a detailed description of the project. It includes all the necessary information about the project, its purpose, and its features.</p>
            <a className="text-sky-400 underline hover:text-sky-300" href='https://github.com/T5-1/Semesterprojekt' target="_blank" rel="noopener noreferrer"> Github link</a>
        </div>
    </section>
</div>
        

        
    );
}