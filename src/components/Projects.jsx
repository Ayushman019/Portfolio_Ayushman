const projects = [
  {
    id: 1,
    title: "Mindly – Mental Health Companion App",
    description:
      "A mental health companion app that provides daily mood tracking and support for individuals seeking to improve their well-being. It includes mood analytics and associated metrics.",
    tags: ["Flutter","Dart","Firebase", "REST API", "Data Visualization"],
    githubURL: "https://github.com/Ayushman019/Mindly",
  },
  {
    id: 2,
    title: "ElderlyCare+",
    description:
      "ElderlyCare is a healthcare website that helps elderly users manage health and medicine schedules. It integrates with a smart pill dispenser to automatically release medicine as per the user-defined schedule.",
    tags: ["React.js", "Node.js", "Embedded C", "MongoDB", "IoT"],
    githubURL: "https://github.com/Ayushman019/ElderlyCare",
  },
  {
    id: 3,
    title: "YouTube Data Analysis",
    description:
      "This project is a scalable Hadoop pipeline designed to analyze YouTube data and predict subscriber growth using ML. It includes feature engineering, EDA, and strategic visual insights.",
    tags: ["Hadoop", "Python", "scikit-learn", "Big Data Analysis"],
    githubURL: "https://github.com/Ayushman019/youtube-analysis-project",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one focuses on performance,
          problem-solving, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-secondary px-2 py-1 rounded text-xs text-primary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline font-medium hover:text-primary/80"
              >
                View GitHub Repository →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
