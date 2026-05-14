<script setup>
import { CheckCircle2, Music, Heart, Smile, Sparkles, Clock, Banknote } from 'lucide-vue-next'

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
        <p class="page-subtitle">Un espacio para aprender, disfrutar y conectar a través del baile.</p>
      </div>
    </section>

    <section class="benefits-section">
      <div class="container">
        <div class="benefits-grid">
          <div class="benefit-card" data-aos="fade-up" data-aos-delay="0">
            <Heart class="icon" :size="40" />
            <h3>Salud y Bienestar</h3>
            <p>Mejora tu coordinación, postura y confianza mientras difrutas el baile.</p>
          </div>
          <div class="benefit-card" data-aos="fade-up" data-aos-delay="150">
            <Smile class="icon" :size="40" />
            <h3>Cero Estrés</h3>
            <p>Desconéctate de la rutina diaria. El baile es la forma perfecta de liberar estrés y recargar energía.</p>
          </div>
          <div class="benefit-card" data-aos="fade-up" data-aos-delay="300">
            <Music class="icon" :size="40" />
            <h3>Conexión Social</h3>
            <p>Conoce nuevas personas y disfruta el baile en un ambiente social y divertido.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="rhythms-section">
      <div class="container">
        <h2 class="section-title text-center" data-aos="fade-up">Ritmos que <span>Aprenderás</span></h2>
        
        <div class="rhythms-grid-two">
          
          <div class="flip-card" data-aos="fade-right" data-aos-delay="0" tabindex="0">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80" alt="Ritmos Latinos">
                <div class="rhythm-overlay">
                  <h3>Latinos</h3>
                </div>
              </div>
              <div class="flip-card-back">
                <h3>Ritmos Latinos</h3>
                <ul>
                  <li>Salsa</li>
                  <li>Bachata</li>
                  <li>Merengue</li>
                  <li>Cha cha chá</li>
                  <li>Pachanga</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flip-card" data-aos="fade-left" data-aos-delay="150" tabindex="0">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80" alt="Ritmos Urbanos">
                <div class="rhythm-overlay">
                  <h3>Urbanos</h3>
                </div>
              </div>
              <div class="flip-card-back">
                <h3>Ritmos Urbanos</h3>
                <ul>
                  <li>Reggaetón</li>
                  <li>Sexy Style</li>
                  <li>Twerking</li>
                  <li>Salsa Choque</li>
                  <li>Champeta</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

<section class="levels-section container" data-aos="fade-up">
      <h2 class="section-title text-center">Niveles y <span>Horarios</span></h2>
      
      <div class="levels-grid">
        
        <div class="level-card" data-aos="fade-right" data-aos-delay="0">
          <div class="level-header">
            <span class="level-badge basic">Nivel Principiante</span>
          </div>
          <p class="level-desc">
            Clases ideales para personas que desean empezar desde cero, desarrollando coordinación, ritmo, confianza y bases fundamentales para aprender a bailar.
          </p>
          <div class="level-time">
            <Clock :size="20" class="icon" />
            <p>Martes y jueves | 6:00 p.m.</p>
          </div>
        </div>

        <div class="level-card" data-aos="fade-left" data-aos-delay="150">
          <div class="level-header">
            <span class="level-badge open">Nivel Abierto</span>
          </div>
          <p class="level-desc">
            Clases para personas que desean seguir evolucionando en el baile, mejorando su técnica, fluidez, coordinación y estilo a través de diferentes ritmos y niveles de aprendizaje.
          </p>
          <div class="level-time">
            <Clock :size="20" class="icon" />
            <p>Lunes, miércoles y viernes | 6:00 p.m. <br>Miércoles | 8:00 PM</p>
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
              <h3 style="color: var(--brand-blue-light);"><span>Plan Principiantes</span></h3>
              <p><span>$18.000 / clase</span></p>
              <p class="price"><span>$</span>105.000<span class="period">/mes</span></p>
            </div>
            <ul class="features">
              <li><CheckCircle2 :size="18" class="check" /> Ideal para empezar desde cero.</li>
              <li><CheckCircle2 :size="18" class="check" /> 8 días de clases al mes</li>
              <li><CheckCircle2 :size="18" class="check" /> Aprendizaje progresivo y guiado</li>
            </ul>
            <NuxtLink to="https://wa.me/573116517431?text=Hola,%20me%20interesa%20el%20Plan%20Principiantes%20" target="_blank" class="btn-outline">
              Inscribirme
            </NuxtLink>
          </div>

          <div class="price-card" data-aos="fade-up" data-aos-delay="150">
            <div class="card-header">
              <h3 style="color: var(--brand-blue-light);">Plan Nivel Abierto</h3>
              <p><span>$18.000 / clase</span></p>
              <p class="price" ><span>$</span>130.000<span class="period">/mes</span></p>
            </div>
            <ul class="features">
              <li><CheckCircle2 :size="18" class="check" /> Mayor variedad de ritmos y estilos</li>
              <li><CheckCircle2 :size="18" class="check" /> 12  días de clases al mes</li>
              <li><CheckCircle2 :size="18" class="check" /> Desarrollo de tecnica</li>
              <li><CheckCircle2 :size="18" class="check" /> Mayor fluidez y confianza al bailar</li>
            </ul>
            <NuxtLink to="https://wa.me/573116517431?text=Hola,%20me%20interesa%20el%20plan%20Nivel%20Abierto" target="_blank" class="btn-outline">
              Inscribirme
            </NuxtLink>
          </div>

          <div class="price-card  popular" data-aos="fade-up" data-aos-delay="300">
            <div class="popular-badge">MÁS ELEGIDO</div>
            <div class="card-header">
              <h3 style="color: var(--brand-blue-light);">Mensualidad Full</h3>
              <p><span>$18.000 / clase</span></p>
              <p class="price"><span>$</span>170.000<span class="period">/mes</span></p>
              <p class="savings">Ahorras más de $35.000</p>
            </div>
            <ul class="features">
              <li><CheckCircle2 :size="18" class="check" /> Acceso total a todos los niveles</li>
              <li><CheckCircle2 :size="18" class="check" /> 20 días de clases al mes</li>
              <li><CheckCircle2 :size="18" class="check" /> Mayor práctica, técnica y fluidez</li>
              <li><CheckCircle2 :size="18" class="check" /> Avanza más rápido en tu proceso</li>
            </ul>
            <NuxtLink to="https://wa.me/573000000000?text=Hola,%20me%20interesa%20el%20Plan%20Full" target="_blank" class="btn-wa">
              Inscribirme
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
.benefits-section { padding: 0.2rem 0; background-color: var(--bg-surface); }
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
/* ================= RITMOS (3D FLIP CARDS) ================= */
.rhythms-section {
  padding: 5rem 0;
  background-color: var(--bg-body);
}

