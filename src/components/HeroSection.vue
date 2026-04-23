<template>
  <section class="hero" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    <div class="hero__overlay"></div>

    <!-- Contenido de texto (izquierda) -->
    <div class="hero__content">
      <h1 class="hero__title" data-aos="fade-up" data-aos-delay="200">
        Deshacerse de los bichos<br/>
        <em>no es capricho</em>
      </h1>
      <p class="hero__sub" data-aos="fade-up" data-aos-delay="400">
        Ropa con tecnología anti-insecto integrada para climas tropicales. Sin aerosoles, sin olor.<br/>
        Protección real contra dengue, zika y chikungunya — desde Cancún para el mundo.
      </p>
      <div class="hero__actions" data-aos="fade-up" data-aos-delay="600">
        <a href="#catalogo" class="btn btn--primary">Ver catálogo</a>
        <a href="#que-es" class="btn btn--ghost">¿Cómo funciona?</a>
      </div>
      <div class="hero__stats" data-aos="fade-up" data-aos-delay="800">
        <div class="stat">
          <span class="stat__num">20M+</span>
          <span class="stat__label">turistas en QRoo al año</span>
        </div>
        <div class="stat__divider"></div>
        <div class="stat">
          <span class="stat__num">3</span>
          <span class="stat__label">enfermedades que prevenimos</span>
        </div>
        <div class="stat__divider"></div>
        <div class="stat">
          <span class="stat__num">100%</span>
          <span class="stat__label">marca mexicana</span>
        </div>
      </div>
    </div>

    <!-- Imagen flotante con parallax (derecha) -->
    <div class="hero__visual" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1200">
      <div class="hero__glow"></div>
      <!-- Capa 1: parallax JS (mouseX/Y) -->
      <div class="hero__parallax" :style="parallaxStyle">
        <!-- Capa 2: float CSS animation -->
        <img
          src="@/assets/camisa.png"
          alt="Camisa anti-insecto Debugger"
          class="hero__shirt"
        />
      </div>
      <div class="hero__badge-float">
        <span>🛡️</span>
        <span>Tecnología BugShield™</span>
      </div>
    </div>

    <div class="hero__scroll-hint">
      <span>scroll</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      targetX: 0,
      targetY: 0,
      rafId: null,
    }
  },
  computed: {
    parallaxStyle() {
      return {
        transform: `translateY(${this.mouseY * -18}px) translateX(${this.mouseX * 10}px) rotate(${this.mouseX * 2}deg)`,
      }
    },
  },
  mounted() {
    this.tick()
  },
  beforeUnmount() {
    cancelAnimationFrame(this.rafId)
  },
  methods: {
    onMouseMove(e) {
      const rect = this.$el.getBoundingClientRect()
      // Valores normalizados -0.5 a 0.5
      this.targetX = (e.clientX - rect.left) / rect.width - 0.5
      this.targetY = (e.clientY - rect.top) / rect.height - 0.5
    },
    onMouseLeave() {
      this.targetX = 0
      this.targetY = 0
    },
    tick() {
      // Lerp suavizado para el parallax
      this.mouseX += (this.targetX - this.mouseX) * 0.06
      this.mouseY += (this.targetY - this.mouseY) * 0.06
      this.rafId = requestAnimationFrame(this.tick)
    },
  },
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: var(--bg-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  overflow: hidden;
  padding: 0 6rem;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 70% 30%, rgba(61, 174, 255, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 30% 70%, rgba(234, 94, 193, 0.05) 0%, transparent 50%),
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}

.hero__overlay {
  position: absolute;
  right: -80px; top: 50%;
  transform: translateY(-50%);
  width: 600px; height: 600px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.04);
  box-shadow: 0 0 0 80px rgba(255,255,255,0.015), 0 0 0 160px rgba(255,255,255,0.005);
  pointer-events: none;
}

