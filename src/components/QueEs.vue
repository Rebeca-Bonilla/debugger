<template>
  <section class="que-es" id="que-es">
    <div class="container">
      <div class="section-tag">¿Qué es Debugger?</div>
      <div class="que-es__grid">
        <div class="que-es__text">
          <h2>Moda, tecnología<br/>y protección en una sola prenda</h2>
          <p>La idea de Debugger surgió al observar la molestia y los problemas de salud que los insectos — principalmente los mosquitos — causan en la vida diaria de quienes vivimos en el trópico.</p>
          <p>Quisimos crear una solución práctica que no solo repele insectos, sino que también permite a las personas disfrutar de actividades al aire libre sin incomodidades. Así nació nuestra marca, combinando moda, tecnología y protección.</p>
          <div class="mision-vision">
            <div class="mv-card">
              <span class="mv-card__icon">🎯</span>
              <div>
                <h4>Misión</h4>
                <p>Ofrecer ropa innovadora que proteja de insectos, garantizando comodidad, estilo y bienestar mediante materiales de alta calidad que combinan tecnología y diseño.</p>
              </div>
            </div>
            <div class="mv-card">
              <span class="mv-card__icon">🌟</span>
              <div>
                <h4>Visión</h4>
                <p>Ser la marca líder en ropa funcional para exteriores y actividades diarias, reconocida por su eficacia contra insectos y su compromiso con la innovación y la salud.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="que-es__features">
          <div class="feat" v-for="f in features" :key="f.titulo">
            <div class="feat__icon">{{ f.icono }}</div>
            <div>
              <h3>{{ f.titulo }}</h3>
              <p>{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="valores">
        <div class="section-tag" style="margin-bottom:1.5rem">Nuestros valores</div>
        <div class="valores__grid">
          <div class="valor" v-for="v in valores" :key="v.nombre">
            <span class="valor__icon">{{ v.icono }}</span>
            <h4>{{ v.nombre }}</h4>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QueEs',
  data() {
    return {
      features: [
        { icono: '🦟', titulo: 'Anti dengue, zika y chikungunya', desc: 'Tecnología repelente específica contra los mosquitos transmisores de las enfermedades más comunes del trópico.' },
        { icono: '☀️', titulo: 'Protección UV incluida', desc: 'Tela con filtro solar para cuidarte del sol intenso del Caribe mexicano.' },
        { icono: '💨', titulo: 'Transpirable y de secado rápido', desc: 'Diseñada para el calor extremo: ligera, fresca y cómoda todo el día.' },
        { icono: '💧', titulo: 'Resistente a humedad', desc: 'Materiales que aguantan el clima tropical sin deformarse ni perder su efectividad.' },
        { icono: '🧺', titulo: 'Durable al lavado', desc: 'El tratamiento repelente se mantiene activo durante múltiples lavadas.' },
        { icono: '🚫', titulo: 'Sin aerosoles', desc: 'Olvídate de sprays pegajosos y olores fuertes. La protección ya está en la tela.' },
      ],
      valores: [
        { icono: '💡', nombre: 'Innovación', desc: 'Buscamos constantemente nuevas soluciones para proteger y mejorar la vida de nuestros clientes.' },
        { icono: '⭐', nombre: 'Calidad', desc: 'Garantizamos productos duraderos, efectivos y cómodos.' },
        { icono: '🌿', nombre: 'Sostenibilidad', desc: 'Priorizamos materiales amigables con el medio ambiente.' },
        { icono: '❤️', nombre: 'Compromiso con la salud', desc: 'Promovemos la prevención de enfermedades transmitidas por insectos.' },
        { icono: '🤝', nombre: 'Servicio al cliente', desc: 'Atención personalizada y cercana para garantizar satisfacción.' },
      ]
    }
  }
}
</script>

<style scoped>
.que-es {
  padding: 7rem 2.5rem;
  background: var(--crema);
}

.container { max-width: 1100px; margin: 0 auto; }

.section-tag {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--verde-med);
  margin-bottom: 3rem;
}

.que-es__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  margin-bottom: 5rem;
}

.que-es__text h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--verde);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.que-es__text > p {
  color: var(--texto-suave);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.mision-vision {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.mv-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: var(--blanco);
  border: 1px solid var(--beige);
  border-radius: 10px;
  padding: 1.2rem;
}

.mv-card__icon { font-size: 1.4rem; min-width: 32px; }

.mv-card h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--verde);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}

.mv-card p {
  font-size: 0.85rem;
  color: var(--texto-suave);
  line-height: 1.6;
}

.que-es__features {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.feat {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.2rem;
  background: var(--blanco);
  border-radius: 12px;
  border: 1px solid var(--beige);
  transition: box-shadow 0.2s, transform 0.2s;
}

.feat:hover {
  box-shadow: 0 6px 24px rgba(45,90,39,0.08);
  transform: translateY(-2px);
}

.feat__icon { font-size: 1.4rem; min-width: 36px; line-height: 1; }

.feat h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--verde);
  margin-bottom: 0.2rem;
}

.feat p {
  font-size: 0.83rem;
  color: var(--texto-suave);
  line-height: 1.5;
}

.valores { border-top: 1px solid var(--beige); padding-top: 4rem; }

.valores__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
}

.valor {
  text-align: center;
  padding: 1.5rem 1rem;
  background: var(--blanco);
  border-radius: 12px;
  border: 1px solid var(--beige);
  transition: transform 0.2s;
}

.valor:hover { transform: translateY(-3px); }

.valor__icon { font-size: 1.8rem; display: block; margin-bottom: 0.7rem; }

.valor h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--verde);
  margin-bottom: 0.4rem;
}

.valor p {
  font-size: 0.78rem;
  color: var(--texto-suave);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .que-es__grid { grid-template-columns: 1fr; gap: 3rem; }
  .valores__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .que-es { padding: 5rem 1.5rem; }
  .valores__grid { grid-template-columns: 1fr; }
}
</style>