<script>
  import { contantes } from '../../../styles/constantes.mjs';
  import { authStore } from '../../../stores/AuhtStore.mjs';
</script>

<template>
  <span className="icon">{<contantes.iconoayuda />}</span>
      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <h3>Cerrar sesión</h3>
        <div className="contentBtn">
          <!-- <Btnsave titulo="Cerrar ..." bgcolor="#f8f2fd"  /> -->
        </div>
      </div>
</template>