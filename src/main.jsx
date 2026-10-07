import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Heart,
  Menu,
  Sparkles,
  Mail,
  Facebook,
  Github,
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    name: 'Student Information System',
    description:
      'An organized, user-friendly system designed to manage and display student information.',
    stack: ['HTML', 'CSS', 'Bootstrap'],
    symbol: '✿',
  },
  {
    number: '02',
    name: 'Temperature Converter',
    description:
      'A simple tool for converting temperatures between Celsius and Fahrenheit.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    symbol: '☼',
  },
  {
    number: '03',
    name: 'Simple Calculator',
    description:
      'A straightforward calculator designed for quick and easy calculations.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    symbol: '＋',
  },
];

const skills = [
  {
    name: 'HTML',
    description: 'Builds the structure of web pages.',
  },
  {
    name: 'CSS',
    description: 'Creates layouts, styles, and responsive designs.',
  },
  {
    name: 'JavaScript',
    description: 'Adds interaction and functionality to websites.',
  },
  {
    name: 'Java',
    description: 'Used for programming and application development.',
  },
  {
    name: 'SQL',
    description: 'Works with and manages structured data.',
  },
  {
    name: 'MySQL',
    description: 'Stores and manages data in databases.',
  },
  {
    name: 'GitHub',
    description: 'Helps manage, store, and share coding projects.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">

      {/* ================= HEADER ================= */}
      <header className="topbar">

        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Aila home"
        >
          <span className="brand-mark">
            <Code2 size={18} />
          </span>

          <span>
            aila<span className="brand-dot">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={21} />
        </button>

        <nav
          className={menuOpen ? 'nav-links nav-open' : 'nav-links'}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a
            className="nav-contact"
            href="mailto:ailadelrosario280@gmail.com"
            onClick={closeMenu}
          >
            Say hello <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>

        {/* ================= HERO ================= */}
        <section className="hero section-wrap" id="home">

          <div className="hero-copy">

            <div className="eyebrow">
              <Sparkles size={14} />
              IT STUDENT · ASPIRING DEVELOPER
            </div>

            <h1>
              Hi, I’m Aila Angelie
              <span className="pink-text">.</span>
              <br />

              <span className="serif-line">
                I make ideas
              </span>{' '}

              <span className="serif-italic">
                happen.
              </span>
            </h1>

            <p className="hero-intro">
              I’m an Information Technology student who enjoys learning how
              to create applications, solve problems, and turn ideas into
              useful digital experiences.
            </p>

            <div className="hero-actions">

              <a
                className="button button-primary"
                href="#projects"
              >
                Explore my work
                <ArrowUpRight size={17} />
              </a>

              <a
                className="text-link"
                href="#education"
              >
                A little about me
                <ArrowDown size={15} />
              </a>

            </div>

            <div className="hero-note">
              <span className="status-dot" />
              Always learning, always building.
            </div>

          </div>

          {/* HERO IMAGE */}
          <div className="hero-visual">

            <div className="portrait-backdrop" />

            <div className="portrait-frame">
              <img
                src="/aila-profile.png"
                alt="Portrait of Aila Angelie B. Del Rosario"
              />
            </div>

            <div className="floating-note note-top">

              <span className="note-icon">
                <Heart size={16} fill="currentColor" />
              </span>

              <span>
                <strong>Made with curiosity</strong>
                <small>and a little creativity</small>
              </span>

            </div>

            <div className="floating-note note-bottom">

              <span className="code-chip">
                &lt;/&gt;
              </span>

              <span>
                <strong>Currently coding</strong>
                <small>one step at a time</small>
              </span>

            </div>

            <span className="decor decor-star">
              ✳
            </span>

            <span className="decor decor-sparkle">
              ✧
            </span>

          </div>

          <a
            className="scroll-cue"
            href="#education"
          >
            <span />
            SCROLL TO EXPLORE
          </a>

        </section>


        {/* ================= EDUCATION ================= */}
        <section
          className="education section-wrap"
          id="education"
        >

          <div className="section-heading">

            <div>

              <span className="section-kicker">
                A LITTLE BACKGROUND
              </span>

              <h2>
                My learning <em>journey.</em>
              </h2>

            </div>

            <p>
              Building my foundation, discovering what I love,
              and growing into the developer I want to become.
            </p>

          </div>


          {/* College */}
          <div className="education-card">

            <div className="education-icon">
              <GraduationCap size={23} />
            </div>

            <div className="education-content">

              <span className="timeline-date">
                2023 — PRESENT
              </span>

              <h3>
                BS Information Technology
              </h3>

              <p className="school">
                Nueva Vizcaya State University (NVSU)
              </p>

              <p className="location">
                Bayombong, Nueva Vizcaya
              </p>

            </div>

            <span className="current-pill">
              <span />
              In progress
            </span>

          </div>


          {/* High School */}
          <div className="education-card education-card-secondary">

            <div className="education-icon">
              <GraduationCap size={23} />
            </div>

            <div className="education-content">

              <span className="timeline-date">
                2018 — 2023
              </span>

              <h3>
                High School
              </h3>

              <p className="school">
                Nueva Vizcaya General Comprehensive High School
              </p>

            </div>

            <span className="education-number">
              02
            </span>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}
        <section
          className="projects-section"
          id="projects"
        >

          <div className="section-wrap projects-inner">

            <div className="section-heading projects-heading">

              <div>

                <span className="section-kicker">
                  A FEW THINGS I’VE MADE
                </span>

                <h2>
                  Little projects, <em>big learning.</em>
                </h2>

              </div>

              <p>
                Each project helps me practice the fundamentals
                and get more comfortable bringing an idea to life.
              </p>

            </div>


            <div className="project-grid">

              {projects.map((project) => (

                <article
                  className="project-card"
                  key={project.number}
                >

                  <div className="project-card-top">

                    <span className="project-number">
                      {project.number} / 03
                    </span>

                    <span className="project-symbol">
                      {project.symbol}
                    </span>

                  </div>


                  <div
                    className="project-art"
                    aria-hidden="true"
                  >

                    {project.number === '01' ? (

                      <div className="mini-window">

                        <div className="mini-window-bar">
                          <i />
                          <i />
                          <i />
                        </div>

                        <div className="mini-layout">

                          <span />

                          <div>
                            <b />
                            <b />
                            <b />
                          </div>

                        </div>

                      </div>

                    ) : project.number === '02' ? (

                      <div className="temp-art">

                        <span className="temp-sun">
                          ☼
                        </span>

                        <strong>
                          24°
                        </strong>

                        <small>
                          °C&nbsp; → &nbsp;°F
                        </small>

                      </div>

                    ) : (

                      <div className="calc-art">

                        <div className="calc-screen">
                          123
                        </div>

                        <div className="calc-keys">

                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />

                        </div>

                      </div>

                    )}

                  </div>


                  <h3>
                    {project.name}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="stack-label">
                    TECH STACK
                  </div>

                  <div className="tag-list">

                    {project.stack.map((tech) => (

                      <span
                        className="tech-tag"
                        key={tech}
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </article>

              ))}

            </div>


            <p className="project-footnote">
              A growing collection — more projects coming as I learn.
              <span>✿</span>
            </p>

          </div>

        </section>


        {/* ================= SKILLS ================= */}
        <section
          className="skills-section section-wrap"
          id="skills"
        >

          <div className="section-heading skills-heading">

            <div>

              <span className="section-kicker">
                WHAT I’M LEARNING
              </span>

              <h2>
                My <em>skills.</em>
              </h2>

            </div>

            <p>
              A few technologies I use while learning,
              building projects, and improving my development skills.
            </p>

          </div>


          <div className="skills-grid">

            {skills.map((skill) => (

              <div
                className="skill-card"
                key={skill.name}
              >

                <div className="skill-icon">
                  <Code2 size={20} />
                </div>

                <h3>
                  {skill.name}
                </h3>

                <p>
                  {skill.description}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* ================= CONTACT ================= */}
        <section
          className="contact-section section-wrap"
          id="contact"
        >

          <div className="section-heading contact-heading">

            <div>

              <span className="section-kicker">
                LET’S CONNECT
              </span>

              <h2>
                Contact <em>me.</em>
              </h2>

            </div>

            <p>
              Feel free to reach out through any of the platforms below.
            </p>

          </div>


          <div className="contact-grid">

            {/* EMAIL */}
            <a
              className="contact-card"
              href="mailto:ailadelrosario280@gmail.com"
            >

              <div className="contact-icon email-icon">
                <Mail size={27} />
              </div>

              <h3>
                Email
              </h3>

              <p>
                ailadelrosario280@gmail.com
              </p>

            </a>


            {/* GITHUB */}
            <a
              className="contact-card"
              href="https://github.com/ailadelrosario"
              target="_blank"
              rel="noreferrer"
            >

              <div className="contact-icon github-icon">
                <Github size={27} />
              </div>

              <h3>
                GitHub
              </h3>

              <p>
                ailadelrosario
              </p>

            </a>


            {/* FACEBOOK */}
            <a
              className="contact-card"
              href="https://www.facebook.com/nwahahaha"
              target="_blank"
              rel="noreferrer"
            >

              <div className="contact-icon facebook-icon">
                <Facebook size={27} />
              </div>

              <h3>
                Facebook
              </h3>

              <p>
                Aila Angelie B. Del Rosario
              </p>

            </a>

          </div>

        </section>


        {/* ================= CLOSING ================= */}
        <section className="closing section-wrap">

          <div className="closing-flower">
            ✿
          </div>

          <span className="section-kicker">
            THANKS FOR STOPPING BY
          </span>

          <h2>
            Let’s keep creating
            <br />
            <em>something meaningful.</em>
          </h2>

          <p>
            I’m always learning something new.
            This is only the beginning.
          </p>

          <a
            className="button button-primary"
            href="mailto:ailadelrosario280@gmail.com"
          >
            Let’s connect
            <ArrowUpRight size={17} />
          </a>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer section-wrap">

        <a
          className="brand footer-brand"
          href="#home"
        >

          <span className="brand-mark">
            <Code2 size={16} />
          </span>

          <span>
            aila<span className="brand-dot">.</span>
          </span>

        </a>


        <span className="copyright">
          © 2026 Aila Angelie B. Del Rosario | Information Technology Student
        </span>


        <a
          href="#home"
          className="back-top"
        >
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}


createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);