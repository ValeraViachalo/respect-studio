<script>
import { ref } from 'vue'

import Hero from './sections/Hero.vue'
import Growing from './sections/Growing.vue'
import Flow from './sections/Flow.vue'
import Combine from './sections/Combine.vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'
import Logo from './components/Logo.vue'

export default {
  components: {
    Hero,
    Growing,
    Flow,
    Combine,

    Header,
    Footer,
    Loader,
    Logo,
  },
  setup() {
    const loaderFinished = ref(false)
    function setLoaderFinished(value) {
      loaderFinished.value = value
    }

    return { loaderFinished, setLoaderFinished }
  }
}

</script>

<template>
  <Loader
    v-if="!loaderFinished"
    @finished="setLoaderFinished(true)"
  />
  <main v-if="loaderFinished">
    <div class="hero-logo">
      <Logo />
    </div>
    <Hero />
    <div>
      <Header />
      <Growing />
      <Flow />
      <Combine />
    </div>
    <Footer />
  </main>
</template>
<style lang="scss" scoped>
.hero-logo {
@import "/src/assets/styles/global.scss";

  position: absolute;
    z-index: 10;
    left: 1vw;
    color: $c-orange;
}
</style>
