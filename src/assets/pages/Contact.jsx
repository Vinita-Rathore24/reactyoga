import Footer from "../theme/Footer";
import Header from "../theme/Header";


function Contact(){
  return(
    <>

    <Header />

 <main id="main">
    <section className="page-header">
      <div className="container">
        <span className="hero-eyebrow"><span className="dot" aria-hidden="true"></span>Open today · 06:30 — 21:00</span>
        <h1>Come visit, <span className="text-clay">first class on us.</span></h1>
        <p>The studio is at Rua da Boavista 142, in the Estrela district of Lisbon. Two minutes from the Estrela basilica, eight from Cais do Sodré, fifteen from Bairro Alto. We&rsquo;ll meet you at the door.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="photo-split">
          <div className="photo-panel">
            <img src="assets/img/yoga-studio.jpg" alt="Hovara studio entrance — soft warm lighting through tall windows in a Pombaline townhouse on Rua da Boavista." />
          </div>
          <div className="copy">
            <span className="mono-cap text-clay">Find us · 02</span>
            <h2 style={{marginTop:"12px"}}>Rua da Boavista 142,<br/>1200-070 Lisboa.</h2>
            <p>Top two floors of a Pombaline townhouse, two minutes&rsquo; walk from Estrela basilica. The entrance is between the bookshop and the wine merchant — small enamel sign, brass bell, no street number on the door.</p>
            <ul style={{listStyle:"none", padding:"0", margin:"var(--space-5) 0", display:"grid",gap:"var(--space-3)", fontSize:"var(--text-sm)"}}>
              <li><strong>Email:</strong> <a href="mailto:hello@hovara.studio" style={{color:"var(--accent)", textDecoration:"underline"}}>hello@hovara.studio</a></li>
              <li><strong>Phone:</strong> <a href="tel:+351212345678" style={{color:"var(--accent)", textDecoration:"underline"}}>+351 21 234 5678</a></li>
              <li><strong>Reception hours:</strong> Mon–Sat 06:00 — 21:30, Sun 08:30 — 19:00</li>
              <li><strong>Studio closure:</strong> First Sunday of every month</li>
            </ul>
            <div className="flex-row">
              <a className="btn btn--primary" href="#book">Book first class
                <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a className="btn btn--ghost" href="https://maps.google.com/?q=Rua+da+Boavista+142+Lisboa" target="_blank" rel="noopener">Open in Maps</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section--tight section--cream" id="book">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="mono-cap">First class · 03</span>
            <h2 style={{marginTop:"12px",}}>Book your <span className="text-clay">free first class.</span></h2>
          </div>
          <p>Tell us a bit about yourself and pick a class — we&rsquo;ll confirm by email and have your mat set up before you arrive.</p>
        </div>

        <form className="form" onSubmit={(event)=>event.preventDefault()}>
          <div className="field">
            <label htmlFor="f-name">Your name</label>
            <input id="f-name" name="name" type="text" placeholder="Full name" required />
          </div>
          <div className="field">
            <label htmlFor="f-email">Email</label>
            <input id="f-email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="field">
            <label htmlFor="f-phone">Phone (optional)</label>
            <input id="f-phone" name="phone" type="tel" placeholder="Including country code" />
          </div>
          <div className="field">
            <label htmlFor="f-class">Which class?</label>
            <select id="f-class" name="class">
              <option>Slow Restore (90 min)</option>
              <option>Vinyasa Flow · Gentle (75 min)</option>
              <option>Vinyasa Flow · All levels (75 min)</option>
              <option>Yin (75 min)</option>
              <option>Pranayama (45 min)</option>
              <option>Sound Bath (60 min)</option>
              <option>I&rsquo;m not sure — recommend one</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-date">Preferred date</label>
            <input id="f-date" name="date" type="date" />
          </div>
          <div className="field">
            <label htmlFor="f-experience">Yoga experience</label>
            <select id="f-experience" name="experience">
              <option>Complete beginner</option>
              <option>Tried it a few times</option>
              <option>Practising 1–3 years</option>
              <option>Practising 3+ years</option>
              <option>Teacher / advanced</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="f-note">Anything we should know?</label>
            <textarea id="f-note" name="note" placeholder="Injuries, pregnancy, allergies, accessibility — or just say hi."></textarea>
          </div>
          <div className="field full" style={{display:"flex", flexWrap:"wrap", gap:"var(--space-4)", alignItems:"center", justifyContent:"space-between"}}>
            <p className="mono-cap" style={{margin:"0"}}>We confirm by email · usually within an hour</p>
            <button className="btn btn--clay btn--lg" type="submit">Book my free class
              <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </form>
      </div>
    </section>

  
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="mono-cap">Practical things · 04</span>
            <h2 style={{marginTop:"12px"}}>Before you <span className="text-clay">arrive.</span></h2>
          </div>
          <p>The essentials for a calm visit. If something on this list isn&rsquo;t clear, email and we&rsquo;ll talk you through.</p>
        </div>

        <div className="classes-grid">
          <article className="class-card">
            <div className="head"><h4>Getting here</h4><span className="duration">Transport</span></div>
            <p>Tram 28 stops at Estrela (3 min walk). Metro: Rato (8 min). Buses 706, 727, 738 stop on Avenida Álvares Cabral. Two minutes from Estrela basilica gardens.</p>
          </article>
          <article className="class-card">
            <div className="head"><h4>Bicycles &amp; cars</h4><span className="duration">Parking</span></div>
            <p>Six bicycle racks outside, two cargo bike spaces. No on-site parking; the closest paid car park is at Estrela (4 min walk). Members can request overnight bike storage.</p>
          </article>
          <article className="class-card">
            <div className="head"><h4>Accessibility</h4><span className="duration">Step-free</span></div>
            <p>Step-free entry to ground floor (tea room). Studio A and Studio B are on the 3rd and 2nd floors with no lift — we&rsquo;re actively planning one. Email if you need help.</p>
          </article>
          <article className="class-card">
            <div className="head"><h4>What we provide</h4><span className="duration">All free</span></div>
            <p>Mats, blocks, bolsters, blankets, small towels, hot showers, drinking water, and a tea room. Bring your own padlock for lockers, or borrow one at reception.</p>
          </article>
          <article className="class-card">
            <div className="head"><h4>Children &amp; teens</h4><span className="duration">Family classes</span></div>
            <p>Children under 14 only in our Saturday family yoga (10:30, 60 min, €12 / family). Teens 14+ welcome in regular classes with a parental waiver.</p>
          </article>
          <article className="class-card">
            <div className="head"><h4>Pregnancy &amp; injury</h4><span className="duration">Modifications</span></div>
            <p>All teachers are trained in pregnancy and injury modifications. Email us in advance with details and we&rsquo;ll match you to the right class and teacher.</p>
          </article>
        </div>
      </div>
    </section>

   
    <section className="section--tight section--bone">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="mono-cap">Other channels · 05</span>
            <h2 style={{marginTop:"12px"}}>Press, careers, and <span className="text-clay">partnerships.</span></h2>
          </div>
          <p>Hovara is a small studio. We don&rsquo;t do brand sponsorships, but we partner with local cafés, bookstores, and community groups. Always email — we read everything.</p>
        </div>

        <div className="classes-grid">
          <article className="class-card">
            <div className="head"><h4>Press</h4><span className="duration">Editorial</span></div>
            <p>For interviews, photo shoots, and editorial coverage. Please give 5 working days&rsquo; notice. <a href="mailto:press@hovara.studio" style={{color:"var(--accent)", textDecoration:"underline",}}>press@hovara.studio</a></p>
          </article>
          <article className="class-card">
            <div className="head"><h4>Careers</h4><span className="duration">Open roles</span></div>
            <p>2 open teacher positions for 2026 (vinyasa &amp; yin). 1 reception &amp; community role. <a href="mailto:careers@hovara.studio" style={{color:"var(--accent)", textDecoration:"underline"}}>careers@hovara.studio</a></p>
          </article>
          <article className="class-card">
            <div className="head"><h4>Workshops &amp; corporate</h4><span className="duration">Bookings</span></div>
            <p>Weekend workshops, corporate sessions, retreats. Sliding scale for charities and community groups. <a href="mailto:hello@hovara.studio" style={{color:"var(--accent)", textDecoration:"underline"}}>hello@hovara.studio</a></p>
          </article>
        </div>
      </div>
    </section>
  </main> 
  
   <Footer />
     </>
  );
}

export default Contact;