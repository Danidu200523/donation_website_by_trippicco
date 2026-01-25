export default function Gallery() {
  return (
    <section className="container">
      <h2>People We Help</h2>
      <div style={styles.grid}>
        <img src="public/images/help1.jpg" />
        <img src="public/images/help2.jpg" />
        <img src="public/images/donate.jpg" />
      </div>
    </section>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '40px'
  }
}
