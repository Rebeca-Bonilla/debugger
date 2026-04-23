<template>
  <section class="catalogo" id="catalogo">
    <div class="container">
      <div class="section-tag">Catálogo</div>
      <div class="catalogo__header">
        <div>
          <h2>Nuestras prendas</h2>
          <p class="catalogo__sub">Toda la línea incluye tratamiento repelente, tela transpirable y protección UV.</p>
        </div>
        <div class="filtros">
          <button
            v-for="f in filtros"
            :key="f"
            class="filtro-btn"
            :class="{ active: filtroActivo === f }"
            @click="filtroActivo = f"
          >{{ f }}</button>
        </div>
      </div>

      <div class="productos__grid">
        <div class="producto" v-for="p in productosFiltrados" :key="p.nombre">
          <div class="producto__img" :style="{ background: p.bg }">
            <div class="producto__placeholder">{{ p.emoji }}</div>
            <span class="producto__tag" v-if="p.nuevo">Nuevo</span>
            <div class="producto__badges">
              <span class="badge" v-for="b in p.badges" :key="b">{{ b }}</span>
            </div>
          </div>
          <div class="producto__info">
            <span class="producto__categoria">{{ p.categoria }}</span>
            <h3>{{ p.nombre }}</h3>
            <p>{{ p.desc }}</p>
            <div class="producto__footer">
              <div>
                <span class="producto__precio-label">desde</span>
                <span class="producto__precio">{{ p.precioDesde }}</span>
                <span class="producto__precio-hasta"> – {{ p.precioHasta }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="catalogo__nota">
        <span class="material-symbols-rounded">contact_support</span>
        <p>¿Eres hotel, agencia de turismo o empresa? Contáctanos para <strong>precios especiales B2B</strong> y uniformes personalizados.</p>
        <a href="#contacto" class="btn-nota">Ver contacto</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'catalogoLinea',
  data() {
    return {
      filtroActivo: 'Todos',
      filtros: ['Todos', 'Adulto', 'Infantil'],
      productos: [
        {
          nombre: 'Playera Deportiva Unisex',
          categoria: 'Adulto',
          desc: 'Manga corta, cuello redondo. Ideal para el día a día en el trópico. Repelente integrado contra dengue, zika y chikungunya.',
          precioDesde: '$650', precioHasta: '$900 MXN',
          colores: ['#4A7C3F','#1C2B1A','#fff'],
          emoji: '👕', nuevo: false,
          bg: 'linear-gradient(135deg, #f0f4ff 0%, #e0eaff 100%)',
          badges: ['Anti-mosquito', 'UV']
        },
        {
          nombre: 'Camisa Casual Manga Larga',
          categoria: 'Adulto',
          desc: 'Protección completa de brazos. Perfecta para tours, excursiones y trabajo en exteriores. Tela ligera de secado rápido.',
          precioDesde: '$900', precioHasta: '$1,400 MXN',
          emoji: '👔', nuevo: true,
          bg: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
          badges: ['Anti-mosquito', 'UV', 'Secado rápido']
        },
        {
          nombre: 'Pantalón Ligero Tropical',
          categoria: 'Adulto',
          desc: 'Corte cómodo para el calor. Material resistente a la humedad, ideal para senderismo, playa y ciudad.',
          precioDesde: '$1,200', precioHasta: '$1,800 MXN',
          emoji: '👖', nuevo: false,
          bg: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
          badges: ['Anti-mosquito', 'Resistente humedad']
        },
        {
          nombre: 'Sudadera Ligera',
          categoria: 'Adulto',
          desc: 'Para las noches frescas o el aire acondicionado. Mantiene la protección incluso con menos calor.',
          precioDesde: '$900', precioHasta: '$1,400 MXN',
          emoji: '🧥', nuevo: false,
          bg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
          badges: ['Anti-mosquito', 'UV']
        },
        {
          nombre: 'Playera Infantil',
          categoria: 'Infantil',
          desc: 'Línea especial con protección adicional para los más pequeños. Materiales hipoalergénicos y suaves.',
          precioDesde: '$600', precioHasta: '$800 MXN',
          emoji: '👕', nuevo: true,
          bg: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
          badges: ['Anti-mosquito', 'Hipoalergénico', 'UV']
        },
        {
          nombre: 'Pantalón Infantil',
          categoria: 'Infantil',
          desc: 'Comodidad y protección para niños activos. Elástico en cintura y corte amplio para jugar sin restricciones.',
          precioDesde: '$700', precioHasta: '$1,000 MXN',
          emoji: '🩲', nuevo: false,
          bg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
          badges: ['Anti-mosquito', 'Hipoalergénico']
        },
      ]
    }
  },
  computed: {
    productosFiltrados() {
      if (this.filtroActivo === 'Todos') return this.productos
      return this.productos.filter(p => p.categoria === this.filtroActivo)
    }
  }
}
</script>

