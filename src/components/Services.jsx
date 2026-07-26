import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Building modern, responsive, and high-performance websites using the latest web technologies.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description:
        "Creating interactive user interfaces with React, HTML, CSS, and JavaScript.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Data Science",
      description:
        "Enjoy building scalable applications and extracting insights from data.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description:
        "Designing websites that look great and work perfectly on desktop, tablet, and mobile devices.",
    },
  ];

  return (
    <section className="services" id="services">
      <h2 className="section-title">
        My <span>Services</span>
      </h2>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card glass" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;