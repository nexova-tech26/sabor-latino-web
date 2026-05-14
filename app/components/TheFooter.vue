<script setup>
import { MessageCircle, MapPin, Instagram, Facebook, Youtube } from 'lucide-vue-next'
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-col">
      <NuxtLink to="/" class="logo-link" @click="closeMenu">
        <img src="/logo.png" alt="Logo Sabor Latino" style="height: 90px; ">
      </NuxtLink>
        <p class="footer-desc">Formando talentos y transformando vidas a través del arte del movimiento en el corazón del Meta.</p>
        <div class="social-links">
          <a href="https://www.instagram.com/saborlatino_villavicencio/" target="_blank"><Instagram :size="20" /></a>
          <a href="#" target="_blank"><Facebook :size="20" /></a>
          <a href="#" target="_blank"><Youtube :size="20" /></a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Contacto</h4>
        <div class="contact-info">
          <p><MapPin :size="18" class="icon" /> Calle 4 No 17-92 Hacaritama, Villavicencio</p>
          <NuxtLink 
            to="https://wa.me/573116517431?text=Hola,%20vengo%20del%20sitio%20web,%20%20me%20gustaría%20recibir%20más%20información%20sobre%20la%20academia" 
            target="_blank" 
            class="btn-wa">
            <MessageCircle :size="20" /> Contáctanos
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Sabor Latino Villavicencio. Desarrollado por Nexova Tech.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #000;
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.logo-text {
  font-family: var(--font-headings);
  font-size: 1.5rem;
  color: var(--text-main);
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.footer-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  color: var(--brand-blue-light);
}

.footer-col h4 {
  color: var(--brand-blue-light);
  margin-bottom: 1.5rem;
  font-family: var(--font-headings);
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.btn-wa {
  background-color: var(--brand-green);
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.footer-bottom {
  text-align: center;
  padding-top: 3rem;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.8rem;
  color: #444;
}

@media (min-width: 768px) {
  .footer-grid { grid-template-columns: 2fr 1fr; }
}
</style>