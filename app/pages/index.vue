<script setup>
// En Vue/Nuxt, importamos los iconos que vamos a usar en este componente
import { MessageCircle, ArrowRight, Quote, Layers, Layers2, Layers2Icon, Layers3 } from 'lucide-vue-next'
import { ref } from 'vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'

// Definimos los meta tags para SEO (Tarjeta 16 adelantada)
useHead({
  title: 'Inicio | Sabor Latino Villavicencio',
  meta: [
    { name: 'description', content: 'Academia de baile profesional y baile social en Villavicencio. Aprende salsa, bachata y ritmos latinos.' }
  ]
})

// Estado reactivo para el acordeón de instructores
const mostrarInstructores = ref(false)

// Función para alternar el acordeón
const toggleInstructors = () => {
  mostrarInstructores.value = !mostrarInstructores.value
}

// Datos de los instructores extraídos del diseño
const instructores = [
  {
    nombre: 'Alonso Galindo',
    rol: 'INSTRUCTOR DE FORMACIÓN ARTÍSTICA',
    imagen: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80' // Reemplazar con fotos reales
  },
  {
    nombre: 'Andrés Felipe Ramírez',
    rol: 'INSTRUCTOR DE RITMOS LATINOS',
    imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
  },
  {
    nombre: 'Isabela Martínez',
    rol: 'INSTRUCTORA DE RITMOS LATINOS',
    imagen: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80'
  },
  {
    nombre: 'Andrés Felipe Durán',
    rol: 'INSTRUCTOR DE RITMOS LATINOS',
    imagen: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80'
  },
  {
    nombre: 'Jonathan Castro',
    rol: 'INSTRUCTOR DE ACROBACIA',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
  },
  {
    nombre: 'David Camargo',
    rol: 'INSTRUCTOR DE RITMOS URBANOS',
    imagen: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80'
  },
  {
    nombre: 'Maria Camila Viveros',
    rol: 'INSTRUCTORA DE RITMOS URBANOS',
    imagen: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80'
  },
]
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
          <p class="hero-text">Baile social y formación artística profesional para todas las edades. Especialistas en salsa y bachata</p>
          <!-- <NuxtLink to="#programs" class="btn-wa">
            <Layers2Icon :size="20" /> Conoce nuestros servicios
          </NuxtLink> -->
          <br>
          <br>
          <NuxtLink 
            to="#programs"
            class="btn-wa">
            <Layers3 :size="20" /> Nuestros programas
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="about-section" id="nosotros" >
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Nuestra <span>Esencia</span></h2>
            <p>Desde 2021, Sabor Latino nació con el propósito de impulsar la salsa y la bachata en la región, formando bailarines con técnica, disciplina y pasión por el baile.</p>
            <p>Hoy seguimos creciendo como una academia enfocada en el baile social y la formación artística, llevando la salsa, la bachata, los ritmos latinos y urbanos a otro nivel, y dejando huella en cada persona que hace parte de nuestra historia.</p>
          </div>
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80" alt="Historia Sabor Latino">
          </div>
        </div>

        <!-- <h2 class="section-title">Dirección <span>Académica</span></h2>
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
        </div> -->
        <div class="mv-grid">
          <div class="mv-card">
            <h3>Nuestra <span>Misión</span></h3>
            <p>Formar personas a través del baile, promoviendo disciplina, conciencia y amor por los ritmos latinos mediante una enseñanza de alta calidad, inclusiva y humana.<br>En Sabor Latino desarrollamos tanto el baile social como la formación artística profesional, creando bailarines con técnica, pasión y valores que trascienden dentro y fuera del escenario.</p>
          </div>
          <div class="mv-card">
            <h3>Nuestra <span>Visión</span></h3>
            <p>Ser la academia líder de ritmos latinos en la región y un referente nacional e internacional por nuestra excelencia artística, calidad de enseñanza y logros competitivos, inspirando a cada generación a vivir el baile con pasión, disciplina y sentido de familia.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="team-section">
    <div class="container text-center">
      
      <!-- Título Principal -->
      <h2 class="section-title">NUESTRO <span>EQUIPO</span></h2>
      <div class="title-glow"></div>

      <!-- Diseño en Pirámide (Directivas) -->
      <div class="pyramid-layout">
        <!-- Cúspide: Director General -->
        <div class="team-member top-member" data-aos="fade-down">
          <div class="img-wrapper">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Santiago Aguilera Artunduaga">
          </div>
          <h3>Santiago Aguilera Artunduaga</h3>
          <p>DIRECTOR GENERAL Y<br>COREÓGRAFO PRINCIPAL</p>
        </div>

        <!-- Base de la Pirámide: Administración y Diseño -->
        <div class="pyramid-base">
          <div class="team-member" data-aos="fade-up" data-aos-delay="100">
            <div class="img-wrapper">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" alt="Freddy Aguilera">
            </div>
            <h3>Freddy Aguilera</h3>
            <p>ADMINISTRACIÓN Y<br>ATENCIÓN AL CLIENTE</p>
          </div>
          
          <div class="team-member" data-aos="fade-up" data-aos-delay="200">
            <div class="img-wrapper">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="Ingrid Artunduaga">
            </div>
            <h3>Ingrid Artunduaga</h3>
            <p>DISEÑO Y PRODUCCIÓN<br>DE VESTUARIO</p>
          </div>
        </div>
      </div>

      <!-- Separador y Botón del Acordeón -->
      <div class="instructors-divider" data-aos="fade-up">
        <h3>NUESTROS INSTRUCTORES</h3>
        <button @click="toggleInstructors" class="accordion-btn" :aria-expanded="mostrarInstructores" aria-label="Ver u ocultar instructores">
          {{ mostrarInstructores ? 'Ocultar Instructores' : 'Ver Instructores' }}
          <ChevronUp v-if="mostrarInstructores" :size="20" />
          <ChevronDown v-else :size="20" />
        </button>
      </div>

      <!-- Contenido del Acordeón (Grilla de Instructores) -->
      <transition name="accordion-fade">
        <div v-show="mostrarInstructores" class="instructors-grid">
          <div 
            v-for="(instructor, index) in instructores" 
            :key="index" 
            class="team-member instructor-card"
          >
            <div class="img-wrapper">
              <img :src="instructor.imagen" :alt="instructor.nombre">
            </div>
            <h3>{{ instructor.nombre }}</h3>
            <p>{{ instructor.rol }}</p>
          </div>
        </div>
      </transition>

    </div>
  </section>

    <section class="services-section" id="programs">
      <div class="container">
        <h2 class="section-title">Nuestros <span>Programas</span></h2>
        <p class="section-subtitle">Encuentra el programa ideal para aprender, disfrutar y crecer a través del baile.</p>
        <br>
        <div class="services-grid" data-aos="fade-left">
          <NuxtLink to="/elencos" class="service-card" data-aos="fade-up">
            <img src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&q=80" alt="Elencos" class="service-img">
            <div class="service-content">
              <h3>Elencos de Formación</h3>
              <p>Conoce nuestros 5 elencos de formación artística organizados por edades y niveles.</p>
              <span class="service-link">Ver categorías <ArrowRight :size="16" /></span>
            </div>
          </NuxtLink>

          <NuxtLink to="/social" class="service-card">
            <img src="https://images.unsplash.com/photo-1518834107812-6afb0d6a2f7c?auto=format&fit=crop&q=80" alt="Baile Social" class="service-img">
            <div class="service-content">
              <h3>Baile Social</h3>
              <p>Clases de salsa, bachata, ritmos latinos y urbanos para jóvenes y adultos que desean aprender, disfrutar y mejorar su estilo en un ambiente dinámico y social.</p>
              <span class="service-link">Ver planes <ArrowRight :size="16" /></span>
            </div>
          </NuxtLink>

          <NuxtLink to="/servicios" class="service-card">
            <img src="https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80" alt="Otros Servicios" class="service-img">
            <div class="service-content">
              <h3>Servicios Adicionales</h3>
              <p>Clases personalizadas, coreografías, shows y presentaciones.</p>
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
.services-grid { display: grid; grid-template-columns: 1fr; gap: 2rem;}
.service-card { display: block; background-color: var(--bg-body); border: 3px solid var(--brand-blue); border-radius: 1rem; overflow: hidden; transition: transform 0.3s, border-color 0.3s; cursor: pointer; }
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

