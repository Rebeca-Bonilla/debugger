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
  background: var(--bg-light);
  color: var(--text-dark);
}

.container { max-width: 1100px; margin: 0 auto; }

.section-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brand-primary);
  margin-bottom: 1rem;
  display: inline-block;
  background: rgba(20, 86, 240, 0.05);
  padding: 6px 14px;
  border-radius: 9999px;
}

h2 {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 600;
  color: var(--text-dark);
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
  padding: 2.5rem 2rem;
  border: 1px solid var(--border-gray);
  border-radius: 20px;
  background: var(--bg-pure);
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: var(--shadow-standard);
  position: relative;
  overflow: hidden;
}

.step:hover { 
  background: var(--bg-pure);
  transform: translateY(-4px);
  box-shadow: var(--shadow-elevated);
}

.step__num {
  font-family: 'Outfit', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: rgba(20, 86, 240, 0.05);
  margin-bottom: 1rem;
  line-height: 1;
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 0;
}

.step__content {
  position: relative;
  z-index: 1;
}

.step__content h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.8rem;
}

.step__content p {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.7;
  font-weight: 400;
}

.como-funciona__banner {
  background: rgba(20, 86, 240, 0.04);
  border-left: 4px solid var(--brand-primary);
  padding: 1.5rem 2rem;
  border-radius: 0 20px 20px 0;
}

.banner__text {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: var(--brand-primary);
  line-height: 1.7;
  font-style: italic;
  font-weight: 500;
}

@media (max-width: 768px) {
  .como-funciona { padding: 5rem 1.5rem; }
  .steps { grid-template-columns: 1fr; }
}
</style>