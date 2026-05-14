<script setup>
import { ref } from 'vue'
import { Users, Trophy, Star, Clock, Calendar, Crown } from 'lucide-vue-next'

// SEO de la página
useHead({
  title: 'Elencos de Formación | Sabor Latino Villavicencio',
  meta: [
    { name: 'description', content: 'Únete a nuestros elencos competitivos en Sabor Latino. Categorías pre infantil, infantil, pre juvenil, juvenil y elite con enfoque en alto rendimiento.' }
  ]
})

// 1. LA MAGIA DE LA REACTIVIDAD: Esta variable guarda qué pestaña está activa
const activeTab = ref('infantil')

// Función para cambiar de pestaña al hacer clic
const setTab = (tabName) => {
  activeTab.value = tabName
}

// 2. NUESTROS DATOS: Aquí guardamos la info de cada elenco para mantener el HTML limpio
const elencosData = {
  pre_infantil: {
    title: 'Elenco Pre Infantil',
    age: '4 a 6 años',
    description: 'Enfocado en iniciación en el baile, coordinación y ritmo, expresión corporal, gimasia báscia adaptada a ti. trabajo lúdico y formativo.',
    schedule: 'Martes - Jueves y Sábados',
    time: '4:00 PM - 6:00 PM y 10:00 AM - 12:00 M',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80',
    icon: Users
  },
  infantil: {
    title: 'Elenco Infantil',
    age: '7 a 9 años',
    description: 'Técnica básica de baile, ritmo y coordinación, expresión escenica, gimnasia y flexibilidad, fundamentos de: Salsa, bachata, urbano y ritmos latinos',
    schedule: 'Martes - Jueves y Sábados',
    time: '4:00 PM - 6:00 PM y 10:00 AM - 12:00 M',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80',
    icon: Users
  },
    pre_juvenil: {
    title: 'Elenco Pre Juvenil',
    age: '10 a 13 años',
    description: 'Orientado a técnica de baile y fortalecimiento corporal, gimnasia, elasticidad y control, expresión escenica y preparación para competencias y presentaciones.',
    schedule: 'Lunes, Miércoles y Viernes',
    time: '4:00 PM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80',
    icon: Star
  },
  juvenil: {
    title: 'Elenco Juvenil',
    age: '14 años en adelante',
    description: 'Técnica de baile, fortalecimiento corporal, gimnasia, elasticidad y control, proyeccion escenica, bases para procesos competitivos.',
    schedule: 'Martes - Jueves y Sábado',
    time: '7:00 PM - 9:00 PM y 3:00 PM - 5:00 PM',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80',
    icon: Star
  },
  elite: {
    title: 'Elenco Élite',
    age: '18+ años',
    description: 'Nuestro grupo representativo de alto rendimiento. Entrenamiento exhaustivo en técnica avanzada, acrobacia y velocidad, preparándonos para dejar en alto el nombre del Meta en escenarios nacionales e internacionales.',
    schedule: 'Lunes a Viernes',
    time: '7:30 PM - 9:30 PM',
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&q=80',
    icon: Crown
  }
}
</script>

<template>
  <div class="page-elencos">
    <section class="page-header">
      <div class="container text-center" data-aos="fade-up">
        <h1 class="page-title">Nuestros <span>Elencos</span></h1>
        <p class="page-subtitle">Disciplina, pasión y alto rendimiento para llevar tu talento al siguiente nivel competitivo.</p>
      </div>
    </section>

    <section class="tabs-section container" data-aos="fade-up" data-aos-delay="150">
      
      <div class="tabs-nav">
        <button 
          @click="setTab('pre_infantil')" 
          :class="['tab-btn', activeTab === 'pre_infantil' ? 'active' : '']"
        >
          Pre Infantil -
          4 a 6 años
        </button>
        <button 
          @click="setTab('infantil')" 
          :class="['tab-btn', activeTab === 'infantil' ? 'active' : '']"
        >
          Infantil -
          7 a 9 años
        </button>
        <button 
          @click="setTab('pre_juvenil')" 
          :class="['tab-btn', activeTab === 'pre_juvenil' ? 'active' : '']"
        >
          Pre Juvenil -
          10 a 13 años
        </button>
        <button 
          @click="setTab('juvenil')" 
          :class="['tab-btn', activeTab === 'juvenil' ? 'active' : '']"
        >
          Juvenil -
          14+ años
        </button>
        <button 
          @click="setTab('elite')" 
          :class="['tab-btn', activeTab === 'elite' ? 'active' : '']"
        >
          Élite Profesional
        </button>
      </div>

      <div class="tab-content" :key="activeTab">
        <div class="content-grid">
          
          <div class="content-text" data-aos="fade-right">
            <div class="category-badge" style="background-color: rgba(174, 152, 45, 0.1);">
              <component :is="elencosData[activeTab].icon" :size="18" />
              Categoría {{ elencosData[activeTab].age }}
            </div>
            
            <h2>{{ elencosData[activeTab].title }}</h2>
            <p class="desc">{{ elencosData[activeTab].description }}</p>
            
            <div class="info-boxes">
              <div class="info-box">
                <Calendar class="icon" :size="24" />
                <div>
                  <h4>Días de ensayo</h4>
                  <p>{{ elencosData[activeTab].schedule }}</p>
                </div>
              </div>
              <div class="info-box">
                <Clock class="icon" :size="24" />
                <div>
                  <h4>Horario</h4>
                  <p>{{ elencosData[activeTab].time }}</p>
                </div>
              </div>
            </div>

            <NuxtLink 
              :to="`https://wa.me/573116517431?text=Hola,%20interesado%20en%20el%20${elencosData[activeTab].title}`" 
              target="_blank" 
              class="btn-wa mt-4"
            >
              Inscríbete aquí
            </NuxtLink>
          </div>

          <div class="content-image" data-aos="fade-left">
            <img :src="elencosData[activeTab].image" :alt="elencosData[activeTab].title">
            <div class="image-border"></div>
          </div>

        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>
