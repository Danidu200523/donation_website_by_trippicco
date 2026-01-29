import { useEffect } from 'react'

export default function App() {

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger')
    const navLinks = document.querySelector('.nav-links')

    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active')
      })
    }
  }, [])

  return (
    <>
      {/* HEADER */}
<header style={styles.header}>
  <div className="container" style={styles.navbar}>
    
    {/* BRAND */}
    <div style={styles.brand}>
      <span style={styles.brandMain}>tRip</span>
      <span style={styles.brandAccent}> piCco</span>
    </div>

    {/* NAV LINKS */}
    <nav>
      <ul style={styles.navLinks}>
        <button className="btn btn-secondary"><a href="#home">Home</a></button>
        <button className="btn btn-secondary"><a href="#about">About</a></button>
        <button className="btn btn-secondary"><a href="#nutribox">NutriBox</a></button>
        <button className="btn btn-secondary"><a href="#contact">Contact</a></button>
      </ul>
    </nav>

  </div>
</header>


      {/* HERO */}
      <section className="hero" id="home">
        <div className="container">
          <h1>Fighting Hunger One NutriBox at a Time</h1>
          <p>
            Join us in our mission to provide nutritious meals to underprivileged
            communities.
          </p>
          <br />
          <button className="btn">Support Us</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </section>

     

      {/* ABOUT */}
      {/* ABOUT US SECTION */}
<section className="section about" id="about">
  <div className="container">
    <h2 className="section-title">About Trippicco</h2>

    <div style={styles.aboutWrapper}>
      
      {/* TEXT */}
      <div style={styles.aboutText}>
        <h3>Travel With a Purpose</h3>
        <p>
          Trippicco is a travel vlog team that believes travel should create
          impact beyond memories. Wherever we go, we identify people and
          communities who genuinely need help.
        </p>
        <p>
          Through this platform, kind-hearted followers can donate, and we
          ensure every contribution reaches those who are struggling with food,
          shelter, and basic needs.
        </p>
        <p>
          This initiative supports the idea that small acts of kindness,
          combined together, can change lives.
        </p>
      </div>

      {/* IMAGE */}
      <div style={styles.aboutImageWrapper}>
        <img
          src="public/images/hero.jpg"
          alt="Trippicco team helping people"
          style={styles.aboutImage}
        />
      </div>

    </div>
  </div>
</section>

 {/* DONATION OPTIONS SECTION */}
<section className="section" id="donate-options">
  <div className="container">
    <h2 className="section-title">How You Can Help</h2>

    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
      Support the Trippicco mission by donating money, food, or your time.
      Every contribution creates real impact.
    </p>

    <div style={styles.donateRow}>

      <div style={styles.donateBox}>
        <div style={styles.donateIcon}>💰</div>
        <h3>Donate Money</h3>
        <p>Help us prepare and distribute NutriBoxes to families in need.</p>
        <button className="btn btn-secondary">Donate Money</button>
      </div>

      <div style={styles.donateBox}>
        <div style={styles.donateIcon}>🥫</div>
        <h3>Donate Food</h3>
        <p>Provide essential food items for NutriBoxes and distributions.</p>
        <button className="btn btn-secondary">Donate Food</button>
      </div>

      <div style={styles.donateBox}>
        <div style={styles.donateIcon}>🤝</div>
        <h3>Volunteer</h3>
        <p>Join Trippicco trips and help communities directly.</p>
        <button className="btn btn-secondary">Join Us</button>
      </div>

    </div>
  </div>
</section>

      {/* NUTRIBOX SECTION */}
<section className="section" id="nutribox">
  <div className="container">
    <h2 className="section-title">The NutriBox Project</h2>

    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
      Each NutriBox contains essential food items carefully selected to provide
      balanced nutrition for families in need.
    </p>

    <div style={styles.nutriboxGrid}>
      
      <div style={styles.nutriboxCard}>
        <img
          src="public/images/nutribox1.jpg"
          alt="NutriBox food items"
          style={styles.nutriboxImage}
        />
        <h3>What’s Inside</h3>
        <p>
          Rice, lentils, flour, cooking oil, milk powder, sugar, tea and other
          essential food items.
        </p>
      </div>

      <div style={styles.nutriboxCard}>
        <img
          src="public/images/nutribox2.jpg"
          alt="Families receiving NutriBox"
          style={styles.nutriboxImage}
        />
        <h3>Who We Help</h3>
        <p>
          Low-income families, elderly homes, orphanages and communities affected
          by natural disasters.
        </p>
      </div>

      <div style={styles.nutriboxCard}>
        <img
          src="public/images/nutribox3.jpg"
          alt="Volunteers distributing food"
          style={styles.nutriboxImage}
        />
        <h3>Why NutriBox</h3>
        <p>
          Designed to be nutritious, affordable and easy to distribute with full
          transparency.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* IMPACT SECTION */}
