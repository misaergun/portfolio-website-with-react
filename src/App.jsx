import About from "./components/About";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-pink-600 selection:text-pink-900 ">
            <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            </div>

            <div className="container mx-auto px-8">
                <Navbar />
                <div className="mx-auto my-8 max-w-3xl">
                    <Hero />
                </div>
                <div className="mx-auto my-8 max-w-3xl">
                    <About />
                </div>
                <div className="mx-auto my-8 max-w-3xl">
                    <Technologies />
                </div>
                <div className="mx-auto my-8 max-w-3xl">
                    <Experiences />
                </div>
                <div className="mx-auto my-8 max-w-3xl">
                    <Projects />
                </div>
            </div>
        </div>
    );
};


export default App;
