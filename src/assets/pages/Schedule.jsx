import Header from "../theme/Header";
import Footer from "../theme/Footer";

function Schedule(){
  return(
    <>

    <Header />
    <section className="page-header">
      <div className="container">
        <span className="hero-eyebrow"><span className="dot" aria-hidden="true"></span>Week of 12 — 18 May · 42 classes</span>
        <h1>This week, <span className="text-clay">on the mat.</span></h1>
        <p>Forty-two classes across six styles, six days a week. The studio is closed on the first Sunday of every month for cleaning and teacher training; otherwise we open at 06:30 and close at 21:00.</p>
      </div>
    </section>
    <section className="section--tight">
      <div className="container">
        <div className="schedule">
          <div className="schedule-tabs" role="tablist">
            <button className="schedule-tab" role="tab" aria-selected="true"  data-day="all">All week</button>
            <button className="schedule-tab" role="tab" aria-selected="false" data-day="mon">Mon · 12</button>
            <button className="schedule-tab" role="tab" aria-selected="false" data-day="tue">Tue · 13</button>
            <button className="schedule-tab" role="tab" aria-selected="false" data-day="wed">Wed · 14</button>
            <button className="schedule-tab" role="tab" aria-selected="false" data-day="thu">Thu · 15</button>
            <button className="schedule-tab" role="tab" aria-selected="false" data-day="fri">Fri · 16</button>
            <button className="schedule-tab" role="tab" aria-selected="false" data-day="sat">Sat · 17</button>
            <button className="schedule-tab" role="tab" aria-selected="false" data-day="sun">Sun · 18</button>
          </div>

          <div className="schedule-list">
            <div className="slot" data-day="mon"><span className="time">06:45<span className="duration">45 min</span></span><div className="info"><h5>Pranayama</h5><span className="meta"><span>Aisha Robinson</span><span>·</span><span>Studio A</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="mon"><span className="time">09:30<span className="duration">75 min</span></span><div className="info"><h5>Vinyasa Flow · Gentle</h5><span className="meta"><span>Marisol Tavares</span><span>·</span><span>Studio B</span></span></div><span className="level">Beginner</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="mon"><span className="time">12:30<span className="duration">45 min</span></span><div className="info"><h5>Lunchtime Meditation</h5><span className="meta"><span>Daniel Park</span><span>·</span><span>Studio A</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="mon"><span className="time">17:30<span className="duration">90 min</span></span><div className="info"><h5>Slow Restore</h5><span className="meta"><span>Marisol Tavares</span><span>·</span><span>Studio B</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="mon"><span className="time">19:15<span className="duration">75 min</span></span><div className="info"><h5>Vinyasa Flow · All levels</h5><span className="meta"><span>Aisha Robinson</span><span>·</span><span>Studio A</span></span></div><span className="level">Intermediate</span><a className="btn book" href="contact.html">Book</a></div>

           
            <div className="slot" data-day="tue"><span className="time">06:30<span className="duration">120 min</span></span><div className="info"><h5>Ashtanga Mysore</h5><span className="meta"><span>Sara Lindgren</span><span>·</span><span>Studio A</span></span></div><span className="level">Advanced</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="tue"><span className="time">09:30<span className="duration">75 min</span></span><div className="info"><h5>Yin</h5><span className="meta"><span>Marisol Tavares</span><span>·</span><span>Studio B</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="tue"><span className="time">18:30<span className="duration">45 min</span></span><div className="info"><h5>Pranayama</h5><span className="meta"><span>Daniel Park</span><span>·</span><span>Studio A</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="tue"><span className="time">19:30<span className="duration">75 min</span></span><div className="info"><h5>Vinyasa Flow · Strong</h5><span className="meta"><span>Aisha Robinson</span><span>·</span><span>Studio B</span></span></div><span className="level">Intermediate</span><a className="btn book" href="contact.html">Book</a></div>

           
            <div className="slot" data-day="wed"><span className="time">06:30<span className="duration">120 min</span></span><div className="info"><h5>Ashtanga Mysore</h5><span className="meta"><span>Sara Lindgren</span><span>·</span><span>Studio A</span></span></div><span className="level">Advanced</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="wed"><span className="time">09:30<span className="duration">75 min</span></span><div className="info"><h5>Vinyasa Flow · All levels</h5><span className="meta"><span>Aisha Robinson</span><span>·</span><span>Studio B</span></span></div><span className="level">Intermediate</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="wed"><span className="time">12:30<span className="duration">45 min</span></span><div className="info"><h5>Lunchtime Meditation</h5><span className="meta"><span>Daniel Park</span><span>·</span><span>Studio A</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="wed"><span className="time">18:00<span className="duration">75 min</span></span><div className="info"><h5>Yin</h5><span className="meta"><span>Marisol Tavares</span><span>·</span><span>Studio B</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="wed"><span className="time">19:30<span className="duration">90 min</span></span><div className="info"><h5>Slow Restore</h5><span className="meta"><span>Marisol Tavares</span><span>·</span><span>Studio A</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>

          
            <div className="slot" data-day="thu"><span className="time">06:30<span className="duration">120 min</span></span><div className="info"><h5>Ashtanga Mysore</h5><span className="meta"><span>Sara Lindgren</span><span>·</span><span>Studio A</span></span></div><span className="level">Advanced</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="thu"><span className="time">09:30<span className="duration">75 min</span></span><div className="info"><h5>Vinyasa Flow · Gentle</h5><span className="meta"><span>Marisol Tavares</span><span>·</span><span>Studio B</span></span></div><span className="level">Beginner</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="thu"><span className="time">17:30<span className="duration">75 min</span></span><div className="info"><h5>Vinyasa Flow · Strong</h5><span className="meta"><span>Aisha Robinson</span><span>·</span><span>Studio B</span></span></div><span className="level">Intermediate</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="thu"><span className="time">19:00<span className="duration">90 min</span></span><div className="info"><h5>Slow Restore</h5><span className="meta"><span>Marisol Tavares</span><span>·</span><span>Studio A</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>

        
            <div className="slot" data-day="fri"><span className="time">06:30<span className="duration">120 min</span></span><div className="info"><h5>Ashtanga Mysore</h5><span className="meta"><span>Sara Lindgren</span><span>·</span><span>Studio A</span></span></div><span className="level">Advanced</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="fri"><span className="time">09:30<span className="duration">75 min</span></span><div className="info"><h5>Yin</h5><span className="meta"><span>Marisol Tavares</span><span>·</span><span>Studio B</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="fri"><span className="time">12:30<span className="duration">45 min</span></span><div className="info"><h5>Pranayama</h5><span className="meta"><span>Aisha Robinson</span><span>·</span><span>Studio A</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="fri"><span className="time">18:00<span className="duration">90 min</span></span><div className="info"><h5>Slow Restore · English only</h5><span className="meta"><span>Daniel Park</span><span>·</span><span>Studio B</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="fri"><span className="time">19:30<span className="duration">60 min</span></span><div className="info"><h5>Sound Bath ✶</h5><span className="meta"><span>Daniel Park</span><span>·</span><span>Studio A</span><span>·</span><span>1st &amp; 3rd Friday</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>

            <div className="slot" data-day="sat"><span className="time">06:30<span className="duration">120 min</span></span><div className="info"><h5>Ashtanga Mysore</h5><span className="meta"><span>Sara Lindgren</span><span>·</span><span>Studio A</span></span></div><span className="level">Advanced</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="sat"><span className="time">09:30<span className="duration">75 min</span></span><div className="info"><h5>Vinyasa Flow · All levels</h5><span className="meta"><span>Aisha Robinson</span><span>·</span><span>Studio B</span></span></div><span className="level">Intermediate</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="sat"><span className="time">11:00<span className="duration">90 min</span></span><div className="info"><h5>Slow Restore</h5><span className="meta"><span>Marisol Tavares</span><span>·</span><span>Studio A</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="sat"><span className="time">17:00<span className="duration">75 min</span></span><div className="info"><h5>Yin</h5><span className="meta"><span>Marisol Tavares</span><span>·</span><span>Studio B</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>

          
            <div className="slot" data-day="sun"><span className="time">09:00<span className="duration">90 min</span></span><div className="info"><h5>Slow Restore</h5><span className="meta"><span>Marisol Tavares</span><span>·</span><span>Studio A</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="sun"><span className="time">11:00<span className="duration">75 min</span></span><div className="info"><h5>Yin · English only</h5><span className="meta"><span>Daniel Park</span><span>·</span><span>Studio B</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
            <div className="slot" data-day="sun"><span className="time">17:30<span className="duration">90 min</span></span><div className="info"><h5>Slow Restore</h5><span className="meta"><span>Marisol Tavares</span><span>·</span><span>Studio A</span></span></div><span className="level">All levels</span><a className="btn book" href="contact.html">Book</a></div>
          </div>
        </div>
      </div>
    </section>
     <section className="section--tight">
      <div className="container">
        <div style={{background:"var(--sage-mst)" ,border:"1px solid var(--sage-soft)" ,borderRadius:"var(--radius-2xl)",adding:"var(--space-6)",display:"flex" ,gap:"var(--space-5)", alignItems:"start" ,flexWrap:"wrap"}}>
          <div style={{flexShrink:"0", width:"48px", height:"48px", borderRadius:"50%" ,background:"var(--sage-deep)" ,color:"var(--cream)", display:"grid", placeItems:"center", fontWeight:"800"}}>i</div>
          <div style={{flex:"1", minWidth:"240px"}}>
            <h4 style={{fontSize:"var(--text-lg)", marginBottom:"8px"}}>Studio closure · 1st Sunday of every month</h4>
            <p style={{margin:"0" ,color:"var(--fg-soft)", fontSize:"var(--text-sm)"}}>No classes on the first Sunday of every month — that&rsquo;s our cleaning, repairs, and teacher-training day. Next closure: 1 June. The schedule resumes Monday 2 June at 06:30.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="mono-cap">Workshops · 02</span>
            <h2 style={{marginTop: "12px"}}>Beyond the weekly <span className="text-clay">rhythm.</span></h2>
          </div>
          <p>Once a quarter, we run weekend deep-dives — pranayama, anatomy, philosophy, sound healing. Capped at sixteen, taught by senior teachers, a third of the cost goes to a local cause.</p>
        </div>

        <div className="classes-grid">
          <article className="class-card">
            <div className="photo">
              <img src="assets/img/yoga-breathing.jpg" alt="Pranayama deep-dive workshop — student seated cross-legged in deep breathing practice." />
            </div>
            <div className="head">
              <h4>Pranayama Deep-Dive</h4>
              <span className="duration">2 days</span>
            </div>
            <p>An honest weekend with the breath. Six hours of practice, two hours of theory, one shared lunch on Saturday. Sat 7 — Sun 8 June.</p>
            <div className="footer">
              <span className="price">€280 <sub>/ weekend</sub></span>
              <span className="pill pill--sage">All levels</span>
            </div>
          </article>
          <article className="class-card">
            <div className="photo">
              <img src="assets/img/yoga-meditation.jpg" alt="Anatomy of yin workshop — student folded forward in a yin pose." />
            </div>
            <div className="head">
              <h4>Anatomy of Yin</h4>
              <span className="duration">1 day</span>
            </div>
            <p>What&rsquo;s actually happening in your fascia, ligaments, and joints during a five-minute hold. With sports physio Dr. Inês Costa. Sat 14 June.</p>
            <div className="footer">
              <span className="price">€140 <sub>/ day</sub></span>
              <span className="pill">Intermediate</span>
            </div>
          </article>
          <article className="class-card">
            <div className="photo">
              <img src="assets/img/yoga-studio.jpg" alt="Yoga sutra reading group — small circle of students with books on the floor." />
            </div>
            <div className="head">
              <h4>Reading the Sutras</h4>
              <span className="duration">6 weeks</span>
            </div>
            <p>A six-Tuesday reading group through the Yoga Sutras of Patanjali. Bring your own translation. Starts 3 June, 19:30 — 21:00 each week.</p>
            <div className="footer">
              <span className="price">€90 <sub>/ 6 weeks</sub></span>
              <span className="pill">All levels</span>
            </div>
          </article>
        </div>
      </div>
    </section>

     <Footer />
    </>

   
  );
}

export default Schedule;