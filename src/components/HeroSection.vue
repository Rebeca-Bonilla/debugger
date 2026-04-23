<template>
  <section class="hero">
    <div class="hero__overlay"></div>
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
  background: var(--bg-dark);
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
    radial-gradient(ellipse at 70% 30%, rgba(61, 174, 255, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 30% 70%, rgba(234, 94, 193, 0.05) 0%, transparent 50%),
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero__overlay {
  position: absolute;
  right: -80px; top: 50%;
  transform: translateY(-50%);
  width: 600px; height: 600px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.04);
  box-shadow: 0 0 0 80px rgba(255,255,255,0.015), 0 0 0 160px rgba(255,255,255,0.005);
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  animation: heroIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes heroIn {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Stagger hero children via animation-delay */
.hero__title   { animation-delay: 0.1s; }
.hero__sub     { animation-delay: 0.25s; }
.hero__actions { animation-delay: 0.4s; opacity: 0; animation: heroIn 0.8s 0.4s cubic-bezier(0.16,1,0.3,1) both; }
.hero__stats   { animation-delay: 0.55s; opacity: 0; animation: heroIn 0.8s 0.55s cubic-bezier(0.16,1,0.3,1) both; }

.hero__badge {
  display: inline-block;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.85);
  font-size: 12px;
  letter-spacing: 0.05em;
  padding: 6px 14px;
  border-radius: 9999px;
  margin-bottom: 1.8rem;
  font-weight: 500;
}

.hero__title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
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
  font-size: 1.15rem;
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
}

/* Float applies only when parent is not animating */
.hero__stats .stat__num {
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

@media (max-width: 600px) {
  .hero { padding: 6rem 1.5rem 4rem; }
  .hero__overlay { display: none; }
  .stat__divider { display: none; }
}
</style>