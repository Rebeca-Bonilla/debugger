<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar__logo">DEBUGGER</div>
    <ul class="navbar__links" :class="{ open: menuOpen }">
      <li><a href="#que-es" @click="menuOpen = false">¿Qué es?</a></li>
      <li><a href="#como-funciona" @click="menuOpen = false">Cómo funciona</a></li>
      <li><a href="#catalogo" @click="menuOpen = false">Catálogo</a></li>
      <li><a href="#contacto" @click="menuOpen = false">Contacto</a></li>
    </ul>
    <button class="navbar__burger" @click="menuOpen = !menuOpen" :class="{ active: menuOpen }">
      <span /><span /><span />
    </button>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return { isScrolled: false, menuOpen: false }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50
    })
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.5rem;
  transition: background 0.3s, box-shadow 0.3s;
}

.navbar.scrolled {
  background: var(--bg-glass);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-standard);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.navbar__logo {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  transition: color 0.3s;
}

.navbar.scrolled .navbar__logo { color: var(--text-dark); }

.navbar__links {
  display: flex;
  gap: 0.5rem;
  list-style: none;
}

.navbar__links a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  transition: all 0.2s;
  padding: 8px 16px;
  border-radius: 9999px;
}

.navbar.scrolled .navbar__links a { color: var(--text-muted); }

.navbar__links a:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.navbar.scrolled .navbar__links a:hover {
  background: rgba(0, 0, 0, 0.05);
  color: var(--text-dark);
}

.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #ffffff;
  transition: all 0.3s;
  border-radius: 2px;
}

.navbar.scrolled .navbar__burger span { background: var(--text-dark); }

@media (max-width: 768px) {
  .navbar__burger { display: flex; }
  .navbar__links {
    display: none;
    position: absolute;
    top: 100%; left: 0; right: 0;
    background: var(--bg-pure);
    flex-direction: column;
    padding: 1.5rem 2.5rem;
    gap: 0.5rem;
    box-shadow: var(--shadow-elevated);
  }
  .navbar__links.open { display: flex; }
  .navbar__links a { color: var(--text-dark) !important; font-size: 1rem; }
  .navbar__links a:hover { background: rgba(0,0,0,0.05); color: var(--text-dark); }
}
</style>