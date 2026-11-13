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
          <h1>PREM DEVNATH</h1>
          <p className="resume-subtitle">
            AI AUTOMATION &amp; AGENTIC AI DEVELOPER
          </p>
          <div className="resume-header-contact">
            <a href="tel:+919351976676">+91 93519 76676</a>
            <span>|</span>
            <a href="mailto:premdevnath875@gmail.com">premdevnath875@gmail.com</a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/in/prem-debnath-6b8a61298/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <span>|</span>
            <a
              href="https://github.com/premdevnath"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span>|</span>
            <a
              href="https://portfolio-a994.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
            <span>|</span>
            <span>Bhilwara, Rajasthan, India</span>
            <span>|</span>
            <a
              href="/PremDevnath_Resume.pdf"
              target="_blank"
              download="PremDevnath_Resume.pdf"
              style={{ color: "#c2a4ff", fontWeight: 600 }}
            >
              Download PDF ↗
            </a>
          </div>
        </div>

        {/* ===== PROFESSIONAL SUMMARY ===== */}
        <div className="resume-section">
          <h2 className="resume-section-title">Professional Summary</h2>
          <p className="resume-summary">
            AI automation and application integration professional focused on solving business-process problems through Python, n8n, APIs, AI models, and enterprise applications. Hands-on exposure to workflow automation, LLM/Gemini API integration, REST APIs, webhooks, Playwright browser automation, Odoo ERP, and SAP S/4HANA processes. Application-development foundation in Kotlin and Android, complemented by practical experience connecting business systems and automating repetitive operations. Currently pursuing an MCA in Artificial Intelligence &amp; Machine Learning.
          </p>
        </div>

        {/* ===== EDUCATION ===== */}
        <div className="resume-section">
          <h2 className="resume-section-title">Education</h2>

          <div className="resume-edu-item">
            <div>
              <p className="resume-edu-name">
                MCA – Artificial Intelligence &amp; Machine Learning
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

        {/* ===== EXPERIENCE ===== */}
        <div className="resume-section">
          <h2 className="resume-section-title">Experience</h2>

          <div className="resume-exp-item">
            <div className="resume-exp-header">
              <div>
                <h3 className="resume-exp-role">
                  AI Automation &amp; Application Development
                </h3>
                <p className="resume-exp-company">
                  Ostwal Group of Industries
                </p>
              </div>
              <span className="resume-exp-date">Jun 2026 – Sep 2026</span>
            </div>
            <ul className="resume-exp-bullets">
              <li>
                Built and tested Python + Playwright automation for SAP S/4HANA Business Partner workflows, automating repetitive browser-based form entry.
              </li>
              <li>
                Converted a lengthy, repetitive manual activity into a workflow that could complete the same data-entry steps in a few minutes, reducing manual effort and turnaround time.
              </li>
              <li>
                Worked with n8n, Python, APIs, and business applications to streamline operational processes and support website/data workflows.
              </li>
            </ul>
          </div>

          <div className="resume-exp-item">
            <div className="resume-exp-header">
              <div>
                <h3 className="resume-exp-role">
                  IT Executive – ERP &amp; AI Automation
                </h3>
                <p className="resume-exp-company">
                  QVK Deep Food Pvt. Ltd.
                </p>
              </div>
              <span className="resume-exp-date">May 2025 – Jun 2026</span>
            </div>
            <ul className="resume-exp-bullets">
              <li>
                Managed Odoo ERP operations across Sales, Purchase, and Inventory, maintaining product, stock, and transaction records for day-to-day business processes.
              </li>
              <li>
                Worked on n8n-based automation connecting Telegram, Excel, and Odoo to simplify purchase-order-related data movement and reduce repeated manual entry.
              </li>
              <li>
                Supported Shopify and website operations, API integrations, and process improvements using automation and AI tools.
              </li>
            </ul>
          </div>

          <div className="resume-exp-item">
            <div className="resume-exp-header">
              <div>
                <h3 className="resume-exp-role">Android Developer Trainee</h3>
                <p className="resume-exp-company">Croma Campus</p>
              </div>
              <span className="resume-exp-date">Apr 2024 – Sep 2024</span>
            </div>
            <ul className="resume-exp-bullets">
              <li>
                Built Android application features with Kotlin, Jetpack Compose, MVVM, Firebase, and REST API integration—foundational experience in developing and connecting software applications.
              </li>
            </ul>
          </div>
        </div>

        {/* ===== SELECTED PROJECTS ===== */}
        <div className="resume-section">
          <h2 className="resume-section-title">Selected Projects</h2>

          <div className="resume-project-item">
            <h3 className="resume-project-name">
              MAYA – Live AI Virtual Try-On Android App
              <a
                href="https://github.com/premdevnath/mayaai"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </h3>
            <p className="resume-project-desc" style={{ marginBottom: "8px" }}>
              Built a native Kotlin/Jetpack Compose app using MVVM, CameraX, ML Kit Pose Detection, Room, and DataStore; added body-framing guidance, garment import via Photo Picker, rear camera, and Jsoup product links, plus MediaStore video saving.
            </p>
            <p className="resume-project-desc">
              Designed a replaceable VirtualTryOnProvider for zero-cost Hugging Face ZeroGPU/Gradio VTON endpoints (FASHN VTON v1.5, CatVTON), with an on-device pose-tracked fallback, timed sessions, and privacy/quota safeguards.
            </p>
          </div>

          <div className="resume-project-item">
            <h3 className="resume-project-name">
              AI Lead Management Automation System (Freelance Project – In Progress)
              <a
                href="https://github.com/premdevnath"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </h3>
            <p className="resume-project-desc" style={{ marginBottom: "8px" }}>
              Built an n8n webhook workflow with upfront JavaScript validation, Google Sheets duplicate detection, and a hybrid rule-based + Gemini 2.5 Flash pipeline to classify leads as Hot, Warm, or Cold.
            </p>
            <p className="resume-project-desc">
              Reduced unnecessary AI calls and token usage by filtering invalid, duplicate, and fallback-handled leads early; automated Gmail follow-ups and dual-tab execution logging.
            </p>
          </div>
        </div>

        {/* ===== TECHNICAL SKILLS ===== */}
        <div className="resume-section">
          <h2 className="resume-section-title">Technical Skills</h2>
          <div className="resume-skills-grid">
            <div className="resume-skill-row">
              <span className="resume-skill-label">AI &amp; LLMs</span>
              <span className="resume-skill-value">
                ChatGPT, Gemini, Claude, Cursor, Google Antigravity, AI Agents &amp; LLM Integration, Gemini API &amp; Prompt Engineering
              </span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-label">Automation</span>
              <span className="resume-skill-value">
                n8n Workflow Automation, Python (Automation &amp; Scripting), Playwright Browser Automation, Business Process Automation
              </span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-label">Enterprise / ERP</span>
              <span className="resume-skill-value">
                SAP S/4HANA Workflow Automation, Odoo ERP (Sales/Purchase/Inventory), Application &amp; API Integration
              </span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-label">APIs &amp; Backend</span>
              <span className="resume-skill-value">
                REST APIs, Webhooks &amp; JSON, Firebase &amp; Supabase
              </span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-label">Mobile Dev</span>
              <span className="resume-skill-value">
                Kotlin &amp; Jetpack Compose, MVVM, CameraX, ML Kit, Android Studio
              </span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-label">Languages &amp; Web</span>
              <span className="resume-skill-value">
                Python, JavaScript (Working Knowledge), C, C++, Java, HTML, CSS &amp; React (Project Exposure), Git &amp; GitHub
              </span>
            </div>
          </div>
        </div>

        {/* ===== CERTIFICATIONS & TRAINING ===== */}
        <div className="resume-section">
          <h2 className="resume-section-title">Certifications &amp; Training</h2>

          <div className="resume-cert-item">
            <span className="resume-cert-name">
              Android Development Training — Croma Campus Pvt. Ltd.
            </span>
            <span className="resume-cert-issuer">
              <a
                href="https://drive.google.com/file/d/1xu6cfSbYy1rEDllG_yTEWyTOnh3kS0in/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#c2a4ff", textDecoration: "underline" }}
              >
                (View Credential)
              </a>
            </span>
          </div>

          <div className="resume-cert-item">
            <span className="resume-cert-name">
              Oracle Generative AI Professional Certificate — Oracle
            </span>
            <span className="resume-cert-issuer">
              <a
                href="https://drive.google.com/file/d/1U9vWPT1U8iIkqMsMx_ZmjCKFmE96lV5_/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#c2a4ff", textDecoration: "underline" }}
              >
                (View Credential)
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