/* ===== TEXTO (izquierda) ===== */
.hero__content {
  position: relative;
  z-index: 2;
  max-width: 580px;
  flex-shrink: 0;
  animation: heroIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes heroIn {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero__title   { animation-delay: 0.1s; }
.hero__sub     { animation-delay: 0.25s; }
.hero__actions { animation-delay: 0.4s;  opacity: 0; animation: heroIn 0.8s 0.4s cubic-bezier(0.16,1,0.3,1) both; }
.hero__stats   { animation-delay: 0.55s; opacity: 0; animation: heroIn 0.8s 0.55s cubic-bezier(0.16,1,0.3,1) both; }

.hero__title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 600;
  color: #ffffff;
  line-height: 1.10;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.hero__title em {
  font-style: normal;
  background: linear-gradient(90deg, var(--brand-sky) 0%, var(--primary-500) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero__sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  font-weight: 400;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}

.btn {
  display: inline-block;
  padding: 11px 24px;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.25s;
}
.btn--primary { background: var(--primary-500); color: #ffffff; }
.btn--primary:hover {
  background: var(--primary-600);
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 10px 20px rgba(20, 86, 240, 0.2);
}
.btn--ghost { border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.05); }
.btn--ghost:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-4px) scale(1.02);
}

.hero__stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat { display: flex; flex-direction: column; gap: 0.2rem; }

.stat__num {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: var(--brand-sky);
  line-height: 1;
  animation: float 5s 1.5s ease-in-out infinite;
}

.stat__label {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  font-family: 'DM Sans', sans-serif;
}

.stat__divider {
  width: 1px; height: 36px;
  background: rgba(255,255,255,0.1);
}

/* ===== VISUAL (derecha) ===== */
.hero__visual {
  position: relative;
  z-index: 2;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(280px, 38vw, 520px);
}

/* Glow ambiental detrás de la camisa */
.hero__glow {
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(20, 86, 240, 0.35) 0%, rgba(61, 174, 255, 0.15) 40%, transparent 70%);
  filter: blur(48px);
  animation: glowPulse 4s ease-in-out infinite;
  pointer-events: none;
}

@keyframes glowPulse {
  0%, 100% { transform: scale(1);    opacity: 0.7; }
  50%       { transform: scale(1.25); opacity: 1;   }
}

/* Capa 1 — recibe el parallax de JS */
.hero__parallax {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  transition: transform 0.05s linear;
}

/* Capa 2 — flota por CSS animation */
.hero__shirt {
  position: relative;
  width: 130%;
  max-width: 680px;
  object-fit: contain;
  opacity: 0.55;
  mix-blend-mode: luminosity;
  filter:
    drop-shadow(0 0 60px rgba(20, 86, 240, 0.4))
    drop-shadow(0 60px 80px rgba(0, 0, 0, 0.6));
  -webkit-mask-image: linear-gradient(to bottom, black 55%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 55%, transparent 100%);
  animation: floatShirt 6s ease-in-out infinite;
  transition: opacity 0.4s ease, mix-blend-mode 0.4s ease;
}

/* Al hacer hover en el hero, la camisa resalta un poco */
.hero:hover .hero__shirt {
  opacity: 0.75;
  mix-blend-mode: normal;
}

@keyframes floatShirt {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-22px); }
}

/* Badge flotante encima de la camisa */
.hero__badge-float {
  position: absolute;
  bottom: 8%;
  left: -12%;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 10px 18px;
  border-radius: 9999px;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  white-space: nowrap;
  animation: floatBadge 5s 1s ease-in-out infinite;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

@keyframes floatBadge {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  33%       { transform: translateY(-8px) translateX(4px); }
  66%       { transform: translateY(4px) translateX(-3px); }
}

/* ===== SCROLL HINT ===== */
.hero__scroll-hint {
  position: absolute;
  bottom: 2.5rem; left: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(255,255,255,0.4);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero__scroll-line { width: 40px; height: 1px; background: rgba(255,255,255,0.2); }

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    justify-content: center;
    padding: 7rem 2rem 4rem;
    text-align: center;
    gap: 3rem;
  }
  .hero__content { max-width: 100%; }
  .hero__actions { justify-content: center; }
  .hero__stats   { justify-content: center; }
  .hero__visual  { width: clamp(220px, 70vw, 380px); }
  .hero__badge-float { left: 50%; transform: translateX(-50%); }
}

@media (max-width: 600px) {
  .hero { padding: 6rem 1.5rem 4rem; }
  .hero__overlay { display: none; }
  .stat__divider { display: none; }
}
</style>