/* ================= VISTA: ELENCOS ================= */
.page-header {
  padding: 120px 0 60px;
  background: linear-gradient(to bottom, #000000, var(--bg-body));
}

.text-center { text-align: center; }

.page-title {
  font-family: var(--font-headings);
  font-size: 3rem;
  margin-bottom: 1rem;
}

.page-title span { color: var(--brand-blue-light); font-style: italic; }

.page-subtitle {
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
}

/* Sistema de Pestañas */
/* Sistema de Pestañas */
.tabs-section { padding-bottom: 5rem; }

.tabs-nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  
  /* MAGIA MÓVIL: Habilitar scroll horizontal */
  overflow-x: auto;
  flex-wrap: nowrap; /* Obliga a que estén en una sola línea */
  -webkit-overflow-scrolling: touch; /* Hace que el deslizamiento en iPhone sea suave */
  
  /* Ocultar la barra de scroll para que se vea limpio */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.tabs-nav::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Opera */
}

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
  
  /* Evitar que los botones se aplasten o el texto baje de línea */
  flex-shrink: 0;
  white-space: nowrap;
}

.tab-btn:hover { background-color: rgba(255,255,255,0.05); color: var(--text-main); }

/* Estilo cuando la pestaña está activa */
.tab-btn.active {
  background-color: var(--brand-blue);
  color: var(--text-main);
  border-color: var(--brand-blue);
  box-shadow: 0 4px 15px rgba(0, 91, 181, 0.4);
}

/* En pantallas grandes (PC), volvemos a centrarlos */
/* En pantallas grandes (PC), volvemos a centrarlos y permitimos múltiples líneas */
@media (min-width: 768px) {
  .tabs-nav {
    justify-content: center;
    flex-wrap: wrap; /* Permite que los botones bajen a una segunda línea si no caben */
    overflow-x: visible; /* Quitamos el comportamiento de scroll horizontal en PC */
  }
}
/* Contenido de la pestaña */
.tab-content {
  animation: fadeIn 0.4s ease-in-out;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}

.category-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(190, 164, 34, 0.1);
  color: var(--brand-blue-light);
  padding: 0.5rem 1rem;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.content-text h2 { font-family: var(--font-headings); font-size: 2.5rem; margin-bottom: 1rem; }
.content-text .desc { color: var(--text-muted); font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.7; }

.info-boxes { display: grid; gap: 1.5rem; margin-bottom: 2.5rem; }
.info-box { display: flex; align-items: flex-start; gap: 1rem; background-color: var(--bg-surface); padding: 1.5rem; border-radius: 1rem; border-left: 3px solid var(--brand-blue); }
.info-box .icon { color: var(--brand-blue-light); }
.info-box h4 { font-size: 1rem; margin-bottom: 0.2rem; }
.info-box p { color: var(--text-muted); font-size: 0.9rem; }

.content-image { position: relative; }
.content-image img { width: 100%; border-radius: 1rem; position: relative; z-index: 2; object-fit: cover; aspect-ratio: 4/5; }
.image-border { position: absolute; inset: -15px -15px 15px 15px; border: 2px solid var(--brand-blue); border-radius: 1rem; z-index: 1; opacity: 0.5; }

.mt-4 { margin-top: 1rem; }

/* Animación sutil para el cambio de pestañas */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (min-width: 1024px) {
  .content-grid { grid-template-columns: 1fr 1fr; }
  .info-boxes { grid-template-columns: 1fr 1fr; }
}
</style>