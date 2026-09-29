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
              Completed intensive project-based training in native Android development. Developed 3+ native Android applications using Kotlin, Jetpack Compose and MVVM, including a real-estate app with real-time chat and live property listings. Integrated Firebase Auth, Realtime Database and Firestore.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Executive – AI Automation</h4>
                <h5>QVK Deep Food Pvt. Ltd., Bhilwara</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built an n8n workflow that creates Purchase Orders in Odoo ERP from Telegram and Excel inputs, automating vendor creation and product matching. Reduced manual purchase entry and human error for FMCG/inventory operations. Administered Odoo ERP and Shopify, integrating them with automation workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Automation & Application Dev</h4>
                <h5>Ostwal Group of Industries, Bhilwara</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built a Playwright automation pipeline that creates supplier and customer Business Partners in SAP S/4HANA directly from Excel data. Automated recurring business tasks using Playwright & n8n. Built the company website using AI-assisted development and contributed to a farmer-focused fertilizer application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
