import image5 from "../assets/images/image5.jpg";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-container">
        <div className="about-image">
          <img src={image5} alt="About" />
        </div>

        <div className="about-content">
          <h3>Who am I?</h3>

          <p>
            Hello! I'm <strong>Saumya Dubey</strong>, a passionate Full Stack 
            Developer who enjoys creating modern, responsive, and visually
            appealing websites using React, HTML, CSS, and JavaScript.
          </p>

          <p>
            I love turning ideas into interactive web applications with clean
            code, smooth animations, and excellent user experiences.
          </p>

          <div className="about-details">
            <div>
              <strong>Name:</strong>
              <p>Saumya Dubey</p>
            </div>

            <div>
              <strong>Email:</strong>
              <p>your@email.com</p>
            </div>

            <div>
              <strong>Location:</strong>
              <p>Lucknow, India</p>
            </div>

            <div>
              <strong>Education:</strong>
              <p>B.Tech (I.T.)</p>
            </div>
          </div>

          <a href="#" className="btn">
            Download CV
          </a>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-card glass">
          <h3>🎓 Education</h3>
          <h4>B.Tech in Information Technology</h4>
          <p>2024 - Present</p>
        </div>

        <div className="timeline-card glass">
          <h3>💼 Internship</h3>
          <h4>Full Stack Development</h4>
          <p>Worked on responsive web applications .</p>
        </div>

        <div className="timeline-card glass">
          <h3>🚀 Goal</h3>
          <h4>Full Stack Developer</h4>
          <p>Building scalable and modern web applications with modern technologies.</p>
        </div>
      </div>
    </section>
  );
}

export default About;