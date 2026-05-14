<script setup>
import { ref, computed } from 'vue'
import { ShoppingBag, Filter, Tag, Shirt, Footprints, Sparkles } from 'lucide-vue-next'

// SEO
useHead({
  title: 'Tienda Oficial | Sabor Latino Villavicencio',
  meta: [
    { name: 'description', content: 'Compra la indumentaria oficial de Sabor Latino: camisetas, calzado profesional de baile y accesorios para bailarines en Villavicencio.' }
  ]
})

// 1. ESTADO: Categoría seleccionada
const activeCategory = ref('todos')

// 2. DATOS: Listado de productos
const productos = [
  { 
    id: 1, 
    nombre: 'Camiseta Oficial Entrenamiento', 
    categoria: 'ropa', 
    precio: 45000, 
    tag: 'Nuevo',
    imagen: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80' 
  },
  { 
    id: 2, 
    nombre: 'Zapatos de Salsa Profesional', 
    categoria: 'calzado', 
    precio: 185000, 
    tag: 'Top Ventas',
    imagen: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80' 
  },
  { 
    id: 3, 
    nombre: 'Chaqueta Elenco Élite', 
    categoria: 'ropa', 
    precio: 120000, 
    tag: 'Exclusivo',
    imagen: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80' 
  },
  { 
    id: 4, 
    nombre: 'Tula Deportiva Sabor Latino', 
    categoria: 'accesorios', 
    precio: 35000, 
    tag: null,
    imagen: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80' 
  },
  { 
    id: 5, 
    nombre: 'Protectores de Tacón', 
    categoria: 'accesorios', 
    precio: 15000, 
    tag: 'Esencial',
    imagen: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80' 
  },
  { 
    id: 6, 
    nombre: 'Sneakers de Baile Urbano', 
    categoria: 'calzado', 
    precio: 140000, 
    tag: null,
    imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80' 
  }
]

// 3. LÓGICA: Filtrado reactivo
const productosFiltrados = computed(() => {
  if (activeCategory.value === 'todos') return productos
  return productos.filter(p => p.categoria === activeCategory.value)
})
</script>

<template>
  <div class="page-tienda">
    <section class="page-header">
      <div class="container text-center" data-aos="fade-up">
        <h1 class="page-title">Tienda <span>Oficial</span></h1>
        <p class="page-subtitle">Lleva el estilo de la academia contigo. Indumentaria y accesorios diseñados para el alto rendimiento.</p>
      </div>
    </section>

    <section class="store-section container">
      <div class="filter-bar" data-aos="fade-up">
        <button @click="activeCategory = 'todos'" :class="{ active: activeCategory === 'todos' }">
          Todos
        </button>
        <button @click="activeCategory = 'ropa'" :class="{ active: activeCategory === 'ropa' }">
          <Shirt :size="18" /> Ropa
        </button>
        <button @click="activeCategory = 'calzado'" :class="{ active: activeCategory === 'calzado' }">
          <Footprints :size="18" /> Calzado
        </button>
        <button @click="activeCategory = 'accesorios'" :class="{ active: activeCategory === 'accesorios' }">
          <Tag :size="18" /> Accesorios
        </button>
      </div>

      <div class="products-grid">
        <div 
          v-for="prod in productosFiltrados" 
          :key="prod.id" 
          class="product-card"
          data-aos="zoom-in"
        >
          <div class="product-img">
            <img :src="prod.imagen" :alt="prod.nombre">
            <span v-if="prod.tag" class="product-tag">{{ prod.tag }}</span>
            <div class="product-overlay">
              <NuxtLink 
                :to="`https://wa.me/573000000000?text=Hola,%20me%20interesa%20comprar:%20${prod.nombre}`" 
                target="_blank" 
                class="btn-buy"
              >
                <ShoppingBag :size="20" /> Pedir por WhatsApp
              </NuxtLink>
            </div>
          </div>
          <div class="product-info">
            <span class="category-name">{{ prod.categoria }}</span>
            <h3>{{ prod.nombre }}</h3>
            <p class="price">${{ prod.precio.toLocaleString() }}</p>
          </div>
        </div>
      </div>

      <div v-if="productosFiltrados.length === 0" class="empty-state">
        <p>Próximamente más productos en esta categoría.</p>
      </div>
    </section>

    <section class="info-banner container" data-aos="fade-up">
      <div class="banner-content">
        <div class="info-item">
          <Sparkles class="icon" />
          <div>
            <h3>Calidad Premium</h3>
            <p>Materiales probados en escenario.</p>
          </div>
        </div>
        <div class="info-item">
          <ShoppingBag class="icon" />
          <div>
            <h3>Entrega en Academia</h3>
            <p>Recoge tu pedido en nuestra sede.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ================= VISTA: TIENDA ================= */
.page-header {
  padding: 120px 0 60px;
  background: linear-gradient(to bottom, #000000, var(--bg-body));
}

.text-center { text-align: center; }
.page-title { font-family: var(--font-headings); font-size: 3rem; margin-bottom: 1rem; }
.page-title span { color: var(--brand-blue-light); font-style: italic; }
.page-subtitle { color: var(--text-muted); max-width: 600px; margin: 0 auto; font-size: 1.1rem; }

/* Barra de Filtros */
.filter-bar {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.filter-bar button {
  background: var(--bg-surface);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--text-muted);
  padding: 0.75rem 1.5rem;
  border-radius: 99px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  transition: all 0.3s;
}

.filter-bar button.active {
  background: var(--brand-blue);
  color: var(--text-main);
  border-color: var(--brand-blue);
}

/* Grid de Productos */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-bottom: 5rem;
}

.product-card {
  background: var(--bg-surface);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.05);
  transition: transform 0.3s;
}

.product-card:hover { transform: translateY(-10px); }

.product-img {
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
}

.product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.product-card:hover .product-img img { transform: scale(1.1); }

.product-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--brand-blue);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  z-index: 2;
}

.product-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.product-card:hover .product-overlay { opacity: 1; }

.btn-buy {
  background: var(--brand-green);
  color: black;
  padding: 0.8rem 1.2rem;
  border-radius: 99px;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.product-info { padding: 1.5rem; }
.category-name { 
  display: block; 
  font-size: 0.75rem; 
  text-transform: uppercase; 
  color: var(--brand-blue-light); 
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.product-info h3 { font-size: 1.25rem; margin-bottom: 0.5rem; }
.price { font-size: 1.4rem; font-weight: 700; color: var(--text-main); }

/* Banner inferior */
.banner-content {
  background: var(--bg-surface);
  padding: 3rem;
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 5rem;
}

.info-item { display: flex; align-items: center; gap: 1.5rem; }
.info-item .icon { color: var(--brand-blue-light); width: 40px; height: 40px; }
.info-item h4 { margin-bottom: 0.25rem; }
.info-item p { color: var(--text-muted); font-size: 0.9rem; }

@media (min-width: 768px) {
  .banner-content { grid-template-columns: 1fr 1fr; }
}
</style>