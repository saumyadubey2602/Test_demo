import project1 from "../assets/images/image8.jpg";
import project2 from "../assets/images/image9.jpg";
import project3 from "../assets/images/1.png";

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
      description: "A Bank Management System (BMS) is a software application that automates and manages the day-to-day operations of a bank. It helps banks securely handle customer accounts, transactions, loans, deposits, withdrawals, and other financial services while maintaining accurate records.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: project3,
      title: "FinStack",
      description: "Developed FinStack, a full-stack personal finance tracker that enables users to manage expenses, monitor budgets, and visualize financial trends through interactive dashboards. This project demonstrates my skills in Full Stack Development and my growing interest in Data Science through data analysis and visualization.",
      tech: ["HTML", "CSS", "JavaScript","React","MySQL"],
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