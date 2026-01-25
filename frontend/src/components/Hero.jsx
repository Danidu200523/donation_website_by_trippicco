export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Travel with Purpose</h1>
      <p>Through Trippicco, your donations reach people who truly need help.</p>
      <a href="#donate">
        <button>Donate Now</button>
      </a>
    </section>
  )
}

const styles = {
  hero: {
    height: '100vh',
    background: "url('/images/hero.jpg') center/cover no-repeat",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center'
  }
}
