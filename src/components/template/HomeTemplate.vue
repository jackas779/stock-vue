
<script setup>
  import { useThemeStore } from '../../stores/ThemeStore.mjs';
  const themeStore = useThemeStore()
  const { activeStyle: style } = themeStore
</script>

<template>
  <div class="home" :style="{backgroundColor: style.bgtotal, color: style.text}">
    Componente 
  </div>
</template>


<style scoped>
  .home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    width: 100%;
  }
</style>