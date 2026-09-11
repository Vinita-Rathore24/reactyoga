function Footer(){
  return(
<>
 <footer className="footer">
    <div className="container">
      <div className="footer-cta">
        <div>
          <h2>Your first class is on us. Bring nothing but a water bottle.</h2>
          <p>We&rsquo;ll meet you at the door, walk you through the studio, and find you a mat. The class will already be booked.</p>
        </div>
        <div className="actions">
          <a className="btn btn--primary btn--lg" href="contact.html">Book free class
            <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a className="btn btn--ghost btn--lg" href="schedule.html"style={{color:"var(--paper)",borderColor:"rgba(255,255,255,0.4)"}}>See this week</a>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <a className="brand" href="index.html"><span className="brand-mark" aria-hidden="true"></span> Hovara</a>
          <p style={{ marginTop:" var(--space-3)"}}>A small yoga studio in Lisbon&rsquo;s Estrela district. Twelve teachers, forty-two classes a week, since 2014.</p>
          <div className="flex-row" style={{gap:"var(--space-3)", marginTop:"var(--space-4)"}}>
            <span className="pill pill--sage" style={{background:"rgba(124, 156, 92, 0.20)",color:"var(--sage-soft)",borderColor:" border-color: rgba(124, 156, 92, 0.35)"}}><span className="dot"></span>Open today · 06:30 — 21:00</span>
          </div>
        </div>
        <div>
          <h5>Practice</h5>
          <a href="classes.html">Slow Restore</a>
          <a href="classes.html">Vinyasa Flow</a>
          <a href="classes.html">Yin</a>
          <a href="classes.html">Ashtanga</a>
          <a href="classes.html">Sound Bath</a>
        </div>
        <div>
          <h5>Studio</h5>
          <a href="studio.html">About us</a>
          <a href="studio.html">Teachers</a>
          <a href="studio.html">The space</a>
          <a href="contact.html">Workshops</a>
        </div>
        <div>
          <h5>Schedule</h5>
          <a href="schedule.html">This week</a>
          <a href="schedule.html">Book a class</a>
          <a href="contact.html">Memberships</a>
          <a href="contact.html">First class</a>
        </div>
        <div>
          <h5>Visit</h5>
          <a href="contact.html">Rua da Boavista 142</a>
          <a href="contact.html">1200-070 Lisboa</a>
          <a href="mailto:hello@hovara.studio">hello@hovara.studio</a>
          <a href="tel:+351212345678">+351 21 234 5678</a>
        </div>
      </div>
      <div className="footer-fine">
        <span>© Hovara Studio Lda · Lisbon · 2026</span>
        <span>Free template by <a href="https://html.design" style={{color:"var(--clay-soft)"}}>html.design</a></span>
        <span>v1.0</span>
      </div>
    </div>
  </footer>
</>
  );
}

export default Footer;