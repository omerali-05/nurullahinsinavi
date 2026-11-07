# 📱 Nurullah’ın Sınavı — Arkadaşlarına Gönderme ve Dağıtım Rehberi

Netlify'ın ekrana koyduğu o sinir bozucu toolbar/buton yerine **Vercel** kullanarak ekranı **%100 tertemiz, sıfır reklamsız ve tuşsuz** şekilde arkadaşlarına açıyoruz!

---

## 🚀 1. GitHub & Vercel ile 2 Dakikada Canlıya Alma

### Adım 1: GitHub'da Yeni Repo Aç
1. [github.com/new](https://github.com/new) adresine gir.
2. Repository name kısmına: `nurullahinsinavi` yaz.
3. **Public** seç ve **"Create repository"** butonuna bas.

### Adım 2: Kodları Gönder (Terminalden Tek Seferlik)
PowerShell veya terminali açıp şu iki komutu yapıştır:
```bash
cd "C:\Users\omera\Desktop\uygulama projelerim\nurullahinsinavi"
git remote add origin https://github.com/omerali-05/nurullahinsinavi.git
git push -u origin main
```

### Adım 3: Vercel'e Bağla (Sıfır Toolbar / %100 Temiz Ekran)
1. [vercel.com](https://vercel.com) adresine girip GitHub hesabınla giriş yap.
2. **"Add New..." > "Project"** tıkla.
3. Listeden `nurullahinsinavi` reposunun yanındaki **"Import"** butonuna bas.
4. Hiçbir ayara dokunmadan **"Deploy"** butonuna tıkla.
5. 15 saniye içinde sana özel tertemiz linkin hazır: `https://nurullahinsinavi.vercel.app` 🎉

---

## 📲 2. Arkadaşlarına Atacağın Hazır WhatsApp Mesajı

Linkini aldıktan sonra arkadaşlarına doğrudan şunu kopyalayıp atabilirsin:

> "Beyler Nurullah'ın Sınavı oyununu yaptım! 🎮  
> Linke tıklayıp hemen oynayabilirsiniz: **https://nurullahinsinavi.vercel.app**  
>  
> 💡 **iPhone (iOS) kullananlar:** Safari'de açtıktan sonra ekranın altındaki **Paylaş** (⎋) simgesine basıp **'Ana Ekrana Ekle'** derseniz telefona doğrudan uygulama gibi yükleniyor, tam ekran açılıyor!  
> 💡 **Android kullananlar:** Chrome'da sağ üstteki 3 noktadan **'Uygulamayı Yükle'** veya **'Ana Ekrana Ekle'** diyebilirsiniz."

---

## 🌟 Neden Bu Yöntem En İyisi?
- 🚫 **Sıfır İstenmeyen Tuş / Logo:** Netlify gibi ekrana yabancı butonlar koymaz.
- 🍏 **iPhone'da Tam Ekran:** Arkadaşların ana ekrana eklediğinde Safari'nin adres çubuğu kaybolur, tam ekran yerel uygulama gibi çalışır.
- ⚡ **Çevrimdışı (Offline):** Service Worker sayesinde bir kez açtıktan sonra internetsizken bile çalışır.
- 🔄 **Otomatik Güncelleme:** Oyuna yeni soru ekleyip `git push` yaptığında tüm arkadaşlarının oyunu otomatik güncellenir!
