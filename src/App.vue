<template>
  <div id="app">
    <NavBar />
    <HeroSection />
    <QueEs />
    <ComoFunciona />
    <Catalogo />
    <FooterSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import QueEs from './components/QueEs.vue'
import ComoFunciona from './components/ComoFunciona.vue'
import Catalogo from './components/CatalogoLinea.vue'
import FooterSection from './components/FooterSection.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  components: { NavBar, HeroSection, QueEs, ComoFunciona, Catalogo, FooterSection },
  mounted() {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&family=DM+Sans:wght@400;500;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --brand-primary: #1456f0;
  --brand-secondary: #ea5ec1;
  --brand-sky: #3daeff;
  --primary-200: #bfdbfe;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  
  --bg-pure: #ffffff;
  --bg-light: #f0f0f0;
  --bg-glass: hsla(0, 0%, 100%, 0.4);
  --bg-dark: #181e25;
  
  --text-main: #222222;
  --text-dark: #18181b;
  --text-charcoal: #181e25;
  --text-muted: #45515e;
  --text-light: #8e8e93;
  
  --border-light: #f2f3f5;
  --border-gray: #e5e7eb;
  
  --shadow-standard: rgba(0, 0, 0, 0.08) 0px 4px 6px;
  --shadow-brand: rgba(44, 30, 116, 0.16) 0px 0px 15px;
  --shadow-elevated: rgba(36, 36, 36, 0.08) 0px 12px 16px -4px;

  --expo-out: linear(
    0 0%, 0.1684 2.66%, 0.3165 5.49%, 0.446 8.52%, 0.5581 11.78%,
    0.6535 15.29%, 0.7341 19.11%, 0.8011 23.3%, 0.8557 27.93%,
    0.8962 32.68%, 0.9283 38.01%, 0.9529 44.08%, 0.9711 51.14%,
    0.9833 59.06%, 0.9915 68.74%, 1 100%
  );
}

/* === DARK MODE === */
html.dark {
  --bg-pure: #0f1117;
  --bg-light: #1a1d27;
  --bg-glass: hsla(225, 15%, 8%, 0.75);
  --bg-dark: #0a0c10;
  
  --text-main: #e4e4e7;
  --text-dark: #f4f4f5;
  --text-charcoal: #f4f4f5;
  --text-muted: #9ca3af;
  --text-light: #6b7280;
  
  --border-light: #1f2230;
  --border-gray: #2a2d37;
  
  --shadow-standard: rgba(0, 0, 0, 0.3) 0px 4px 6px;
  --shadow-brand: rgba(20, 86, 240, 0.2) 0px 0px 15px;
  --shadow-elevated: rgba(0, 0, 0, 0.4) 0px 12px 16px -4px;
}

/* === VIEW TRANSITION: Circular Reveal from Button === */
::view-transition-group(root) {
  animation-timing-function: var(--expo-out);
}

::view-transition-new(root) {
  animation: vt-reveal 0.8s both;
}

::view-transition-old(root),
html.dark::view-transition-old(root) {
  animation: none;
  z-index: -1;
}

html.dark::view-transition-new(root) {
  animation: vt-reveal 0.8s both;
}

@keyframes vt-reveal {
  from { clip-path: circle(0% at var(--vt-x, 50%) var(--vt-y, 50%)); }
  to   { clip-path: circle(150% at var(--vt-x, 50%) var(--vt-y, 50%)); }
}

html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg-pure);
  color: var(--text-main);
  overflow-x: hidden;
  line-height: 1.50;
  user-select: none; /* No se puede copiar el texto */
}

h1, h2 { font-family: 'Outfit', sans-serif; font-weight: 600; color: var(--text-dark); }
h3 { font-family: 'Poppins', sans-serif; font-weight: 500; color: var(--text-dark); }
h4, h5, h6 { font-family: 'DM Sans', sans-serif; font-weight: 500; color: var(--text-dark); }

a { color: var(--text-dark); text-decoration: none; }

.material-symbols-rounded {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  width: 1.5em; height: 1.5em;
  vertical-align: middle;
}

/* --- ANIMACIONES GLOBALES --- */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

@keyframes shine {
  0% { left: -100%; }
  100% { left: 100%; }
}
</style>