// navbar.js

export function initNavbar(menuBtnId = "menuBtn", menuId = "mobileMenu") {
  const run = () => {
    const btn = document.getElementById(menuBtnId);
    const menu = document.getElementById(menuId);
    const overlay = document.getElementById("mobileOverlay");

    if (!btn || !menu) {
      console.warn("Navbar: element tidak ditemukan 😹 cek ID kamu");
      return;
    }

    // Fungsi buka/tutup terpusat
    const openMenu = () => {
      menu.classList.remove("hidden");
      if (overlay) overlay.classList.remove("hidden");
      btn.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
      menu.classList.add("hidden");
      if (overlay) overlay.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    };

    btn.addEventListener("click", () => {
      const isHidden = menu.classList.contains("hidden");
      isHidden ? openMenu() : closeMenu();
    });

    if (overlay) {
      overlay.addEventListener("click", closeMenu);
    }

    const mobileLinks = menu.querySelectorAll("a");
    mobileLinks.forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  };

  // Jaga-jaga: jalankan langsung jika DOM sudah siap, atau tunggu event
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
}