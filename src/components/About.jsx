import Resume from "@/assets/ResumeAyushmancopy.pdf";
import {Code , User , Briefcase} from "lucide-react";

export const About=()=>{
    return(
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                <h3 className="text-3xl font-semibold">Passionate App Developer with a strong interest in Web Development </h3>
                <p className="text-muted-foreground">
                    I specialize in creating cross-platform applications using Flutter, 
                    and making them responsive accessible , and performant
                </p>
                <p className="text-muted-foreground">
                    I am Passionate about creating elegant solutions to complex problems , and 
                    I'm constantly learning new technologies and techniques to stay at the 
                    forefront of the ever-evolving landscape of software development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
                    <a href="#contact" className="cosmic-button">
                        {" "}
                        Get in Touch
                    </a>
                    <a href={Resume} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        {" "}
                        Download Resume
                    </a>
                </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">Application Development</h4>
                                <p className="text-muted-foreground">
                                    Creating Responsive applications with modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Designing intutive and user-friendly interfaces and seamless user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">Project Management</h4>
                                <p className="text-muted-foreground">
                                    Leading projects from conception to completion with agile methodologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}