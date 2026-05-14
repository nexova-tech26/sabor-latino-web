<script setup>
// En Vue/Nuxt, importamos los iconos que vamos a usar en este componente
import { MessageCircle, ArrowRight, Quote, Layers, Layers2, Layers2Icon } from 'lucide-vue-next'

// Definimos los meta tags para SEO (Tarjeta 16 adelantada)
useHead({
  title: 'Inicio | Sabor Latino Villavicencio',
  meta: [
    { name: 'description', content: 'Academia de baile profesional y baile social en Villavicencio. Aprende salsa, bachata y ritmos latinos.' }
  ]
})
</script>

<template>
  <div class="page-inicio">
    <section class="hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80" alt="Bailarines de Sabor Latino">
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">Academia de Baile</span>
          <p class="hero-text">Baile social y formación artística profesional en Villavicencio para todas las edades.</p>
          <!-- <NuxtLink to="#programs" class="btn-wa">
            <Layers2Icon :size="20" /> Conoce nuestros servicios
          </NuxtLink> -->
          <br>
          <br>
          <NuxtLink 
            to="https://wa.me/573116517431?text=Hola,%20vengo%20del%20sitio%20web,%20%20me%20gustaría%20recibir%20más%20información%20sobre%20la%20academia" 
            target="_blank" 
            class="btn-wa">
            <MessageCircle :size="20" /> Contáctanos
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="about-section" id="nosotros">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Nuestra <span>Historia</span></h2>
            <p>Desde 2021, Sabor Latino nació en Villavicencio con un propósito claro: traer a la región la pasión, la energía y la cultura de los ritmos latinos, en una tierra donde tradicionalmente predominaba la identidad llanera.</p>
            <p>Hoy trabajamos cada día para formar bailarines con técnica, disciplina y esencia, llevando la salsa, la bachata y los ritmos latinos a otro nivel. Nuestro objetivo es uno solo: convertirnos en el mayor referente de ritmos latinos en la región y dejar huella en cada persona que vive el baile con nosotros.</p>
          </div>
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80" alt="Historia Sabor Latino">
          </div>
        </div>

        <h2 class="section-title">Dirección <span>Académica</span></h2>
        <div class="team-grid" data-aos="fade-up">
          <div class="team-member">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" alt="Valeria Ruiz">
            <h4>Valeria Ruiz</h4>
            <p>DIRECTORA COREOGRÁFICA</p>
          </div>
          <div class="team-member">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80" alt="Andrés Mendoza">
            <h4>Andrés Mendoza</h4>
            <p>INSTRUCTOR ÉLITE</p>
          </div>
          <div class="team-member">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80" alt="Camila Castro">
            <h4>Camila Castro</h4>
            <p>COORDINADORA INFANTIL</p>
          </div>
        </div>
        <div class="mv-grid">
          <div class="mv-card">
            <h3>Nuestra <span>Misión</span></h3>
            <p>Formar personas a través del baile, promoviendo disciplina, conciencia y amor por los ritmos latinos mediante una enseñanza de alta calidad, inclusiva y humana. En Sabor Latino desarrollamos tanto el baile social como la formación artística profesional, creando bailarines con técnica, pasión y valores que trascienden dentro y fuera del escenario.</p>
          </div>
          <div class="mv-card">
            <h3>Nuestra <span>Visión</span></h3>
            <p>Ser la academia líder de ritmos latinos en la región y un referente nacional e internacional por nuestra excelencia artística, calidad de enseñanza y logros competitivos, inspirando a cada generación a vivir el baile con pasión, disciplina y sentido de familia.</p>
          </div>
        </div>
      </div>
    </section>
    

    <section class="services-section" id="programs">
      <div class="container">
        <h2 class="section-title">Nuestros <span>Programas</span></h2>
        <p class="section-subtitle">Descubre el espacio perfecto para tu talento, sin importar si buscas competir o simplemente disfrutar.</p>
        <br>
        <div class="services-grid" data-aos="fade-left">
          <NuxtLink to="/elencos" class="service-card" data-aos="fade-up">
            <img src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&q=80" alt="Elencos" class="service-img">
            <div class="service-content">
              <h3>Elencos de Formación</h3>
              <p>5 niveles competitivos por edades.</p>
              <span class="service-link">Ver categorías <ArrowRight :size="16" /></span>
            </div>
          </NuxtLink>

          <NuxtLink to="/social" class="service-card">
            <img src="https://images.unsplash.com/photo-1518834107812-6afb0d6a2f7c?auto=format&fit=crop&q=80" alt="Baile Social" class="service-img">
            <div class="service-content">
              <h3>Baile Social</h3>
              <p>Clases para jóvenes y adultos enfocadas en hobby, ejercicio y socialización.</p>
              <span class="service-link">Ver planes <ArrowRight :size="16" /></span>
            </div>
          </NuxtLink>

          <NuxtLink to="/servicios" class="service-card">
            <img src="https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80" alt="Otros Servicios" class="service-img">
            <div class="service-content">
              <h3>Otros Servicios</h3>
              <p>Clases personalizadas y coreografías.</p>
              <span class="service-link">Más info <ArrowRight :size="16" /></span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- <section class="about-section" style="padding-top: 0;">
      <div class="container">
        <h2 class="section-title">Lo que dicen <span>Nuestros Alumnos</span></h2>
        <div class="test-grid">
          <div class="test-card">
            <Quote :size="24" class="test-icon" />
            <p class="test-text">"Entré al grupo social sin saber dar un paso. Hoy es mi terapia de fin de semana."</p>
            <p class="test-author">— Mauricio G.</p>
          </div>
          <div class="test-card">
            <Quote :size="24" class="test-icon" />
            <p class="test-text">"La disciplina que mi hija ha adquirido en el elenco infantil se nota en todos los aspectos de su vida."</p>
            <p class="test-author">— Familia Rojas</p>
          </div>
          <div class="test-card">
            <Quote :size="24" class="test-icon" />
            <p class="test-text">"La preparación física y técnica para competencias no tiene igual en Villavicencio."</p>
            <p class="test-author">— Daniela F.</p>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
