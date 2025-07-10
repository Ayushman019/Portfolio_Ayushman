import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Flutter", category: "Frontend" },
  { name: "Dart", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS/Tailwind CSS", category: "Frontend" },
  { name: "Data Structures and Algorithms", category: "Additional_Skills" },
  { name: "Xcode", category: "Additional_Skills" },
  { name: "Android Studio", category: "Additional_Skills" },
  { name: "AWS", category: "Additional_Skills" },
  { name: "Firebase Realtime Database", category: "Backend" },
  { name: "SQL", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Git/GitHub", category: "Additional_Skills" },
];

const categories = ["all", "Frontend", "Backend", "Additional_Skills"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
