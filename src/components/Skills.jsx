function Skills() {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "MySQL", level: "99%" },
    { name: "React", level: "50%" },
    { name: "Machine Learning", level: "60%" },
    { name: "GitHub", level: "80%" },
    { name: "Responsive Design", level: "90%" },
    { name: "Python", level: "70%" },

  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card glass" key={index}>
            <h3>{skill.name}</h3>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>
            </div>

            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;