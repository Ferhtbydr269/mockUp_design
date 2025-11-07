# MCBÜ Career System

**Manisa Celal Bayar Üniversitesi** için geliştirilmiş, eğitimi ve istihdamı birleştiren akıllı kariyer sistemi. Öğrenciler, işverenler ve üniversite arasında güçlü bağlar kurar.

![MCBÜ Logo](cbü_logo.png)

## 🎯 Proje Hakkında

Bu platform, Manisa Celal Bayar Üniversitesi öğrencilerinin staj süreçlerini dijitalleştirmek, iş dünyası ile güçlü bağlar kurmak ve akademik süreçleri kolaylaştırmak amacıyla geliştirilmiştir.

### ✨ Temel Özellikler

- **Öğrenci Portalı**: 
  - CV Yükleme & Güncelleme
  - **CV Gönderimi Üniversiteye** (Sertifika doğrulama için)
  - **Otomatik Ders Önerileri** (AI destekli yetenek analizi)
  - Staj Başvurusu
  - Bildirim Sistemi
  
- **İşveren Portalı**: 
  - Staj İlanı Oluşturma
  - Aday CV İnceleme
  - **Seçmeli Ders Talep Etme** (employer-driven course requests)
  - Bildirim Sistemi
  
- **Üniversite Portalı**: 
  - Ders Yönetimi
  - **CV Sertifika Kontrolü** (Öğrenci CV'lerindeki sertifikaları doğrulama)
  - **Sertifika Verme Sistemi**
  - Şirket Talep Onayı
  - Öğrenci-Şirket Eşleştirme
  - Gelişmiş Bildirim ve İstatistik Sistemi
  
- **Backend Simülasyonu**: Student, Company, UniversityAdministration, Course sınıfları ile tam işlevsel simülasyon
- **Responsive Tasarım**: Tüm cihazlarda (mobil, tablet, masaüstü) mükemmel çalışır
- **Modern Arayüz**: Bootstrap 5 ile oluşturulmuş kullanıcı dostu tasarım

## 🚀 Teknolojiler

- **HTML5**: Semantik ve erişilebilir yapı
- **CSS3**: Modern stil ve animasyonlar
- **Bootstrap 5**: Responsive framework
- **JavaScript (ES6+)**: Form validasyonu ve etkileşimler
- **Font Awesome 6**: İkonlar
- **Google Fonts**: Poppins & Open Sans

## 📁 Proje Yapısı

```
mockUp_design/
│
├── index.html              # Ana sayfa
├── student.html            # Öğrenci portalı
├── company.html            # Şirket portalı
├── university.html         # Üniversite portalı
├── about.html              # Hakkında sayfası
├── README.md               # Bu dosya
├── cbü_logo.png            # MCBÜ logosu
│
└── assets/
    ├── css/
    │   └── style.css       # Ana stil dosyası
    ├── js/
    │   └── main.js         # JavaScript fonksiyonları
    └── img/                # Görsel dosyaları
```

## 🎨 Tasarım Sistemi

### Renkler

- **Birincil Renk**: `#1E4C92` (MCBÜ Mavisi)
- **İkincil Renk**: `#00509E` (Koyu Mavi)
- **Arka Plan**: `#E8EEF6` (Açık Mavi)
- **Vurgu Rengi**: `#F5C518` (Altın Sarısı)

### Tipografi

- **Başlıklar**: Poppins SemiBold
- **Metin**: Open Sans Regular

## 📋 Özellikler Detayı

### 👨‍🎓 Öğrenci Portalı

1. **CV Yönetimi**
   - Kişisel bilgiler
   - Yetenekler ve sertifikalar
   - Canlı CV önizleme
   - Kaydetme ve güncelleme

2. **Ders Seçimi**
   - Mevcut dersleri görüntüleme
   - Ders başvurusu yapma
   - Kayıtlı derslerden ayrılma
   - Kontenjan takibi

3. **Staj Başvurusu**
   - Şirket seçimi
   - Pozisyon belirtme
   - Başvuru geçmişi
   - Durum takibi

### 🏢 Şirket Portalı

1. **Staj Talepleri**
   - Yeni ilan oluşturma
   - Pozisyon detayları
   - Gereken yetenekler
   - Kontenjan yönetimi

2. **Aday CV'leri**
   - Başvuran adayları görüntüleme
   - CV detaylarını inceleme
   - Modal popup ile tam CV görüntüleme

3. **Kabul/Red İşlemleri**
   - Başvuru yönetimi
   - Kabul/red işlemleri
   - Durum güncelleme

### 🎓 Üniversite Portalı

1. **Ders Yönetimi**
   - Yeni ders ekleme
   - Akademisyen atama
   - Kapasite belirleme
   - Ders istatistikleri

2. **Şirket Talepleri**
   - Talepleri görüntüleme
   - Onay/red işlemleri
   - Detaylı talep inceleme

3. **Eşleştirme**
   - Öğrenci-şirket eşleştirme
   - Aktif eşleştirmeleri takip
   - Tamamlanan eşleştirmeler

## 🔧 Kurulum ve Kullanım

### Gereksinimler

- Modern bir web tarayıcı (Chrome, Firefox, Safari, Edge)
- Yerel sunucu (isteğe bağlı) veya doğrudan HTML dosyalarını açabilirsiniz

### Çalıştırma

1. **Doğrudan Tarayıcıda**:
   ```
   index.html dosyasını çift tıklayarak açın
   ```

2. **Yerel Sunucu ile** (önerilen):
   ```bash
   # Python ile
   python -m http.server 8000
   
   # Node.js ile (live-server)
   npx live-server
   ```

3. Tarayıcınızda `http://localhost:8000` adresini açın

## 📊 Örnek Veriler ve Senaryolar

Platform, 4 ana senaryoya göre doldurulmuş gerçekçi veriler içerir:

### Senaryo 1: Sude'nin Hikayesi
**Sude Yılmaz** (Bilgisayar Mühendisliği)
- CV günceller → Sistem otomatik "Yapay Zeka 101" önerir
- **Burak**'ın firması **DataNova**'ya "Veri Analitiği Stajyeri" başvurur
- Kabul edilir ✅

### Senaryo 2: Deniz'in Hikayesi  
**Deniz Kara** (Yazılım Mühendisliği)
- CV günceller → Otomatik ders önerileri alır
- Üniversite **VeriTech** firması ile eşleştirir
- "Veri Bilimci Stajyeri" olarak işe alınır ✅

### Senaryo 3: Esin'in Hikayesi
**Esin Aydın** (İşletme)
- Doğrulanmış CV ile başvurur
- **Cem**'in firması **DigiMarketing Pro**'ya kabul edilir
- "Dijital Pazarlama Stajyeri" olarak çalışmaya başlar ✅

### Senaryo 4: Derya'nın Hikayesi
**Derya Şahin** (Bilgisayar Mühendisliği)
- **Eylül**'ün firması **SecureNet** "Siber Güvenlik Temelleri" dersi talep eder
- Üniversite dersi onaylar ve açar
- Derya kursa kaydolur → Tamamlar → **Sertifika alır** 🎓
- SecureNet'e "Siber Güvenlik Uzman Stajyeri" olarak işe alınır ✅

### Senaryo 5: CV Gönderme ve Sertifika Kontrolü
**Student → University İletişimi**
- Öğrenciler CV'lerini üniversiteye gönderir
- Üniversite sertifikaları otomatik kontrol eder
- ✅ Onay / ⚠️ Uyarı / ❌ Red kararı verilir
- Sertifika sayısına göre profil güvenilirliği belirlenir

### Diğer Karakterler
- Ferhat Baydır, Ayşe Zambak, Mehmet Nuri Öğüt, Şeyda Nur Halitoğlu (Öğrenciler)
- TechLine Bilişim, SmartVision, CodeCraft Solutions (Şirketler)

### Dersler
- Yapay Zeka Temelleri
- Mobil Programlama
- Veri Bilimi 101
- Derin Öğrenme
- Web Güvenliği
- Blockchain Teknolojileri

## 🎯 JavaScript Özellikleri

### Backend Simülasyonu (Object-Oriented)
- **Student Class**: CV güncelleme, staj başvurusu, ders kaydı
- **Company Class**: Staj ilanı, CV inceleme, ders talebi
- **UniversityAdministration Class**: Ders oluşturma, talep onayı, eşleştirme
- **Course Class**: Öğrenci ekleme, sertifika verme

### Frontend Özellikleri
- **Form Validasyonu**: Bootstrap 5 doğrulama sistemi
- **LocalStorage**: CV verilerini yerel olarak saklama
- **Modal Popup**: CV detaylarını gösterme
- **Toast Bildirimleri**: Kullanıcı geri bildirimleri
- **Senaryo Simülasyonları**: 4 ana senaryonun console'da test edilebilmesi
  - `testAllScenarios()` - Tüm senaryoları çalıştır
  - `simulateScenario1()` - Sude'nin hikayesi
  - `simulateScenario2()` - Deniz'in hikayesi
  - `simulateScenario3()` - Esin'in hikayesi
  - `simulateScenario4()` - Derya'nın hikayesi

## 🌐 Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## 📱 Responsive Breakpoints

- **Mobil**: < 576px
- **Tablet**: 576px - 768px
- **Masaüstü**: > 768px
- **Geniş Ekran**: > 1200px

## 🎨 Animasyonlar

- Fade-in efektleri
- Hover geçişleri
- Scroll animasyonları
- Buton etkileşimleri

## 📝 Lisans

© 2025 Manisa Celal Bayar Üniversitesi. Tüm hakları saklıdır.

## 👥 Geliştirici Ekibi

- **Ferhat Baydır** - Proje Lideri & Backend Developer
- **Ahmet Efe** - Frontend Developer
- **Şeyda Nur Halitoğlu** - Full Stack Developer
- **Ayşe Zambak** - Mobile Developer & UI Designer

## 📞 İletişim

- **E-posta**: kariyer@mcbu.edu.tr
- **Telefon**: +90 (236) 201 10 00
- **Adres**: Şehit Prof. Dr. İlhan Varank Yerleşkesi, 45140 Yunusemre / Manisa

## 🔗 Bağlantılar

- [LinkedIn](https://www.linkedin.com)
- [Instagram](https://www.instagram.com)
- [Twitter](https://www.twitter.com)
- [Facebook](https://www.facebook.com)

---

**MCBÜ Career System** - Eğitimi ve İstihdamı Birleştiren Köprü 🎓

## 🧪 Senaryo Testleri

Browser console'unda (F12) aşağıdaki komutları çalıştırarak senaryoları test edebilirsiniz:

```javascript
// Tüm senaryoları çalıştır
testAllScenarios()

// Veya tek tek:
simulateScenario1()  // Sude → DataNova
simulateScenario2()  // Deniz → VeriTech  
simulateScenario3()  // Esin → DigiMarketing
simulateScenario4()  // Derya → Sertifika → SecureNet
simulateScenario5()  // CV Gönderme ve Sertifika Kontrolü
```

Her senaryo console'a detaylı log çıktıları verir ve sistemin nasıl çalıştığını gösterir.

