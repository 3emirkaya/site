export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Projeler</h2>
      <p className="section-description">
        Aşağıda portföyüne ekleyebileceğin örnek proje kartları var. İstersen
        projelerinin linklerini (GitHub, canlı demo) buraya ekleyebilirsin.
      </p>
      <div className="cards-grid">
        <article className="info-card">
          <h3>Blog Uygulaması</h3>
          <p>Node.js backend ve saf HTML/CSS/JS frontend ile hazırlanmış basit bir blog sistemi.
            Yazı ekleme, silme, arama ve sayfalama özelliklerine sahip.</p>
        </article>
        <article className="info-card">
          <h3>Kişisel Site</h3>
          <p>Şu anda görüntülediğin bu sayfayı deponun frontend kısmını kullanarak
            tasarladın. Railway üzerinde yayınlanıyor.</p>
        </article>
        <article className="info-card">
          <h3>Gelecek Projeler</h3>
          <p>Yeni şeyler öğrendikçe bu alanı doldurabilirsin: örneğin bir film
            listesi, hava durumu uygulaması veya mini oyunlar.</p>
        </article>
      </div>
    </section>
  )
}

