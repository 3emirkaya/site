'use client'

export default function Header() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-mark">E</span>
          <span className="logo-text">Emir Kaya</span>
        </div>
        <ul className="nav-links">
          <li><a href="#hero">Ana Sayfa</a></li>
          <li><a href="#about">Hakkımda</a></li>
          <li><a href="#projects">Projeler</a></li>
          <li><a href="#blog">Yazılarım</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
      </nav>
    </header>
  )
}

