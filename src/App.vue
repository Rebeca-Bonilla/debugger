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
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --verde:     #2D5A27;
  --verde-med: #4A7C3F;
  --verde-claro: #7BAF6E;
  --crema:     #F5F0E8;
  --beige:     #E8DFD0;
  --tierra:    #C4A882;
  --blanco:    #FAFAF7;
  --texto:     #1C2B1A;
  --texto-suave: #5A6B57;
  --acento:    #D46B2A;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--blanco);
  color: var(--texto);
  overflow-x: hidden;
}

h1, h2, h3 { font-family: 'Syne', sans-serif; }
</style>