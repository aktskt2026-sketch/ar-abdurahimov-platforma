# AR kasbiy ta'lim platformasi

Diplom mavzusi: kasbiy fanlarni o'qitishda kengaytirilgan haqiqat (AR) texnologiyalaridan foydalanish.

Muallif: Abdurahimov Sirotilloxo'ja Ulug'bek o'g'li.

## Tarkibi

- `index.html` - bosh sahifa va loyiha haqida umumiy ma'lumot
- `pages/topics.html` - Router, Switch, Server, LAN topologiyasi, OSI modeli, Wi-Fi mavzulari
- `pages/models.html` - 3D modellar kutubxonasi
- `pages/ar-view.html` - HIRO marker orqali AR ko'rish sahifasi
- `pages/test.html` - talabalar bilimini tekshirish testi
- `pages/result.html` - test natijasini chiqarish sahifasi
- `pages/deploy.html` - GitHub Pages va lokal server yo'riqnomasi
- `start_local_server.bat` - Windowsda lokal serverni ishga tushirish

## Ishga tushirish

1. ZIP faylni oching.
2. Windowsda `start_local_server.bat` faylini ishga tushiring.
3. Brauzerda `http://localhost:8080` manzilini oching.

Terminal orqali ishga tushirish:

```bash
python -m http.server 8080
```

## ARdan foydalanish

1. Saytni HTTPS serverga joylang: GitHub Pages, Netlify yoki Vercel.
2. Telefon brauzerida saytni oching.
3. `AR ko'rish` sahifasiga kiring.
4. Kamera ruxsatini bering va HIRO markerga qarating.

Muhim: AR kamera qismi to'liq ishlashi uchun HTTPS server tavsiya etiladi. Lokal sahifalar ochiladi, lekin ayrim mobil brauzerlar HTTPSsiz kameraga ruxsat bermasligi mumkin.

## Qisqa tavsif

Loyihada WebAR texnologiyasi asosida kasbiy fanlarni o'qitishga mo'ljallangan interaktiv platforma ishlab chiqildi. Platforma kompyuter tarmoqlari qurilmalarini 3D va AR formatda ko'rsatish, mavzularni vizual tushuntirish hamda test orqali bilimlarni baholash imkonini beradi.
