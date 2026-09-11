import { Link } from "react-router-dom";

function Header(){
  return(
    <>
 <a className="skip-link" href="#main">Skip to content</a>

  <header className="site-header">
    <div className="container">
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="index.html"><span className="brand-mark" aria-hidden="true"></span> Hovara</a>
        <div className="nav-links" role="navigation">
       <Link to="/" aria-current="page">Home</Link>
       <Link to="/classes">Classes</Link>
       <Link to="/schedule">Schedule</Link>
       <Link to="/studio">Studio</Link>
       <Link to="/contact">Contact</Link>
        </div>
        <div className="nav-cta-row">
          <a href="contact.html" className="btn btn--clay">Book first class
            <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <button className="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-drawer"><span aria-hidden="true"></span></button>
        </div>
      </nav>
    </div>
  </header>


    </>
  );
}


   


export default Header;