.rhythms-grid-two {
  display: grid;
  grid-template-columns: 1fr; /* 1 columna en móviles por defecto para mejor lectura */
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

/* Contenedor principal de la tarjeta con perspectiva 3D */
.flip-card {
  background-color: transparent;
  width: 100%;
  aspect-ratio: 4/4; /* Proporción de la tarjeta */
  perspective: 1000px; /* Crea la profundidad 3D */
  cursor: pointer;
}

/* El elemento interno que realmente gira */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1); /* Giro elegante y suave */
  transform-style: preserve-3d;
}

/* Al pasar el mouse en PC o tocar en Móvil, gira 180 grados */
.flip-card:hover .flip-card-inner,
.flip-card:focus .flip-card-inner {
  transform: rotateY(180deg);
}

/* Estilos compartidos para frente y reverso */
.flip-card-front, 
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Oculta la parte de atrás Safari */
  backface-visibility: hidden; /* Oculta la parte de atrás */
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.05);
}

/* Diseño del Frente */
.flip-card-front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
}

.rhythm-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem;
}

.rhythm-overlay h3 {
  font-family: var(--font-headings);
  font-size: 2rem;
  color: var(--text-main);
  margin: 0;
  letter-spacing: 1px;
}

/* Diseño del Reverso (La información) */
.flip-card-back {
  background-color: #0f172a; /* Un azul muy oscuro y elegante */
  color: white;
  transform: rotateY(180deg); /* Ya está volteado por defecto */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 2px solid var(--brand-blue);
}

.flip-card-back h3 {
  font-family: var(--font-headings);
  font-size: 1.8rem;
  color: var(--brand-blue-light);
  margin-bottom: 1.5rem;
}

.flip-card-back ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.flip-card-back li {
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: var(--text-main);
}

/* En PC o pantallas más grandes, colocamos las dos tarjetas lado a lado */
@media (min-width: 768px) {
  .rhythms-grid-two {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ================= SECCIÓN DE NIVELES Y HORARIOS ================= */
.levels-section {
  padding: 0 0 5rem 0; /* Espacio para separar de la sección de precios que va abajo */
}

.levels-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.level-card {
  background-color: var(--bg-surface);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.level-card:hover {
  transform: translateY(-5px);
}

.level-header {
  margin-bottom: 1.2rem;
}

.level-badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Color para Nivel Principiante */
.level-badge.basic {
  background-color: rgba(77, 168, 218, 0.1);
  color: var(--brand-blue-light);
  border: 1px solid rgba(77, 168, 218, 0.2);
}

/* Color para Nivel Abierto */
.level-badge.open {
  background-color: rgba(217, 119, 6, 0.1);
  color: #d97706; /* Naranja/Dorado elegante */
  border: 1px solid rgba(217, 119, 6, 0.2);
}

.level-desc {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1; /* Hace que el horario siempre quede empujado hacia abajo alineado */
}

.level-time {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid var(--text-muted);
}

.level-card:hover .level-time {
  border-left-color: var(--brand-blue-light);
}

.level-time .icon {
  color: var(--brand-blue-light);
  flex-shrink: 0;
}

.level-time p {
  color: var(--text-main);
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0;
}

/* Pantallas grandes (Escritorio) */
@media (min-width: 768px) {
  .levels-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>