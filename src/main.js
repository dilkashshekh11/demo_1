import './style.css'

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <header class="site-header">
    <div class="container nav-wrapper">
      <a class="brand" href="#home">Dilkash Shekh</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
        <span class="visually-hidden">Toggle navigation</span>
        <span aria-hidden="true">☰</span>
      </button>
      <nav id="primary-nav" class="primary-nav" aria-label="Primary">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main-content">
    <section class="hero section" id="home" aria-labelledby="hero-title">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">Frontend Developer</p>
          <h1 id="hero-title">Hi, I’m Dilkash Shekh</h1>
          <p class="hero-intro">
            I build fast, accessible, and user-focused web experiences with clean code and thoughtful UI.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#projects">View Projects</a>
            <a class="button secondary" href="#contact">Get In Touch</a>
          </div>
        </div>
        <aside class="hero-highlight" aria-label="Key focus areas">
          <h2>What I focus on</h2>
          <ul>
            <li>Responsive interfaces that work across devices</li>
            <li>Semantic, accessible HTML and keyboard-first interactions</li>
            <li>Performance-conscious UI implementation</li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="section" id="about" aria-labelledby="about-title">
      <div class="container">
        <h2 id="about-title">About</h2>
        <p>
          I’m a web developer passionate about turning ideas into polished digital products. I enjoy collaborating,
          solving practical problems, and building maintainable interfaces with modern web technologies.
        </p>
      </div>
    </section>

    <section class="section muted" id="skills" aria-labelledby="skills-title">
      <div class="container">
        <h2 id="skills-title">Skills & Technologies</h2>
        <ul class="chip-list" role="list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Vite</li>
          <li>Git & GitHub</li>
          <li>Responsive Design</li>
          <li>Accessibility (WCAG)</li>
        </ul>
      </div>
    </section>

    <section class="section" id="projects" aria-labelledby="projects-title">
      <div class="container">
        <h2 id="projects-title">Selected Projects</h2>
        <div class="card-grid">
          <article class="card">
            <h3>Portfolio Website</h3>
            <p>A modern personal website with mobile-first layout, semantic structure, and smooth section navigation.</p>
            <p class="meta">Tech: HTML, CSS, JavaScript, Vite</p>
          </article>
          <article class="card">
            <h3>Task Tracker UI</h3>
            <p>A productivity dashboard featuring reusable components, clean state management, and clear visual hierarchy.</p>
            <p class="meta">Tech: React, JavaScript, CSS</p>
          </article>
          <article class="card">
            <h3>E-commerce Frontend</h3>
            <p>A responsive storefront experience with optimized product listing layouts and accessible interactions.</p>
            <p class="meta">Tech: React, REST APIs, Responsive CSS</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section muted" id="experience" aria-labelledby="experience-title">
      <div class="container">
        <h2 id="experience-title">Experience & Education</h2>
        <div class="timeline">
          <article>
            <h3>Frontend Development Practice</h3>
            <p class="meta">2024 – Present</p>
            <p>Building real-world projects focused on UI quality, accessibility, and maintainable code standards.</p>
          </article>
          <article>
            <h3>Computer Science Studies</h3>
            <p class="meta">Academic Foundation</p>
            <p>Strengthening core knowledge in software engineering, problem solving, and web development principles.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="contact" aria-labelledby="contact-title">
      <div class="container">
        <h2 id="contact-title">Contact</h2>
        <p>If you’d like to collaborate or discuss an opportunity, feel free to reach out.</p>
        <ul class="contact-list" role="list">
          <li><strong>Email:</strong> <a href="mailto:dilkashshekh11@gmail.com">dilkashshekh11@gmail.com</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/dilkashshekh11" target="_blank" rel="noreferrer">github.com/dilkashshekh11</a></li>
        </ul>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-content">
      <p>© ${new Date().getFullYear()} Dilkash Shekh</p>
      <a href="#home">Back to top</a>
    </div>
  </footer>
`

const navToggle = document.querySelector('.nav-toggle')
const primaryNav = document.querySelector('#primary-nav')
const navLinks = primaryNav.querySelectorAll('a')

const closeMenu = () => {
  navToggle.setAttribute('aria-expanded', 'false')
  primaryNav.classList.remove('open')
}

navToggle.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true'
  navToggle.setAttribute('aria-expanded', String(!isExpanded))
  primaryNav.classList.toggle('open', !isExpanded)
})

navLinks.forEach((link) => link.addEventListener('click', closeMenu))

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu()
  }
})
