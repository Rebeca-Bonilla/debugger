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

export default {
  name: 'App',
  components: { NavBar, HeroSection, QueEs, ComoFunciona, Catalogo, FooterSection }
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
}

html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg-pure);
  color: var(--text-main);
  overflow-x: hidden;
  line-height: 1.50;
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
  width: 1.5em; height: 1.5em; /* Ligeramente más grande para dar aire */
  vertical-align: middle;
}
</style>