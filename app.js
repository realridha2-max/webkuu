/**
 * NexaWeb Studio - Blueprint WordPress Agency Platform
 * Interactive Controllers: Navigation, WhatsApp Generator, Modals, Filter, FAQ
 */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const mainNav = document.getElementById("mainNav");
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
      mainNav.classList.toggle("show");
    });

    // Close on link click
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("show");
      });
    });
  }

  // Active Navigation Highlighting on Scroll
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Portfolio Filtering
  const filterBtns = document.querySelectorAll(".filter-tabs .tab-btn");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      portfolioCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "flex";
          card.style.animation = "fadeInUp 0.4s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Case Study / Portfolio Modal Data
  const portfolioDetails = {
    "kopi-senja": {
      title: "Kopi Senja Artisan Cafe",
      category: "Kuliner & Retail (F&B)",
      client: "PT Senja Rasa Nusantara",
      duration: "5 Hari Kerja",
      package: "Paket Standard",
      challenge: "Klien membutuhkan landing page visual estetik yang menonjolkan suasana kafe, katalog menu interaktif QR-code, serta pemesanan meja instan yang terhubung langsung ke kasir via WhatsApp.",
      concept: "Menerapkan estetika Warm Earthy Dark mode, navigasi mobile-first cepat, serta optimasi foto produk WebP agar waktu muat di bawah 1.1 detik pada jaringan 4G.",
      tech: ["WordPress 6.x", "Astra Pro Theme", "Elementor Pro", "LiteSpeed Cache", "WhatsApp API Direct"],
      result: "Peningkatan reservasi online hingga 140% di bulan pertama, dan waktu muat halaman mencapai nilai 98 di Google PageSpeed Insights.",
      demoUrl: "https://example.com/demo/kopi-senja"
    },
    "arch-studio": {
      title: "ArchiVibe Architecture Studio",
      category: "Personal & Freelancer",
      client: "Studio Arsitektur Dimensi",
      duration: "7 Hari Kerja",
      package: "Paket Standard & Custom Portfolio",
      challenge: "Memamerkan puluhan blueprint render 3D resolusi tinggi tanpa memperlambat situs, serta integrasi formulir brief proyek untuk klien premium.",
      concept: "Desain minimalis monokrom dengan tata letak galeri masonry interaktif, lazy loading bertingkat, dan lightbox interaktif.",
      tech: ["WordPress", "Hello Elementor", "Custom Grid CSS", "Yoast SEO", "Contact Form 7"],
      result: "Tingkat bounce rate turun 35% dan konversi konsultasi arsitek naik 60% dalam tempo 6 minggu.",
      demoUrl: "https://example.com/demo/archivibe"
    },
    "logistik-prima": {
      title: "Logistik Prima Express",
      category: "Organisasi & Korporat",
      client: "PT Prima Logistik Sentosa",
      duration: "14 Hari Kerja",
      package: "Paket Premium Multi-Page",
      challenge: "Perusahaan membutuhkan portal resmi berbadan hukum dengan halaman legalitas terperinci, sistem pelacak ongkir/resi instan, dan multi-cabang representatif.",
      concept: "Arsitektur informasi korporat bersertifikat SSL kelas A, integrasi database cabang, dan sistem keamanan proteksi Cloudflare.",
      tech: ["WordPress Enterprise", "Astra", "WPForms Multi-step", "Rank Math Pro", "REST API Resi"],
      result: "Meningkatkan citra kredibilitas tender B2B dan mempermudah 500+ calon mitra bisnis per hari.",
      demoUrl: "https://example.com/demo/logistik-prima"
    },
    "glow-beauty": {
      title: "AuraGlow Skincare Official",
      category: "E-Commerce & Retail",
      client: "AuraGlow Indonesia",
      duration: "8 Hari Kerja",
      package: "Paket Standard & E-Commerce",
      challenge: "Katalog produk kecantikan dengan 40+ varian, testimoni video sebelum-sesudah, dan integrasi WhatsApp checkout dengan pesan order otomatis.",
      concept: "Desain soft luxury bernuansa gold & rose gold, checkout 1-klik via WhatsApp, dan ulasan berfoto.",
      tech: ["WordPress", "WooCommerce Light", "Elementor", "WP Rocket", "WhatsApp Checkout"],
      result: "Konversi penjualan melonjak 85% berkat kemudahan transaksi tanpa perlu registrasi akun rumit.",
      demoUrl: "https://example.com/demo/auraglow"
    },
    "law-firm": {
      title: "Nirwana & Partners Law Office",
      category: "Organisasi & Korporat",
      client: "Advokat & Konsultan Hukum Nirwana",
      duration: "12 Hari Kerja",
      package: "Paket Premium Multi-Page",
      challenge: "Profil kantor hukum resmi yang membutuhkan kepatuhan etika profesi, profil tim advokat lengkap, dan sistem penjadwalan konsultasi hukum privat.",
      concept: "Desain Navy & Gold berwibawa, formulir janji temu terenkripsi, serta pemaparan keahlian hukum yang terstruktur rapi.",
      tech: ["WordPress", "Astra Theme", "WP Booking System", "LiteSpeed Cache", "SSL 256-bit"],
      result: "Memenangkan kepercayaan klien korporat multinasional dan mengotomatisasi 90% penjadwalan sesi tatap muka.",
      demoUrl: "https://example.com/demo/nirwana-law"
    },
    "yoga-sanctuary": {
      title: "Prana Yoga & Wellness Sanctuary",
      category: "Jasa & Komunitas",
      client: "Prana Wellness Community",
      duration: "6 Hari Kerja",
      package: "Paket Standard",
      challenge: "Jadwal kelas mingguan yang dinamis, profil instruktur, dan reservasi tiket workshop mingguan dengan kuota terbatas.",
      concept: "Desain menenangkan dengan palet sage & obsidian, tabel jadwal interaktif per hari, dan countdown workshop.",
      tech: ["WordPress", "The Events Calendar", "Elementor", "Joinchat", "Yoast SEO"],
      result: "Kelas reguler selalu terisi penuh dalam 24 jam setelah jadwal dirilis di situs resmi.",
      demoUrl: "https://example.com/demo/prana-yoga"
    }
  };

  // Open Portfolio Detail Modal
  window.openPortfolioModal = function(id) {
    const data = portfolioDetails[id];
    if (!data) return;

    const modalBody = document.getElementById("portfolioModalBody");
    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="gold-tag" style="margin-bottom: 0.8rem;">${data.category}</span>
        <h2 style="font-size: 1.85rem; margin-top: 0.5rem; color: #fff;">${data.title}</h2>
        <p style="color: var(--text-muted); font-size: 0.92rem;">Klien: <strong style="color: #fff;">${data.client}</strong> | Durasi: <strong style="color: #fff;">${data.duration}</strong> | Tipe: <strong style="color: var(--gold-light);">${data.package}</strong></p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border-left: 3px solid #ff5f56;">
          <h4 style="color: #ff8882; font-size: 1rem; margin-bottom: 0.4rem;">Tantangan Klien</h4>
          <p style="font-size: 0.9rem; color: #c0c0d0; line-height: 1.6;">${data.challenge}</p>
        </div>

        <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border-left: 3px solid var(--gold-primary);">
          <h4 style="color: var(--gold-light); font-size: 1rem; margin-bottom: 0.4rem;">Konsep & Solusi Desain</h4>
          <p style="font-size: 0.9rem; color: #c0c0d0; line-height: 1.6;">${data.concept}</p>
        </div>

        <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border-left: 3px solid #27c93f;">
          <h4 style="color: #4ade80; font-size: 1rem; margin-bottom: 0.4rem;">Hasil Akhir & Dampak Bisnis</h4>
          <p style="font-size: 0.9rem; color: #c0c0d0; line-height: 1.6;">${data.result}</p>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="color: #fff; font-size: 0.95rem; margin-bottom: 0.8rem;">Teknologi & Modul Terpasang:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${data.tech.map(t => `<span style="background: rgba(212,175,55,0.12); border: 1px solid var(--border-gold); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; color: var(--gold-light);">${t}</span>`).join("")}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
        <button onclick="simulateLiveDemo('${data.title}')" class="btn btn-gold" style="flex: 1;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Uji Live Preview Demo
        </button>
        <button onclick="selectPackageForOrder('${data.package}')" class="btn btn-outline" style="flex: 1;">
          Pesan Konsep Serupa
        </button>
      </div>
    `;

    document.getElementById("portfolioModal").classList.add("open");
  };

  // Close modals
  window.closeModal = function(modalId) {
    document.getElementById(modalId).classList.remove("open");
  };

  // Simulate Live Demo notification
  window.simulateLiveDemo = function(title) {
    alert(`Membuka simulasi tampilan live demo untuk "${title}".\nStatus: Terverifikasi Responsive & Berkecepatan 98+ PageSpeed.`);
  };

  // Select package from anywhere and scroll to contact
  window.selectPackageForOrder = function(packageName) {
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
    const selectElem = document.getElementById("orderPackage");
    if (selectElem) {
      if (packageName.toLowerCase().includes("basic")) {
        selectElem.value = "Paket Basic (Rp 950.000)";
      } else if (packageName.toLowerCase().includes("standard")) {
        selectElem.value = "Paket Standard (Rp 1.850.000)";
      } else if (packageName.toLowerCase().includes("premium")) {
        selectElem.value = "Paket Premium (Rp 3.500.000)";
      }
    }
    const contactSection = document.getElementById("kontak");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // WhatsApp Order Generator & Form Handler
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("clientName").value.trim();
      const phone = document.getElementById("clientPhone").value.trim();
      const email = document.getElementById("clientEmail").value.trim();
      const pkg = document.getElementById("orderPackage").value;
      const businessType = document.getElementById("businessType").value.trim();
      const message = document.getElementById("clientNotes").value.trim();

      if (!name || !phone) {
        alert("Mohon lengkapi Nama dan Nomor WhatsApp Anda.");
        return;
      }

      // Format WhatsApp Message
      const waText = 
`Halo Tim NexaWeb Studio! 👋
Saya ingin konsultasi & pemesanan jasa pembuatan website:

*Nama:* ${name}
*No. WhatsApp:* ${phone}
*Email:* ${email || "-"}
*Pilihan Paket:* ${pkg}
*Bidang Usaha:* ${businessType || "Belum ditentukan"}
*Kebutuhan Khusus / Catatan:* 
${message || "Mohon rekomendasi desain dan estimasi pengerjaannya."}

Saya mendapatkan informasi ini dari website resmi. Terima kasih!`;

      const encodedMsg = encodeURIComponent(waText);
      // Format link to WhatsApp (example official business number)
      const waUrl = `https://wa.me/6282352704177?text=${encodedMsg}`;

      // Open WhatsApp in new tab
      window.open(waUrl, "_blank");
    });
  }

  // Interactive Live Price Estimator
  const basePrices = {
    basic: 950000,
    standard: 1850000,
    premium: 3500000
  };

  window.calculateEstimate = function() {
    const selectedPlan = document.querySelector('input[name="calcPlan"]:checked')?.value || "standard";
    let total = basePrices[selectedPlan];

    const addons = document.querySelectorAll('.calc-addon:checked');
    addons.forEach(addon => {
      total += parseInt(addon.value, 10);
    });

    const displayElem = document.getElementById("calcTotalDisplay");
    if (displayElem) {
      displayElem.innerText = `Rp ${total.toLocaleString("id-ID")}`;
    }
  };

  // Blog Article Data & Reader Modal
  const blogArticles = {
    "umkm-go-digital": {
      title: "5 Strategi UMKM Menggaet Pelanggan Baru via Google Tanpa Biaya Iklan Mahal",
      category: "Tips Bisnis & SEO",
      date: "06 November 2026",
      readTime: "4 menit baca",
      content: `
        <p>Banyak pelaku UMKM mengira bahwa memiliki website hanya bermanfaat bagi korporasi multinasional. Kenyataannya, <strong>78% calon konsumen di Indonesia mencari produk atau jasa lokal melalui pencarian Google sebelum melakukan pembelian</strong>.</p>
        <br>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">1. Optimasi Google Bisnisku & Local Schema</h3>
        <p>Dengan mengintegrasikan website WordPress Anda dengan Google Business Profile dan menambahkan metadata skema lokal, tempat usaha Anda akan langsung muncul di Google Maps ketika orang mencari 'jasa terdekat'.</p>
        <br>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">2. Kecepatan Akses Mobile (Core Web Vitals)</h3>
        <p>Pengguna seluler akan meninggalkan situs yang memuat lebih dari 3 detik. Pastikan website menggunakan kompresi gambar WebP dan cache LiteSpeed agar pelanggan tidak berpaling ke kompetitor.</p>
        <br>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">3. Tombol Call to Action WhatsApp yang Mencolok</h3>
        <p>Di Indonesia, WhatsApp adalah saluran transaksi terfavorit. Jangan paksa calon pembeli mengisi formulir yang panjang bila Anda bisa mengarahkan mereka langsung ke chat WhatsApp dalam satu klik!</p>
      `
    },
    "keamanan-wordpress": {
      title: "Panduan Praktis Keamanan WordPress: Lindungi Aset Digital Bisnis Anda dari Malware",
      category: "Tutorial WordPress",
      date: "02 November 2026",
      readTime: "6 menit baca",
      content: `
        <p>Sebagai CMS paling populer di dunia, WordPress sering menjadi sasaran peretas otomatis jika pemilik web mengabaikan protokol keamanan dasar. Berikut adalah langkah wajib yang kami terapkan di setiap web klien:</p>
        <br>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">1. Ubah Alamat Login Default wp-admin</h3>
        <p>Jangan biarkan halaman login Anda berada di tautan standar '/wp-admin'. Ubah menjadi URL khusus untuk menggagalkan 99% serangan brute force robot.</p>
        <br>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">2. Wajib Gunakan Sertifikat SSL & Enkripsi HTTPS</h3>
        <p>Selain mengamankan data transaksi klien, browser modern seperti Google Chrome kini menandai situs tanpa HTTPS sebagai 'Not Secure', yang langsung merusak reputasi agensi Anda.</p>
        <br>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">3. Pencadangan Berkala Otomatis (Cloud Backup)</h3>
        <p>Selalu simpan cadangan file dan database ke penyimpanan cloud terpisah seperti Google Drive atau AWS S3 mingguan untuk pemulihan bencana instan.</p>
      `
    },
    "tren-desain-2026": {
      title: "Tren Desain Web Modern: Mengapa Dark Mode & Micro-Interactions Meningkatkan Penjualan",
      category: "Teknologi & Desain",
      date: "28 Oktober 2026",
      readTime: "5 menit baca",
      content: `
        <p>Tren visual situs web di era sekarang bergeser dari tampilan datar (flat design) ke pengalaman interaktif yang imersif dan nyaman di mata (eyestrain-free).</p>
        <br>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">1. Estetika Obsidian & Aksen Soft Gold</h3>
        <p>Warna gelap seperti Obsidian Dark (#0e0e11) dikombinasikan dengan sentuhan Soft Gold memancarkan aura eksklusif, terpercaya, dan premium yang cocok untuk agensi maupun bisnis modern.</p>
        <br>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">2. Kejelasan Hierarki dan Kedalaman Maksimal 2-Klik</h3>
        <p>Sebagaimana tercantum dalam blueprint sitemap kami, arsitektur informasi dangkal (shallow architecture) memastikan pengguna menemukan apa yang mereka butuhkan tanpa tersesat dalam navigasi rumit.</p>
      `
    }
  };

  window.openBlogModal = function(id) {
    const article = blogArticles[id];
    if (!article) return;

    const modalBody = document.getElementById("blogModalBody");
    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem;">
        <span class="gold-tag" style="margin-bottom: 0.6rem;">${article.category}</span>
        <h1 style="font-size: 1.8rem; margin: 0.6rem 0; color: #fff;">${article.title}</h1>
        <p style="color: var(--text-dim); font-size: 0.85rem;">Dipublikasikan: ${article.date} • Waktu baca: ${article.readTime}</p>
      </div>
      <div style="font-size: 0.95rem; line-height: 1.7; color: #d0d0df;">
        ${article.content}
      </div>
      <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle); text-align: center;">
        <p style="color: var(--gold-light); margin-bottom: 1rem; font-size: 0.92rem;">Ingin memiliki website profesional dengan standar industri ini?</p>
        <button onclick="closeModal('blogModal'); document.getElementById('layanan').scrollIntoView({behavior: 'smooth'});" class="btn btn-gold">Lihat Pilihan Paket Kami</button>
      </div>
    `;

    document.getElementById("blogModal").classList.add("open");
  };

  // Close modals when clicking outside
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("open");
      }
    });
  });

  // ESC key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
    }
  });
});
