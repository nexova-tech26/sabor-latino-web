<script setup>
import { ref } from 'vue'
import { Sparkles, GraduationCap, Building2 } from 'lucide-vue-next'

// SEO de la página
useHead({
  title: 'Otros Servicios | Sabor Latino Villavicencio',
  meta: [
    { name: 'description', content: 'Clases personalizadas, coreografías para bodas, talleres corporativos y alquiler de salones de baile en Villavicencio.' }
  ]
})

// Estado reactivo para la pestaña activa
const activeTab = ref('personalizadas')

// Función para cambiar de servicio
const setTab = (tabName) => {
  activeTab.value = tabName
}

// Datos centralizados para mantener el HTML limpio y optimizado
const serviciosData = {
  personalizadas: {
    title: 'Clases',
    highlight: 'Personalizadas',
    description: 'Lleva tu baile al siguiente nivel con sesiones privadas diseñadas según tus objetivos, ritmo y experiencia. En Sabor Latino Villavicencio te ayudamos a perfeccionar técnica, estilo, coordinación y confianza con una atención completamente personalizada.',
    features: [
      'Enfoque individual según tus objetivos',
      'Horarios flexibles',
      'Salsa, bachata, ritmos latinos y urbanos',
      'Ideal para principiantes, parejas y bailarines avanzados'
    ],
    image: 'http://googleusercontent.com/image_collection/image_retrieval/13997715479006117505',
    icon: GraduationCap,
    waLink: 'https://wa.me/573116517431?text=Hola,%20quisiera%20información%20sobre%20clases%20personalizadas',
    waText: 'Agendar clase privada'
  },
  coreografias: {
    title: 'Coreografías y',
    highlight: 'Shows',
    description: 'Creamos coreografías personalizadas para bodas, quinceañeras y eventos especiales, adaptadas a tu estilo y nivel.',
    features: [
      'Montajes para bodas y quinceañeras.',
      'Eventos empresariales, colegios y universidades.',
      'Creación de Shows para darle un toque especial a tus celebraciones'
    ],
    image: 'http://googleusercontent.com/image_collection/image_retrieval/7714128432681716719',
    icon: Sparkles,
    waLink: 'https://wa.me/573116517431?text=Hola,%20me%20gustaría%20cotizar%20una%20coreografía%20para%20un%20evento',
    waText: 'Cotizar mi coreografía'
  },
  profesionales: {
    title: 'Shows',
    highlight: 'Profesionales',
    description: 'Lleva a tu evento la energía y el talento de algunos de los bailarines más destacados de Villavicencio, con shows profesionales llenos de ritmo, técnica y puesta en escena.',
    features: [
      'Shows para eventos sociales y empresariales',
      'Elencos de salsa, bachata y ritmos latinos',
      'Bailarines con experiencia en competencias y escenarios',
      'Presentaciones para bodas, fiestas y celebraciones'
    ],
    image: 'http://googleusercontent.com/image_collection/image_retrieval/632372769956722993',
    icon: Building2,
    waLink: 'https://wa.me/573116517431?text=Hola,%20quisiera%20información%20para%20shows%20profesionales',
    waText: 'Cotizar Show Profesional'
  }
}
</script>

