<script setup>
import { ref } from 'vue'
import { Users, Trophy, Star, Clock, Calendar, Crown, Banknote } from 'lucide-vue-next'

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
    description: 'Iniciación al baile mediante coordinación, ritmo, expresión corporal y gimnasia básica, a través de un proceso lúdico y formativo adaptado a su edad.',
    schedule: 'Martes y Jueves 4:00PM a 6:00PM - Sábados 10:00 AM a 12:00 M',
    price: 'Mensualidad: $170.000 Inscripción: $20.000',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80',
    icon: Star
  },
  infantil: {
    title: 'Elenco Infantil',
    age: '7 a 9 años',
    description: 'Formación enfocada en técnica básica de baile, ritmo, coordinación, expresión escénica, gimnasia y flexibilidad, desarrollando fundamentos de salsa, bachata, urbano y ritmos latinos..',
    schedule: 'Martes y Jueves 4:00PM a 6:00PM - Sábados 10:00 AM a 12:00 M',
    price: 'Mensualidad: $170.000 Inscripción: $20.000',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80',
    icon: Users
  },
    pre_juvenil: {
    title: 'Elenco Pre Juvenil',
    age: '10 a 13 años',
    description: 'Formación enfocada en técnica de baile, fortalecimiento corporal, gimnasia, elasticidad y expresión escénica, preparando a los bailarines para competencias y presentaciones.',
    schedule: 'Lunes, Miércoles y Viernes  4:00 PM a 6:00 PM',
    price: 'Mensualidad: $170.000 Inscripción: $20.000',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80',
    icon: Star
  },
  juvenil: {
    title: 'Elenco Juvenil',
    age: '14 años en adelante',
    description: 'Formación enfocada en técnica de baile, fortalecimiento corporal, gimnasia, elasticidad y proyección escénica, desarrollando bases para procesos competitivos.',
    schedule: 'Martes y Jueves 7:00PM a 9:00PM - Sábados 3:00 PM a 5:30 PM',
    price: 'Mensualidad: $170.000 Inscripción: $20.000',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80',
    icon: Star
  },
  elite: {
    title: 'Elenco Élite',
    age: 'Ingreso por audición',
    description: 'Nuestro grupo representativo de alto nivel, enfocado en técnica avanzada, acrobacia, velocidad y proyección escénica para competencias, shows y presentaciones nacionales e internacionales.',
    schedule: 'Lunes,  Miércoles y Viernes  7:00 PM a 9:30 PM - Sábados 3:00 PM a 5:30 PM',
    price: 'Mensualidad: $170.000 Inscripción: $20.000',
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
        <p class="page-subtitle">Formación artística y competitiva para desarrollar talento, disciplina y pasión por el baile.</p>
      </div>
    </section>
    <p style="color: gray; text-align: center; font-size: smaller;">Desliza</p>
    <br>
    <section class="tabs-section container" data-aos="fade-up" data-aos-delay="150">
      
      <div class="tabs-nav">
        <button 
          @click="setTab('pre_infantil')" 
          :class="['tab-btn', activeTab === 'pre_infantil' ? 'active' : '']"
        >
          Pre Infantil<br>
          4 a 6 años
        </button>
        <button 
          @click="setTab('infantil')" 
          :class="['tab-btn', activeTab === 'infantil' ? 'active' : '']"
        >
          Infantil<br>
          7 a 9 años
        </button>
        <button 
          @click="setTab('pre_juvenil')" 
          :class="['tab-btn', activeTab === 'pre_juvenil' ? 'active' : '']"
        >
          Pre Juvenil<br>
          10 a 13 años
        </button>
        <button 
          @click="setTab('juvenil')" 
          :class="['tab-btn', activeTab === 'juvenil' ? 'active' : '']"
        >
          Juvenil<br>
          14+ años
        </button>
        <button 
          @click="setTab('elite')" 
          :class="['tab-btn', activeTab === 'elite' ? 'active elite-tab' : '']"
        >
          Élite Profesional
        </button>
      </div>

      <div class="tab-content" :key="activeTab">
        <div class="content-grid">
          
          <div class="content-text" data-aos="fade-right">
            <div 
              class="category-badge" 
              :style="{ backgroundColor: activeTab === 'elite' ? 'rgba(217, 119, 6, 0.15)' : 'rgba(190, 164, 34, 0.1)', color: activeTab === 'elite' ? '#d97706' : 'var(--brand-blue-light)' }"
            >
              <component :is="elencosData[activeTab].icon" :size="18" />
              Categoría {{ elencosData[activeTab].age }}
            </div>
            
            <h2>{{ elencosData[activeTab].title }}</h2>
            <p class="desc">{{ elencosData[activeTab].description }}</p>
            
            <div class="info-boxes">
              <div :class="['info-box', activeTab === 'elite' ? 'elite-box' : '']">
                <Calendar class="icon" :size="24" />
                <div>
                  <h3>Horarios</h3>
                    <p>{{ elencosData[activeTab].schedule }}</p>
                </div>
              </div>
              <div :class="['info-box', activeTab === 'elite' ? 'elite-box' : '']">
                <Banknote class="icon" :size="30" />
                <div>
                  <h3>Inversión</h3>
                  <p>{{ elencosData[activeTab].price }}</p>
                </div>
              </div>
            </div>

            <NuxtLink 
              :to="activeTab === 'elite' 
                ? 'https://wa.me/573116517431?text=Hola,%20quiero%20más%20información%20sobre%20el%20elenco%20Élite' 
                : `https://wa.me/573116517431?text=Hola,%20quiero%20iniciar%20el%20proceso%20de%20inscripción%20para%20el%20${elencosData[activeTab].title}`" 
              target="_blank" 
              :class="['btn-wa', 'mt-4', activeTab === 'elite' ? 'btn-elite' : '']"
            >
              {{ activeTab === 'elite' ? 'Más información' : 'Inscríbete aquí' }}
            </NuxtLink>
          </div>

          <div class="content-image" data-aos="fade-left">
            <img :src="elencosData[activeTab].image" :alt="elencosData[activeTab].title">
            <div :class="['image-border', activeTab === 'elite' ? 'elite-border' : '']"></div>
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

/* Estilo cuando la pestaña estándar está activa */
.tab-btn.active {
  background-color: var(--brand-blue);
  color: var(--text-main);
  border-color: var(--brand-blue);
  box-shadow: 0 4px 15px rgba(0, 91, 181, 0.4);
}

/* --- NUEVO: Estilo cuando la pestaña ÉLITE está activa --- */
.tab-btn.active.elite-tab {
  background-color: #d97706; /* Naranja opaco / Caramelo */
  border-color: #d97706;
  box-shadow: 0 4px 15px rgba(217, 119, 6, 0.4);
}

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
  padding: 0.5rem 1rem;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  transition: all 0.3s;
}

