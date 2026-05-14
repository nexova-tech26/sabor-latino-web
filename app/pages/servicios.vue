<script setup>
import { Sparkles, GraduationCap, Building2, Layout, ArrowRight } from 'lucide-vue-next'

// SEO de la página
useHead({
  title: 'Otros Servicios | Sabor Latino Villavicencio',
  meta: [
    { name: 'description', content: 'Clases personalizadas, coreografías para bodas, talleres corporativos y alquiler de salones de baile en Villavicencio.' }
  ]
})
</script>

<template>
  <div class="page-servicios">
    <section class="page-header">
      <div class="container text-center" data-aos="fade-down">
        <h1 class="page-title">Servicios <span>Especializados</span></h1>
        <p class="page-subtitle">Soluciones artísticas a medida para momentos inolvidables y crecimiento profesional.</p>
      </div>
    </section>

    <section class="service-detail">
      <div class="container">
        <div class="service-row">
          <div class="service-img" data-aos="fade-right">
            <img src="http://googleusercontent.com/image_collection/image_retrieval/13997715479006117505" alt="Clases Personalizadas de Baile">
          </div>
          <div class="service-info" data-aos="fade-left">
            <div class="icon-box"><GraduationCap :size="32" /></div>
            <h2>Clases <span>Personalizadas</span></h2>
            <p>¿Quieres aprender a tu propio ritmo o perfeccionar una técnica específica? Nuestras clases 1 a 1 te permiten avanzar 3 veces más rápido que en un grupo regular.</p>
            <ul class="service-list">
              <li>Enfoque exclusivo en tus objetivos.</li>
              <li>Horarios flexibles de mañana o tarde.</li>
              <li>Todos los ritmos latinos y técnica de base.</li>
            </ul>
            <NuxtLink to="https://wa.me/573116517431?text=Hola,%20quisiera%20información%20sobre%20clases%20personalizadas" target="_blank" class="btn-wa">
              Agendar clase privada
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="service-detail bg-alt">
      <div class="container">
        <div class="service-row reverse">
          <div class="service-img" data-aos="fade-left">
            <img src="http://googleusercontent.com/image_collection/image_retrieval/7714128432681716719" alt="Coreografías para Bodas y XV Años">
          </div>
          <div class="service-info" data-aos="fade-right">
            <div class="icon-box"><Sparkles :size="32" /></div>
            <h2>Coreografías y <span>Shows</span></h2>
            <p>Hacemos que tu momento especial sea mágico. Diseñamos coreografías personalizadas para bodas, quinceañeras y eventos sociales, adaptándonos a tu nivel de experiencia.</p>
            <ul class="service-list">
              <li>Montajes para bodas y quinceañeras.</li>
              <li>Eventos empresariales, colegios y universidades.</li>
              <li>Shows profesionales para darle un toque especial a tus celebraciones</li>
            </ul>
            <NuxtLink to="https://wa.me/573116517431?text=Hola,%20me%20gustaría%20cotizar%20una%20coreografía%20para%20un%20evento" target="_blank" class="btn-wa">
              Cotizar mi coreografía
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="service-detail">
      <div class="container">
        <div class="service-row">
          <div class="service-img" data-aos="fade-right">
            <img src="http://googleusercontent.com/image_collection/image_retrieval/632372769956722993" alt="Talleres de baile para empresas">
          </div>
          <div class="service-info" data-aos="fade-left">
            <div class="icon-box"><Building2 :size="32" /></div>
            <h2>Bienestar <span>Corporativo</span></h2>
            <p>Potencia el clima laboral y la salud de tu equipo. Ofrecemos talleres de integración, pausas activas rítmicas y shows para fiestas empresariales.</p>
            <ul class="service-list">
              <li>Team building a través del baile.</li>
              <li>Talleres de desestrés laboral.</li>
              <li>Presentaciones de nuestros elencos profesionales.</li>
            </ul>
            <NuxtLink to="https://wa.me/573000000000?text=Hola,%20quisiera%20información%20para%20servicios%20empresariales" target="_blank" class="btn-wa">
              Servicios para empresas
            </NuxtLink>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="service-detail bg-alt">
      <div class="container">
        <div class="service-row reverse">
          <div class="service-img" data-aos="fade-left">
            <img src="http://googleusercontent.com/image_collection/image_retrieval/903186028577339744" alt="Alquiler de salones de baile">
          </div>
          <div class="service-info" data-aos="fade-right">
            <div class="icon-box"><Layout :size="32" /></div>
            <h2>Alquiler de <span>Salones</span></h2>
            <p>Nuestras instalaciones están disponibles para tus ensayos, grabaciones o talleres independientes. Espacios equipados con espejos, sonido profesional y piso adecuado.</p>
            <ul class="service-list">
              <li>Muelle de carga y fácil acceso.</li>
              <li>Diferentes tamaños de salón.</li>
              <li>Ambiente climatizado y seguro.</li>
            </ul>
            <NuxtLink to="https://wa.me/573000000000?text=Hola,%20quisiera%20consultar%20disponibilidad%20de%20alquiler%20de%20salones" target="_blank" class="btn-wa">
              Consultar disponibilidad
            </NuxtLink>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
/* ================= VISTA: SERVICIOS ================= */
.page-header {
  padding: 120px 0 60px;
  background: linear-gradient(to bottom, #000000, var(--bg-body));
}

.page-title { font-family: var(--font-headings); font-size: 3rem; margin-bottom: 1rem; }
.page-title span { color: var(--brand-blue-light); font-style: italic; }
.page-subtitle { color: var(--text-muted); max-width: 600px; margin: 0 auto; font-size: 1.1rem; }

/* Filas de Servicio */
.service-detail { padding: 6rem 0; }
.bg-alt { background-color: var(--bg-surface); }

.service-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}

.service-img {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.service-img img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}

.icon-box {
  background-color: rgba(77, 168, 218, 0.1);
  color: var(--brand-blue-light);
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}

.service-info h2 {
  font-family: var(--font-headings);
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}

.service-info h2 span { color: var(--brand-blue-light); }

.service-info p {
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.service-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2.5rem;
}

.service-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-main);
  font-size: 0.95rem;
}

.service-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--brand-blue-light);
  font-weight: 700;
}

/* Media Queries */
@media (min-width: 1024px) {
  .service-row { grid-template-columns: 1fr 1fr; }
  .service-row.reverse .service-img { order: 2; }
  .service-row.reverse .service-info { order: 1; }
  .service-img img { aspect-ratio: 4/3; }
}
</style>