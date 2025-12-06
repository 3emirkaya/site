# HTML/CSS/JS'den Next.js'e Dönüşüm Notları

## Yapılan Değişiklikler

### Dosya Yapısı
- `index.html` → `app/page.tsx` ve `app/layout.tsx`
- `style.css` → `app/globals.css`
- `script.js` → React hooks ve component state management

### Component Yapısı
Tüm HTML bölümleri React componentlerine dönüştürüldü:
- Header
- Hero
- About
- Projects
- Blog (state management ile)
- Contact
- NewPostModal

### Özellikler
- ✅ Tüm görsel stil korundu
- ✅ Blog API entegrasyonu korundu
- ✅ Arama, sıralama ve sayfalama işlevselliği korundu
- ✅ Modal ve form işlevselliği korundu
- ✅ TypeScript desteği eklendi
- ✅ Modern React hooks kullanıldı (useState, useEffect, useCallback)

### Eski Dosyalar
Eski dosyalar (`index.html`, `style.css`, `script.js`) artık kullanılmıyor ve silinebilir.

## Kullanım

```bash
cd frontend
npm install
npm run dev
```

Uygulama http://localhost:3000 adresinde çalışacak.

