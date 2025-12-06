'use client'

export default function Hero() {
  return (
    <section id="hero" className="hero container">
      <div className="hero-text">
        <p className="hero-eyebrow">Hi, I'm Emir</p>
        <h1>Web geliştirici ve tasarımcı</h1>
        <p className="hero-subtitle">
          Modern web arayüzleri geliştirmeyi seviyorum ve öğrendiklerimi blog yazılarıyla paylaşıyorum.
          Bu sayfada hem projelerimi hem de düşüncelerimi bulabilirsiniz.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Projelerime göz at</a>
          <a href="#blog" className="btn btn-secondary">Yazılarımı oku</a>
        </div>
      </div>
    </section>
  )
}