<section className="section" id="impact" style={styles.impactSection}>
  <div className="container">
    <h2 className="section-title">Our Impact</h2>

    <p style={styles.impactSubtitle}>
      Together with our supporters, we are creating real change in people’s lives.
    </p>

    <div style={styles.impactGrid}>
      
      <div style={styles.impactCard}>
        <h3 style={styles.impactNumber}>500+</h3>
        <p>NutriBoxes Delivered</p>
      </div>

      <div style={styles.impactCard}>
        <h3 style={styles.impactNumber}>2,000+</h3>
        <p>People Supported</p>
      </div>

      <div style={styles.impactCard}>
        <h3 style={styles.impactNumber}>15+</h3>
        <p>Communities Reached</p>
      </div>

      <div style={styles.impactCard}>
        <h3 style={styles.impactNumber}>50+</h3>
        <p>Volunteers Involved</p>
      </div>

    </div>
  </div>
</section>


      {/* CONTACT */}
      {/* CONTACT SECTION */}
<section className="section" id="contact">
  <div className="container">
    <h2 className="section-title">Contact Us</h2>

    <div style={styles.contactWrapper}>

      {/* LEFT INFO */}
      <div style={styles.contactInfoCard}>
        <h3>Get in Touch</h3>

        <p>
          <strong>📍 Address</strong><br />
          NSBM Green University, Colombo, Sri Lanka
        </p>

        <p>
          <strong>📧 Email</strong><br />
          info@feedforward.org
        </p>

        <p>
          <strong>📞 Phone</strong><br />
          +94 76 123 4567
        </p>

        <p style={{ marginTop: '20px' }}>
          We’d love to hear from you. Whether you want to donate, volunteer, or
          collaborate — send us a message.
        </p>
      </div>

      {/* FORM */}
      <form style={styles.contactFormCard}>
        <h3>Send a Message</h3>

        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Your Message" rows="5"></textarea>

        <button className="btn">Send Message</button>
      </form>

    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer>
        © 2023 Feed Forward | All Rights Reserved
      </footer>
    </>
  )
}
const styles = {


contactInfo: {
  flex: 1,
  minWidth: '250px'
},

contactForm: {
  flex: 1,
  minWidth: '250px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  background: '#ffffff',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
},

  nutriboxGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '40px'
  },

  nutriboxCard: {
    background: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    textAlign: 'center'
    
  },
  nutriboxImage: {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '10px',
  marginBottom: '15px'
},
aboutWrapper: {
  display: 'flex',
  gap: '50px',
  alignItems: 'center',
  flexWrap: 'wrap'
},

aboutText: {
  flex: 1,
  minWidth: '280px'
},

aboutImageWrapper: {
  flex: 1,
  minWidth: '280px'
},

aboutImage: {
  width: '100%',
  borderRadius: '16px',
  boxShadow: '0 15px 30px rgba(0,0,0,0.15)'
},
contactWrapper: {
  display: 'flex',
  gap: '50px',
  marginTop: '50px',
  flexWrap: 'wrap'
},

contactInfoCard: {
  flex: 1,
  minWidth: '280px',
  background: '#ffffff',
  padding: '35px',
  borderRadius: '16px',
  boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
},

contactFormCard: {
  flex: 1,
  minWidth: '280px',
  background: '#ffffff',
  padding: '35px',
  borderRadius: '16px',
  boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
},
header: {
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
  background: 'rgba(255,255,255,0.85)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
},

navbar: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '18px 0'
},

brand: {
  fontSize: '26px',
  fontWeight: '700',
  fontFamily: 'Poppins, sans-serif'
},

brandMain: {
  color: '#111'
},

brandAccent: {
  color: 'green'
},

navLinks: {
  listStyle: 'none',
  display: 'flex',
  gap: '30px'
},
impactSection: {
  background: 'linear-gradient(135deg, #e8f8ed, #f1fcf7)'
},

impactSubtitle: {
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto 50px',
  fontSize: '16px',
  color: '#3a6f5d'
},

impactGrid: {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '30px'
},

impactCard: {
  background: '#ffffff',
  padding: '35px 25px',
  borderRadius: '18px',
  textAlign: 'center',
  boxShadow: '0 12px 25px rgba(0,0,0,0.08)'
},

impactNumber: {
  fontSize: '38px',
  fontWeight: '700',
  color: '#2f8f6b',
  marginBottom: '10px'
},
donateRow: {
  display: 'flex',
  gap: '30px',
  justifyContent: 'center',
  flexWrap: 'wrap'
},

donateBox: {
  flex: '1',
  minWidth: '260px',
  maxWidth: '340px',
  background: '#ffffff',
  padding: '35px 30px',
  borderRadius: '20px',
  textAlign: 'center',
  boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
},

donateIcon: {
  fontSize: '42px',
  marginBottom: '15px'
}

}
