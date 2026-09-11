import Header from "../theme/Header";
import Footer from "../theme/Footer";

function Classes() {
  return (
    <>
    <Header />
      <main id="main">
        <section className="page-header">
          <div className="container">
            <span className="hero-eyebrow">
              <span className="dot" aria-hidden="true"></span>Six classes · all
              levels welcome
            </span>
            <h1>
              The whole rhythm,{" "}
              <span className="text-clay">in six classes.</span>
            </h1>
            <p>
              Every Hovara class follows the same arc: a quiet arrival, a
              structured middle, and a long savasana. The shape is the same; the
              speed is what changes.
            </p>
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <div className="photo-panel">
              <img
                src="assets/img/yoga-class.jpg"
                alt="A Saturday morning vinyasa flow at Hovara — sixteen mats, soft natural light, students moving in unison."
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="classes-grid">
              <article className="class-card is-featured">
                <div className="photo">
                  <img
                    src="assets/img/yoga-meditation.jpg"
                    alt="Slow Restore — supported child's pose with a bolster and warm wool blanket."
                  />
                </div>
                <div className="head">
                  <h4>Slow Restore</h4>
                  <span className="duration">90 min</span>
                </div>
                <p>
                  Long-held, supported postures with bolsters, blankets, and
                  blocks. The slowest class on our schedule. Ideal as your only
                  class for the week, or as the recovery anchor of a busier
                  practice. Three of the eight poses involve no movement at all.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "grid",
                    gap: "8px",
                    fontSize: "var(--text-sm)",
                    color: "var(--fg-soft)",
                  }}
                >
                  <li>
                    <strong>Best for:</strong> Burnout recovery · sleep · stress
                    · injury rehab
                  </li>
                  <li>
                    <strong>Bring:</strong> Just yourself · we provide all the
                    props
                  </li>
                  <li>
                    <strong>Frequency:</strong> 6 sessions a week, twice on
                    Sundays
                  </li>
                </ul>
                <div className="footer">
                  <span className="price">
                    €18 <sub>/ drop-in</sub>
                  </span>
                  <span className="pill pill--sage">
                    <span className="dot"></span>All levels
                  </span>
                </div>
              </article>

              <article className="class-card">
                <div className="photo">
                  <img
                    src="assets/img/yoga-warrior.jpg"
                    alt="Vinyasa Flow — strong warrior II pose, light streaming through tall windows."
                  />
                </div>
                <div className="head">
                  <h4>Vinyasa Flow</h4>
                  <span className="duration">75 min</span>
                </div>
                <p>
                  Breath-paced sequence linking sun salutations, standing poses,
                  and a careful inversion. Our most popular class. Three
                  sub-levels: gentle, all-levels, and strong — clearly labelled
                  on the schedule so you can pick.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "grid",
                    gap: "8px",
                    fontSize: "var(--text-sm)",
                    color: "var(--fg-soft)",
                  }}
                >
                  <li>
                    <strong>Best for:</strong> Strength · mobility · balanced
                    energy
                  </li>
                  <li>
                    <strong>Bring:</strong> Water · a small towel
                  </li>
                  <li>
                    <strong>Frequency:</strong> 12 classes a week across three
                    sub-levels
                  </li>
                </ul>
                <div className="footer">
                  <span className="price">
                    €18 <sub>/ drop-in</sub>
                  </span>
                  <span className="pill">Intermediate</span>
                </div>
              </article>

              <article className="class-card">
                <div className="photo">
                  <img
                    src="assets/img/yoga-breathing.jpg"
                    alt="Pranayama — student seated cross-legged with hands on knees, eyes closed."
                  />
                </div>
                <div className="head">
                  <h4>Pranayama</h4>
                  <span className="duration">45 min</span>
                </div>
                <p>
                  Breath-only sessions. Nadi shodhana, ujjayi, kapalabhati, and
                  bhramari. Run by senior teachers; suited to anyone past their
                  first month. Many students pair this with a vinyasa class on
                  the same day.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "grid",
                    gap: "8px",
                    fontSize: "var(--text-sm)",
                    color: "var(--fg-soft)",
                  }}
                >
                  <li>
                    <strong>Best for:</strong> Anxiety · focus · respiratory
                    health
                  </li>
                  <li>
                    <strong>Bring:</strong> Just yourself
                  </li>
                  <li>
                    <strong>Frequency:</strong> 4 sessions a week, 06:45 &amp;
                    18:30
                  </li>
                </ul>
                <div className="footer">
                  <span className="price">
                    €14 <sub>/ drop-in</sub>
                  </span>
                  <span className="pill">All levels</span>
                </div>
              </article>

              <article className="class-card">
                <div className="photo">
                  <img
                    src="assets/img/yoga-mat.jpg"
                    alt="Yin — student folded forward over crossed legs on a hardwood floor."
                  />
                </div>
                <div className="head">
                  <h4>Yin</h4>
                  <span className="duration">75 min</span>
                </div>
                <p>
                  Floor-based, long passive holds (3–5 minutes per pose).
                  Targets fascia, ligaments, and the parasympathetic nervous
                  system. The teacher cues the breath; you decide how deep to
                  go.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "grid",
                    gap: "8px",
                    fontSize: "var(--text-sm)",
                    color: "var(--fg-soft)",
                  }}
                >
                  <li>
                    <strong>Best for:</strong> Mobility · joint health · slowing
                    down
                  </li>
                  <li>
                    <strong>Bring:</strong> A pair of socks for savasana
                  </li>
                  <li>
                    <strong>Frequency:</strong> 5 sessions a week
                  </li>
                </ul>
                <div className="footer">
                  <span className="price">
                    €18 <sub>/ drop-in</sub>
                  </span>
                  <span className="pill">All levels</span>
                </div>
              </article>

              <article className="class-card">
                <div className="photo">
                  <img
                    src="assets/img/yoga-pose-hero.jpg"
                    alt="Ashtanga (Mysore) — student transitioning between standing poses, focused gaze."
                  />
                </div>
                <div className="head">
                  <h4>Ashtanga (Mysore)</h4>
                  <span className="duration">90 min</span>
                </div>
                <p>
                  Self-led practice through the primary series, with a teacher
                  in the room offering individual hands-on adjustments. Six
                  mornings a week, 06:30. New Mysore students are welcomed by
                  appointment only — please email first.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "grid",
                    gap: "8px",
                    fontSize: "var(--text-sm)",
                    color: "var(--fg-soft)",
                  }}
                >
                  <li>
                    <strong>Best for:</strong> Disciplined daily practice ·
                    primary series students
                  </li>
                  <li>
                    <strong>Bring:</strong> Your own mat &amp; rug if you have
                    one
                  </li>
                  <li>
                    <strong>Frequency:</strong> Tue–Sat, 06:30 — 08:30
                  </li>
                </ul>
                <div className="footer">
                  <span className="price">
                    €20 <sub>/ drop-in</sub>
                  </span>
                  <span className="pill pill--clay">Advanced</span>
                </div>
              </article>

              <article className="class-card">
                <div className="photo">
                  <img
                    src="assets/img/yoga-studio.jpg"
                    alt="Sound Bath — students lying on mats with bolsters, low warm lighting and crystal singing bowls."
                  />
                </div>
                <div className="head">
                  <h4>Sound Bath</h4>
                  <span className="duration">60 min</span>
                </div>
                <p>
                  A floor-based meditation with crystal singing bowls, gong, and
                  chimes. Twice a month on Friday evenings. Often booked out
                  three weeks ahead — reserve early. We dim the lights to about
                  6%; bring something warm.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "grid",
                    gap: "8px",
                    fontSize: "var(--text-sm)",
                    color: "var(--fg-soft)",
                  }}
                >
                  <li>
                    <strong>Best for:</strong> Sleep · meditation · "I'm too
                    tired to move"
                  </li>
                  <li>
                    <strong>Bring:</strong> A warm layer · a sleep mask if you
                    have one
                  </li>
                  <li>
                    <strong>Frequency:</strong> Two Friday evenings a month,
                    19:30
                  </li>
                </ul>
                <div className="footer">
                  <span className="price">
                    €22 <sub>/ drop-in</sub>
                  </span>
                  <span className="pill">All levels</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--cream">
          <div className="container">
            <div className="photo-split">
              <div className="copy">
                <span className="mono-cap text-clay">First class · 03</span>
                <h2 style={{ marginTop: "12px" }}>
                  What to bring (and what not to).
                </h2>
                <p>
                  You don&rsquo;t need a thing. We provide mats, blocks,
                  bolsters, blankets, and a small towel. Bring water if you
                  like, and a layer for the long savasana — most students get
                  cold by the end.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "var(--space-5) 0",
                    display: "grid",
                    gap: "var(--space-3)",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      gap: "var(--space-3)",
                      alignItems: "start",
                    }}
                  >
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "var(--sage-mist)",
                        color: "var(--sage-deep)",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: "700",
                        flexShrink: "0",
                        fontSize: "12px",
                      }}
                    >
                      1
                    </span>{" "}
                    Water bottle (refill stations on each floor)
                  </li>
                  <li
                    style={{
                      display: "flex",
                      gap: "var(--space-3)",
                      alignItems: "start",
                    }}
                  >
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "var(--sage-mist)",
                        color: "var(--sage-deep)",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: "700",
                        flexShrink: "0",
                        fontSize: "12px",
                      }}
                    >
                      2
                    </span>{" "}
                    A warm layer for savasana (we keep the studio cool)
                  </li>
                  <li
                    style={{
                      display: "flex",
                      gap: "var(--space-3)",
                      alignItems: "start",
                    }}
                  >
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "var(--sage-mist)",
                        color: "var(--sage-deep)",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: "700",
                        flexShrink: "0",
                        fontSize: "12px",
                      }}
                    >
                      3
                    </span>{" "}
                    Comfortable clothes — leggings, t-shirt, anything you can
                    move in
                  </li>
                  <li
                    style={{
                      display: "flex",
                      gap: "var(--space-3)",
                      alignItems: "start",
                    }}
                  >
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "var(--sage-mist)",
                        color: "var(--sage-deep)",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: "700",
                        flexShrink: "0",
                        fontSize: "12px",
                      }}
                    >
                      4
                    </span>{" "}
                    An empty stomach for stronger classes (eat 2 hours before)
                  </li>
                  <li
                    style={{
                      display: "flex",
                      gap: "var(--space-3)",
                      alignItems: "start",
                    }}
                  >
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "var(--clay-soft)",
                        color: "var(--clay-deep)",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: "700",
                        flexShrink: "0",
                        fontSize: "12px",
                      }}
                    >
                      ×
                    </span>{" "}
                    Don&rsquo;t bring your phone in — we have lockers at
                    reception
                  </li>
                </ul>
                <a className="btn btn--primary" href="contact.html">
                  Book your first class
                  <svg
                    className="arrow"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="photo-panel">
                <img
                  src="assets/img/yoga-mat.jpg"
                  alt="Hovara mats — neatly folded blankets, two bolsters, and a single block stacked beside a hardwood floor."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="mono-cap">Common questions · 04</span>
                <h2 style={{ marginTop: "12px" }}>
                  Before your <span className="text-clay">first class.</span>
                </h2>
              </div>
              <p>
                If your question isn&rsquo;t here, email{" "}
                <a
                  href="mailto:hello@hovara.studio"
                  style={{
                    color: "var(--accent)",
                    textDecoration: "underline",
                  }}
                >
                  hello@hovara.studio
                </a>
                . We answer within a working day.
              </p>
            </div>

            <div className="faq">
              <details>
                <summary>
                  I&rsquo;ve never done yoga. What class do I start with?
                </summary>
                <p>
                  Start with a Slow Restore or a "gentle" Vinyasa Flow — clearly
                  labelled on the schedule. Avoid Ashtanga Mysore for the first
                  month; it&rsquo;s self-led and assumes you know the sequence.
                </p>
              </details>
              <details>
                <summary>How early should I arrive?</summary>
                <p>
                  15 minutes for your first class, 5 minutes after that.
                  Reception will check you in; the studio doors close two
                  minutes before class starts and we don&rsquo;t open them
                  mid-class out of respect for the room.
                </p>
              </details>
              <details>
                <summary>Do you provide mats and props?</summary>
                <p>
                  Yes — mats, blocks, bolsters, blankets, and small towels are
                  all available free. If you prefer your own, mat storage is
                  included with the unlimited monthly membership.
                </p>
              </details>
              <details>
                <summary>What&rsquo;s your cancellation policy?</summary>
                <p>
                  Free cancellation up to 4 hours before class. After that, the
                  class is debited from your pack or counted as a no-show on the
                  membership. Three no-shows in a month and we&rsquo;ll reach
                  out to chat.
                </p>
              </details>
              <details>
                <summary>Are classes taught in English?</summary>
                <p>
                  Most classes are bilingual (Portuguese + English). Two classes
                  a week — Friday Slow Restore and Sunday Yin — are taught
                  entirely in English. Mysore is silent, so language
                  doesn&rsquo;t apply.
                </p>
              </details>
              <details>
                <summary>Can I buy classes for someone else?</summary>
                <p>
                  Yes — we sell gift cards for any of the three membership
                  tiers. Email{" "}
                  <a
                    href="mailto:hello@hovara.studio"
                    style={{
                      color: "var(--accent)",
                      textDecoration: "underline",
                    }}
                  >
                    hello@hovara.studio
                  </a>{" "}
                  with the recipient&rsquo;s name and we&rsquo;ll arrange.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Classes;
