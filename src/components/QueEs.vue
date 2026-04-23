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
            <div class="mv-card reveal">
              <span class="mv-card__icon material-symbols-rounded">track_changes</span>
              <div>
                <h4>Misión</h4>
                <p>Ofrecer ropa innovadora que proteja de insectos, garantizando comodidad, estilo y bienestar mediante materiales de alta calidad que combinan tecnología y diseño.</p>
              </div>
            </div>
            <div class="mv-card reveal stagger-1">
              <span class="mv-card__icon material-symbols-rounded">visibility</span>
              <div>
                <h4>Visión</h4>
                <p>Ser la marca líder en ropa funcional para exteriores y actividades diarias, reconocida por su eficacia contra insectos y su compromiso con la innovación y la salud.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="que-es__features">
          <div class="feat reveal" v-for="(f, i) in features" :key="f.titulo" :class="'stagger-' + (i + 1)">
            <div class="feat__icon material-symbols-rounded">{{ f.icono }}</div>
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
          <div class="valor reveal" v-for="(v, i) in valores" :key="v.nombre" :class="'stagger-' + (i + 1)">
            <span class="valor__icon material-symbols-rounded">{{ v.icono }}</span>
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
        { icono: 'pest_control', titulo: 'Anti dengue, zika y chikungunya', desc: 'Tecnología repelente específica contra los mosquitos transmisores de las enfermedades más comunes del trópico.' },
        { icono: 'sunny', titulo: 'Protección UV incluida', desc: 'Tela con filtro solar para cuidarte del sol intenso del Caribe mexicano.' },
        { icono: 'air', titulo: 'Transpirable y de secado rápido', desc: 'Diseñada para el calor extremo: ligera, fresca y cómoda todo el día.' },
        { icono: 'humidity_mid', titulo: 'Resistente a humedad', desc: 'Materiales que aguantan el clima tropical sin deformarse ni perder su efectividad.' },
        { icono: 'laundry', titulo: 'Durable al lavado', desc: 'El tratamiento repelente se mantiene activo durante múltiples lavadas.' },
        { icono: 'do_not_disturb_on', titulo: 'Sin aerosoles', desc: 'Olvídate de sprays pegajosos y olores fuertes. La protección ya está en la tela.' },
      ],
      valores: [
        { icono: 'lightbulb', nombre: 'Innovación', desc: 'Buscamos constantemente nuevas soluciones para proteger y mejorar la vida de nuestros clientes.' },
        { icono: 'verified', nombre: 'Calidad', desc: 'Garantizamos productos duraderos, efectivos y cómodos.' },
        { icono: 'eco', nombre: 'Sostenibilidad', desc: 'Priorizamos materiales amigables con el medio ambiente.' },
        { icono: 'health_and_safety', nombre: 'Compromiso con la salud', desc: 'Promovemos la prevención de enfermedades transmitidas por insectos.' },
        { icono: 'handshake', nombre: 'Servicio al cliente', desc: 'Atención personalizada y cercana para garantizar satisfacción.' },
      ]
    }
  }
}
</script>

<style scoped>
.que-es {
  padding: 7rem 2.5rem;
  background: var(--bg-pure);
}

.container { max-width: 1100px; margin: 0 auto; }

.section-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brand-primary);
  margin-bottom: 3rem;
  display: inline-block;
  background: rgba(20, 86, 240, 0.05);
  padding: 6px 14px;
  border-radius: 9999px;
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
  font-weight: 600;
  line-height: 1.15;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.que-es__text > p {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 16px;
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
  background: var(--bg-pure);
  border: 1px solid var(--border-gray);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: var(--shadow-standard);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.mv-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-elevated);
}

.mv-card::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: none;
}

.mv-card:hover::after {
  animation: shine 0.8s ease-in-out;
}

.mv-card__icon { 
  font-size: 1.8rem; 
  min-width: 42px; 
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 86, 240, 0.05);
  border-radius: 12px;
  color: var(--brand-primary);
  transition: transform 0.3s ease;
}

.mv-card:hover .mv-card__icon {
  transform: scale(1.1) rotate(5deg);
}

.mv-card h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-dark);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.3rem;
}

.mv-card p {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: var(--text-muted);
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
  gap: 1.2rem;
  padding: 1.5rem;
  background: var(--bg-pure);
  border-radius: 20px;
  border: 1px solid var(--border-gray);
  transition: box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease;
  box-shadow: var(--shadow-standard);
}

.feat:hover {
  box-shadow: var(--shadow-elevated);
  transform: translateY(-4px);
  border-color: rgba(20, 86, 240, 0.2);
}

.feat:hover .feat__icon {
  transform: scale(1.12) rotate(-3deg);
  background: rgba(20, 86, 240, 0.1);
}

.feat__icon { 
  font-size: 1.8rem; 
  min-width: 48px; 
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
  border-radius: 14px;
  color: var(--brand-primary);
}

.feat h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.3rem;
}

.feat p {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.5;
}

.valores { border-top: 1px solid var(--border-light); padding-top: 4rem; }

.valores__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
}

.valor {
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--bg-pure);
  border-radius: 20px;
  border: 1px solid var(--border-gray);
  transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, border-color 0.3s ease;
  box-shadow: var(--shadow-standard);
}

.valor:hover { 
  transform: translateY(-6px); 
  box-shadow: var(--shadow-elevated);
  border-color: rgba(20, 86, 240, 0.2);
}

.valor:hover .valor__icon {
  transform: scale(1.15);
  background: rgba(20, 86, 240, 0.08);
}

.valor__icon { 
  font-size: 2.2rem; 
  display: flex; 
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.2rem;
  color: var(--brand-primary);
  width: 56px;
  height: 56px;
  background: rgba(20, 86, 240, 0.03);
  border-radius: 50%;
  transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease;
}

.valor h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.valor p {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
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