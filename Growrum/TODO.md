# Navbar refactor (dynamic modular) TODO

- [ ] Refactor `agri/components/navbar.html` into a pure navbar snippet (remove `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`), keeping Tailwind/markup identical.
- [ ] Update every page (`index.html`, `product.html`, `hargaPasar.html`, `edukasi.html`, `panen.html`, `kontak.html`):
  - [ ] Remove existing inline navbar code.
  - [ ] Insert `<div id="navbar"></div>` at the top.
  - [ ] Add loader script using `fetch('components/navbar.html')` and inject into `#navbar`.
  - [ ] Add top spacer (`h-20`) so fixed navbar doesn’t cover content.
- [ ] Fix navbar links to use correct multi-page paths (no `#` anchors):
  - [ ] Home -> `index.html`
  - [ ] Produk -> `product.html`
  - [ ] Harga Pasar -> `hargaPasar.html`
  - [ ] Edukasi -> `edukasi.html`
  - [ ] Panen -> `panen.html`
  - [ ] Kontak -> `kontak.html`
- [ ] Quick manual verification: open each page in browser and confirm navbar renders + spacing is correct.