<template>
  <div class="page-servicios">
    
    <section class="page-header">
      <div class="container text-center" data-aos="fade-down">
        <h1 class="page-title">Servicios <span>Especializados</span></h1>
        <p class="page-subtitle">En Sabor Latino Villavicencio también ofrecemos servicios especiales diseñados para quienes buscan una experiencia más personalizada, profesional y artística. Llevamos el baile más allá del salón de clases para adaptarnos a cada necesidad.</p>
      </div>
    </section>

    <section class="tabs-section container" data-aos="fade-up" data-aos-delay="100">
      
      <div class="tabs-nav" role="tablist" aria-label="Servicios Especializados">
        <button 
          @click="setTab('personalizadas')" 
          :class="['tab-btn', activeTab === 'personalizadas' ? 'active' : '']"
          role="tab"
          :aria-selected="activeTab === 'personalizadas'"
        >
          Clases Personalizadas
        </button>
        <button 
          @click="setTab('coreografias')" 
          :class="['tab-btn', activeTab === 'coreografias' ? 'active' : '']"
          role="tab"
          :aria-selected="activeTab === 'coreografias'"
        >
          Coreografías y Shows
        </button>
        <button 
          @click="setTab('profesionales')" 
          :class="['tab-btn', activeTab === 'profesionales' ? 'active' : '']"
          role="tab"
          :aria-selected="activeTab === 'profesionales'"
        >
          Shows Profesionales
        </button>
      </div>

      <div class="tab-content" :key="activeTab">
        <div class="service-row">
          
          <div class="service-info">
            <div class="icon-box">
              <component :is="serviciosData[activeTab].icon" :size="32" />
            </div>
            <h2>{{ serviciosData[activeTab].title }} <span>{{ serviciosData[activeTab].highlight }}</span></h2>
            <p>{{ serviciosData[activeTab].description }}</p>
            
            <ul class="service-list">
              <li v-for="(feature, index) in serviciosData[activeTab].features" :key="index">
                {{ feature }}
              </li>
            </ul>
            
            <NuxtLink 
              :to="serviciosData[activeTab].waLink" 
              target="_blank" 
              class="btn-wa"
            >
              {{ serviciosData[activeTab].waText }}
            </NuxtLink>
          </div>

          <div class="service-img">
            <img :src="serviciosData[activeTab].image" :alt="serviciosData[activeTab].title + ' ' + serviciosData[activeTab].highlight">
          </div>

        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>
/* ================= VISTA: SERVICIOS (TABS) ================= */
.page-header {
  padding: 120px 0 60px;
  background: linear-gradient(to bottom, #000000, var(--bg-body));
}

.page-title { font-family: var(--font-headings); font-size: 3rem; margin-bottom: 1rem; }
.page-title span { color: var(--brand-blue-light); font-style: italic; }
.page-subtitle { color: var(--text-muted); max-width: 700px; margin: 0 auto; font-size: 1.1rem; line-height: 1.6; }

/* Navegación de Pestañas */
.tabs-section { padding-bottom: 6rem; }

.tabs-nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
  overflow-x: auto;
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Oculta scrollbar en Firefox */
}

.tabs-nav::-webkit-scrollbar { display: none; } /* Oculta scrollbar en Chrome/Safari */

.tab-btn {
  background-color: var(--bg-surface);
  color: var(--text-muted);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 1rem 2rem;
  border-radius: 99px;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  white-space: nowrap;
}

.tab-btn:hover { background-color: rgba(255,255,255,0.05); color: var(--text-main); }

.tab-btn.active {
  background-color: var(--brand-blue);
  color: var(--text-main);
  border-color: var(--brand-blue);
  box-shadow: 0 4px 15px rgba(0, 91, 181, 0.4);
}

@media (min-width: 768px) {
  .tabs-nav {
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: visible;
  }
}

/* Contenido del Servicio */
.tab-content {
  animation: fadeIn 0.5s ease-in-out;
}

.service-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
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
  color: var(--text-main);
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
  line-height: 1.5;
}

.service-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--brand-blue-light);
  font-weight: 700;
}

.btn-wa {
  display: inline-block;
  background-color: var(--brand-blue);
  color: white;
  padding: 1rem 2rem;
  border-radius: 99px;
  font-weight: 700;
  text-decoration: none;
  transition: filter 0.3s;
}

.btn-wa:hover { filter: brightness(1.1); }

.service-img {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.service-img img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
}

/* Animación de entrada */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Media Queries para PC */
@media (min-width: 1024px) {
  .service-row { grid-template-columns: 1fr 1fr; }
  /* Opcional: Alternar el orden en PC si quieres que la foto esté a la izquierda */
  /* .service-info { order: 2; } */
  /* .service-img { order: 1; } */
}
</style>