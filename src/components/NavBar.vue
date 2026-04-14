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
  background: rgba(245, 240, 232, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}

.navbar__logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.3rem;
  letter-spacing: 0.15em;
  color: var(--blanco);
  transition: color 0.3s;
}

.navbar.scrolled .navbar__logo { color: var(--verde); }

.navbar__links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.navbar__links a {
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  transition: color 0.2s;
  letter-spacing: 0.03em;
}

.navbar.scrolled .navbar__links a { color: var(--texto-suave); }
.navbar__links a:hover { color: var(--acento) !important; }

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
  background: var(--blanco);
  transition: all 0.3s;
  border-radius: 2px;
}

.navbar.scrolled .navbar__burger span { background: var(--verde); }

@media (max-width: 768px) {
  .navbar__burger { display: flex; }
  .navbar__links {
    display: none;
    position: absolute;
    top: 100%; left: 0; right: 0;
    background: var(--crema);
    flex-direction: column;
    padding: 1.5rem 2.5rem;
    gap: 1.2rem;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  .navbar__links.open { display: flex; }
  .navbar__links a { color: var(--texto) !important; font-size: 1rem; }
}
</style>