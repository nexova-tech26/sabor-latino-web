<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
/* No necesitamos lógica aquí por ahora, ya que el Layout 
  y las Páginas manejan su propia funcionalidad.
*/
</script>

<style>
/* Estilos globales de transición (opcional) 
  para que el cambio entre páginas sea suave.
*/
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>