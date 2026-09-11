import Header from "../theme/Header";
import Footer from "../theme/Footer";


function Studio(){
  return(
    <>
    <Header />
    
    <div className="mobile-drawer" id="mobile-drawer" aria-hidden="true">
    <button className="drawer-close" aria-label="Close menu">CLOSE</button>
    <a href="index.html">Home</a>
    <a href="classes.html">Classes</a>
    <a href="schedule.html">Schedule</a>
    <a href="studio.html">Studio</a>
    <a href="contact.html">Contact</a>
  </div>
  
   <main id="main">
    <section className="page-header">
      <div className="container">
        <span className="hero-eyebrow"><span className="dot" aria-hidden="true"></span>Lisbon · Estrela · since 2014</span>
        <h1>A small studio, <span className="text-clay">slowly built.</span></h1>
        <p>Hovara has grown from a single rented room with three weekly classes to a two-floor townhouse with twelve teachers and forty-two classes a week. The pace stayed slow on purpose; that&rsquo;s the practice.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="photo-split">
          <div className="photo-panel">
            <img src="assets/img/yoga-meditation.jpg" alt="Hovara student in a long-held forward fold — bolster, blanket, low warm light." />
          </div>
          <div className="copy">
            <span className="mono-cap text-clay">Position · 01</span>
            <h2 style={{marginTop: "12px"}}>Slow yoga is not a style. It&rsquo;s a discipline.</h2>
            <p>We don&rsquo;t teach harder, faster, longer. We teach the same six classes year after year, with senior teachers and beginner-friendly cues, in a quiet room with low light. The longer you stay, the more the room changes you — never the other way round.</p>
            <p>Three things we believe and one thing we don&rsquo;t. We believe in a long savasana, in props for everyone, and in the right of every body to take up space on a mat. We don&rsquo;t believe in pose progress photos.</p>
          </div>
        </div>
      </div>
    </section>

     <section className="section section--cream">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="mono-cap">Founders · 02</span>
            <h2 style={{marginTop: "12px"}}>Four senior teachers, <span className="text-clay">one shared bench.</span></h2>
          </div>
          <p>The four people who started Hovara still teach every week. The other eight teachers were trained in this room before they joined the bench. We grow the studio by growing the people in it.</p>
        </div>

        <div className="instructors">
          <article className="instructor">
            <div className="photo"><img src="assets/img/instructor-01.jpg" alt="Marisol Tavares — co-founder, Slow Restore and Yin teacher." /></div>
            <h5>Marisol Tavares</h5>
            <span className="specialty">Co-founder · Slow Restore · Yin</span>
            <p>Trained in Mysore (Sharath Jois lineage) and at the Krishnamacharya Yoga Mandiram. 15 years on the mat, 11 of them at Hovara. Sits on the IYTA Portugal teacher review panel.</p>
          </article>
          <article className="instructor">
            <div className="photo"><img src="assets/img/instructor-02.jpg" alt="Aisha Robinson — co-founder, vinyasa and pranayama teacher." /></div>
            <h5>Aisha Robinson</h5>
            <span className="specialty">Co-founder · Vinyasa · Pranayama</span>
            <p>Trained at Yoga Yoga (Austin) and the Krishnamacharya Yoga Mandiram. Joined Hovara in 2017; has lived in Lisbon since 2019. Author of <em>Slow Vinyasa</em> (Park Books, 2024).</p>
          </article>
          <article className="instructor">
            <div className="photo"><img src="assets/img/instructor-03.jpg" alt="Sara Lindgren — Ashtanga Mysore lead." /></div>
            <h5>Sara Lindgren</h5>
            <span className="specialty">Ashtanga (Mysore)</span>
            <p>Authorized Level 2 teacher (KPJAYI Mysore). Runs the 06:30 Mysore room from Tuesday to Saturday. Travels to Mysore for two months every January.</p>
          </article>
          <article className="instructor">
            <div className="photo"><img src="assets/img/instructor-04.jpg" alt="Daniel Park — co-founder, sound bath and meditation teacher." /></div>
            <h5>Daniel Park</h5>
            <span className="specialty">Co-founder · Sound Bath · Meditation</span>
            <p>Eight years leading sound and breath work. Trained at Spirit Rock (California) and the Insight Meditation Society. Hosts the Friday Sound Bath and the lunchtime meditation block.</p>
          </article>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="photo-panel">
          <img src="assets/img/yoga-studio.jpg" alt="Hovara studio interior — three mats arranged in a half-circle, blonde wood floor, low afternoon light." />
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="mono-cap">The space · 03</span>
            <h2 style={{marginTop:"12px"}}>A 19th-century townhouse, two practice rooms, <span className="text-clay">one tea room.</span></h2>
          </div>
          <p>The Hovara studio occupies the top two floors of a restored Pombaline townhouse on Rua da Boavista. The renovation took eighteen months and was led by a local architect who has practised with us for nine years.</p>
        </div>

        <div className="classes-grid">
          <article className="class-card">
            <div className="head">
              <h4>Studio A · 16 mats</h4>
              <span className="duration">3rd floor</span>
            </div>
            <p>The larger of the two practice rooms. South-facing, with three tall arched windows and a 4.5-metre ceiling. Sprung wood floor over felt. The Mysore room and Vinyasa Flow rooms most weekdays.</p>
          </article>
          <article className="class-card">
            <div className="head">
              <h4>Studio B · 12 mats</h4>
              <span className="duration">2nd floor</span>
            </div>
            <p>The quieter, smaller room. East-facing, suited to slower classes. A wood-burning stove (ornamental) anchors the corner. Slow Restore, Yin, and the lunchtime meditation.</p>
          </article>
          <article className="class-card">
            <div className="head">
              <h4>Tea room · ground floor</h4>
              <span className="duration">All hours</span>
            </div>
            <p>A fifteen-seat room with a kettle, a tin of biscuits, and a small library. Members and post-class students linger here. We close it at 21:30.</p>
          </article>
          <article className="class-card">
            <div className="head">
              <h4>Changing rooms</h4>
              <span className="duration">2nd &amp; 3rd floor</span>
            </div>
            <p>Two changing rooms per floor, with hot showers and lockers. Bring your own padlock or borrow one at reception. Towels for hire (€2).</p>
          </article>
          <article className="class-card">
            <div className="head">
              <h4>Reception</h4>
              <span className="duration">Ground floor</span>
            </div>
            <p>Open Mon–Sat 06:00 — 21:30, Sun 08:30 — 19:00. Booking, drop-ins, gift cards, mat storage, and lost property.</p>
          </article>
          <article className="class-card">
            <div className="head">
              <h4>Garden &amp; bicycles</h4>
              <span className="duration">Outside</span>
            </div>
            <p>A small walled garden behind the studio, available to members in summer. Six bicycle racks, two cargo bike spaces, secure overnight only for members.</p>
          </article>
        </div>
      </div>
    </section>

     <section className="section--tight">
      <div className="container">
        <div className="stat-strip">
          <div className="stat"><span className="value">11</span><span className="label">Years practising · since 2014</span></div>
          <div className="stat"><span className="value">12</span><span className="label">Senior teachers</span></div>
          <div className="stat"><span className="value">42</span><span className="label">Classes every week</span></div>
          <div className="stat"><span className="value">1,840</span><span className="label">Active members</span></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="mono-cap">Timeline · 04</span>
            <h2 style={{marginTop:"12px"}}>Eleven slow years, <span className="text-clay">on the mat.</span></h2>
          </div>
          <p>From a rented room with three weekly classes to a 240 m² studio with twelve teachers. Below are the moments when the rhythm changed.</p>
        </div>

        <div style={{display:"grid", gap:"var(--space-4)", maxWidth: "880px" ,margin: "0 auto"}}>
          <article style={{display:"grid" ,gridTemplateColumns:"120px 1fr", gap:"var(--space-5)" ,padding:"var(--space-5) 0" ,borderBottom:"1px solid var(--rule)",alignItems:"start"}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:"var(--text-sm)", letterSpacing:"0.06em" ,color:"var(--accent)"}}>2014</span>
            <div>
              <h4 style={{fontSize:"var(--text-xl)",marginBottom:"8px"}}>Three classes a week, one rented room</h4>
              <p style={{margin:"0", color:"var(--fg-soft)"}}>Marisol and Aisha rent a 30 m² room above a café in Estrela and teach three classes a week between them.</p>
            </div>
          </article>
          <article style={{display:"grid", gridTemplateColumns:"120px 1fr", gap:"var(--space-5)", padding:"var(--space-5) 0" ,borderBottom:"1px solid var(--rule)", alignItems:"start"}}>
            <span style={{fontFamily:"var(--font-mono)", fontSize:"var(--text-sm)", letterSpacing:"0.06em", color:"var(--accent)"}}>2017</span>
            <div>
              <h4 style={{fontSize:"var(--text-xl)", marginBottom:"8px"}}>Aisha and Daniel join as partners</h4>
              <p style={{margin:"0", color:"var(--fg-soft)"}}>Daniel adds the first sound bath. The studio reaches 200 active members; we move to a 90 m² space on the same street.</p>
            </div>
          </article>
          <article style={{display:"grid", gridTemplateColumns:"120px 1fr", gap:"var(--space-5)", padding:"var(--space-5) 0", borderBottom:"1px solid var(--rule)", alignItems:"start"}}>
            <span style={{fontFamily:"var(--font-mono)", fontSize:"var(--text-sm)", letterSpacing:"0.06em", color:"var(--accent)"}}>2019</span>
            <div>
              <h4 style={{fontSize:"var(--text-xl)", marginBottom:"8px"}}>Sara opens the Mysore room</h4>
              <p style={{margin:"0", color:"var(--fg-soft)"}}>An 06:30 self-led Ashtanga room becomes the spine of the morning schedule. The fourth founding partner joins.</p>
            </div>
          </article>
          <article style={{display:"grid", gridTemplateColumns:"120px 1fr", gap:"var(--space-5)", padding:"var(--space-5) 0", borderBottom:"1px solid var(--rule)", alignItems:"start"}}>
            <span style={{fontFamily:"var(--font-mono)", fontSize:"var(--text-sm)", letterSpacing:"0.06em", color:"var(--accent)"}}>2021</span>
            <div>
              <h4 style={{fontSize:"var(--text-xl)", marginBottom:"8px"}}>First teacher-training cohort</h4>
              <p style={{margin:"0" ,color:"var(--fg-soft)"}}>Twelve students enrol on a 200-hour teacher training. Eight of them now teach somewhere; two of them at Hovara.</p>
            </div>
          </article>
          <article style={{display:"grid", gridTemplateColumns:"120px 1fr", gap:"var(--space-5)", padding:"var(--space-5) 0", borderBottom:"1px solid var(--rule)", alignItems:"start"}}>
            <span style={{fontFamily:"var(--font-mono)", fontSize:"var(--text-sm)", letterSpacing:"0.06em" ,color:"var(--accent)"}}>2023</span>
            <div>
              <h4 style={{fontSize:"var(--text-xl)", marginBottom:"8px"}}>Move to Rua da Boavista 142</h4>
              <p style={{margin:"0", color:"var(--fg-soft)"}}>The current studio. Eighteen months of renovation, two practice rooms, a tea room, and a small walled garden. 1,200 active members on opening day.</p>
            </div>
          </article>
          <article style={{display:"grid",gridTemplateColumns:"120px 1fr", gap:"var(--space-5)" ,padding:"var(--space-5) 0", borderBottom:"1px solid var(--rule)" ,alignItems:"start"}}>
            <span style={{fontFamily:"var(--font-mono)", fontSize:"var(--text-sm)", letterSpacing:"0.06em", color:"var(--accent)"}}>2026</span>
            <div>
              <h4 style={{fontSize:"var(--text-xl)", marginBottom:"8px"}}>Twelve teachers · 1,840 members</h4>
              <p style={{margin:"0", color:"var(--fg-soft)"}}>Forty-two classes a week. Three pro-bono classes for the local community. The studio is closed on the first Sunday of every month for cleaning and teacher development.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>

      <Footer />
    </>
  );
}

export default Studio;