import { ThemeToggle } from "@/components/theme-toggle";
import {StarBackground} from"@/components/star-background";
import {NavBar} from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";    
import {About} from "@/components/About";
import {Skills} from "@/components/Skills";
import {Projects} from "@/components/Projects";
import {Contact} from "@/components/contact";
import {Footer} from "@/components/footer";
export const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle*/}
        < ThemeToggle />
        {/*Background Effects */}
        <StarBackground />
        {/* NavBar*/}
        <NavBar/>
        {/* Main Content*/}
        <main>
            <HeroSection />
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </main>
        {/* Footer*/}
        <Footer/>
    </div>;
}