<script setup>

  import { useThemeStore } from './stores/ThemeStore.mjs';
  import { ref } from 'vue';

  const themeStore = useThemeStore()
  const { activeStyle: style } = themeStore
  const sidebarOpen = ref(false)
</script>

<template>
 <main 
  :style="{
      display: 'grid',
      backgroundColor: style.bgtotal
    }"
    :class="{active: sidebarOpen}" 
  >

  <section id="contentSidebar" class="contentSidebar">Siderbar</section>
  <section id="contentMenuHamburg" class="contentMenuHamburg">Menu</section>
  <section id="contentRoutes" class="contentRoutes"> 
    <RouterView />
  </section>
 </main>
</template>

<style scoped>

  .contentSidebar{
    display: none;
  }
  
  .contentMenuHamburg {
    display: block;
    position: absolute;
    left: 20px;
  } 

  .contentRoutes{
    grid-column: 1;
    width: 100%;
  } 

  @media (min-width: 768px) {
    main{
      grid-template-columns: 65px 1fr;

      &.active {
        grid-template-columns: 220px 1fr;
      }
    }

    .contentSidebar{
      display: initial;
    }

    .contentMenuHamburg{
      display: none;
    }

    .contentRoutes{
      grid-column: 2;
    }

  }


</style>
