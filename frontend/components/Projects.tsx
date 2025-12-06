export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Projeler</h2>
      <p className="section-description">
        Yaptığım projeler ve çalışmalarım hakkında kısa bilgiler.
      </p>
      <div className="cards-grid">
        <article className="info-card">
          <h3>Blog Uygulaması</h3>
          <p>Node.js backend ve Next.js frontend ile hazırlanmış modern bir blog sistemi.
            Yazı ekleme, silme, arama ve sayfalama özelliklerine sahip.</p>
        </article>
        <article className="info-card">
          <h3>Kişisel Web Sitesi</h3>
          <p>Bu kişisel web sitesi Next.js ve React kullanılarak geliştirildi.
            Modern ve minimalist tasarım anlayışıyla oluşturuldu.</p>
        </article>
        <article className="info-card">
          <h3>Gelecek Projeler</h3>
          <p>Yeni teknolojiler öğrendikçe bu alanı güncel projelerimle dolduracağım.
            Her proje bir öğrenme ve gelişim fırsatı.</p>
        </article>
      </div>
    </section>
  )
}

