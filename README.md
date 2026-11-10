# NexaWeb Studio - Static HTML/CSS/JS

Website statis yang siap di-hosting langsung tanpa memerlukan PHP, MySQL, ataupun WordPress.

## Struktur File:
- `index.html` : Halaman Landing Page utama lengkap (Single Page Application dengan semua section).
- `layanan.html`, `portofolio.html`, `proses.html`, `blog.html`, `tentang.html`, `kontak.html`, `faq.html`, `syarat-ketentuan.html` : Halaman terpisah (Multi-page).
- `css/style.css` : File CSS stylesheet utama.
- `js/app.js` : File interaktivitas JavaScript (navigasi mobile, modal, portfolio filter, FAQ accordion, formulir WhatsApp).

## Cara Hosting / Deploy:
1. **Netlify Drop**: Seret folder ini atau file zip langsung ke https://app.netlify.com/drop
2. **Vercel**: Import folder atau hubungkan ke repositori GitHub.
3. **GitHub Pages**: Upload ke branch `main` repositori GitHub dan aktifkan GitHub Pages di Settings.
4. **cPanel / Web Hosting**: Upload dan ekstrak file zip ke folder `public_html`.
