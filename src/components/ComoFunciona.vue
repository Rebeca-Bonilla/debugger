<template>
  <section class="como-funciona" id="como-funciona">
    <div class="container">
      <div class="section-tag">¿Cómo funciona?</div>
      <h2>Protección invisible,<br/>comodidad real</h2>
      <div class="steps">
        <div class="step" v-for="(s, i) in steps" :key="i">
          <div class="step__num">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="step__content">
            <h3>{{ s.titulo }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </div>
      <div class="como-funciona__banner">
        <span class="banner__text">La tecnología de microencapsulado libera el repelente gradualmente con el movimiento y el calor del cuerpo.</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComoFunciona',
  data() {
    return {
      steps: [
        { titulo: 'Microencapsulado', desc: 'El repelente se integra en microcápsulas adheridas a las fibras de la tela durante el proceso de fabricación.' },
        { titulo: 'Activación natural', desc: 'El roce y el calor del cuerpo activan las cápsulas, liberando el repelente de forma continua y controlada.' },
        { titulo: 'Protección duradera', desc: 'Cada prenda mantiene su efectividad durante decenas de lavados. Cuida tu ropa, cuídate tú.' },
      ]
    }
  }
}
</script>

<style scoped>
.como-funciona {
  padding: 7rem 2.5rem;
  background: var(--verde);
  color: #fff;
}

.container { max-width: 1100px; margin: 0 auto; }

.section-tag {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--verde-claro);
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 4rem;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.step {
  padding: 2rem;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  background: rgba(255,255,255,0.05);
  transition: background 0.2s;
}

.step:hover { background: rgba(255,255,255,0.09); }

.step__num {
  font-family: 'Syne', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: rgba(255,255,255,0.12);
  margin-bottom: 1rem;
  line-height: 1;
}

.step__content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--tierra);
  margin-bottom: 0.6rem;
}

.step__content p {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  font-weight: 300;
}

.como-funciona__banner {
  background: rgba(255,255,255,0.06);
  border-left: 3px solid var(--tierra);
  padding: 1.4rem 2rem;
  border-radius: 0 10px 10px 0;
}

.banner__text {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.75);
  line-height: 1.7;
  font-style: italic;
}

@media (max-width: 768px) {
  .como-funciona { padding: 5rem 1.5rem; }
  .steps { grid-template-columns: 1fr; }
}
</style>