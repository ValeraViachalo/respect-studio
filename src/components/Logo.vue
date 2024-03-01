<template>
  <div class="logo">
    <span>Respect</span>
    <span class="dot">.</span>
    <span class="reverted">Studio</span>
  </div>
</template>

<style scoped lang="scss">
  .logo {
    position: relative;
    .reverted {
      transform: rotate(90deg) translateY(70%);
      position: absolute;
      left: 0;
      top: 8.4vw;
    }

    .dot {
      position: absolute;
      left: 0;
      transform: translateX(-0%);
      top: 1vw;
    }
  }
</style>