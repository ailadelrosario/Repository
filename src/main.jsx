import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Facebook,
  GraduationCap,
  Mail,
  Menu,
  Terminal,
  X,
} from "lucide-react";

import "./styles.css";

const skills = [
  {
    number: "01",
    name: "HTML",
    category: "STRUCTURE",
    description: "Building the structure and content of web pages.",
  },
  {
    number: "02",
    name: "CSS",
    category: "STYLING",
    description: "Creating responsive layouts and clean interfaces.",
  },
  {
    number: "03",
    name: "JavaScript",
    category: "LOGIC",
    description: "Adding interaction, logic, and dynamic functionality.",
  },
  {
    number: "04",
    name: "React",
    category: "COMPONENTS",
    description: "Creating reusable components for modern interfaces.",
  },
  {
    number: "05",
    name: "MIT App Inventor",
    category: "MOBILE APPS",
    description: "Developing simple mobile applications using block logic.",
  },
  {
    number: "06",
    name: "UI Design",
    category: "USER INTERFACE",
    description: "Designing simple, readable, and user-friendly interfaces.",
  },
];

const projects = [
  {
    number: "01",
    title: "Celsius Converter",
    type: "MOBILE APPLICATION",
    description:
      "A simple temperature conversion application that converts Celsius values into Fahrenheit and Kelvin with a conversion history.",
    tools: ["MIT App Inventor", "Logic", "UI Design"],
  },
  {
    number: "02",
    title: "BMI Calculator",
    type: "MOBILE APPLICATION",
    description:
      "A beginner-friendly mobile application that calculates BMI using height and weight and displays the corresponding category.",
    tools: ["MIT App Inventor", "Blocks", "UI Design"],
  },
  {
    number: "03",
    title: "CITE College Website",
    type: "WEB DEVELOPMENT",
    description:
      "A college website designed to provide students with accessible information about CITE programs, announcements, activities, and important college resources.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src="/aila-logo.png" alt="Aila logo" />
          <span>A / DEV</span>
        </a>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#home" onClick={closeMenu}>
            <span>00</span> HOME
          </a>

          <a href="#about" onClick={closeMenu}>
            <span>01</span> ABOUT
          </a>

          <a href="#education" onClick={closeMenu}>
            <span>02</span> EDUCATION
          </a>

          <a href="#skills" onClick={closeMenu}>
            <span>03</span> SKILLS
          </a>

          <a href="#projects" onClick={closeMenu}>
            <span>04</span> PROJECTS
          </a>

          <a href="#contact" onClick={closeMenu}>
            <span>05</span> CONTACT
          </a>
        </nav>

        <a href="#contact" className="top-contact">
          LET'S TALK <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main>

        {/* =========================
            HERO
        ========================== */}
        <section id="home" className="hero section">
          <div className="hero-grid">

            <div className="hero-content">
              <div className="terminal-label">
                <span className="terminal-dot"></span>
                SYSTEM ONLINE
              </div>

              <p className="hero-command">
                <span>&gt;_</span> WELCOME TO MY PORTFOLIO
              </p>

              <h1>
                Hi, I'm
                <br />
                <span>Aila Angelie</span>
                <br />
                Del Rosario.
              </h1>

              <div className="hero-role">
                <Code2 size={17} />
                INFORMATION TECHNOLOGY STUDENT
              </div>

              <p className="hero-description">
                I enjoy turning ideas into functional and meaningful digital
                experiences. I'm constantly learning new technologies,
                experimenting with ideas, and building projects along the way.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="button primary">
                  VIEW PROJECTS
                  <ArrowDown size={17} />
                </a>

                <a href="#contact" className="button secondary">
                  CONTACT ME
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="tech-line">
                <span>HTML</span>
                <i>•</i>
                <span>CSS</span>
                <i>•</i>
                <span>JAVASCRIPT</span>
                <i>•</i>
                <span>REACT</span>
              </div>
            </div>

            <div className="hero-visual">

              <div className="code-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span>about_me.js</span>

                  <Terminal size={15} />
                </div>

                <div className="code-body">
                  <div>
                    <span className="line-number">01</span>
                    <span className="purple">const</span>{" "}
                    <span className="green">developer</span> = {"{"}
                  </div>

                  <div>
                    <span className="line-number">02</span>
                    &nbsp;&nbsp;name:{" "}
                    <span className="yellow">
                      "Aila Angelie"
                    </span>
                    ,
                  </div>

                  <div>
                    <span className="line-number">03</span>
                    &nbsp;&nbsp;role:{" "}
                    <span className="yellow">
                      "IT Student"
                    </span>
                    ,
                  </div>

                  <div>
                    <span className="line-number">04</span>
                    &nbsp;&nbsp;passion:{" "}
                    <span className="yellow">
                      "Build & Create"
                    </span>
                    ,
                  </div>

                  <div>
                    <span className="line-number">05</span>
                    &nbsp;&nbsp;mindset:{" "}
                    <span className="yellow">
                      "Keep Learning"
                    </span>
                    ,
                  </div>

                  <div>
                    <span className="line-number">06</span>
                    &nbsp;&nbsp;status:{" "}
                    <span className="cyan">
                      "Growing..."
                    </span>
                  </div>

                  <div>
                    <span className="line-number">07</span>
                    {"};"}
                  </div>
                </div>
              </div>

              <div className="profile-card">
                <div className="profile-frame">
                  <img
                    src="/aila-profile.png"
                    alt="Aila Angelie Del Rosario"
                  />
                </div>

                <div className="profile-info">
                  <span>01 / PROFILE</span>
                  <strong>KEEP LEARNING.</strong>
                </div>
              </div>

              <div className="floating-code code-one">
                {"</>"}
              </div>

              <div className="floating-code code-two">
                {"{ }"}
              </div>

              <div className="scan-line"></div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} />
          </div>
        </section>

        {/* =========================
            ABOUT
        ========================== */}
        <section id="about" className="section content-section">
          <div className="section-heading">
            <div>
              <span className="section-number">01</span>
              <span className="section-name">ABOUT ME</span>
            </div>

            <span className="section-line"></span>

            <span className="section-status">PROFILE.DAT</span>
          </div>

          <div className="about-grid">
            <div className="about-title">
              <p className="small-label">WHO I AM</p>

              <h2>
                Turning ideas
                <br />
                <span>into solutions.</span>
              </h2>
            </div>

            <div className="about-text">
              <p>
                I'm an Information Technology student with a strong interest
                in web development, mobile applications, and system design.
              </p>

              <p>
                I enjoy learning new tools and technologies while creating
                simple and useful digital experiences.
              </p>

              <p>
                Every project gives me another opportunity to improve my
                skills and understand how technology can solve everyday
                problems.
              </p>
            </div>

            <div className="stats">
              <div>
                <strong>03+</strong>
                <span>PROJECTS</span>
              </div>

              <div>
                <strong>06</strong>
                <span>CORE SKILLS</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>LEARNING</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            EDUCATION
        ========================== */}
        <section id="education" className="section content-section">
          <div className="section-heading">
            <div>
              <span className="section-number">02</span>
              <span className="section-name">EDUCATION</span>
            </div>

            <span className="section-line"></span>

            <span className="section-status">EDUCATION.LOG</span>
          </div>

          <div className="education-card">
            <div className="education-icon">
              <GraduationCap size={34} />
            </div>

            <div className="education-main">
              <span className="small-label">TERTIARY EDUCATION</span>

              <h2>Information Technology</h2>

              <p>
                My college journey has introduced me to programming,
                application development, databases, system design, and
                different areas of information technology.
              </p>
            </div>

            <div className="education-status">
              <span>CURRENT STATUS</span>

              <strong>IT STUDENT</strong>

              <div className="education-tags">
                <span>PROGRAMMING</span>
                <span>WEB DEV</span>
                <span>DATABASE</span>
                <span>SYSTEM DESIGN</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            SKILLS
        ========================== */}
        <section id="skills" className="section content-section">
          <div className="section-heading">
            <div>
              <span className="section-number">03</span>
              <span className="section-name">SKILLS</span>
            </div>

            <span className="section-line"></span>

            <span className="section-status">TOOLKIT.SYS</span>
          </div>

          <div className="skills-intro">
            <div>
              <p className="small-label">MY TOOLKIT</p>

              <h2>
                Technologies
                <br />
                <span>I work with.</span>
              </h2>
            </div>

            <p>
              These are some of the technologies and tools I use while
              learning, practicing, and building projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.number}>
                <div className="skill-top">
                  <span>{skill.number}</span>
                  <Code2 size={18} />
                </div>

                <h3>{skill.name}</h3>

                <span className="skill-category">
                  {skill.category}
                </span>

                <p>{skill.description}</p>

                <div className="skill-progress">
                  <span></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            PROJECTS
        ========================== */}
        <section id="projects" className="section content-section">
          <div className="section-heading">
            <div>
              <span className="section-number">04</span>
              <span className="section-name">PROJECTS</span>
            </div>

            <span className="section-line"></span>

            <span className="section-status">PROJECTS.DB</span>
          </div>

          <div className="projects-intro">
            <div>
              <p className="small-label">SELECTED WORK</p>

              <h2>
                Things I've
                <br />
                <span>built.</span>
              </h2>
            </div>

            <p>
              A collection of school projects and applications created while
              learning different areas of information technology.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>

                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-type">
                    {project.type}
                  </span>

                  <ArrowUpRight size={20} />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span>PROJECT / {project.number}</span>

                  <ExternalLink size={16} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            CONTACT
        ========================== */}
        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <div>
              <span className="section-number">05</span>
              <span className="section-name">CONTACT</span>
            </div>

            <span className="section-line"></span>

            <span className="section-status">CONNECT.EXE</span>
          </div>

          <div className="contact-grid">
            <div className="contact-intro">
              <p className="small-label">LET'S CONNECT</p>

              <h2>
                Let's create
                <br />
                <span>something.</span>
              </h2>

              <p>
                Whether it's a project, an idea, or simply saying hello,
                I'd love to hear from you.
              </p>
            </div>

            <div className="contact-links">

              <a
                href="mailto:aila.delrosario280@gmail.com"
                className="contact-card"
              >
                <div className="contact-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <span>EMAIL</span>
                  <strong>aila.delrosario280@gmail.com</strong>
                </div>

                <ArrowUpRight size={20} />
              </a>

              <a
                href="https://www.facebook.com/nwahahaha"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  <Facebook size={21} />
                </div>

                <div>
                  <span>FACEBOOK</span>
                  <strong>Aila Angelie B. Del Rosario</strong>
                </div>

                <ArrowUpRight size={20} />
              </a>

            </div>
          </div>
        </section>

        {/* =========================
            CLOSING
        ========================== */}
        <section className="closing section">

          <div className="closing-terminal">
            <div className="closing-terminal-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="closing-terminal-body">
              <span className="prompt">&gt;_</span>

              <div>
                <span>THANKS FOR STOPPING BY</span>

                <h2>
                  Let's keep creating
                  <br />
                  <strong>something meaningful.</strong>
                </h2>
              </div>

              <div className="closing-arrow">
                <ArrowUpRight size={25} />
              </div>
            </div>
          </div>

          <div className="closing-message">
            <span>I'M ALWAYS LEARNING SOMETHING NEW.</span>
            <strong>THIS IS ONLY THE BEGINNING.</strong>
          </div>

          <a href="#home" className="back-top">
            BACK TO TOP
            <ArrowUpRight size={16} />
          </a>
        </section>

      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer">
        <div className="footer-left">
          <img src="/aila-logo.png" alt="Aila logo" />

          <span>
            © 2026 Aila Angelie B. Del Rosario
          </span>
        </div>

        <span className="footer-role">
          INFORMATION TECHNOLOGY STUDENT
        </span>

        <div className="footer-socials">
          <a href="mailto:aila.delrosario280@gmail.com">
            <Mail size={17} />
          </a>

          <a
            href="https://www.facebook.com/nwahahaha"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook size={17} />
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;