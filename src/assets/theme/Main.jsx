function Main(){
  return(
    <>
   <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="hero-eyebrow">
              <span className="dot" aria-hidden="true"></span>
              Lisbon · Estrela · since 2014
            </span>
            <h1 className="hero-headline">
              Move <em>slowly,</em><br/>breathe deeply,<br/>arrive fully.
            </h1>
            <p className="hero-sub">
              Hovara is a small yoga studio in Lisbon&rsquo;s Estrela district.
              Twelve teachers, forty-two classes a week, and a single rule:
              we slow everything down so you don&rsquo;t have to.
            </p>
            <div className="hero-cta-row">
              <a className="btn btn--primary btn--lg" href="contact.html">Book your first class — free
                <svg className="arrow" width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a className="btn btn--ghost btn--lg" href="schedule.html">See this week</a>
            </div>
            <div className="hero-meta">
              <span className="stars" aria-label="4.9 out of 5">★★★★★</span>
              <span><strong>4.9</strong> · 380+ Google reviews</span>
              <span aria-hidden="true">·</span>
              <span><strong>42</strong> classes a week</span>
              <span aria-hidden="true">·</span>
              <span><strong>12</strong> teachers</span>
            </div>
          </div>
          <div className="hero-media">
            <img src="assets/img/yoga-pose-hero.jpg" alt="Yoga student in a soft warrior pose, late afternoon light through tall windows of the Estrela studio." />
            <div className="floating-card fc-top">
              <div className="fc-class">
                <span className="fc-circle">42</span>
                <div>
                  <span className="v">classes</span>
                  <span className="l">every week</span>
                </div>
              </div>
            </div>
            <div className="floating-card fc-bottom">
              <div className="fc-class">
                <span className="fc-circle" style={{background:"var(--sage)", fontSize:"var(--text-sm)", fontWeight:"600"}}>SR</span>
                <div>
                  <span className="v">Slow Restore · 17:30</span>
                  <span className="l">Marisol Tavares · 4 spots left</span>
                </div>
              </div>
              <div className="fc-stats">
                <div><span className="v">90<sub style={{fontWeight:"400"}}>min</sub></span><span className="l">Length</span></div>
                <div><span className="v">All</span><span className="l">Levels</span></div>
                <div><span className="v">€18</span><span className="l">Drop-in</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   <section className="section--tight">
      <div className="container">
        <div className="photo-panel">
          <img src="assets/img/yoga-class.jpg" alt="Hovara students in a Saturday morning vinyasa flow, mats arranged in three quiet rows under skylights." />
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="mono-cap">What we teach · 02</span>
            <h2 style={{marginTop: "12px"}}>Six styles, <span className="text-clay">one rhythm.</span></h2>
          </div>
          <p>From slow restorative work to dynamic vinyasa flows. Every class is taught by a senior teacher with at least 500 hours of training, and every studio has a maximum of sixteen mats.</p>
        </div>

        <div className="classes-grid">
          <article className="class-card is-featured">
            <div className="photo">
              <img src="assets/img/yoga-meditation.jpg" alt="Slow Restore class — student in a supported child's pose with a bolster and warm wool blanket." />
            </div>
            <div className="head">
              <h4>Slow Restore</h4>
              <span className="duration">90 min</span>
            </div>
            <p>Long-held, supported postures with bolsters, blankets, and blocks. The slowest class on our schedule.</p>
            <div className="footer">
              <span className="price">€18 <sub>/ drop-in</sub></span>
              <span className="pill pill--sage"><span className="dot"></span>All levels</span>
            </div>
          </article>

          <article className="class-card ">
            <div className="photo">
              <img src="assets/img/yoga-warrior.jpg" alt="Vinyasa Flow class — student in a strong warrior II pose, light streaming through tall windows." />
            </div>
            <div className="head">
              <h4>Vinyasa Flow</h4>
              <span className="duration">75 min</span>
            </div>
            <p>Breath-paced sequence linking sun salutations, standing poses, and a careful inversion. Our most popular class.</p>
            <div className="footer">
              <span className="price">€18 <sub>/ drop-in</sub></span>
              <span className="pill">Intermediate</span>
            </div>
          </article>

          <article className="class-card ">
            <div className="photo">
              <img src="assets/img/yoga-breathing.jpg" alt="Pranayama class — student seated cross-legged with hands on knees, eyes closed, in a quiet morning practice." />
            </div>
            <div className="head">
              <h4>Pranayama</h4>
              <span className="duration">45 min</span>
            </div>
            <p>Breath-only sessions. Nadi shodhana, ujjayi, kapalabhati. Run by senior teachers; suited to anyone past their first month.</p>
            <div className="footer">
              <span className="price">€14 <sub>/ drop-in</sub></span>
              <span className="pill">All levels</span>
            </div>
          </article>

          <article className="class-card">
            <div className="photo">
              <img src="assets/img/yoga-mat.jpg" alt="Yin yoga class — student folded forward over crossed legs, mat and bolster on a hardwood floor." />
            </div>
            <div className="head">
              <h4>Yin</h4>
              <span className="duration">75 min</span>
            </div>
            <p>Floor-based, long passive holds (3–5 minutes per pose). Targets fascia, ligaments, and the parasympathetic nervous system.</p>
            <div className="footer">
              <span className="price">€18 <sub>/ drop-in</sub></span>
              <span className="pill">All levels</span>
            </div>
          </article>

          <article className="class-card">
            <div className="photo">
              <img src="assets/img/yoga-warrior.jpg" alt="Ashtanga class — student transitioning between standing poses, focused gaze, late morning light." />
            </div>
            <div className="head">
              <h4>Ashtanga (Mysore)</h4>
              <span className="duration">90 min</span>
            </div>
            <p>Self-led practice through the primary series, with a teacher in the room offering individual hands-on adjustments.</p>
            <div className="footer">
              <span className="price">€20 <sub>/ drop-in</sub></span>
              <span className="pill pill--clay">Advanced</span>
            </div>
          </article>

          <article className="class-card">
            <div className="photo">
              <img src="assets/img/yoga-studio.jpg" alt="Sound bath class — students lying on mats with bolsters, low warm lighting and crystal singing bowls in the foreground." />
            </div>
            <div className="head">
              <h4>Sound Bath</h4>
              <span className="duration">60 min</span>
            </div>
            <p>A floor-based meditation with crystal singing bowls, gong, and chimes. Twice a month on Friday evenings.</p>
            <div className="footer">
              <span className="price">€22 <sub>/ drop-in</sub></span>
              <span className="pill">All levels</span>
            </div>
          </article>
        </div>

        <div className="flex-row" style={{marginTop:"var(--space-7)", justifyContent:"center"}}>
          <a className="btn btn--ghost" href="classes.html">All six classes in detail
            <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
     <section className="section section--sage">
      <div className="container">
        <div className="photo-split">
          <div className="photo-panel">
            <img src="assets/img/yoga-studio.jpg" alt="Hovara studio interior — three mats in a quiet half-circle, blonde wood floor, low afternoon light through arched windows." />
          </div>
          <div className="copy">
            <span className="mono-cap text-clay">The studio · 03</span>
            <h2 style={{marginTop: "12px"}}>A 19th-century townhouse, two practice rooms, and one quiet rule.</h2>
            <p>The Hovara studio occupies the top two floors of a restored Pombaline townhouse on Rua da Boavista. Two practice rooms — sixteen mats max in each — generous changing rooms, hot showers, and a small tea room overlooking the street. We open at 06:30 most days; the last class ends at 21:00. The lights are always lower than you expect.</p>
            <div className="flex-row mt-7">
              <a className="btn btn--primary" href="studio.html">More about the space
                <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a className="btn btn--ghost" href="contact.html">Visit us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="mono-cap">Teachers · 04</span>
            <h2 style={{marginTop:"12px"}}>Twelve senior teachers, <span className="text-clay">one bench.</span></h2>
          </div>
          <p>Every Hovara teacher has at least 500 hours of training and a minimum of three years on the mat with us. Bios, lineages, and personal practices are on the Studio page.</p>
        </div>

        <div className="instructors">
          <article className="instructor">
            <div className="photo"><img src="assets/img/instructor-01.jpg" alt="Marisol Tavares — senior teacher, slow restore and yin specialist, half-length portrait in soft afternoon light." /></div>
            <h5>Marisol Tavares</h5>
            <span className="specialty">Slow Restore · Yin</span>
            <p>15 years of practice, trained in Mysore (Sharath Jois lineage). Leads our Sunday Slow Restore.</p>
          </article>
          <article className="instructor">
            <div className="photo"><img src="assets/img/instructor-02.jpg" alt="Aisha Robinson — vinyasa and pranayama teacher, half-length portrait." /></div>
            <h5>Aisha Robinson</h5>
            <span className="specialty">Vinyasa · Pranayama</span>
            <p>Trained at Yoga Yoga (Austin) and the Krishnamacharya Yoga Mandiram. Lives in Lisbon since 2019.</p>
          </article>
          <article className="instructor">
            <div className="photo"><img src="assets/img/instructor-03.jpg" alt="Sara Lindgren — ashtanga Mysore teacher, half-length portrait." /></div>
            <h5>Sara Lindgren</h5>
            <span className="specialty">Ashtanga (Mysore)</span>
            <p>Authorized Level 2 teacher (KPJAYI Mysore). Runs the 06:30 Mysore room from Tuesday to Saturday.</p>
          </article>
          <article className="instructor">
            <div className="photo"><img src="assets/img/instructor-04.jpg" alt="Daniel Park — sound bath and meditation teacher, half-length portrait." /></div>
            <h5>Daniel Park</h5>
            <span className="specialty">Sound Bath · Meditation</span>
            <p>Eight years leading sound and breath work. Twice-monthly Friday Sound Bath, plus the lunchtime meditation.</p>
          </article>
        </div>
      </div>
    </section>
    <section className="section--tight section--bone">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="mono-cap">Students · 05</span>
            <h2 style={{marginTop:"12px"}}>Why people <span className="text-clay">stay.</span></h2>
          </div>
          <p>Pulled from Google reviews, ClassPass, and a small folded notebook in the tea room. Lightly edited.</p>
        </div>

        <div className="testimonials">
          <article className="testimonial">
            <span className="stars">★★★★★</span>
            <blockquote>"I&rsquo;ve been to studios in three cities. Hovara is the only one where I&rsquo;ve stayed past the first month. The teachers actually watch you."</blockquote>
            <div className="author">
              <span className="avatar"><img src="assets/img/instructor-01.jpg" alt="Inês M." /></span>
              <div><div className="name">Inês M.</div><div className="role">Member · 3 years</div></div>
            </div>
          </article>
          <article className="testimonial">
            <span className="stars">★★★★★</span>
            <blockquote>"Slow Restore on Sunday is the only thing standing between me and the rest of my life. I drive 25 minutes just to make it."</blockquote>
            <div className="author">
              <span className="avatar"><img src="assets/img/instructor-04.jpg" alt="João P." /></span>
              <div><div className="name">João P.</div><div className="role">Member · 18 months</div></div>
            </div>
          </article>
          <article className="testimonial">
            <span className="stars">★★★★★</span>
            <blockquote>"The Mysore room is run with the kind of quiet authority I&rsquo;ve only seen in Mysore itself. Sara is the real thing."</blockquote>
            <div className="author">
              <span className="avatar"><img src="assets/img/instructor-02.jpg" alt="Camille L." /></span>
              <div><div className="name">Camille L.</div><div className="role">Member · 2 years</div></div>
            </div>
          </article>
        </div>
      </div>
    </section>
     <section className="section--tight">
      <div className="container">
        <div className="stat-strip">
          <div className="stat"><span className="value">42</span><span className="label">Classes every week</span></div>
          <div className="stat"><span className="value">12</span><span className="label">Senior teachers</span></div>
          <div className="stat"><span className="value">2014</span><span className="label">Founded · 11 years on</span></div>
          <div className="stat"><span className="value">4.9★</span><span className="label">380+ Google reviews</span></div>
        </div>
      </div>
    </section>
      <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="mono-cap">Memberships · 06</span>
            <h2 style={{marginTop:"12px"}}>Three ways to <span className="text-clay">stay.</span></h2>
          </div>
          <p>Drop in once, build a habit on the four-class pack, or commit to the unlimited monthly. No annual contracts; cancel any month, no questions.</p>
        </div>

        <div className="memberships">
          <article className="membership">
            <span className="pill pill--sage">Casual</span>
            <h3>Drop-in</h3>
            <div className="price-amount">€18<sub>/class</sub></div>
            <p className="text-soft">Pay as you come. Walk in, walk out, no commitment. First class free for new students.</p>
            <ul>
              <li>Any class on the schedule</li>
              <li>First class on us</li>
              <li>Mat &amp; props included</li>
              <li>Tea room access</li>
            </ul>
            <a className="btn" href="contact.html" style={{marginTop:"auto"}}>Book a class</a>
          </article>
          <article className="membership is-featured">
            <span className="badge">Most popular</span>
            <span className="pill" style={{background:"rgba(255,255,255,0.15)", color:"var(--cream)", borderColor:"rgba(255,255,255,0.25)"}}>Member</span>
            <h3>Unlimited monthly</h3>
            <div className="price-amount">€95<sub>/month</sub></div>
            <p>Unlimited classes, three guest passes a month, and 10% off retail. Cancel any month.</p>
            <ul>
              <li>Unlimited classes</li>
              <li>3 guest passes / month</li>
              <li>Workshop discount: 20%</li>
              <li>Free mat storage</li>
              <li>Tea room access</li>
            </ul>
            <a className="btn btn--clay" href="contact.html" style={{marginTop:"auto"}}>Become a member</a>
          </article>
          <article className="membership">
            <span className="pill pill--clay">Pack</span>
            <h3>4-class pack</h3>
            <div className="price-amount">€60<sub>/4 classes</sub></div>
            <p className="text-soft">Builds the habit. Use within 30 days. Best if you're starting and not ready to commit monthly.</p>
            <ul>
              <li>4 classes, any style</li>
              <li>30-day expiry</li>
              <li>Transfer to a friend once</li>
              <li>Mat &amp; props included</li>
            </ul>
            <a className="btn" href="contact.html" style={{marginTop:"auto"}}>Buy pack</a>
          </article>
        </div>
      </div>
    </section>
    </>

  );
}

export default Main;