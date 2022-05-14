<template>
<expand-div class="image-caption">
  <expand-div class="flex-container">
    <div class="flex-item image">
      <slot name="image"></slot>
    </div>
    <div class="flex-item caption">
      <slot name="caption"></slot>
    </div>
  </expand-div>
</expand-div>
</template>

<style scoped lang="scss">
.image-caption {

  .flex-container {

    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    // background-color: #888;

    .flex-item.image {
      height: 100%;
      // width: auto;
      aspect-ratio: 1/1;
      // background-color: #333;
    }

    .flex-item.caption {
      height: 100%;
      // width: auto;
      aspect-ratio: 2/1;
      // background-color: #666;
    }

  }
  
}
</style>

<script>
export default {
  name: "image-caption"
}
</script>