import "./styles/Resume.css";
import { IoClose } from "react-icons/io5";

type ResumeProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Resume = ({ isOpen, onClose }: ResumeProps) => {
  return (
    <div className={`resume-overlay ${isOpen ? "resume-active" : ""}`}>
      <button className="resume-close" onClick={onClose} aria-label="Close Resume">
        <IoClose />
      </button>

      <div className="resume-page">
        {/* ===== HEADER ===== */}
        <div className="resume-header">
          <h1>Prem Devnath</h1>
          <p className="resume-subtitle">
            AI Automation Engineer | Android Developer
          </p>
          <div className="resume-header-contact">
            <span>Bhilwara, Rajasthan</span>
            <span>|</span>
            <a href="tel:+919351976676">+91-9351976676</a>
            <span>|</span>
            <a href="mailto:premdevnath875@gmail.com">premdevnath875@gmail.com</a>
            <span>|</span>
            <a href="https://github.com/premdevnath" target="_blank">
              GitHub
            </a>
            <span>|</span>
            <a href="https://in.linkedin.com/in/prem-devnath-6b8a61298" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>

        {/* ===== SUMMARY ===== */}
        <div className="resume-section">
          <h2 className="resume-section-title">Summary</h2>
          <p className="resume-summary">
            AI Automation Engineer who builds workflow and process automation on
            top of business systems (SAP S/4HANA, Odoo ERP). Hands-on with n8n,
            Playwright, Python, REST APIs and LLM/Gemini API integration, with
            production automations built at two companies. Also experienced in
            native Android development (Kotlin, Jetpack Compose) and full-stack
            web apps. Pursuing MCA in AI &amp; ML.
          </p>
        </div>

        {/* ===== TECHNICAL SKILLS ===== */}
        <div className="resume-section">
          <h2 className="resume-section-title">Technical Skills</h2>
          <div className="resume-skills-grid">
            <div className="resume-skill-row">
              <span className="resume-skill-label">Automation & AI</span>
              <span className="resume-skill-value">
                n8n, Playwright, Python, AI Agents, Gemini API, Webhooks,
                AI-assisted Development
              </span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-label">ERP & Business</span>
              <span className="resume-skill-value">
                SAP S/4HANA, SAP Sales Cloud, Odoo ERP, Excel
              </span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-label">Backend & APIs</span>
              <span className="resume-skill-value">
                REST APIs, JSON, Firebase, Supabase, Retrofit
              </span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-label">Languages</span>
              <span className="resume-skill-value">
                Python, JavaScript, Kotlin, Java, HTML, CSS, XML
              </span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-label">Android</span>
              <span className="resume-skill-value">
                Jetpack Compose, MVVM, Dagger Hilt, Room, Android Studio, Git /
                GitHub
              </span>
            </div>
          </div>
        </div>

        {/* ===== EXPERIENCE ===== */}
        <div className="resume-section">
          <h2 className="resume-section-title">Experience</h2>

          <div className="resume-exp-item">
            <div className="resume-exp-header">
              <div>
                <h3 className="resume-exp-role">
                  AI Automation & Application Development
                </h3>
                <p className="resume-exp-company">
                  Ostwal Group of Industries, Bhilwara
                </p>
              </div>
              <span className="resume-exp-date">Jun 2026 – Sep 2026</span>
            </div>
            <ul className="resume-exp-bullets">
              <li>
                Built a Playwright automation pipeline that creates supplier and
                customer Business Partners in SAP S/4HANA directly from Excel
                data, replacing manual data entry.
              </li>
              <li>
                Automated recurring business tasks using Playwright & n8n;
                supported SAP operations and business process automation.
              </li>
              <li>
                Built the company website using AI-assisted development and
                contributed to a farmer-focused fertilizer application.
              </li>
            </ul>
          </div>

          <div className="resume-exp-item">
            <div className="resume-exp-header">
              <div>
                <h3 className="resume-exp-role">
                  IT Executive – AI Automation
                </h3>
                <p className="resume-exp-company">
                  QVK Deep Food Pvt. Ltd., Bhilwara
                </p>
              </div>
              <span className="resume-exp-date">May 2025 – Jun 2026</span>
            </div>
            <ul className="resume-exp-bullets">
              <li>
                Built an n8n workflow that creates Purchase Orders in Odoo ERP
                from Telegram and Excel inputs: checks and creates vendors,
                extracts and splits Excel data, matches products, creates PO
                lines, and logs errors for unmatched items.
              </li>
              <li>
                Reduced manual purchase entry and human error for FMCG /
                inventory operations; open-sourced the workflow on GitHub.
              </li>
              <li>
                Administered Odoo ERP and Shopify for the company and integrated
                them with automation workflows.
              </li>
            </ul>
          </div>

          <div className="resume-exp-item">
            <div className="resume-exp-header">
              <div>
                <h3 className="resume-exp-role">Android Developer Trainee</h3>
                <p className="resume-exp-company">Croma Campus, Noida</p>
              </div>
              <span className="resume-exp-date">Apr 2024 – Sep 2024</span>
            </div>
            <ul className="resume-exp-bullets">
              <li>
                Completed intensive project-based training in native Android
                development, covering Kotlin, Jetpack Compose, MVVM
                architecture, and REST API / Firebase integration.
              </li>
              <li>
                Developed 3+ native Android applications using Kotlin, Jetpack
                Compose and MVVM, including Real One, a real-estate app with
                real-time chat and 500+ live property listings.
              </li>
              <li>
                Integrated Firebase Auth, Realtime Database and Firestore for
                secure, real-time app functionality.
              </li>
            </ul>
          </div>
        </div>

        {/* ===== PROJECTS ===== */}
        <div className="resume-section">
          <h2 className="resume-section-title">Projects</h2>

          <div className="resume-project-item">
            <h3 className="resume-project-name">
              n8n Purchase Order Automation
            </h3>
            <p className="resume-project-tech">
              n8n | Odoo | Telegram API | Excel
            </p>
            <p className="resume-project-desc">
              End-to-end workflow from Telegram file to Odoo Purchase Order with
              vendor creation, product matching and error logging.
            </p>
          </div>

          <div className="resume-project-item">
            <h3 className="resume-project-name">
              SAP Business Partner Automation
            </h3>
            <p className="resume-project-tech">
              Playwright | Python | SAP S/4HANA
            </p>
            <p className="resume-project-desc">
              Automated supplier and customer creation pipeline for SAP S/4HANA.
            </p>
          </div>

          <div className="resume-project-item">
            <h3 className="resume-project-name">
              QuickDrop — Hyperlocal Delivery App
              <a
                href="https://github.com/premdevnath/qd"
                target="_blank"
              >
                GitHub ↗
              </a>
            </h3>
            <p className="resume-project-tech">
              Android | Kotlin | Jetpack Compose | MVVM | Retrofit | Gemini AI
            </p>
            <p className="resume-project-desc">
              Built a dual-role (Customer & Shop Owner) delivery app using MVVM
              with Kotlin Coroutines and StateFlow; integrated Gemini AI for an
              in-app chatbot/search, and Retrofit + Room for REST data sync with
              offline persistence.
            </p>
          </div>

          <div className="resume-project-item">
            <h3 className="resume-project-name">
              Real One — Real Estate App
              <a
                href="https://github.com/premdevnath/Realone"
                target="_blank"
              >
                GitHub ↗
              </a>
            </h3>
            <p className="resume-project-tech">
              Android | Kotlin | Jetpack Compose | REST API | Firebase
            </p>
            <p className="resume-project-desc">
              Implemented real-time in-app chat using Firebase, increasing user
              engagement for property seekers. Enabled dynamic listing of 500+
              properties with live data sync via REST API integration.
            </p>
          </div>
        </div>

        {/* ===== EDUCATION ===== */}
        <div className="resume-section">
          <h2 className="resume-section-title">Education</h2>

          <div className="resume-edu-item">
            <div>
              <p className="resume-edu-name">
                Master of Computer Applications (MCA) – AI & ML
              </p>
              <p className="resume-edu-school">
                Rajasthan Technical University, Kota
              </p>
            </div>
            <span className="resume-edu-date">Jun 2025 – Present</span>
          </div>

          <div className="resume-edu-item">
            <div>
              <p className="resume-edu-name">
                Bachelor of Computer Applications (BCA)
              </p>
              <p className="resume-edu-school">
                Maharshi Dayanand Saraswati University
              </p>
            </div>
            <span className="resume-edu-date">Aug 2022 – May 2025</span>
          </div>
        </div>

        {/* ===== CERTIFICATIONS ===== */}
        <div className="resume-section">
          <h2 className="resume-section-title">Certifications</h2>

          <div className="resume-cert-item">
            <span className="resume-cert-name">
              Android Development Training
            </span>
            <span className="resume-cert-issuer">Croma Campus Pvt. Ltd.</span>
          </div>

          <div className="resume-cert-item">
            <span className="resume-cert-name">
              Oracle Generative AI Professional Certificate
            </span>
            <span className="resume-cert-issuer">Oracle</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