/* ================= VISTA: INICIO ================= */
.hero { position: relative; min-height: 100vh; display: flex; align-items: center; padding-top: 80px; }
.hero-bg { position: absolute; inset: 0; z-index: -1; }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; opacity: 0.5; mix-blend-mode: luminosity; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.4) 100%); }
.hero-content { max-width: 600px; }
.hero-badge { display: inline-block; background-color: var(--brand-blue); color: var(--text-main); font-size: 0.75rem; font-weight: 700; padding: 0.4rem 1rem; border-radius: 99px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1.5rem; }
.hero-title { font-family: var(--font-headings); font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem; }
.hero-title span { color: var(--brand-blue-light); font-style: italic; }
.hero-text { font-size: 1.125rem; color: var(--text-muted); margin-bottom: 2.5rem; }

/* Nosotros & Testimonios */
.about-section { padding: 5rem 0; }
.about-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; margin-bottom: 5rem; }
.about-text h2 { font-family: var(--font-headings); font-size: 2.5rem; margin-bottom: 1.5rem; line-height: 1.2; }
.about-text span { color: var(--brand-blue-light); }
.about-text p { color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1rem; }
.about-image { border-radius: 1rem; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
.about-image img { width: 100%; display: block; object-fit: cover; }

.team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-top: 3rem; }
.team-member { text-align: center; }
.team-member img { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem auto; border: 3px solid var(--brand-blue); padding: 4px; }
.team-member h4 { font-family: var(--font-headings); font-size: 1.25rem; }
.team-member p { color: var(--brand-blue-light); font-size: 0.85rem; font-weight: 600; }

/* Misión y Visión */
.mv-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 5rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 5rem;}
.mv-card { background-color: var(--bg-surface); padding: 2.5rem; border-radius: 1rem; border: 1px left solid var(--brand-blue); border-left: 4px solid var(--brand-blue); }
.mv-card h3 { font-family: var(--font-headings); font-size: 1.8rem; margin-bottom: 1rem; }
.mv-card h3 span { color: var(--brand-blue-light); font-style: italic; }
.mv-card p { color: var(--text-muted); line-height: 1.7; }

@media (min-width: 768px) {
  .mv-grid { grid-template-columns: 1fr 1fr; }
}

.test-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 2rem; }
.test-card { background-color: var(--bg-surface); padding: 2rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.05); }
.test-icon { color: var(--brand-blue); margin-bottom: 1rem; opacity: 0.5; }
.test-text { font-style: italic; color: var(--text-muted); margin-bottom: 1.5rem; }
.test-author { font-weight: 700; color: var(--text-main); }

/* Programas / Servicios */
.services-section { padding: 5rem 0; background-color: var(--bg-surface); }
.services-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
.service-card { display: block; background-color: var(--bg-body); border: 1px solid rgba(255,255,255,0.05); border-radius: 1rem; overflow: hidden; transition: transform 0.3s, border-color 0.3s; cursor: pointer; }
.service-card:hover { transform: translateY(-5px); border-color: rgba(77, 168, 218, 0.3); }
.service-img { height: 200px; width: 100%; object-fit: cover; opacity: 0.8; border-bottom: 3px solid var(--brand-blue); }
.service-content { padding: 2rem; }
.service-content h3 { font-family: var(--font-headings); font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-main); }
.service-content p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem; }
.service-link { color: var(--brand-blue-light); font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem; }

/* Desktop Media Queries */
@media (min-width: 768px) {
  .about-grid { grid-template-columns: 1fr 1fr; }
  .test-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1024px) {
  .hero-title { font-size: 4.5rem; }
  .services-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>