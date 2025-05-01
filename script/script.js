// script/script.js

document.addEventListener("DOMContentLoaded", () => {
  // SweetAlert Selamat Datang
  Swal.fire({
    title: "Selamat Datang!",
    text: "Tekan tombol di bawah untuk mulai menjelajahi landing page.",
    imageUrl: "assets/img/kepala_kebo-4.png",
    imageWidth: 150,
    imageHeight: 150,
    imageAlt: "Ikon Selamat Datang",
    confirmButtonText: "Mulai Jelajahi",
    customClass: {
      confirmButton: "custom-swal-button",
    },
  });

  // Toggle menu burger
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      burger.classList.toggle("toggle");
    });

    // Tutup menu saat klik link (untuk mobile)
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        burger.classList.remove("toggle");
      });
    });
  }

  // Smooth scroll untuk navigasi
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // --- Animasi Fade-in dari Bawah ke Atas untuk Setiap Paragraf Section ---
  // Section pertama langsung tampil
  document
    .querySelectorAll("#sec-1 .fade-scroll")
    .forEach((el) => el.classList.add("show"));

  // Observer untuk section kedua dst
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // animasi hanya sekali, class 'show' tetap
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  // Mulai observer untuk selain section pertama
  document
    .querySelectorAll("section:not(#sec-1) .fade-scroll")
    .forEach((el) => {
      observer.observe(el);
    });
});
