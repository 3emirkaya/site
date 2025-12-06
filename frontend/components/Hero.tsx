'use client'

export default function Hero() {
  return (
    <section id="hero" className="hero container">
      <div className="hero-text">
        <p className="hero-eyebrow">Merhaba, ben Emir 👋</p>
        <h1>Kişisel blogum ve projelerimle internetteki küçük alanım.</h1>
        <p className="hero-subtitle">
          Frontend ağırlıklı, modern web arayüzleri geliştirmeyi seviyorum.
          Bu sayfada hem kendimi kısaca tanıtıyorum hem de öğrendiklerimi
          blog yazılarıyla paylaşıyorum.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Projelerime göz at</a>
          <a href="#blog" className="btn btn-secondary">Son yazıları oku</a>
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-avatar">E</div>
        <h2>Web Geliştirici</h2>
        <p>HTML, CSS, JavaScript ile arayüz geliştiriyorum. Zamanla bu kartı gerçek
          bilgiler ve linklerle doldurabilirsin.</p>
        <ul className="hero-tags">
          <li>Frontend</li>
          <li>Responsive Tasarım</li>
          <li>Node.js</li>
        </ul>
      </div>
    </section>
  )
}

