import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android Developer Trainee</h4>
                <h5>Croma Campus, Noida</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed 3+ native Android applications using Kotlin, Jetpack
              Compose and MVVM architecture. Integrated Firebase Authentication,
              Realtime Database and Firestore. Implemented responsive Android
              interfaces and real-time application functionality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android Developer</h4>
                <h5>QVK Deep Food Pvt. Ltd., Bhilwara</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a food e-commerce application and contributed to Android
              development projects. Worked with development teams on application
              features, testing and implementation. Gained practical experience
              in business software and application development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT & Application Development</h4>
                <h5>Ostwal Group of Industries, Bhilwara</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed a company website using AI-assisted development tools and
              modern web technologies. Automated SAP business processes and
              repetitive tasks using Python, Playwright and n8n. Contributed to a
              farmer-focused fertilizer application project and supported
              enterprise software operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
