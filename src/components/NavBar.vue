<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar__logo">
      <div class="logo-wrapper">
        <img src="/3781-logow.svg" alt="Logo" class="logo-light" :class="{ hidden: showDarkLogo }" />
        <img src="/3781-logob.svg" alt="Logo" class="logo-dark" :class="{ hidden: !showDarkLogo }" />
      </div>
      <span class="brand-text">DEBUGGER</span>
    </div>
    <ul class="navbar__links" :class="{ open: menuOpen }">
      <li><a href="#que-es" @click="menuOpen = false">¿Qué es?</a></li>
      <li><a href="#como-funciona" @click="menuOpen = false">Cómo funciona</a></li>
      <li><a href="#catalogo" @click="menuOpen = false">Catálogo</a></li>
      <li><a href="#contacto" @click="menuOpen = false">Contacto</a></li>
      <li class="theme-toggle-wrapper">
        <button class="theme-toggle" @click="toggleTheme($event)" :aria-label="isDark ? 'Modo claro' : 'Modo oscuro'">
          <span class="material-symbols-rounded theme-icon" :class="{ 'is-dark': isDark }">{{ isDark ? 'light_mode' : 'dark_mode' }}</span>
        </button>
      </li>
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
    return { isScrolled: false, menuOpen: false, isDark: false }
  },
  computed: {
    showDarkLogo() {
      // En dark mode siempre logo blanco. En light, negro solo si scrolled.
      if (this.isDark) return false;
      return this.isScrolled;
    }
  },
  methods: {
    toggleTheme(e) {
      // Capturar centro del botón para la transición circular
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      document.documentElement.style.setProperty('--vt-x', `${x}px`);
      document.documentElement.style.setProperty('--vt-y', `${y}px`);

      const switchTheme = () => {
        this.isDark = !this.isDark;
        document.documentElement.classList.toggle('dark', this.isDark);
        localStorage.setItem('debugger-theme', this.isDark ? 'dark' : 'light');
      };
      if (!document.startViewTransition) {
        switchTheme();
        return;
      }
      document.startViewTransition(switchTheme);
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
    // Restaurar preferencia guardada
    const saved = localStorage.getItem('debugger-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDark = true;
      document.documentElement.classList.add('dark');
    }
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
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
}

.logo-wrapper {
  position: relative;
  height: 38px;
  width: 38px;
}

.logo-wrapper img {
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  width: auto;
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.logo-wrapper img.hidden {
  opacity: 0;
  pointer-events: none;
  transform: scale(0.8) rotate(-10deg);
}

.brand-text {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.05em;
  color: #ffffff;
  transition: color 0.3s ease;
}

.navbar.scrolled .brand-text {
  color: var(--text-dark);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
}

.navbar__links a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 9999px;
  position: relative;
}

.navbar.scrolled .navbar__links a { color: var(--text-muted); }

.navbar__links a::after {
  content: '';
  position: absolute;
  bottom: 6px; left: 50%;
  width: 0; height: 2px;
  background: var(--brand-primary);
  transition: all 0.3s ease;
  transform: translateX(-50%);
  border-radius: 2px;
}

.navbar:not(.scrolled) .navbar__links a::after {
  background: #fff;
}

.navbar__links a:hover::after {
  width: 20px;
}

.navbar__links a:hover {
  color: #ffffff;
}

.navbar.scrolled .navbar__links a:hover {
  color: var(--brand-primary);
}

.theme-toggle-wrapper {
  display: flex;
  align-items: center;
  margin-left: 0.4rem;
}

.theme-toggle {
  background: none;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  color: rgba(255,255,255,0.85);
}

.navbar.scrolled .theme-toggle {
  border-color: var(--border-gray);
  color: var(--text-muted);
}

.theme-toggle:hover {
  background: rgba(255,255,255,0.1);
  transform: scale(1.1);
}

.navbar.scrolled .theme-toggle:hover {
  background: var(--bg-light);
}

.theme-icon {
  font-size: 20px;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.theme-icon.is-dark {
  transform: rotate(180deg);
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

/* === DARK MODE OVERRIDES === */
:global(html.dark) .navbar.scrolled {
  border-bottom-color: rgba(255,255,255,0.05);
}

:global(html.dark) .navbar.scrolled .navbar__links a:hover {
  color: #fff;
}

:global(html.dark) .navbar.scrolled .brand-text {
  color: #fff;
}
</style>