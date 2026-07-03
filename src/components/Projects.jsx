import project1 from "../assets/images/image8.jpg";
import project2 from "../assets/images/image9.jpg";

function Projects() {
  const projects = [
    {
      image: project1,
      title: "Brainsync_AI",
      description: "AI-powered meeting assistant that records, transcribes, summarizes conversations, and extracts action items to improve productivity.",
      tech: ["React.js", "Node.js", "Chroma db","HTML","REST APIs"],
    },
    
    
    {
      image: project2,
      title: "Bank Mangaement System",
      description: "A simple bank transaction system",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    
    
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card glass" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href="#" className="btn">
                  Live Demo
                </a>

                <a href="#" className="btn-outline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;