.content-text h2 { font-family: var(--font-headings); font-size: 2.5rem; margin-bottom: 1rem; }
.content-text .desc { color: var(--text-muted); font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.7; }

.info-boxes { display: grid; gap: 1.5rem; margin-bottom: 2.5rem; }
.info-box { 
  display: flex; 
  align-items: flex-start; 
  gap: 1rem; 
  background-color: var(--bg-surface); 
  padding: 1.5rem; 
  border-radius: 1rem; 
  border-left: 3px solid var(--brand-blue); 
  transition: all 0.3s;
}

/* --- NUEVO: Variación de las cajas de info para Élite --- */
.info-box.elite-box {
  border-left-color: #d97706;
}
.info-box.elite-box .icon {
  color: #d97706;
}

.info-box .icon { color: var(--brand-blue-light); }
.info-box h3 { font-size: 1rem; margin-bottom: 0.2rem; }
.info-box p { color: var(--text-muted); font-size: 0.9rem; }

/* --- NUEVO: Botón CTA especial para Élite --- */
.btn-wa {
  display: inline-block;
  background-color: var(--brand-blue); /* Ajusta si tu botón global era de otro color */
  color: white;
  padding: 1rem 2rem;
  border-radius: 99px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.3s;
}
.btn-wa:hover {
  filter: brightness(1.1);
}

.btn-elite {
  background-color: #d97706 !important;
}
.btn-elite:hover {
  background-color: #b45309 !important;
}

.content-image { position: relative; }
.content-image img { width: 100%; border-radius: 1rem; position: relative; z-index: 2; object-fit: cover; aspect-ratio: 4/5; }
.image-border { 
  position: absolute; 
  inset: -15px -15px 15px 15px; 
  border: 2px solid var(--brand-blue); 
  border-radius: 1rem; 
  z-index: 1; 
  opacity: 0.5; 
  transition: border-color 0.3s;
}

/* --- NUEVO: Variación del borde de imagen para Élite --- */
.image-border.elite-border {
  border-color: #d97706;
}

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