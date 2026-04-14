<template>
  <section class="hero">
    <div class="hero__overlay"></div>
    <div class="hero__content">
      <h1 class="hero__title">
        Deshacerse de los bichos<br/>
        <em>no es capricho</em>
      </h1>
      <p class="hero__sub">
        Ropa con tecnología anti-insecto integrada para climas tropicales. Sin aerosoles, sin olor.<br/>
        Protección real contra dengue, zika y chikungunya — desde Cancún para el mundo.
      </p>
      <div class="hero__actions">
        <a href="#catalogo" class="btn btn--primary">Ver catálogo</a>
        <a href="#que-es" class="btn btn--ghost">¿Cómo funciona?</a>
      </div>
      <div class="hero__stats">
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
    <div class="hero__scroll-hint">
      <span>scroll</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<script>
export default { name: 'HeroSection' }
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: linear-gradient(150deg, #1a3a15 0%, #2D5A27 45%, #4A7C3F 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 2.5rem;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 70% 50%, rgba(123,175,110,0.15) 0%, transparent 60%),
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero__overlay {
  position: absolute;
  right: -80px; top: 50%;
  transform: translateY(-50%);
  width: 600px; height: 600px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 0 0 80px rgba(255,255,255,0.02), 0 0 0 160px rgba(255,255,255,0.01);
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  animation: fadeUp 0.9s ease both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero__badge {
  display: inline-block;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.85);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  margin-bottom: 1.8rem;
  font-weight: 500;
}

.hero__title {
  font-size: clamp(2.2rem, 5.5vw, 4.5rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.08;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.hero__title em {
  font-style: normal;
  color: var(--tierra);
}

.hero__sub {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  font-weight: 300;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.btn {
  display: inline-block;
  padding: 0.85rem 2rem;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.25s;
  letter-spacing: 0.02em;
}
.btn--primary { background: var(--acento); color: #fff; }
.btn--primary:hover { background: #bf5e24; transform: translateY(-2px); }
.btn--ghost { border: 1px solid rgba(255,255,255,0.3); color: rgba(255,255,255,0.85); }
.btn--ghost:hover { background: rgba(255,255,255,0.08); }

.hero__stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.stat { display: flex; flex-direction: column; gap: 0.2rem; }

.stat__num {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.6rem;
  color: var(--tierra);
  line-height: 1;
}

.stat__label {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.stat__divider {
  width: 1px; height: 36px;
  background: rgba(255,255,255,0.15);
}

.hero__scroll-hint {
  position: absolute;
  bottom: 2.5rem; left: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(255,255,255,0.4);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.hero__scroll-line { width: 40px; height: 1px; background: rgba(255,255,255,0.25); }

@media (max-width: 600px) {
  .hero { padding: 6rem 1.5rem 4rem; }
  .hero__overlay { display: none; }
  .stat__divider { display: none; }
}
</style>