<script>
import Logo from "../components/Logo.vue";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Logo
  },
  mounted() {
    gsap.to('#hero', {
      filter: 'brightness(0.4)',
      scrollTrigger: {
        trigger: '#hero',
        start: 'center 30%',
        end: 'bottom top',
        scrub: true,
      }
    })
  }
}
</script>

<template>
  <section class="hero" id="hero">
    <div class="container">
      <!-- <Logo /> -->
      <p class="hero__about body-text-2">
        Digital Marketing
        <br />
        Agency
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/global.scss";

.hero {
  color: $c-orange;
  filter: brightness(1);
  // background-image: url("/public/images/hero/01.webp");
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 91lvh;
  position: relative;
  animation: background 5s steps(1) infinite;

  &__about {
    position: absolute;
    right: 1vw;
    top: 1vw;
    text-align: end;
  }
}

@keyframes background {
  100%, 0% {
    background-image: url("/public/images/hero/01.webp");
  }
  25% {
    background-image: url("/public/images/hero/02.webp");
  }
  50% {
    background-image: url("/public/images/hero/03.webp");
  }
  75% {
    background-image: url("/public/images/hero/04.webp");
  }
}
</style>
