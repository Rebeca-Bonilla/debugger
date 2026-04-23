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
          <a href="mailto:debugger.co.sv@gmail.com" class="footer__email">debugger.co.sv@gmail.com</a>
          
          <div class="footer__socials">
            <a href="https://www.instagram.com/debugger.co.sv/" target="_blank" rel="noopener noreferrer" class="social-link social-link--instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://x.com/DebuggerCompany" target="_blank" rel="noopener noreferrer" class="social-link social-link--x" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
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
  background: #181e25;
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
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 1.4rem;
  color: #fff;
  letter-spacing: 0.12em;
  margin-bottom: 1rem;
}

.footer__brand p {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  line-height: 1.7;
  font-weight: 400;
}

.footer__links h4,
.footer__contact h4 {
  color: #fff;
  font-size: 13px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
}

.footer__links ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer__links a {
  font-family: 'DM Sans', sans-serif;
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.footer__links a:hover { color: var(--brand-primary); }

.footer__contact p {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-weight: 400;
}

.footer__email {
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  color: var(--brand-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: opacity 0.2s;
  margin-bottom: 1.5rem;
}

.footer__email:hover { opacity: 0.7; }

.footer__socials {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 0.5rem;
}

.social-link {
  color: rgba(255,255,255,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, transform 0.2s ease;
}

.social-link:hover {
  transform: translateY(-2px);
}

.social-link--instagram:hover {
  color: #E1306C;
}

.social-link--x:hover {
  color: #fff;
}

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 1.5rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  color: rgba(255,255,255,0.3);
}

@media (max-width: 768px) {
  .footer { padding: 4rem 1.5rem 2rem; }
  .footer__grid { grid-template-columns: 1fr; gap: 2.5rem; }
}
</style>