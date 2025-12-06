// components/HomeLayout.tsx (new file)
import { useState } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { ProjectCards } from "./sections/ProjectCards";

function HomeLayout() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-gray-950 text-gray-200`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <ProjectCards />
      </div>
    </>
  );
}

export default HomeLayout;