/* ================= SECCIÓN EQUIPO ================= */
.team-section {
  padding: 5rem 0;
  background-color: var(--bg-body);
  position: relative;
}

.section-title {
  font-family: var(--font-headings);
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
}

/* Brillo sutil detrás del título como en el diseño */
.title-glow {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 20px;
  background: var(--brand-blue);
  filter: blur(40px);
  z-index: 1;
  opacity: 0.5;
}

/* --- Layout de Pirámide --- */
.pyramid-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.pyramid-base {
  display: flex;
  justify-content: center;
  gap: 1rem; /* Espacio reducido para que quepan en móvil */
  width: 100%;
}

/* --- Tarjetas de Miembros --- */
.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 45%; /* En móvil, la base toma 45% cada uno */
  max-width: 250px;
}

.top-member {
  width: 100%; /* El de arriba tiene más espacio disponible */
}

.img-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid var(--brand-blue);
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 0 20px rgba(0, 91, 181, 0.2);
}

/* Hacemos la foto del director ligeramente más grande */
.top-member .img-wrapper {
  width: 150px;
  height: 150px;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-member h3 {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: var(--text-main);
}

.team-member p {
  font-size: 0.75rem;
  color: var(--brand-blue-light);
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.3;
}

/* --- Acordeón y Separador --- */
.instructors-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  margin-bottom: 2rem;
}

.instructors-divider h3 {
  font-family: var(--font-headings);
  font-size: 1.2rem;
  letter-spacing: 3px;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.accordion-btn {
  background: transparent;
  border: 1px solid var(--brand-blue);
  color: var(--brand-blue-light);
  padding: 0.8rem 1.5rem;
  border-radius: 99px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
}

.accordion-btn:hover {
  background: var(--brand-blue);
  color: white;
}

/* --- Grilla de Instructores --- */
.instructors-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas en móvil */
  gap: 2rem 1rem;
  padding-top: 2rem;
}

.instructor-card .img-wrapper {
  width: 100px;
  height: 100px;
}

/* --- Animación del Acordeón --- */
.accordion-fade-enter-active,
.accordion-fade-leave-active {
  transition: all 0.4s ease;
  max-height: 1000px; /* Suficiente para que quepan todos */
  opacity: 1;
  overflow: hidden;
}

.accordion-fade-enter-from,
.accordion-fade-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
}

/* --- Media Queries (PC y Tablets) --- */
@media (min-width: 768px) {
  .pyramid-base { gap: 4rem; }
  .team-member { width: auto; }
  .instructors-grid { grid-template-columns: repeat(5, 1fr); /* 5 en fila en PC */ }
  .instructor-card .img-wrapper { width: 120px; height: 120px; }
}
</style>