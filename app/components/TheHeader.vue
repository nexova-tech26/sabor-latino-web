<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="container nav-container">
      <NuxtLink to="/" class="logo-link" @click="closeMenu">
        <img src="/logo-hz.png" alt="Logo Sabor Latino" class="logo-img">
      </NuxtLink>

      <nav class="nav-links">
        <NuxtLink to="/" class="nav-item">Inicio</NuxtLink>
        <NuxtLink to="/elencos" class="nav-item">Elencos</NuxtLink>
        <NuxtLink to="/social" class="nav-item">Baile Social</NuxtLink>
        <NuxtLink to="/servicios" class="nav-item">Otros Servicios</NuxtLink>
        <NuxtLink to="/tienda" class="nav-item">Tienda</NuxtLink>
      </nav>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Abrir menú de navegación">
        <component :is="isMenuOpen ? X : Menu" />
      </button>

      <transition name="fade">
        <nav v-if="isMenuOpen" class="mobile-menu" >
          <NuxtLink to="/" class="mobile-item" @click="closeMenu">Inicio</NuxtLink>
          <NuxtLink to="/elencos" class="mobile-item" @click="closeMenu">Elencos</NuxtLink>
          <NuxtLink to="/social" class="mobile-item" @click="closeMenu">Baile Social</NuxtLink>
          <NuxtLink to="/servicios" class="mobile-item" @click="closeMenu">Otros Servicios</NuxtLink>
          <NuxtLink to="/tienda" class="mobile-item" @click="closeMenu">Tienda</NuxtLink>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(5, 5, 5, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0.1 rem 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Nuevos estilos para el logo imagen */
.logo-link {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 85px; /* Ajusta este valor dependiendo de qué tan alto sea el logo real */
  width: auto;
  object-fit: contain;
}

.nav-links {
  display: none;
  gap: 2rem;
}

.nav-item {
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.3s;
}

.nav-item:hover, .router-link-active {
  color: var(--brand-blue-light);
}

.menu-toggle {
  display: block;
  background: none;
  border: none;
  color: var(--text-main);
  cursor: pointer;
}

.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: var(--bg-body);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 999;
}

.mobile-item {
  font-size: 1.5rem;
  font-weight: 700;
}

@media (min-width: 1024px) {
  .nav-links { display: flex; }
  .menu-toggle { display: none; }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>