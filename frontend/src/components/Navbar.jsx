export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Trippicco</h2>
      <div>
        <a href="#donate">Donate</a>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '20px 50px',
    background: 'rgba(0,0,0,0.6)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 10
  }
}


