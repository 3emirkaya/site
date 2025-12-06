# Emir Kaya - Kişisel Site (Next.js)

Bu proje, Next.js kullanılarak oluşturulmuş modern bir kişisel blog ve portföy sitesidir.

## Özellikler

- 📝 Blog yazıları listeleme, arama, sıralama ve sayfalama
- ➕ Yeni blog yazısı ekleme
- 🗑️ Blog yazısı silme
- 🎨 Modern ve responsive tasarım
- ⚡ Next.js 14 App Router ile hızlı performans

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Build ve Production

Production build oluşturmak için:
```bash
npm run build
```

Build edilmiş uygulamayı çalıştırmak için:
```bash
npm start
```

## API Endpoint

Uygulama şu an için şu API endpoint'ini kullanıyor:
- `https://site-production-c50d.up.railway.app/api`

API URL'ini değiştirmek için `components/Blog.tsx` dosyasındaki `API_URL` değişkenini düzenleyebilirsiniz.

## Proje Yapısı

```
frontend/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Ana sayfa
│   └── globals.css     # Global stiller
├── components/
│   ├── Header.tsx      # Site header component
│   ├── Hero.tsx        # Hero section component
│   ├── About.tsx       # Hakkımda section component
│   ├── Projects.tsx    # Projeler section component
│   ├── Blog.tsx        # Blog section component (ana blog mantığı)
│   ├── Contact.tsx     # İletişim section component
│   └── NewPostModal.tsx # Yeni yazı modal component
├── package.json
├── next.config.js
└── tsconfig.json
```

## Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Tip güvenliği
- **React 18** - UI kütüphanesi

## Notlar

- Backend API çalışıyor olmalıdır (https://site-production-c50d.up.railway.app/api)
- API URL'i environment variable olarak da ayarlanabilir

