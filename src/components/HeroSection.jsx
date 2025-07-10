import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return(
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> {" "} 
                        Ayushman </span>
                    <span className="text-foreground opacity-0 animate-fade-in-delay-1">{" "} Rai</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I build user-focused cross-platform apps using Flutter, integrating Firebase, REST APIs, and data visualization for seamless experiences.
                    I combine strong UI/UX design with solid problem-solving skills, backed by a strong grasp of data structures and algorithms.
                    I'm passionate about turning real-world challenges into smart, human-centric solutions.
                </p>
            </div>
            {" "}
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                    View My Work
                </a>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
    );
};