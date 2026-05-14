<script setup>
import { CheckCircle2, Music, Heart, Smile } from 'lucide-vue-next'

// SEO de la página
useHead({
  title: 'Baile Social | Sabor Latino Villavicencio',
  meta: [
    { name: 'description', content: 'Aprende a bailar salsa, bachata y ritmos latinos desde cero en Villavicencio. Clases grupales para desestresarse y socializar.' }
  ]
})
</script>

<template>
  <div class="page-social">
    <section class="page-header">
      <div class="container text-center" data-aos="zoom-in">
        <h1 class="page-title">Baile <span>Social</span></h1>
        <p class="page-subtitle">Tu espacio para desconectar, hacer ejercicio y disfrutar de los ritmos latinos sin presiones.</p>
      </div>
    </section>

    <section class="benefits-section">
      <div class="container">
        <div class="benefits-grid">
          <div class="benefit-card" data-aos="fade-up" data-aos-delay="0">
            <Heart class="icon" :size="40" />
            <h3>Salud y Bienestar</h3>
            <p>Quema calorías, mejora tu postura y fortalece tu sistema cardiovascular mientras te diviertes.</p>
          </div>
          <div class="benefit-card" data-aos="fade-up" data-aos-delay="150">
            <Smile class="icon" :size="40" />
            <h3>Cero Estrés</h3>
            <p>Desconéctate de la rutina laboral. El baile es la terapia perfecta para liberar endorfinas.</p>
          </div>
          <div class="benefit-card" data-aos="fade-up" data-aos-delay="300">
            <Music class="icon" :size="40" />
            <h3>Ritmos Latinos</h3>
            <p>Aprende las bases y figuras de Salsa, Bachata, Merengue y Porro para brillar en cualquier fiesta.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="rhythms-section">
      <div class="container">
        <h2 class="section-title text-center" data-aos="fade-up">Ritmos que <span>Aprenderás</span></h2>
        
        <div class="rhythms-grid">
          <div class="rhythm-card" data-aos="zoom-in" data-aos-delay="0">
            <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80" alt="Salsa">
            <div class="rhythm-overlay">
              <h3>Salsa</h3>
            </div>
          </div>
          
          <div class="rhythm-card" data-aos="zoom-in" data-aos-delay="150">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80" alt="Bachata">
            <div class="rhythm-overlay">
              <h3>Bachata</h3>
            </div>
          </div>
          
          <div class="rhythm-card" data-aos="zoom-in" data-aos-delay="300">
            <img src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&q=80" alt="Merengue">
            <div class="rhythm-overlay">
              <h3>Merengue</h3>
            </div>
          </div>
          
          <div class="rhythm-card" data-aos="zoom-in" data-aos-delay="450">
            <img src="https://images.unsplash.com/photo-1518834107812-6afb0d6a2f7c?auto=format&fit=crop&q=80" alt="Urbano">
            <div class="rhythm-overlay">
              <h3>Urbano</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pricing-section">
      <div class="container">
        <h2 class="section-title text-center" data-aos="fade-up">Nuestros <span>Planes</span></h2>
        
        <div class="pricing-grid">
          <div class="price-card" data-aos="fade-up" data-aos-delay="0">
            <div class="card-header">
              <h3>Mensualidad Básica</h3>
              <p class="price"><span>$</span>105.000<span class="period">/mes</span></p>
            </div>
            <ul class="features">
              <li><CheckCircle2 :size="18" class="check" /> Acceso a clases regulares</li>
              <li><CheckCircle2 :size="18" class="check" /> 2 días a la semana</li>
              <li><CheckCircle2 :size="18" class="check" /> Horarios flexibles</li>
            </ul>
            <NuxtLink to="https://wa.me/573000000000?text=Hola,%20me%20interesa%20el%20plan%20Mensual%20de%20Baile%20Social" target="_blank" class="btn-outline">
              Inscribirme
            </NuxtLink>
          </div>

          <div class="price-card popular" data-aos="fade-up" data-aos-delay="150">
            <div class="popular-badge">MÁS ELEGIDO</div>
            <div class="card-header">
              <h3>Mensualidad Pro</h3>
              <p class="price"><span>$</span>130.000<span class="period">/3 meses</span></p>
              <p class="savings">Ahorras $30.000</p>
            </div>
            <ul class="features">
              <li><CheckCircle2 :size="18" class="check" /> 3 días a la semana</li>
              <li><CheckCircle2 :size="18" class="check" /> Horarios flexibles</li>
              <li><CheckCircle2 :size="18" class="check" /> Descuento en talleres especiales</li>
              <li><CheckCircle2 :size="18" class="check" /> Camiseta oficial de la academia</li>
            </ul>
            <NuxtLink to="https://wa.me/573000000000?text=Hola,%20me%20interesa%20el%20plan%20Trimestral%20de%20Baile%20Social" target="_blank" class="btn-wa">
              Inscribirme
            </NuxtLink>
          </div>

          <div class="price-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-header">
              <h3>Mensualidad Full</h3>
              <p class="price"><span>$</span>170.000<span class="period">/clase</span></p>
            </div>
            <ul class="features">
              <li><CheckCircle2 :size="18" class="check" /> Acceso total a todas las clases de la semana</li>
              <li><CheckCircle2 :size="18" class="check" /> Atención 1 a 1 con instructor</li>
              <li><CheckCircle2 :size="18" class="check" /> Tú eliges los ritmos</li>
              <li><CheckCircle2 :size="18" class="check" /> Preparación para bodas/eventos</li>
            </ul>
            <NuxtLink to="https://wa.me/573000000000?text=Hola,%20quiero%20agendar%20una%20clase%20Personalizada" target="_blank" class="btn-outline">
              Agendar
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ================= VISTA: BAILE SOCIAL ================= */
.page-header {
  padding: 120px 0 60px;
  background: linear-gradient(to bottom, #000000, var(--bg-body));
}
.text-center { text-align: center; }
.page-title { font-family: var(--font-headings); font-size: 3rem; margin-bottom: 1rem; }
.page-title span { color: var(--brand-blue-light); font-style: italic; }
.page-subtitle { color: var(--text-muted); max-width: 600px; margin: 0 auto; font-size: 1.1rem; }
.section-title { font-family: var(--font-headings); font-size: 2.5rem; margin-bottom: 3rem; }
.section-title span { color: var(--brand-blue-light); font-style: italic; }

/* Beneficios */
.benefits-section { padding: 5rem 0; background-color: var(--bg-surface); }
.benefits-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
.benefit-card { text-align: center; padding: 2rem; }
.benefit-card .icon { color: var(--brand-blue-light); margin-bottom: 1rem; }
.benefit-card h3 { font-family: var(--font-headings); font-size: 1.5rem; margin-bottom: 1rem; }
.benefit-card p { color: var(--text-muted); font-size: 0.95rem; }

/* Precios */
.pricing-section { padding: 5rem 0; }
.pricing-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; max-width: 1000px; margin: 0 auto; }
.price-card { 
  background-color: var(--bg-surface); 
  border: 1px solid rgba(255,255,255,0.05); 
  border-radius: 1rem; 
  padding: 2.5rem; 
  display: flex; 
  flex-direction: column; 
  position: relative;
  transition: transform 0.3s;
}
.price-card:hover { transform: translateY(-5px); }

