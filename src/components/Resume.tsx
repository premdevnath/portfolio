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
            <a href="https://www.linkedin.com/in/prem-debnath-6b8a61298/" target="_blank">
              LinkedIn
            </a>
            <span>|</span>
            <a href="/PremDevnath_Resume.pdf" target="_blank" download="PremDevnath_Resume.pdf" style={{ color: "#4f9eff", fontWeight: 600 }}>
              Download PDF ↗
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
                Gemini 2.5 Flash, Hugging Face (ZeroGPU/Gradio), n8n Workflows,
                Playwright, Python, AI Agents, Webhooks
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
                Kotlin, Java, Python, JavaScript, HTML, CSS, XML
              </span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-label">Android</span>
              <span className="resume-skill-value">
                Jetpack Compose, CameraX, ML Kit, MVVM, Room, DataStore, Dagger
                Hilt, Android Studio, Git / GitHub
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
              MAYA — Live AI Virtual Try-On Android App
              <a
                href="https://github.com/premdevnath/mayaai"
                target="_blank"
              >
                GitHub ↗
              </a>
            </h3>
            <p className="resume-project-tech">
              Kotlin | Jetpack Compose | CameraX | ML Kit | Room | DataStore | ZeroGPU
            </p>
            <p className="resume-project-desc">
              Built a native Android app featuring smart body-framing camera guide, multi-source garment import (Photo Picker, camera, Jsoup extraction), and MediaStore video saving. Architected a replaceable VirtualTryOnProvider layer connecting zero-cost Hugging Face ZeroGPU / Gradio VTON endpoints with an on-device pose-tracked fallback and strict privacy safeguards.
            </p>
          </div>

          <div className="resume-project-item">
            <h3 className="resume-project-name">
              AI Lead Management Automation System
              <a
                href="https://github.com/premdevnath"
                target="_blank"
              >
                GitHub ↗
              </a>
            </h3>
            <p className="resume-project-tech">
              n8n | Gemini 2.5 Flash | JavaScript | Webhooks | Google Sheets | Gmail API
            </p>
            <p className="resume-project-desc">
              Built an n8n webhook workflow with upfront JS validation, Google Sheets deduplication, and a hybrid rule-based + Gemini 2.5 Flash pipeline to classify leads as Hot, Warm, or Cold. Reduced unnecessary AI API calls and token usage by filtering invalid leads early, automating Gmail follow-ups and dual-tab logging.
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
              Automated supplier and customer creation pipeline for SAP S/4HANA directly from Excel, replacing manual entry.
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
