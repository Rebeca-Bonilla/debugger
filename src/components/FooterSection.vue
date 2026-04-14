<template>
  <footer class="footer" id="contacto">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div class="footer__logo">DEBUGGER</div>
          <p>Ropa con repelente integrado.<br/>Hecha para el trópico.</p>
        </div>
        <div class="footer__links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#que-es">¿Qué es?</a></li>
            <li><a href="#como-funciona">Cómo funciona</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
          </ul>
        </div>
        <div class="footer__contact">
          <h4>Contacto</h4>
          <p>¿Tienes dudas o quieres hacer un pedido personalizado?</p>
          <a href="mailto:hola@debugger.mx" class="footer__email">hola@debugger.mx</a>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© 2025 Debugger. Todos los derechos reservados.</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: 'FooterSection' }
</script>

<style scoped>
.footer {
  background: var(--texto);
  color: rgba(255,255,255,0.6);
  padding: 5rem 2.5rem 2.5rem;
}

.container { max-width: 1100px; margin: 0 auto; }

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer__logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.4rem;
  color: #fff;
  letter-spacing: 0.12em;
  margin-bottom: 1rem;
}

.footer__brand p {
  font-size: 0.9rem;
  line-height: 1.7;
  font-weight: 300;
}

.footer__links h4,
.footer__contact h4 {
  color: #fff;
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  font-family: 'Syne', sans-serif;
}

.footer__links ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer__links a {
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer__links a:hover { color: var(--tierra); }

.footer__contact p {
  font-size: 0.88rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-weight: 300;
}

.footer__email {
  color: var(--tierra);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: opacity 0.2s;
}

.footer__email:hover { opacity: 0.7; }

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 1.5rem;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.3);
}

@media (max-width: 768px) {
  .footer { padding: 4rem 1.5rem 2rem; }
  .footer__grid { grid-template-columns: 1fr; gap: 2.5rem; }
}
</style>