.card-header { margin-bottom: 2rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 2rem; }
.card-header h3 { font-size: 1.2rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; }
.price { font-size: 3rem; font-weight: 700; color: var(--text-main); font-family: var(--font-headings); display: flex; align-items: flex-start; justify-content: center; }
.price span:first-child { font-size: 1.5rem; margin-top: 0.5rem; color: var(--brand-blue-light); }
.period { font-size: 1rem; color: var(--text-muted); align-self: flex-end; margin-bottom: 0.8rem; font-family: var(--font-body); font-weight: 400; }
.savings { color: var(--brand-green); font-size: 0.85rem; font-weight: 700; margin-top: 0.5rem; }

.features { list-style: none; padding: 0; margin-bottom: 2.5rem; flex-grow: 1; }
.features li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; color: var(--text-main); font-size: 0.95rem; }
.features .check { color: var(--brand-green); flex-shrink: 0; }

/* Botones específicos de las tarjetas */
.btn-outline {
  display: block;
  text-align: center;
  padding: 1rem;
  border: 2px solid var(--brand-blue);
  color: var(--brand-blue-light);
  border-radius: 99px;
  font-weight: 700;
  transition: all 0.3s;
}
.btn-outline:hover { background-color: var(--brand-blue); color: var(--text-main); }
.price-card .btn-wa { width: 100%; text-align: center; justify-content: center; } /* Adapta el botón verde global para que ocupe el 100% */

/* Tarjeta Popular (Destacada) */
.price-card.popular { 
  border: 2px solid var(--brand-blue); 
  transform: scale(1.05); 
  background: linear-gradient(to bottom, #111111, #0a1f33); 
  z-index: 2;
}
.price-card.popular:hover { transform: scale(1.05) translateY(-5px); }
.popular-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--brand-blue);
  color: white;
  padding: 0.4rem 1.2rem;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
}

@media (min-width: 768px) {
  .benefits-grid { grid-template-columns: repeat(3, 1fr); }
  .pricing-grid { grid-template-columns: repeat(3, 1fr); align-items: center; }
  .price-card.popular { margin: 0 -1rem; } /* Hace que la tarjeta central resalte un poco sobre las demás */
}

/* Ritmos Banner */
.rhythms-section {
  padding: 5rem 0;
  background-color: var(--bg-body); /* Fondo oscuro natural de tu sitio */
}

.rhythms-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas en móviles */
  gap: 1.5rem;
}

.rhythm-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  aspect-ratio: 4/5; /* Mantiene la forma rectangular vertical */
  cursor: default; /* Como es informativo, no parece clickeable */
  border: 1px solid rgba(255,255,255,0.05);
}

.rhythm-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease; /* Transición suave de la imagen */
  opacity: 0.6; /* Un poco oscuras por defecto para que el texto resalte */
}

/* Efecto hover suave: la imagen hace un ligero zoom in y se ilumina */
.rhythm-card:hover img {
  transform: scale(1.05);
  opacity: 0.8;
}

.rhythm-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}

.rhythm-overlay h3 {
  font-family: var(--font-headings);
  font-size: 1.5rem;
  color: var(--text-main);
  margin: 0;
}

/* Media Query para Escritorio: Se ponen en una sola fila de 4 */
@media (min-width: 768px) {
  .rhythms-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .rhythm-card {
    aspect-ratio: 3/4; /* Las hacemos un poco más anchas en PC */
  }
  .rhythm-overlay h3 {
    font-size: 1.8rem; /* Letra más grande en PC */
  }
}
</style>