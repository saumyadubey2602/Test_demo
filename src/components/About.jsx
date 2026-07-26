import image5 from "../assets/images/image2.jpg";

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
            Hello! I'm <strong>Saumya Dubey</strong>, Full Stack Developer with experience in building responsive, end-to-end web applications. I'm also passionate about Data Science, leveraging data analysis and machine learning concepts to create impactful solutions.
          </p>

          <p>
            Full Stack Developer | Data Science Enthusiast | Passionate about building innovative web applications and data-driven solutions.
          </p>

          <div className="about-details">
            <div>
              <strong>Name:</strong>
              <p>Saumya Dubey</p>
            </div>

            <div>
              <strong>Email:</strong>
              <p>dubeysaumya2726@gmail.com</p>
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
          <h4>Full Stack Developer | Data Scientist</h4>
          <p>Full Stack Developer | Data Science Enthusiast | Passionate about building innovative web applications and data-driven solutions.</p>
        </div>
      </div>
    </section>
  );
}

export default About;