import React from "react";
import profileImg from "../assets/profile.jpg";

const NAME = "Ken Demetri B. Payo";

const SKILLS = [
  "C++, HTML, CSS, JavaScript",
  "Flutter, React.js, Node.js, Express.js, Firebase",
  "MySQL, Git/GitHub",
  "Visual Studio Code, Microsoft Office, Canva, Figma",
  "Google Docs, Google Sheets, Google Slides",
  "Cisco Packet Tracer",
  "Power BI, Smartbooks, UiPath",
  "Database Management, Front-End Development, Back-End Development",
  "Networking Fundamentals",
  "Data Analytics and Visualization",
  "Enterprise Resource Planning (ERP)",
];

const PROJECTS = [
  {
    title: "B-Go Modern Jeepney Tracking App",
    desc: "A mobile app for real-time tracking of modern jeepneys, showing location updates and supporting passenger count management for better commuter experience.",
    tech: ["Flutter", "Firebase", "GPS"],
    link: "",
  },
  {
    title: "B-Go Admin Dashboard",
    desc: "Admin dashboard for ticket management and route monitoring to help streamline transport operations.",
    tech: ["React.js", "Firebase"],
    link: "",
  },
  {
    title: "Alumni Portal Document System",
    desc: "A portal for managing alumni document requests and records. Focused on clean UI, organization, and usability.",
    tech: ["React", "Vite", "Router"],
    link: "",
  },
];

export default function Home() {
  const [toast, setToast] = React.useState("");

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function onSubmit(e) {
    e.preventDefault();
    setToast("Thank you! Your message has been sent.");
    setTimeout(() => setToast(""), 4000);
  }

  return (
    <div>
      {/* NAVBAR */}
      <header className="nav">
        <div className="container nav-inner">
          <div
            className="brand"
            onClick={() => scrollTo("home")}
            style={{ cursor: "pointer" }}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="brand-avatar"
            />
            <span>{NAME}</span>
          </div>

          <nav className="nav-links" aria-label="Primary">
            <a href="#home" onClick={(e) => (e.preventDefault(), scrollTo("home"))}>Home</a>
            <a href="#about" onClick={(e) => (e.preventDefault(), scrollTo("about"))}>About</a>
            <a href="#projects" onClick={(e) => (e.preventDefault(), scrollTo("projects"))}>Projects</a>
            <a href="#contact" onClick={(e) => (e.preventDefault(), scrollTo("contact"))}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HOME / INTRO */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="card hero-main">
            <div className="kicker">
              <span className="kicker-dot" />
              Personal Website Portfolio
            </div>

            <h1>
              Hi, I’m <span style={{ color: "var(--brand)" }}>{NAME}</span>
            </h1>

            <p className="lead">
              I’m an IT graduate focused on building reliable, secure, and user-friendly applications using
              modern web technologies and best development practices.
            </p>

            <div className="actions">
              <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
                View Projects
              </button>
              <button className="btn" onClick={() => scrollTo("contact")}>
                Contact Me
              </button>
            </div>

            <p className="small" style={{ marginTop: "1.1rem" }}>
              Responsive • Clean UI • No broken links
            </p>
          </div>

          {/* PROFILE CARD */}
          <aside className="card hero-side">
            <div className="avatar">
              <img
                src={profileImg}
                alt="Ken Demetri B. Payo"
                className="avatar-img"
              />
            </div>

            <div className="meta">
              <p><strong>Role:</strong> BS Information Technology Student</p>
              <p><strong>Focus:</strong> Web Dev • Apps • QA-friendly builds</p>
              <p><strong>Location:</strong> Batangas, PH</p>
            </div>

            <div>
              <p className="small" style={{ margin: "0 0 0.5rem" }}>
                <strong>Quick Skills</strong>
              </p>
              <div className="pills">
                {SKILLS.slice(0, 6).map((s) => (
                  <span className="pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>

          <div className="grid-2">
            <div className="card padded">
              <p className="project-desc" style={{ margin: 0 }}>
                A motivated BS Information Technology graduate with hands-on experience in web development, database management, networking fundamentals, and technical troubleshooting through academic projects and internship experience. Eager to apply strong technical and problem-solving skills in an IT Staff role while continuously learning and providing reliable technical support.
              </p>

              <div style={{ height: 12 }} />

              <p className="project-desc" style={{ margin: 0 }}>
                <strong>Interests:</strong> secure apps, UI/UX, QA testing, automation,
                data visualization.
              </p>
            </div>

            <div className="card padded">
              <p className="small"><strong>Skills </strong></p>
              <div className="pills">
                {SKILLS.map((s) => (
                  <span className="pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <h2>Projects / Works</h2>

          <div className="projects">
            {PROJECTS.map((p) => (
              <div className="card padded" key={p.title}>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="tech">
                  {p.tech.map((t) => (
                    <span className="badge" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Contact Information</h2>

          <div className="contact-grid">
            <div className="card padded">
              <p><strong>Email:</strong></p>
              <a
                href="mailto:kendemetribanguardiapayo@gmail.com"
                className="btn"
              >
                kendemetribanguardiapayo@gmail.com
              </a>

              <div className="pills" style={{ marginTop: "1rem" }}>
                <a className="pill" href="https://github.com/KenDemetri" target="_blank">GitHub</a>
                <a className="pill" href="https://web.facebook.com/ken.payo.13" target="_blank">Facebook</a>
              </div>

              {toast && <p className="small">{toast}</p>}
            </div>

            <form className="card padded" onSubmit={onSubmit}>
              <label>Name</label>
              <input required />

              <label style={{ marginTop: 10 }}>Message</label>
              <textarea required />

              <button className="btn btn-primary" style={{ marginTop: 12 }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>


    </div>
  );
}
