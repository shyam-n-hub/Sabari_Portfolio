import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Menu,
  X,
  Zap,
  Cpu,
  Target,
} from "lucide-react";
import "./App.css";
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    "Python",
    "C++",
    "Embedded C",
    "Data Analysis",
    "Data Structures",
    "Problem-Solving",
    "Teamwork",
    "Decision Making",
    "Communication",
  ];

  const experiences = [
    {
      company: "Efficacy Technology",
      role: "Barcode & Scanner Internship",
      period: "08/2024 - Current",
      description:
        "Integrated barcode scanning technology into small-scale applications. Learned device-to-application communication and error handling.",
    },
    {
      company: "Corizo",
      role: "Data Science Internship",
      period: "05/2025 - 06/2025",
      description:
        "Implemented data preprocessing, visualization, and predictive modeling. Developed analytical solutions to improve decision-making efficiency.",
    },
    {
      company: "AICTE - Eduskills",
      role: "Google Android Developer",
      period: "01/2024 - 03/2024",
      description:
        "Designed and deployed Android applications using Java and XML. Gained exposure to mobile software engineering best practices.",
    },
  ];

  const projects = [
    {
      title: "Resume Maker Application",
      description:
        "Built a customizable resume generator with PDF/DOCX export functionality.",
      tech: ["React", "JavaScript", "PDF Generation"],
      liveLink: "https://resumemakerpaavai.netlify.app/",
    },
    {
      title: "Municipality Issue Addressal and Redressal System",
      description:
        "A digital platform that enables citizens to report civic issues and track their resolution efficiently by municipal authorities.",
      tech: ["React", "Map API", "AI Implementation"],
      liveLink: "https://city-fix.netlify.app/",
    },
  ];

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo">
            <Cpu className="logo-icon" />
            <span>SABARI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            <a href="#home" onClick={() => handleNavClick("home")}>
              Home
            </a>
            <a href="#about" onClick={() => handleNavClick("about")}>
              About
            </a>
            <a href="#skills" onClick={() => handleNavClick("skills")}>
              Skills
            </a>
            <a href="#experience" onClick={() => handleNavClick("experience")}>
              Experience
            </a>
            <a href="#projects" onClick={() => handleNavClick("projects")}>
              Projects
            </a>
            <a href="#contact" onClick={() => handleNavClick("contact")}>
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Side Navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
        <button
          className="mobile-nav-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
        <div className="mobile-nav-content">
          <a href="#home" onClick={() => handleNavClick("home")}>
            <Target size={20} />
            <span>Home</span>
          </a>
          <a href="#about" onClick={() => handleNavClick("about")}>
            <Zap size={20} />
            <span>About</span>
          </a>
          <a href="#skills" onClick={() => handleNavClick("skills")}>
            <Cpu size={20} />
            <span>Skills</span>
          </a>
          <a href="#experience" onClick={() => handleNavClick("experience")}>
            <Briefcase size={20} />
            <span>Experience</span>
          </a>
          <a href="#projects" onClick={() => handleNavClick("projects")}>
            <Code size={20} />
            <span>Projects</span>
          </a>
          <a href="#contact" onClick={() => handleNavClick("contact")}>
            <Mail size={20} />
            <span>Contact</span>
          </a>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Hero Section - Iron Man Style */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="arc-reactor">
            <div className="reactor-core"></div>
            <div className="reactor-ring ring-1"></div>
            <div className="reactor-ring ring-2"></div>
            <div className="reactor-ring ring-3"></div>
          </div>
          <div className="power-lines">
            <div className="power-line line-1"></div>
            <div className="power-line line-2"></div>
            <div className="power-line line-3"></div>
            <div className="power-line line-4"></div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="status-bar">
              {/* <span className="status-indicator"></span>
              <span>SYSTEM ONLINE</span> */}
            </div>
            <h1 className="hero-title">
              <span className="title-line">SABARINATHAN</span>
              <span className="title-line title-line-2">R</span>
            </h1>
            <div className="hero-subtitle">
              <span className="subtitle-bracket">[</span>
              <span className="typewriter">SOFTWARE ENGINEER</span>
              <span className="subtitle-bracket">]</span>
            </div>
            <p className="hero-description">
              Passionate about creating innovative solutions with Python, C++,
              and Data Science. Building the future, one line of code at a time.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <Zap className="stat-icon" />
                <span>3+ Internships</span>
              </div>
              <div className="stat-item">
                <Cpu className="stat-icon" />
                <span>IoT Specialist</span>
              </div>
              <div className="stat-item">
                <Target className="stat-icon" />
                <span> 7.69 CGPA</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a
                href="https://www.linkedin.com/in/sabarinathan-r-9a36b9300/"
                className="btn btn-primary"
              >
                <span>Get In Touch</span>
                <div className="btn-glow"></div>
              </a>
              <a
                href="mailto:sabarinathanr2022@gmail.com"
                className="btn btn-secondary"
              >
                <span>HIRE ME</span>
              </a>
            </div>
          </div>
        </div>

        <div className="scan-lines"></div>
        <div className="hex-grid"></div>
      </section>

      <section
        id="about"
        className={`section about-section ${isVisible.about ? "visible" : ""}`}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ABOUT ME</h2>
            <div className="title-underline"></div>
          </div>

          <div className="about-content">
            {/* Photo Section */}
            <div className="about-image">
              <div className="about-image-frame">
                <div className="frame-glow"></div>
                <img
                  src="./image.jpeg"
                  alt="Sabarinathan R"
                  className="about-profile-image"
                />
                <div className="image-border-animation"></div>
                <div className="corner-accents">
                  <span className="accent accent-tl"></span>
                  <span className="accent accent-tr"></span>
                  <span className="accent accent-bl"></span>
                  <span className="accent accent-br"></span>
                </div>
              </div>
            </div>

            {/* Text and Stats Section */}
            <div className="about-text-section">
              {/* About Text Card */}
              <div className="about-card">
                <div className="card-glow"></div>
                <p>
                  I'm an aspiring Software Engineer with strong skills in
                  Python, C++, and Data Science. I have hands-on experience in
                  software development, problem-solving, and building
                  data-driven applications through multiple internships.
                </p>
                <p>
                  As Placement & AICTE Coordinator at Paavai Engineering
                  College, I've developed strong leadership and organizational
                  skills. I'm a fast learner and collaborative team player who
                  thrives on challenges and innovative solutions.
                </p>
              </div>

              {/* Stats Grid - NOW IN ROW */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon-wrapper">
                    <Briefcase size={32} />
                  </div>
                  <h3>3+</h3>
                  <p>Internships</p>
                  <div className="stat-bar"></div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon-wrapper">
                    <GraduationCap size={32} />
                  </div>
                  <h3>7.67</h3>
                  <p>CGPA</p>
                  <div className="stat-bar"></div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon-wrapper">
                    <Cpu size={32} />
                  </div>
                  <h3>IoT</h3>
                  <p>Specialization</p>
                  <div className="stat-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`section skills-section ${
          isVisible.skills ? "visible" : ""
        }`}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">TECH SKILLS </h2>
            <div className="title-underline"></div>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-inner">
                  <Zap className="skill-icon" />
                  <span>{skill}</span>
                </div>
                <div className="skill-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`section experience-section ${
          isVisible.experience ? "visible" : ""
        }`}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">EXPERIENCE</h2>
            <div className="title-underline"></div>
          </div>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-marker">
                  <div className="marker-outer"></div>
                  <div className="marker-inner"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <Briefcase className="timeline-icon" />
                    <div className="timeline-badge">{exp.period}</div>
                  </div>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                  <div className="content-corner"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`section projects-section ${
          isVisible.projects ? "visible" : ""
        }`}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">PROJECT FILES</h2>
            <div className="title-underline"></div>
          </div>
          <div className="projects-grid">
  {projects.map((project, index) => (
    <div key={index} className="project-card">
      <div className="project-border"></div>
      <div className="project-header">
        <Code size={40} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
      
      {/* NEW: Project Links */}
      <div className="hero-buttons" style={{marginTop:"30px"}}>
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
      
            <span>View Live</span>
          </a>
        )}
        
      </div>
      
      <div className="project-corners">
        <span className="corner corner-tl"></span>
        <span className="corner corner-tr"></span>
        <span className="corner corner-bl"></span>
        <span className="corner corner-br"></span>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`section education-section ${
          isVisible.education ? "visible" : ""
        }`}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">TRAINING & CREDENTIALS</h2>
            <div className="title-underline"></div>
          </div>
          <div className="education-grid">
            <div className="education-card">
              <div className="edu-icon-wrapper">
                <GraduationCap size={56} />
              </div>
              <h3>B.E. Computer Science Engineering</h3>
              <h4>IoT Specialization</h4>
              <p>Paavai Engineering College</p>
              <p className="edu-year">2025 | CGPA: 7.67</p>
              <div className="edu-pulse"></div>
            </div>
            <div className="education-card">
              <div className="edu-icon-wrapper">
                <Award size={56} />
              </div>
              <h3>Certifications</h3>
              <ul>
                <li>NPTEL - Computer Networks & Protocols</li>
                <li>Google Android Developer (AICTE)</li>
              </ul>
              <div className="edu-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`section contact-section ${
          isVisible.contact ? "visible" : ""
        }`}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ESTABLISH CONNECTION</h2>
            <div className="title-underline"></div>
          </div>
          <div className="contact-content">
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={28} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">EMAIL</span>
                  <a href="mailto:sabarinathanr2022@gmail.com">
                    sabarinathanr2022@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={28} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">PHONE</span>
                  <a href="tel:+919342599131">+91 93425 99131</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={28} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">LOCATION</span>
                  <span>Hosur, India</span>
                </div>
              </div>
            </div>
            <div className="social-section">
              <h3>NETWORK LINKS</h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/sabarinathan-r-9a36b9300/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Linkedin size={28} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/sabarinathan006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Github size={28} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://leetcode.com/Sabari_ramasamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Code size={28} />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 SABARINATHAN R </p>
          <div className="footer-line"></div>
        </div>
      </footer>
    </div>
  );
}