<style scoped>
.catalogo {
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
  margin-bottom: 1rem;
  display: inline-block;
  background: rgba(20, 86, 240, 0.05);
  padding: 6px 14px;
  border-radius: 9999px;
}

.catalogo__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1.5rem;
}

h2 {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 600;
  color: var(--text-dark);
  letter-spacing: -0.02em;
  margin-bottom: 0.4rem;
}

.catalogo__sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: var(--text-muted);
}

.filtros { display: flex; gap: 0.8rem; flex-wrap: wrap; }

.filtro-btn {
  padding: 0.6rem 1.4rem;
  border-radius: 9999px;
  border: 1px solid var(--border-gray);
  background: var(--bg-pure);
  color: var(--text-muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filtro-btn:hover { border-color: var(--brand-primary); color: var(--brand-primary); }
.filtro-btn.active { background: var(--brand-primary); color: #fff; border-color: var(--brand-primary); box-shadow: var(--brand-glow); }

.productos__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.producto {
  border-radius: 24px;
  border: 1px solid var(--border-gray);
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  background: var(--bg-pure);
  box-shadow: var(--shadow-standard);
}

.producto:hover {
  box-shadow: var(--shadow-elevated);
  transform: translateY(-6px);
}

.producto__img {
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  gap: 0.8rem;
}

.producto__placeholder { font-size: 5rem; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1)); }

.producto__tag {
  position: absolute;
  top: 1.2rem; right: 1.2rem;
  background: var(--brand-secondary);
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.8rem;
  border-radius: 9999px;
  text-transform: uppercase;
  box-shadow: 0 4px 10px rgba(234, 94, 193, 0.2);
}

.producto__badges {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 1rem;
}

.badge {
  background: rgba(20, 86, 240, 0.08);
  color: var(--brand-primary);
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  padding: 0.25rem 0.7rem;
  border-radius: 9999px;
  letter-spacing: 0.02em;
}

.producto__info { padding: 1.8rem; }

.producto__categoria {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brand-primary);
  margin-bottom: 0.5rem;
  display: block;
}

.producto__info h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-dark);
  margin: 0.3rem 0 0.8rem;
}

.producto__info p {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.producto__footer { display: flex; align-items: baseline; justify-content: space-between; border-top: 1px solid var(--border-light); padding-top: 1.2rem; }

.producto__precio-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  color: var(--text-muted);
  display: block;
  margin-bottom: 0.2rem;
}

.producto__precio {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--text-dark);
}

.producto__precio-hasta {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: var(--text-muted);
}

.catalogo__nota {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(20, 86, 240, 0.03);
  border: 1px solid var(--border-light);
  border-left: 4px solid var(--brand-primary);
  border-radius: 0 20px 20px 0;
  padding: 1.8rem 2.5rem;
  flex-wrap: wrap;
}

.catalogo__nota span { 
  font-size: 2.2rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand-primary);
  background: #fff;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: var(--shadow-standard);
}

.catalogo__nota p {
  flex: 1;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.6;
  min-width: 200px;
}

.catalogo__nota p strong {
  color: var(--text-dark);
  font-weight: 600;
}

.btn-nota {
  display: inline-block;
  padding: 0.7rem 1.8rem;
  background: var(--brand-primary);
  color: #fff;
  border-radius: 9999px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease;
  box-shadow: var(--brand-glow);
}

.btn-nota:hover { 
  background: #0f44c4;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(20, 86, 240, 0.4);
}

@media (max-width: 900px) {
  .productos__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .catalogo { padding: 5rem 1.5rem; }
  .productos__grid { grid-template-columns: 1fr; }
  .catalogo__header { flex-direction: column; align-items: flex-start; }
}
</style>