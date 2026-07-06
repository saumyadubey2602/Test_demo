import certificate1 from "../assets/images/image10.png";
import certificate2 from "../assets/images/image11.png";
import certificate3 from "../assets/images/image12.png";

function Certificate() {
  return (
    <>
      <section className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">My Certificates</h1>
          <p className="text-muted">
            Here are some of my professional certifications.
          </p>
        </div>

        <div className="row g-4">

          {/* Certificate 1 */}
          <div className="col-lg-6 col-md-6">
            <div className="card shadow h-100">
              <img
                src={certificate1}
                className="card-img-top"
                alt="IBM Certificate"
              />
              <div className="card-body">
                <h5 className="card-title">CYBERGEEK'26</h5>
                <p className="card-text text-muted">
                  IIIT ALAHABAD CERTIFICATE.
                </p>
              </div>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="col-lg-6 col-md-6">
            <div className="card shadow h-100">
              <img
                src={certificate2}
                className="card-img-top"
                alt="Coursera Certificate"
              />
              <div className="card-body">
                <h5 className="card-title">SQL and RELATIONAL DATABASES 101</h5>
                <p className="card-text text-muted">
                 IBM DEVELOPER SKILLS NETWORK.
                </p>
              </div>
            </div>
          </div>

          {/* Certificate 3 */}
          <div className="col-lg-6 col-md-6">
            <div className="card shadow h-100">
              <img
                src={certificate3}
                className="card-img-top"
                alt="IBM Cloud Computing"
              />
              <div className="card-body">
                <h5 className="card-title">Python Programming</h5>
                <p className="card-text text-muted">
                  GEEKSFORGEEKS (GFG) CERTIFICATION.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
}

export default Certificate;