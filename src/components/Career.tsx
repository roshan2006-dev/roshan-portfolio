import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technology Job Simulation</h4>
                <h5>Deloitte Australia (Forage)</h5>
              </div>
              <h3>Dec 2025</h3>
            </div>
            <p>
              Completed professional job simulation involving software development and coding exercises. Authored comprehensive development proposal for a private telemetry dashboard including project scope, timeline, and support requirements. Developed skills in client communication, technical documentation, and project planning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Job Simulation</h4>
                <h5>JPMorgan Chase & Co. (Forage)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on backend engineering tasks simulating real-world software development workflows. Built and understood RESTful APIs using Java and Spring-based concepts. Integrated H2 in-memory database for data persistence and testing. Followed industry-style project structure, version control, and debugging practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science (AIML)</h4>
                <h5>CMR College of Engineering and Technology</h5>
              </div>
              <h3>2024-2028</h3>
            </div>
            <p>
              Currently pursuing degree with CGPA of 8.18/10. Relevant coursework includes Data Structures, OOP, Operating Systems, DBMS, AI/ML Fundamentals, and Cybersecurity Basics. Building strong foundation in software development principles and practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;