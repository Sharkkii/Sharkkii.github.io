<template>
<div class="justified-item">
  <div class="flex-container">
    <slot name="item" class="flex-item">
    </slot>
  </div>
</div>
</template>

<style scoped lang="scss">
.justified-item {

  .flex-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .flex-item {

  }
  
}
</style>

<script>
export default {
  name: "justified-item"
}
</script>