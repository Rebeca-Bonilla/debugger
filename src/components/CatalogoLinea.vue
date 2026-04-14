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
        <span>💬</span>
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
          bg: 'linear-gradient(135deg, #e8f5e3 0%, #d4eacc 100%)',
          badges: ['Anti-mosquito', 'UV']
        },
        {
          nombre: 'Camisa Casual Manga Larga',
          categoria: 'Adulto',
          desc: 'Protección completa de brazos. Perfecta para tours, excursiones y trabajo en exteriores. Tela ligera de secado rápido.',
          precioDesde: '$900', precioHasta: '$1,400 MXN',
          emoji: '👔', nuevo: true,
          bg: 'linear-gradient(135deg, #e8f0e3 0%, #ccdfc8 100%)',
          badges: ['Anti-mosquito', 'UV', 'Secado rápido']
        },
        {
          nombre: 'Pantalón Ligero Tropical',
          categoria: 'Adulto',
          desc: 'Corte cómodo para el calor. Material resistente a la humedad, ideal para senderismo, playa y ciudad.',
          precioDesde: '$1,200', precioHasta: '$1,800 MXN',
          emoji: '👖', nuevo: false,
          bg: 'linear-gradient(135deg, #f0ece3 0%, #e0d8c8 100%)',
          badges: ['Anti-mosquito', 'Resistente humedad']
        },
        {
          nombre: 'Sudadera Ligera',
          categoria: 'Adulto',
          desc: 'Para las noches frescas o el aire acondicionado. Mantiene la protección incluso con menos calor.',
          precioDesde: '$900', precioHasta: '$1,400 MXN',
          emoji: '🧥', nuevo: false,
          bg: 'linear-gradient(135deg, #e3e8f0 0%, #c8d4e0 100%)',
          badges: ['Anti-mosquito', 'UV']
        },
        {
          nombre: 'Playera Infantil',
          categoria: 'Infantil',
          desc: 'Línea especial con protección adicional para los más pequeños. Materiales hipoalergénicos y suaves.',
          precioDesde: '$600', precioHasta: '$800 MXN',
          emoji: '👕', nuevo: true,
          bg: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
          badges: ['Anti-mosquito', 'Hipoalergénico', 'UV']
        },
        {
          nombre: 'Pantalón Infantil',
          categoria: 'Infantil',
          desc: 'Comodidad y protección para niños activos. Elástico en cintura y corte amplio para jugar sin restricciones.',
          precioDesde: '$700', precioHasta: '$1,000 MXN',
          emoji: '🩲', nuevo: false,
          bg: 'linear-gradient(135deg, #f3fff0 0%, #d8f0d0 100%)',
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
  background: var(--blanco);
}

.container { max-width: 1100px; margin: 0 auto; }

.section-tag {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--verde-med);
  margin-bottom: 1rem;
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
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: var(--verde);
  letter-spacing: -0.02em;
  margin-bottom: 0.4rem;
}

.catalogo__sub {
  font-size: 0.9rem;
  color: var(--texto-suave);
}

.filtros { display: flex; gap: 0.5rem; flex-wrap: wrap; }

.filtro-btn {
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  border: 1px solid var(--beige);
  background: transparent;
  color: var(--texto-suave);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.filtro-btn:hover { border-color: var(--verde-med); color: var(--verde); }
.filtro-btn.active { background: var(--verde); color: #fff; border-color: var(--verde); }

.productos__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
  margin-bottom: 3rem;
}

.producto {
  border-radius: 16px;
  border: 1px solid var(--beige);
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s;
  background: var(--blanco);
}

.producto:hover {
  box-shadow: 0 12px 40px rgba(45,90,39,0.1);
  transform: translateY(-4px);
}

.producto__img {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  gap: 0.8rem;
}

.producto__placeholder { font-size: 4.5rem; }

.producto__tag {
  position: absolute;
  top: 1rem; right: 1rem;
  background: var(--acento);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.7rem;
  border-radius: 100px;
}

.producto__badges {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 1rem;
}

.badge {
  background: rgba(45,90,39,0.12);
  color: var(--verde);
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.15rem 0.6rem;
  border-radius: 100px;
  letter-spacing: 0.05em;
}

.producto__info { padding: 1.4rem; }

.producto__categoria {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--verde-med);
}

.producto__info h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--texto);
  margin: 0.3rem 0 0.5rem;
}

.producto__info p {
  font-size: 0.83rem;
  color: var(--texto-suave);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.producto__footer { display: flex; align-items: center; justify-content: space-between; }

.producto__precio-label {
  font-size: 0.7rem;
  color: var(--texto-suave);
  display: block;
  margin-bottom: 0.1rem;
}

.producto__precio {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--verde);
}

.producto__precio-hasta {
  font-size: 0.85rem;
  color: var(--texto-suave);
}

.catalogo__nota {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--crema);
  border: 1px solid var(--beige);
  border-left: 4px solid var(--verde-med);
  border-radius: 0 12px 12px 0;
  padding: 1.4rem 2rem;
  flex-wrap: wrap;
}

.catalogo__nota span { font-size: 1.5rem; }

.catalogo__nota p {
  flex: 1;
  font-size: 0.9rem;
  color: var(--texto-suave);
  line-height: 1.5;
  min-width: 200px;
}

.btn-nota {
  display: inline-block;
  padding: 0.55rem 1.4rem;
  background: var(--verde);
  color: #fff;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s;
}

.btn-nota:hover { background: var(--verde-med); }

@media (max-width: 900px) {
  .productos__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .catalogo { padding: 5rem 1.5rem; }
  .productos__grid { grid-template-columns: 1fr; }
  .catalogo__header { flex-direction: column; align-items: flex-start; }
}
</style>