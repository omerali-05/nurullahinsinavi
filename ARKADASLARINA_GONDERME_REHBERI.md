# 📱 Nurullah’ın Sınavı — Arkadaşlarına Gönderme ve Dağıtım Rehberi

Bu proje, hem **iOS (iPhone/iPad)** hem de **Android** kullanıcıları için hiçbir kurulum zahmeti olmadan, tek bir link ile tıpkı App Store / Play Store'dan indirilmiş gibi tam ekran ve çevrimdışı oynanabilen bir **PWA (Progressive Web App)** haline getirilmiştir.

---

## 🚀 1. Oyunu Canlıya Alma (30 Saniyede Ücretsiz Link Edinme)

Arkadaşlarına atabilmek için projeyi internette ücretsiz barındırabileceğin 3 pratik yol:

### Seçenek A: Vercel (En Kolayı & 30 Saniye)
1. [vercel.com](https://vercel.com) adresine gir ve giriş yap.
2. `nurullahinsinavi` klasörünü Vercel ekranına sürükleyip bırak (Drag & Drop) veya terminalden şu komutu çalıştır:
   ```bash
   npx vercel
   ```
3. Sana hemen `https://nurullah-sinavi.vercel.app` gibi anlık bir link verir!

### Seçenek B: Netlify Drop (Sıfır Komut)
1. [app.netlify.com/drop](https://app.netlify.com/drop) sayfasına git.
2. `C:\Users\omera\Desktop\uygulama projelerim\nurullahinsinavi` klasörünü sayfadaki kutucuğa sürükle bırak.
3. 5 saniye içinde canlı linkin hazır!

### Seçenek C: GitHub Pages
1. Projeyi bir GitHub reposuna push'la.
2. GitHub'da `Settings > Pages` kısmına git.
3. `Branch: main` seçip kaydet; `https://kullaniciadi.github.io/nurullahinsinavi/` linkin hazır.

---

## 📲 2. Arkadaşlarına Atacağın Hazır WhatsApp Mesajı

Linkini aldıktan sonra arkadaşlarına doğrudan şunu kopyalayıp atabilirsin:

> "Beyler Nurullah'ın Sınavı oyununu yaptım! 🎮  
> Linke tıklayıp hemen oynayabilirsiniz: **[BURAYA_LINKINI_YAZ]**  
>  
> 💡 **iPhone kullananlar:** Safari'de açtıktan sonra alttaki **Paylaş** simgesine basıp **'Ana Ekrana Ekle'** derseniz telefona doğrudan uygulama gibi yükleniyor, tam ekran açılıyor!  
> 💡 **Android kullananlar:** Chrome'da sağ üstteki 3 noktadan **'Uygulamayı Yükle'** veya **'Ana Ekrana Ekle'** diyebilirsiniz."

---

## 🍏 3. iPhone Kullanan Arkadaşlarının Deneyimi (Neden En İyisi?)
1. **Sıfır Bilgisayar & Sıfır Şifre:** Bilgisayara kablo takmakla, Apple ID şifresi girmekle veya 7 günlük sertifika iptalleriyle uğraşmazlar.
2. **Tam Ekran (Standalone):** Ana ekrana eklediklerinde Safari'nin adres çubuğu veya düğmeleri kaybolur; Apple Store'dan indirilmiş yerel bir oyun gibi tam ekran açılır.
3. **Piksel İkon:** Telefonun ana ekranında oyunun özel Nurullah retro piksel ikonu görünür.
4. **Çevrimdışı (Offline) Desteği:** Bir kez açtıktan sonra metroda veya internetsiz ortamda bile Service Worker sayesinde çalışır.
5. **Otomatik Güncelleme:** Oyunda yeni soru eklediğinde veya bir şeyi değiştirdiğinde arkadaşlarının tekrar bir şey indirmesine gerek kalmaz; link otomatik güncellenir.
